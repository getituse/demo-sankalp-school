import { SCHOOL_DATA } from '../data/school';
import { ArrowRight } from 'lucide-react';
import { AdmissionFormIcon, ParentPortalIcon, FeePaymentIcon, BusTrackingIcon } from './Icons';

interface ShortcutCardsProps {
  onActionClick: (actionId: string) => void;
}

export const ShortcutCards = ({ onActionClick }: ShortcutCardsProps) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'admission':
        return <AdmissionFormIcon className="w-5 h-5 text-[#008697]" />;
      case 'portal':
        return <ParentPortalIcon className="w-5 h-5 text-[#1A6AB2]" />;
      case 'payment':
        return <FeePaymentIcon className="w-5 h-5 text-[#E65D24]" />;
      case 'bus':
        return <BusTrackingIcon className="w-5 h-5 text-[#2B8A46]" />;
      default:
        return null;
    }
  };

  const getIconContainerBg = (type: string) => {
    switch (type) {
      case 'admission':
        return 'bg-white/80 shadow-xs';
      case 'portal':
        return 'bg-white/80 shadow-xs';
      case 'payment':
        return 'bg-white/80 shadow-xs';
      case 'bus':
        return 'bg-white/80 shadow-xs';
      default:
        return 'bg-white';
    }
  };

  return (
    <section
      aria-label="Quick Services and Portals"
      className="w-full py-4 bg-white select-none overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 w-full">
          {SCHOOL_DATA.shortcuts.map((card) => (
            <button
              key={card.id}
              type="button"
              id={`shortcut-${card.id}`}
              onClick={() => onActionClick(card.id)}
              className={`group w-full ${card.bgClass} text-left rounded-xl p-3 sm:py-3.5 sm:px-4 flex items-center justify-between border border-black/5 hover:border-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] cursor-pointer`}
              style={{ minHeight: '84px' }}
            >
              {/* Left: Icon & Text Info */}
              <div className="flex items-center gap-3.5 pr-2">
                <div
                  className={`w-11 h-11 rounded-full ${getIconContainerBg(
                    card.iconType
                  )} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
                >
                  {renderIcon(card.iconType)}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display text-[#082959] font-extrabold text-[15px] leading-tight group-hover:text-[#008697] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#485469] text-[11.5px] font-normal leading-snug mt-0.5 line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Right: Circular Arrow Indicator */}
              <div className="w-7 h-7 rounded-full bg-white/90 text-[#082959] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#082959] group-hover:text-white transition-all duration-200">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
