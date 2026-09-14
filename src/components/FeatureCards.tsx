import { SCHOOL_DATA } from '../data/school';
import { ArrowRight } from 'lucide-react';

interface FeatureCardsProps {
  onActionClick: (actionId: string) => void;
}

export const FeatureCards = ({ onActionClick }: FeatureCardsProps) => {
  return (
    <section
      id="features"
      aria-label="Core Pillars of Sankalp Public School"
      className="w-full py-4 bg-white select-none overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid with 3 columns: outer columns slightly wider (approx 1.06 : 1 : 1.06) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_1fr_1.06fr] gap-4 sm:gap-5 w-full">
          {SCHOOL_DATA.features.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-xl border border-[#E5EBF0] overflow-hidden bg-white shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between w-full max-w-full min-h-[168px]"
            >
              {/* Background Photograph (Positioned Right) */}
              <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] overflow-hidden pointer-events-none">
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ objectPosition: feature.objectPosition }}
                  loading="lazy"
                />
                {/* Smooth white-to-transparent gradient mask ensuring readable text */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
              </div>

              {/* Text Content Overlay (Left Half) */}
              <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-between h-full max-w-[70%] sm:max-w-[65%]">
                <div>
                  {/* Title & Colored Accent Underline */}
                  <div className="mb-2">
                    <h2 className="font-display text-[#082959] font-extrabold text-base sm:text-[18px] leading-tight">
                      {feature.title}
                    </h2>
                    <div
                      className="h-[3px] w-8 rounded-full mt-1"
                      style={{ backgroundColor: feature.accentColor }}
                    />
                  </div>

                  {/* Descriptive text */}
                  <p className="text-[#485469] text-xs sm:text-[12.5px] leading-relaxed font-normal mb-3">
                    {feature.description}
                  </p>
                </div>

                {/* Action Link */}
                <button
                  type="button"
                  onClick={() => onActionClick(feature.actionId)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#082959] hover:text-[#008697] transition-colors cursor-pointer w-fit group/btn"
                >
                  <span>{feature.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
