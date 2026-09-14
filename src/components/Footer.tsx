import { SCHOOL_DATA } from '../data/school';
import { GreenLeafIcon, FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from './Icons';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  onActionClick: (actionId: string) => void;
}

export const Footer = ({ onActionClick }: FooterProps) => {
  return (
    <footer
      id="footer"
      aria-label="School Footer and Campus Directory"
      className="w-full bg-[#0C3055] text-white select-none border-t border-white/15 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 overflow-hidden">
        
        {/* TOP SECTION: 4 Spacious Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-white/10 w-full max-w-full">
          
          {/* Column 1: Identity & Crest */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3">
              <img
                src="/images/school-crest.png"
                alt="Sankalp Public School Crest"
                className="w-14 h-14 object-contain shrink-0 bg-white/5 rounded-full p-1 border border-white/20"
              />
              <div className="flex flex-col">
                <span className="font-display text-base sm:text-lg font-black tracking-wide text-white leading-tight">
                  {SCHOOL_DATA.identity.name}
                </span>
                <span className="text-[11px] text-[#FFAF24] font-medium tracking-tight mt-0.5 leading-tight">
                  {SCHOOL_DATA.identity.tagline}
                </span>
              </div>
            </div>

            <p className="text-white/70 text-xs leading-relaxed mt-1 font-sans">
              Empowering curious minds, compassionate hearts, and confident leaders through value-based CBSE education in Raipur, Chhattisgarh.
            </p>

            {/* Slogan Badge */}
            <div className="flex items-center gap-2.5 mt-2 p-2.5 rounded-lg bg-white/5 border border-white/10 w-fit">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <GreenLeafIcon className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-[10.5px] leading-tight font-semibold text-white/90">
                <span>A Kinder · Brighter Tomorrow </span>
                <span className="text-[#FFAF24]">Together</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#FFAF24] rounded-full" />
              <span>Quick Navigation</span>
            </h4>

            <nav className="flex flex-col gap-2 pt-1 text-xs text-white/75 font-sans">
              <button
                type="button"
                onClick={() => onActionClick('hero')}
                className="text-left hover:text-[#FFAF24] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#FFAF24]/70" />
                <span>Home</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('about')}
                className="text-left hover:text-[#FFAF24] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#FFAF24]/70" />
                <span>About SPS</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('academics')}
                className="text-left hover:text-[#FFAF24] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#FFAF24]/70" />
                <span>Academic Curriculum</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('life-at-sps')}
                className="text-left hover:text-[#FFAF24] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#FFAF24]/70" />
                <span>Life at SPS & Sports</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('news-events')}
                className="text-left hover:text-[#FFAF24] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#FFAF24]/70" />
                <span>News & Events</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('contact')}
                className="text-left hover:text-[#FFAF24] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#FFAF24]/70" />
                <span>Contact Administrative Office</span>
              </button>
            </nav>
          </div>

          {/* Column 3: Portals & Admissions */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#008697] rounded-full" />
              <span>Portals & Services</span>
            </h4>

            <nav className="flex flex-col gap-2 pt-1 text-xs text-white/75 font-sans">
              <button
                type="button"
                onClick={() => onActionClick('admission')}
                className="text-left hover:text-[#008697] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer font-medium text-[#FFAF24]"
              >
                <ArrowRight className="w-3 h-3 text-[#FFAF24]" />
                <span>Admissions 2027–28</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('visit')}
                className="text-left hover:text-[#008697] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#008697]" />
                <span>Schedule Campus Tour</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('parent-login')}
                className="text-left hover:text-[#008697] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#008697]" />
                <span>Parent Portal Login</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('fee-payment')}
                className="text-left hover:text-[#008697] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#008697]" />
                <span>Online Fee Payment</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('bus-tracking')}
                className="text-left hover:text-[#008697] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#008697]" />
                <span>Live School Bus Tracking</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('quick-disclosure')}
                className="text-left hover:text-[#008697] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3 h-3 text-[#008697]" />
                <span>Mandatory CBSE Disclosure</span>
              </button>
            </nav>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-emerald-400 rounded-full" />
              <span>Campus Contact</span>
            </h4>

            <div className="flex flex-col gap-2.5 pt-1 text-xs text-white/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#008697] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SCHOOL_DATA.identity.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFAF24] shrink-0" />
                <span>{SCHOOL_DATA.identity.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#008697] shrink-0" />
                <a href={`mailto:${SCHOOL_DATA.identity.email}`} className="hover:text-white hover:underline truncate">
                  {SCHOOL_DATA.identity.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider block mb-2">Connect With Us</span>
              <div className="flex items-center gap-2 text-white/80">
                <button
                  type="button"
                  onClick={() => onActionClick('social-facebook')}
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <FacebookIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onActionClick('social-instagram')}
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E4405F] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onActionClick('social-youtube')}
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onActionClick('social-linkedin')}
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & Legal Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60 font-sans">
          <p className="text-[11px] text-center sm:text-left">
            {SCHOOL_DATA.identity.copyrightText}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px]">
            <button
              type="button"
              onClick={() => onActionClick('privacy')}
              className="hover:text-white hover:underline transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">|</span>
            <button
              type="button"
              onClick={() => onActionClick('terms')}
              className="hover:text-white hover:underline transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-white/20">|</span>
            <button
              type="button"
              onClick={() => onActionClick('faq')}
              className="hover:text-white hover:underline transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <span className="text-white/20">|</span>
            <span className="text-white/40">CBSE Affiliation No: 3330124</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
