import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\59d90b2b-f0ff-4c9d-924c-da67df0670ef';
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const bin = fs.existsSync(edgePath) ? edgePath : chromePath;

const tempDir = path.join(ARTIFACT_DIR, 'test_profile');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

console.log(`Starting headless browser using ${bin}...`);
const browser = spawn(bin, [
  '--headless=new',
  '--remote-debugging-port=9222',
  `--user-data-dir=${tempDir}`,
  '--hide-scrollbars',
  '--disable-gpu',
  'about:blank'
]);

browser.on('error', (err) => console.error('Browser error:', err));

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9222/json/version');
      const data = await res.json();
      return data.webSocketDebuggerUrl;
    } catch (e) {
      await wait(300);
    }
  }
  throw new Error('Could not connect to browser CDP port 9222');
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  async open() {
    return new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });
  }

  async send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async close() {
    this.ws.close();
  }
}

async function run() {
  try {
    const wsUrl = await getWsUrl();
    console.log('Connected to browser debugger:', wsUrl);

    // Create a new target for the page
    const res = await fetch('http://127.0.0.1:9222/json/new?http://localhost:5173/?motion=off', { method: 'PUT' });
    const target = await res.json();
    console.log('Opened page target:', target.webSocketDebuggerUrl);

    const client = new CDPClient(target.webSocketDebuggerUrl);
    await client.open();

    // Enable Page & Emulation
    await client.send('Page.enable');
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 430,
      height: 932,
      deviceScaleFactor: 3,
      mobile: true,
      screenOrientation: { angle: 0, type: 'portraitPrimary' }
    });

    console.log('Navigating to http://localhost:5173/?motion=off...');
    await client.send('Page.navigate', { url: 'http://localhost:5173/?motion=off' });
    await wait(2000);

    // Overflow check
    const overflowCheck = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const docWidth = document.documentElement.offsetWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const overflowing = [];
        document.querySelectorAll('*').forEach(el => {
          if (el.offsetWidth > winWidth) {
            overflowing.push({ tag: el.tagName, id: el.id, class: el.className, width: el.offsetWidth });
          }
        });
        return { docWidth, scrollWidth, winWidth, hasOverflow: scrollWidth > winWidth, overflowing };
      })()`,
      returnByValue: true
    });
    console.log('Horizontal Overflow Verification (430px):', JSON.stringify(overflowCheck.result.value, null, 2));

    // Screenshot helper
    async function takeShot(filename, description) {
      console.log(`Taking screenshot: ${filename} (${description})...`);
      const res = await client.send('Page.captureScreenshot', { format: 'png' });
      const buffer = Buffer.from(res.data, 'base64');
      const filepath = path.join(ARTIFACT_DIR, filename);
      fs.writeFileSync(filepath, buffer);
      console.log(`Saved ${filepath} (${buffer.length} bytes)`);
    }

    // 1. Mobile Top / Hero view
    await takeShot('mobile_1_hero.png', 'Mobile Header and Hero Section');

    // 2. Open Hamburger Navigation Drawer
    console.log('Clicking hamburger menu...');
    await client.send('Runtime.evaluate', {
      expression: `document.getElementById('header-mobile-menu-btn')?.click()`
    });
    await wait(500);
    await takeShot('mobile_2_drawer.png', 'Mobile Navigation Drawer Open');

    // Close Hamburger Drawer
    await client.send('Runtime.evaluate', {
      expression: `document.getElementById('header-mobile-menu-btn')?.click()`
    });
    await wait(400);

    // 3. Scroll to Shortcuts
    console.log('Scrolling to Shortcuts...');
    await client.send('Runtime.evaluate', {
      expression: `window.scrollTo({ top: 580, behavior: 'instant' })`
    });
    await wait(600);
    await takeShot('mobile_3_shortcuts.png', 'Shortcut Cards');

    // 3b. Scroll to Feature Pillars
    console.log('Scrolling to Feature Pillars...');
    await client.send('Runtime.evaluate', {
      expression: `document.getElementById('features')?.scrollIntoView({ behavior: 'instant' })`
    });
    await wait(600);
    await takeShot('mobile_3b_features.png', 'Feature Pillars');

    // 4. Scroll to Community Panels (Events & News)
    console.log('Scrolling to Community Events & News...');
    await client.send('Runtime.evaluate', {
      expression: `document.getElementById('community')?.scrollIntoView({ behavior: 'instant' })`
    });
    await wait(600);
    await takeShot('mobile_4_community_events_news.png', 'Events and News Panels');

    // 5. Scroll to What Parents Say (Testimonials)
    console.log('Scrolling to Parents Testimonials...');
    await client.send('Runtime.evaluate', {
      expression: `window.scrollBy({ top: 380, behavior: 'instant' })`
    });
    await wait(600);
    await takeShot('mobile_5_testimonials.png', 'Parents Testimonials in Mobile View');

    // 6. Scroll to Footer
    console.log('Scrolling to Footer...');
    await client.send('Runtime.evaluate', {
      expression: `window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' })`
    });
    await wait(600);
    await takeShot('mobile_6_footer.png', 'Mobile Footer');

    // 7. Scroll back up and click "Apply for Admission" to test modal on mobile
    console.log('Testing Admission Modal on mobile...');
    await client.send('Runtime.evaluate', {
      expression: `window.scrollTo({ top: 0, behavior: 'instant' }); document.getElementById('hero-apply-btn')?.click();`
    });
    await wait(600);
    await takeShot('mobile_7_admission_modal.png', 'Admission Modal on Mobile');

    await client.close();
    console.log('All mobile screenshots captured successfully!');
  } catch (err) {
    console.error('Testing error:', err);
  } finally {
    browser.kill();
  }
}

run();
