import { SCHOOL_DATA } from '../data/school';
import { Calendar, Quote, Newspaper, ArrowRight } from 'lucide-react';
import { StarRating } from './Icons';
import { getAssetUrl } from '../utils/assets';

interface CommunityPanelsProps {
  onActionClick: (actionId: string, payload?: any) => void;
}

export const CommunityPanels = ({ onActionClick }: CommunityPanelsProps) => {
  return (
    <section
      id="community"
      aria-label="School Events, Latest News, and Testimonials"
      className="w-full py-4 bg-white select-none overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-5 w-full max-w-full overflow-hidden">
        
        {/* ROW 1: Upcoming Events & Latest News Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 w-full max-w-full">
          
          {/* Panel 1: Upcoming Events */}
          <div
            className="rounded-xl border border-[#E5EBF0] p-4 sm:p-5 bg-white shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between w-full max-w-full overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E5EBF0]/70 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#EDF7FE] flex items-center justify-center text-[#082959]">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="font-display text-[#082959] font-extrabold text-base sm:text-[18px]">
                  {SCHOOL_DATA.events.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onActionClick('view-all-events')}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#008697] hover:underline cursor-pointer"
              >
                <span>{SCHOOL_DATA.events.actionLabel}</span>
              </button>
            </div>

            {/* 3 Horizontal Event Rows (Clean modern font, ample breathing room) */}
            <div className="flex flex-col gap-2.5">
              {SCHOOL_DATA.events.items.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => onActionClick('event-detail', event)}
                  className="w-full text-left p-2.5 sm:px-3 sm:py-2.5 rounded-lg bg-slate-50 hover:bg-[#EDF7FE] border border-slate-100 hover:border-[#008697]/30 transition-all flex items-center justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Date Badge */}
                    <div
                      className="w-11 h-11 rounded-lg text-white flex flex-col items-center justify-center shrink-0 leading-none shadow-2xs"
                      style={{ backgroundColor: event.badgeColor }}
                    >
                      <span className="font-sans font-black text-sm">{event.day}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider mt-0.5">{event.month}</span>
                    </div>

                    {/* Title & Subtitle with crisp modern font */}
                    <div className="min-w-0">
                      <h4 className="font-sans text-[#082959] group-hover:text-[#008697] font-bold text-[13px] sm:text-sm leading-snug truncate">
                        {event.title}
                      </h4>
                      <p className="font-sans text-[#485469] text-xs leading-tight mt-0.5 truncate">
                        {event.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Details Indicator */}
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#008697] shrink-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                    <span className="hidden sm:inline">Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Panel 2: Latest News */}
          <div
            className="rounded-xl border border-[#E5EBF0] p-4 sm:p-5 bg-white shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between w-full max-w-full overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E5EBF0]/70 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#EDF9F7] flex items-center justify-center text-[#008697]">
                  <Newspaper className="w-4 h-4" />
                </div>
                <h3 className="font-display text-[#082959] font-extrabold text-base sm:text-[18px]">
                  {SCHOOL_DATA.news.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onActionClick('view-all-news')}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#008697] hover:underline cursor-pointer"
              >
                <span>{SCHOOL_DATA.news.actionLabel}</span>
              </button>
            </div>

            {/* 3 Horizontal News Rows */}
            <div className="flex flex-col gap-2.5 w-full">
              {SCHOOL_DATA.news.items.map((newsItem) => (
                <button
                  key={newsItem.id}
                  type="button"
                  onClick={() => onActionClick('news-detail', newsItem)}
                  className="w-full max-w-full text-left p-2 sm:px-3 sm:py-2.5 rounded-lg bg-slate-50 hover:bg-[#EDF7FE] border border-slate-100 hover:border-[#008697]/30 transition-all flex items-center justify-between gap-2 sm:gap-3 cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <img
                      src={getAssetUrl(newsItem.imageSrc)}
                      alt={newsItem.imageAlt}
                      className="w-12 h-9 rounded-md object-cover shrink-0 border border-slate-200 shadow-2xs"
                    />
                    <div className="min-w-0">
                      <h4 className="font-sans text-[#082959] group-hover:text-[#008697] font-bold text-[13px] sm:text-sm leading-snug truncate">
                        {newsItem.title}
                      </h4>
                      <p className="font-sans text-[#64748B] text-xs leading-tight mt-0.5 truncate">
                        {newsItem.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="font-sans text-[11px] font-medium text-slate-400 shrink-0 whitespace-nowrap pl-2">
                    {newsItem.date}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ROW 2: What Parents Say Placed Below as a Spacious Testimonial Panel */}
        <div className="w-full max-w-full rounded-xl border border-[#E5EBF0] p-4 sm:p-5 bg-gradient-to-r from-[#FEF9F1]/80 via-white to-[#EDF7FE]/40 shadow-2xs hover:shadow-sm transition-shadow overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E5EBF0]/70 pb-2.5 mb-3.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FFF8EA] flex items-center justify-center text-[#FFAF24]">
                <Quote className="w-4 h-4" />
              </div>
              <h3 className="font-display text-[#082959] font-extrabold text-base sm:text-[18px]">
                {SCHOOL_DATA.testimonial.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onActionClick('view-all-testimonials')}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#008697] hover:underline cursor-pointer"
            >
              <span>{SCHOOL_DATA.testimonial.actionLabel}</span>
            </button>
          </div>

          {/* 3 Parent Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4.5 w-full max-w-full">
            {SCHOOL_DATA.testimonial.items.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 backdrop-blur-xs p-4 rounded-xl border border-[#E5EBF0] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all flex flex-col justify-between w-full max-w-full overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={getAssetUrl(item.avatarSrc)}
                        alt={item.avatarAlt}
                        className="w-11 h-11 rounded-full object-cover shrink-0 border-2 border-[#FFAF24]/40 shadow-xs"
                      />
                      <div>
                        <h4 className="font-display font-extrabold text-xs sm:text-[13px] text-[#082959] leading-tight">
                          {item.author}
                        </h4>
                        <p className="font-sans text-[10.5px] text-[#64748B] leading-none mt-0.5">
                          {item.authorRole}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-[#485469] text-xs leading-relaxed italic mb-3">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-emerald-600">Verified Parent</span>
                  <StarRating count={item.rating} className="w-3.5 h-3.5 text-[#FFAF24]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
