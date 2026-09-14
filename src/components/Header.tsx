import { useState } from 'react';
import { SCHOOL_DATA } from '../data/school';
import { Search, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  onActionClick: (actionId: string) => void;
  activeNav?: string;
}

export const Header = ({ onActionClick, activeNav = 'hero' }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (actionId: string, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onActionClick(actionId);
  };

  return (
    <header
      className="w-full bg-white text-[#082959] border-b border-[#E5EBF0] relative z-40 overflow-hidden"
      style={{ height: '68px' }}
    >
      <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4">
        {/* Left: Brand Identity (Crest + Wordmark + Tagline) */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero', '#hero');
          }}
          className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer select-none min-w-0 pr-2"
        >
          <img
            src="/images/school-crest.png"
            alt="Sankalp Public School Crest"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-display text-base sm:text-lg md:text-[22px] font-black text-[#082959] tracking-wide leading-none truncate">
              {SCHOOL_DATA.identity.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-[#485469] tracking-tight mt-1 leading-none truncate">
              {SCHOOL_DATA.identity.tagline}
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-6 text-[13px] font-semibold text-[#082959]">
          {SCHOOL_DATA.navigation.map((item) => {
            const isSelected = activeNav === item.actionId || (item.actionId === 'hero' && activeNav === 'hero');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.actionId || 'hero', item.href);
                }}
                className={`relative py-1 transition-colors hover:text-[#008697] cursor-pointer ${
                  isSelected ? 'text-[#082959]' : 'text-[#485469]'
                }`}
              >
                {item.label}
                {/* Active Underline matching reference */}
                {isSelected && (
                  <span className="absolute bottom-[-6px] left-0 w-full h-[2.5px] bg-[#082959] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Search & Parent Login */}
        <div className="flex items-center gap-3">
          {/* Search Trigger */}
          <button
            type="button"
            id="header-search-btn"
            aria-label="Search School Website"
            onClick={() => onActionClick('search')}
            className="p-2 text-[#485469] hover:text-[#082959] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>

          {/* Parent Login Button (~138x39px) */}
          <button
            type="button"
            id="header-parent-login-btn"
            onClick={() => onActionClick('parent-login')}
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#008697] hover:bg-[#006E7D] text-white font-medium text-[13px] px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
            style={{ width: '138px', height: '39px' }}
          >
            <User className="w-4 h-4 text-white" />
            <span>Parent Login</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            id="header-mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#082959] hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[98px] bottom-0 bg-black/40 z-50 animate-in fade-in duration-200">
          <div className="bg-white p-6 shadow-2xl border-b border-[#E5EBF0] max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col gap-3 text-sm font-semibold">
              {SCHOOL_DATA.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.actionId || 'hero', item.href);
                  }}
                  className="py-2 px-3 rounded-md text-[#082959] hover:bg-[#EDF7FE] hover:text-[#008697] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onActionClick('parent-login');
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#008697] text-white py-2.5 rounded-lg font-medium text-sm"
              >
                <User className="w-4 h-4" />
                <span>Parent Login</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onActionClick('admission');
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#FFAF24] text-[#082959] py-2.5 rounded-lg font-semibold text-sm"
              >
                <span>Apply for Admission</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
