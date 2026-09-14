import { useState, useEffect } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { AnnouncementStrip } from './components/AnnouncementStrip';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ShortcutCards } from './components/ShortcutCards';
import { FeatureCards } from './components/FeatureCards';
import { CommunityPanels } from './components/CommunityPanels';
import { Footer } from './components/Footer';
import { ModalManager, type ModalState } from './components/ModalManager';

export function App() {
  const [modalState, setModalState] = useState<ModalState>({ type: null });
  const [isMotionDisabled, setIsMotionDisabled] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');

  // Check for ?motion=off query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('motion') === 'off') {
      setIsMotionDisabled(true);
      document.documentElement.setAttribute('data-motion', 'off');
    }
  }, []);

  // Update active navigation state based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const heroEl = document.getElementById('hero');
      const featuresEl = document.getElementById('features');
      const communityEl = document.getElementById('community');
      const footerEl = document.getElementById('footer');

      if (footerEl && scrollPos >= footerEl.offsetTop) {
        setActiveNav('contact');
      } else if (communityEl && scrollPos >= communityEl.offsetTop) {
        setActiveNav('news-events');
      } else if (featuresEl && scrollPos >= featuresEl.offsetTop) {
        setActiveNav('academics');
      } else if (heroEl && scrollPos >= heroEl.offsetTop) {
        setActiveNav('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleActionClick = (actionId: string, payload?: any) => {
    switch (actionId) {
      case 'admission':
      case 'online-admission':
        setModalState({ type: 'admission' });
        break;
      case 'visit':
        setModalState({ type: 'visit' });
        break;
      case 'parent-login':
        setModalState({ type: 'parent-login' });
        break;
      case 'parent-portal':
        setModalState({ type: 'parent-portal-demo' });
        break;
      case 'fee-payment':
        setModalState({ type: 'fee-payment' });
        break;
      case 'bus-tracking':
        setModalState({ type: 'bus-tracking' });
        break;
      case 'search':
        setModalState({ type: 'search' });
        break;
      case 'tour-more':
        setModalState({ type: 'campus-gallery' });
        break;
      case 'academic-more':
      case 'academics':
        setModalState({ type: 'academic-more' });
        break;
      case 'life-more':
      case 'life-at-sps':
        setModalState({ type: 'life-more' });
        break;
      case 'event-detail':
        setModalState({ type: 'event-detail', payload });
        break;
      case 'news-detail':
        setModalState({ type: 'news-detail', payload });
        break;
      case 'view-all-events':
        setModalState({ type: 'view-all-events' });
        break;
      case 'view-all-news':
        setModalState({ type: 'view-all-news' });
        break;
      case 'view-all-testimonials':
        setModalState({ type: 'view-all-testimonials' });
        break;
      case 'about':
        setModalState({
          type: 'info',
          payload: {
            title: 'About Sankalp Public School',
            headline: 'Educating with Purpose. Inspiring with Conviction.',
            text: 'Founded over 25 years ago, Sankalp Public School stands as a beacon of values-based CBSE education in Raipur, Chhattisgarh. Our campus integrates world-class science laboratories, sporting amenities, and personalized mentoring to unlock every student’s potential.',
          },
        });
        break;
      case 'career':
        setModalState({
          type: 'info',
          payload: {
            title: 'Faculty & Staff Careers',
            headline: 'Join Our Distinguished Teaching Community',
            text: 'We welcome passionate educators for PGT, TGT, and PRT roles in Mathematics, STEM, Languages, and Physical Education. For current vacancies, email your CV to careers@sankalppublicschool.in.',
          },
        });
        break;
      case 'alumni':
        setModalState({
          type: 'info',
          payload: {
            title: 'SPS Alumni Network',
            headline: 'Global Community of Sankalp Achievers',
            text: 'Connect with over 15,000 alumni excelling in engineering, medicine, civil services, entrepreneurship, and creative arts worldwide.',
          },
        });
        break;
      case 'faq':
        setModalState({
          type: 'info',
          payload: {
            title: 'Frequently Asked Questions',
            headline: 'Admissions, Academics & Campus Life',
            text: 'Q: What is the student-teacher ratio? A: 18:1. Q: Is school bus transport available? A: Yes, comprehensive GPS-enabled bus routes cover all major Raipur sectors. Q: Which board is SPS affiliated with? A: Central Board of Secondary Education (CBSE), New Delhi.',
          },
        });
        break;
      case 'privacy':
      case 'terms':
        setModalState({
          type: 'info',
          payload: {
            title: actionId === 'privacy' ? 'Privacy Policy' : 'Terms of Service',
            headline: 'Student & Parent Data Protection',
            text: 'Sankalp Public School strictly safeguards student and family confidentiality. No student data or browsing telemetry is shared with commercial third parties.',
          },
        });
        break;
      case 'social-facebook':
      case 'social-instagram':
      case 'social-youtube':
      case 'social-linkedin':
        setModalState({
          type: 'info',
          payload: {
            title: 'Social Media Updates',
            headline: 'Follow @SankalpPublicSchool',
            text: 'Stay connected with daily campus highlights, student achievements, event photos, and video reels across our verified school social channels.',
          },
        });
        break;
      default:
        // Check if anchor link exists
        if (actionId.startsWith('quick-')) {
          setModalState({
            type: 'info',
            payload: {
              title: 'Official School Document',
              headline: 'Mandatory CBSE / Institutional Publication',
              text: 'This official school document is available for parental and public inspection at the administrative office during working hours (8:00 AM – 3:30 PM).',
            },
          });
        }
        break;
    }
  };

  return (
    <MotionConfig reducedMotion={isMotionDisabled ? 'always' : 'user'}>
      {/* Keyboard accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#008697] focus:text-white focus:rounded-md focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>

      <div className="w-full max-w-full min-h-screen flex flex-col bg-white text-[#485469] font-sans antialiased selection:bg-[#FFAF24]/30 selection:text-[#082959] overflow-x-hidden">
        {/* Top Announcement Strip (30px) */}
        <AnnouncementStrip onActionClick={handleActionClick} />

        {/* Main Header (68px) */}
        <Header onActionClick={handleActionClick} activeNav={activeNav} />

        {/* Main Landmark */}
        <main id="main-content" className="w-full max-w-full flex-1 flex flex-col justify-start overflow-x-hidden">
          {/* Hero Section (348px) */}
          <motion.div
            initial={isMotionDisabled ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Hero onActionClick={handleActionClick} />
          </motion.div>

          {/* Shortcut Cards Row (84px) */}
          <motion.div
            initial={isMotionDisabled ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          >
            <ShortcutCards onActionClick={handleActionClick} />
          </motion.div>

          {/* Feature Cards Row (168px) */}
          <motion.div
            initial={isMotionDisabled ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease: 'easeOut' }}
          >
            <FeatureCards onActionClick={handleActionClick} />
          </motion.div>

          {/* Community Panels (155px) */}
          <motion.div
            initial={isMotionDisabled ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease: 'easeOut' }}
          >
            <CommunityPanels onActionClick={handleActionClick} />
          </motion.div>
        </main>

        {/* Footer (80px) */}
        <Footer onActionClick={handleActionClick} />

        {/* Modal Dialog System */}
        <ModalManager
          modalState={modalState}
          onClose={() => setModalState({ type: null })}
          onOpenModal={(type, payload) => setModalState({ type, payload })}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
