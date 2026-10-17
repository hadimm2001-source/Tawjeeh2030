import React from 'react';
import { SCHOOL_INFO } from '../data/guidanceData';
import { 
  Compass, 
  Search, 
  Sparkles, 
  MessageCircle, 
  Users, 
  BookOpen,
  ArrowDownCircle,
  FileCheck
} from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onExploreClick: () => void;
  totalPrograms: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onExploreClick,
  totalPrograms
}) => {
  return (
    <section 
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-amber-50/20 border-b border-slate-200"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Geometric subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #94a3b8 1.5px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-5 whitespace-nowrap">
            خطة برامج وخدمات{' '}
            <span className="bg-gradient-to-l from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
              التوجيه الطلابي
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            دليل متكامل وشامل يجسد الريادة في التوجيه الطلابي لتحقيق التوافق التربوي، النفسي، الاجتماعي، والمهني للطالب في بيئة تعليمية آمنة ومحفزة.
          </p>

          {/* Counselor Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 p-2 sm:p-2.5 pr-4 rounded-2xl bg-white border border-amber-300/80 shadow-md shadow-slate-200/60 backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-right">
                <p className="text-xs text-amber-800 font-semibold">الموجه الطلابي بمدرسة الجشة المتوسطة</p>
                <p className="text-sm sm:text-base font-black text-slate-900">{SCHOOL_INFO.counselor.name}</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${SCHOOL_INFO.counselor.phone}?text=${encodeURIComponent('السلام عليكم ورحمة الله وبركاته، أستاذ عبدالهادي المحسن. أرغب في حجز استشارة إرشادية.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>استشارة عبر واتساب</span>
            </a>
          </div>
        </div>

        {/* Live Search & Quick Filter Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 rounded-2xl blur-lg transition duration-300" />
            <div className="relative flex items-center bg-white border border-slate-300 rounded-2xl p-1.5 shadow-lg shadow-slate-200/70 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-400/20 transition-all">
              <div className="pr-4 pl-2 text-amber-600">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في البرامج (مثال: رفق، المتأخرين، الميول المهنية، الغياب، السلوك الإيجابي)..."
                className="w-full py-2.5 px-2 bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 text-xs text-slate-400 hover:text-slate-700 font-semibold"
                >
                  مسح
                </button>
              )}
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shadow-sm shrink-0 active:scale-95"
              >
                <span>استعراض ({totalPrograms})</span>
                <ArrowDownCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-xs hover:shadow-md transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">12</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">برنامجاً وخدمة إرشادية</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-xs hover:shadow-md transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">6</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">مجالات توجيه متخصصة</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-xs hover:shadow-md transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">3</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">مناهج إرشادية متكاملة</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-xs hover:shadow-md transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">شمولية وسرية مهنية</div>
          </div>
        </div>

      </div>
    </section>
  );
};
