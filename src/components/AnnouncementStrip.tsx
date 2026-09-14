import { useState, useRef, useEffect } from 'react';
import { SCHOOL_DATA } from '../data/school';
import { MegaphoneIcon, FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from './Icons';
import { ChevronDown } from 'lucide-react';

interface AnnouncementStripProps {
  onActionClick: (actionId: string) => void;
}

export const AnnouncementStrip = ({ onActionClick }: AnnouncementStripProps) => {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on escape or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setQuickLinksOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setQuickLinksOpen(false);
      }
    };
    if (quickLinksOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [quickLinksOpen]);

  return (
    <aside
      aria-label="School Announcements & Utilities"
      className="w-full bg-[#143C65] text-white text-[11px] leading-tight select-none border-b border-white/10 overflow-hidden"
      style={{ height: '30px' }}
    >
      <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4">
        {/* Left: Megaphone & Announcement Copy */}
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <MegaphoneIcon className="w-3.5 h-3.5 text-[#FFAF24] shrink-0" />
          <div className="flex items-center gap-2 text-white/90 font-medium tracking-wide">
            <span className="hidden sm:inline">{SCHOOL_DATA.announcement.parts[0]}</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <button
              onClick={() => onActionClick('admission')}
              className="text-[#FFAF24] hover:underline font-semibold cursor-pointer whitespace-nowrap"
            >
              {SCHOOL_DATA.announcement.parts[1]}
            </button>
            <span className="text-white/40 hidden md:inline">|</span>
            <button
              onClick={() => onActionClick('visit')}
              className="hover:text-white hover:underline hidden md:inline cursor-pointer"
            >
              {SCHOOL_DATA.announcement.parts[2]}
            </button>
          </div>
        </div>

        {/* Right: Utilities and Socials */}
        <div className="hidden lg:flex items-center gap-4 text-white/80 shrink-0">
          {/* Quick Links with Disclosure */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              id="quick-links-btn"
              aria-expanded={quickLinksOpen}
              aria-controls="quick-links-menu"
              onClick={() => setQuickLinksOpen(!quickLinksOpen)}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-1 font-medium"
            >
              <span>Quick Links</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${quickLinksOpen ? 'rotate-180' : ''}`} />
            </button>

            {quickLinksOpen && (
              <div
                id="quick-links-menu"
                role="region"
                aria-label="Quick Links Menu"
                className="absolute right-0 top-full mt-1 w-52 bg-white text-[#082959] rounded-md shadow-xl border border-[#E5EBF0] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                {SCHOOL_DATA.announcement.quickLinks.map((item) => (
                  <button
                    key={item.actionId}
                    onClick={() => {
                      setQuickLinksOpen(false);
                      onActionClick(item.actionId);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#082959] hover:bg-[#EDF7FE] hover:text-[#008697] transition-colors cursor-pointer font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="text-white/30">·</span>
          <button onClick={() => onActionClick('career')} className="hover:text-white transition-colors cursor-pointer">
            Career
          </button>
          <span className="text-white/30">·</span>
          <button onClick={() => onActionClick('alumni')} className="hover:text-white transition-colors cursor-pointer">
            Alumni
          </button>
          <span className="text-white/30">·</span>
          <button onClick={() => onActionClick('faq')} className="hover:text-white transition-colors cursor-pointer">
            FAQ
          </button>
          <span className="text-white/30">·</span>
          <button onClick={() => onActionClick('contact')} className="hover:text-white transition-colors cursor-pointer">
            Contact
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 ml-2 pl-3 border-l border-white/20 text-white/70">
            <button onClick={() => onActionClick('social-facebook')} aria-label="SPS on Facebook" className="hover:text-white transition-colors cursor-pointer">
              <FacebookIcon className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => onActionClick('social-instagram')} aria-label="SPS on Instagram" className="hover:text-white transition-colors cursor-pointer">
              <InstagramIcon className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => onActionClick('social-youtube')} aria-label="SPS on YouTube" className="hover:text-white transition-colors cursor-pointer">
              <YoutubeIcon className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => onActionClick('social-linkedin')} aria-label="SPS on LinkedIn" className="hover:text-white transition-colors cursor-pointer">
              <LinkedinIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
