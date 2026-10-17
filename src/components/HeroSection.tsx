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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#060B14] via-[#0A1324] to-[#0D1B2A] border-b border-amber-500/20"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Geometric subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #D4A017 1.5px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 whitespace-nowrap">
            خطة برامج وخدمات{' '}
            <span className="bg-gradient-to-l from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              التوجيه الطلابي
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            دليل متكامل وشامل يجسد الريادة في التوجيه الطلابي لتحقيق التوافق التربوي، النفسي، الاجتماعي، والمهني للطالب في بيئة تعليمية آمنة ومحفزة.
          </p>

          {/* Counselor Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 p-2 sm:p-2.5 pr-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-right">
                <p className="text-xs text-amber-400/90 font-medium">الموجه الطلابي بمدرسة الجشة المتوسطة</p>
                <p className="text-sm sm:text-base font-extrabold text-white">{SCHOOL_INFO.counselor.name}</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${SCHOOL_INFO.counselor.phone}?text=${encodeURIComponent('السلام عليكم ورحمة الله وبركاته، أستاذ عبدالهادي المحسن. أرغب في حجز استشارة إرشادية.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-emerald-950/40"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>استشارة عبر واتساب</span>
            </a>
          </div>
        </div>

        {/* Live Search & Quick Filter Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 rounded-2xl blur-lg transition duration-300 group-hover:blur-xl" />
            <div className="relative flex items-center bg-[#0D1B2A]/90 border border-amber-500/40 rounded-2xl p-1.5 shadow-2xl focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20 transition-all">
              <div className="pr-4 pl-2 text-amber-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في البرامج (مثال: رفق، المتأخرين، الميول المهنية، الغياب، السلوك الإيجابي)..."
                className="w-full py-2.5 px-2 bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 text-xs text-slate-400 hover:text-white"
                >
                  مسح
                </button>
              )}
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shadow-md shrink-0"
              >
                <span>استعراض ({totalPrograms})</span>
                <ArrowDownCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">12</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">برنامجاً وخدمة إرشادية</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">6</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">مجالات توجيه متخصصة</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">3</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">مناهج إرشادية متكاملة</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">شمولية وسرية مهنية</div>
          </div>
        </div>

      </div>
    </section>
  );
};
