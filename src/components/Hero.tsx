import { SCHOOL_DATA } from '../data/school';
import { ArrowRight, Calendar, Users, Award, Trophy } from 'lucide-react';
import { GreenLeafIcon } from './Icons';
import { AnimatedCounter } from './AnimatedCounter';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  onActionClick: (actionId: string) => void;
}

export const Hero = ({ onActionClick }: HeroProps) => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar':
        return <Calendar className="w-5 h-5 text-[#008697]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#1A6AB2]" />;
      case 'award':
        return <Award className="w-5 h-5 text-[#FFAF24]" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-[#E65D24]" />;
      default:
        return null;
    }
  };

  const getStatBgColor = (index: number) => {
    const colors = ['bg-[#EDF9F7]', 'bg-[#EDF7FE]', 'bg-[#FEF5F0]', 'bg-[#FFF8EA]'];
    return colors[index % colors.length];
  };

  return (
    <section
      id="hero"
      aria-label="Welcome to Sankalp Public School"
      className="relative w-full bg-[#FEF9F1] overflow-hidden select-none py-6 lg:py-10"
    >
      {/* Background container at desktop width */}
      <div className="w-full max-w-7xl mx-auto relative flex flex-col lg:flex-row items-stretch px-4 sm:px-6 lg:px-8">
        
        {/* Left: Copy & Statistics Area */}
        <div className="w-full lg:w-[57%] pt-2 lg:pt-4 pb-6 z-20 flex flex-col justify-between max-w-full">
          <div>
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#008697]/10 border border-[#008697]/25 text-[#008697] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 sm:mb-5 max-w-full whitespace-normal text-left">
              <span className="w-2 h-2 rounded-full bg-[#008697] animate-pulse shrink-0" />
              <span className="break-words">{SCHOOL_DATA.hero.eyebrow}</span>
            </div>

            {/* Premium Spacious H1 with Modern Font Stack */}
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black leading-[1.15] sm:leading-[1.12] tracking-tight mb-4 sm:mb-5 break-words max-w-full">
              <span className="block text-[#082959] break-words">{SCHOOL_DATA.hero.titleNavy}</span>
              <span className="block text-[#008697] bg-gradient-to-r from-[#008697] via-[#0298AA] to-[#006E7D] bg-clip-text text-transparent mt-1 break-words">
                {SCHOOL_DATA.hero.titleTeal}
              </span>
            </h1>

            {/* Subtitle / Descriptive Copy */}
            <p className="font-sans text-[#485469] text-sm sm:text-base lg:text-lg leading-relaxed max-w-[620px] mb-6 sm:mb-8 font-normal break-words">
              {SCHOOL_DATA.hero.description}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
              <button
                type="button"
                id="hero-apply-btn"
                onClick={() => onActionClick('admission')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFAF24] via-[#F59E0B] to-[#E89B15] hover:brightness-105 text-[#082959] font-black text-sm sm:text-[15px] px-6 sm:px-8 h-[48px] sm:h-[52px] rounded-xl transition-all shadow-md hover:shadow-xl shadow-amber-500/25 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span>{SCHOOL_DATA.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#082959] transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </button>

              <button
                type="button"
                id="hero-visit-btn"
                onClick={() => onActionClick('visit')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#082959] border-2 border-[#CBD5E1] hover:border-[#008697] font-bold text-sm sm:text-[15px] px-6 sm:px-7 h-[48px] sm:h-[52px] rounded-xl transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#008697] shrink-0" />
                <span>{SCHOOL_DATA.hero.ctaSecondary}</span>
              </button>
            </div>
          </div>

          {/* Statistics Bar (4 running counters in floating frosted card) */}
          <div className="bg-white/85 backdrop-blur-xs rounded-2xl p-3.5 sm:p-5 border border-amber-900/10 shadow-xs w-full max-w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
              {SCHOOL_DATA.hero.stats.map((stat, idx) => (
                <div key={stat.label} className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${getStatBgColor(idx)} flex items-center justify-center shrink-0`}>
                    {getStatIcon(stat.icon)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[#082959] text-base sm:text-xl lg:text-2xl font-black font-display leading-none truncate">
                      <AnimatedCounter target={stat.numValue} suffix={stat.suffix} />
                    </span>
                    <span className="text-[#64748B] text-[9.5px] sm:text-[11px] font-semibold tracking-wide uppercase mt-1 truncate">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Photographic Frame with Curved Boundary & Corner Bands */}
        <div className="relative w-full lg:w-[47%] lg:-ml-[4%] min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] overflow-hidden max-w-full mt-6 lg:mt-0">
          {/* SVG Clip Path for Smooth Elliptical Curve matching reference */}
          <svg className="absolute inset-0 w-0 h-0" aria-hidden="true">
            <defs>
              <clipPath id="hero-curve-clip" clipPathUnits="objectBoundingBox">
                {/* Curve entering at approx x=0.08 at top and sweeping inward to x=0.28 at bottom */}
                <path d="M 0.14,0 C 0.05,0.35 0.22,0.7 0.32,1 L 1,1 L 1,0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Teal Accent Curve Boundary Line */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block z-10"
            aria-hidden="true"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 14,0 C 5,35 22,70 32,100"
                stroke="#008697"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Student Hero Image */}
          <div
            className="w-full h-full relative"
            style={{
              clipPath: 'url(#hero-curve-clip)',
            }}
          >
            <img
              src={getAssetUrl('/images/hero-students.webp')}
              alt="Indian students in light-blue school uniforms on the Sankalp Public School campus"
              className="w-full h-full object-cover object-[center_35%] select-none pointer-events-none"
              loading="eager"
              decoding="sync"
            />
            {/* Subtle soft gradient fade at base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Sweeping Corner Bands (Orange & Teal) in bottom-right */}
          <div
            className="absolute bottom-0 right-0 w-44 h-44 pointer-events-none z-10 overflow-hidden"
            aria-hidden="true"
          >
            <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
              {/* Outer Golden Orange band */}
              <path
                d="M 0,160 Q 90,160 160,90 L 160,115 Q 100,160 25,160 Z"
                fill="#FFAF24"
                opacity="0.9"
              />
              {/* Inner Teal band */}
              <path
                d="M 40,160 Q 110,160 160,110 L 160,135 Q 120,160 65,160 Z"
                fill="#008697"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Floating Admission Badge (Pill Shaped) */}
          <div
            id="hero-admission-badge"
            className="absolute right-4 sm:right-6 lg:right-[42px] bottom-4 sm:bottom-6 lg:bottom-[24px] z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-xl border border-white/80 flex items-center gap-3 w-auto max-w-[calc(100%-2rem)] min-h-[72px] sm:min-h-[84px] transition-transform hover:scale-[1.02]"
          >
            {/* Green Leaf Icon Container */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EAF9F0] flex items-center justify-center shrink-0">
              <GreenLeafIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2B8A46]" />
            </div>

            {/* Badge Text */}
            <div className="flex flex-col leading-tight min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-display text-[#082959] font-extrabold text-xs sm:text-sm">
                  {SCHOOL_DATA.hero.badge.headline}
                </span>
                <span className="text-[#008697] font-bold text-[11px] sm:text-xs">
                  {SCHOOL_DATA.hero.badge.subline}
                </span>
              </div>
              <span className="text-[#485469] text-[10px] sm:text-[11px] font-medium tracking-tight mt-0.5 truncate">
                {SCHOOL_DATA.hero.badge.tagline}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
