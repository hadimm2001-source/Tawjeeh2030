import React, { useState, useMemo } from 'react';
import { GUIDANCE_PROGRAMS, SCHOOL_INFO } from '../data/guidanceData';
import { GuidanceProgram, ApproachType, FieldType } from '../types';
import { 
  Search, 
  Filter, 
  Compass, 
  MessageCircle, 
  ArrowLeft, 
  Layers, 
  Sparkles, 
  Clock, 
  Users, 
  TrendingUp, 
  Grid, 
  List, 
  RotateCcw,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface ProgramsDirectoryProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedApproach: ApproachType | 'ALL';
  setSelectedApproach: (a: ApproachType | 'ALL') => void;
  selectedField: FieldType | 'ALL';
  setSelectedField: (f: FieldType | 'ALL') => void;
  onSelectProgram: (p: GuidanceProgram) => void;
  onInquireWhatsApp: (title: string) => void;
}

export const ProgramsDirectory: React.FC<ProgramsDirectoryProps> = ({
  searchQuery,
  setSearchQuery,
  selectedApproach,
  setSelectedApproach,
  selectedField,
  setSelectedField,
  onSelectProgram,
  onInquireWhatsApp
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'table' | 'compact'>('grid');

  const approachesList: Array<ApproachType | 'ALL'> = [
    'ALL',
    'نمائي',
    'وقائي',
    'علاجي',
    'دعم نفسي',
    'شراكة أسرية',
    'تمكين طلابي'
  ];

  const fieldsList: Array<FieldType | 'ALL'> = [
    'ALL',
    'التوجيه الأخلاقي',
    'التوجيه التربوي',
    'التوجيه الاجتماعي',
    'التوجيه النفسي',
    'التوجيه الوقائي',
    'التوجيه المهني'
  ];

  const filteredPrograms = useMemo(() => {
    return GUIDANCE_PROGRAMS.filter((prog) => {
      // Approach filter
      if (selectedApproach !== 'ALL' && prog.approach !== selectedApproach) {
        return false;
      }
      // Field filter
      if (selectedField !== 'ALL' && prog.primaryField !== selectedField) {
        return false;
      }
      // Text search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = prog.title.toLowerCase().includes(q);
        const inDesc = prog.description.toLowerCase().includes(q);
        const inTag = prog.categoryTag.toLowerCase().includes(q);
        const inGoals = prog.goals.some(g => g.toLowerCase().includes(q));
        const inAudience = prog.targetAudience.some(t => t.toLowerCase().includes(q));
        const inSteps = prog.steps.some(s => s.toLowerCase().includes(q));
        return inTitle || inDesc || inTag || inGoals || inAudience || inSteps;
      }
      return true;
    });
  }, [searchQuery, selectedApproach, selectedField]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedApproach('ALL');
    setSelectedField('ALL');
  };

  return (
    <section id="programs" className="py-20 bg-[#091120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>خطة التوجيه الطلابي المعتمدة 1447هـ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            البرامج والخدمات <span className="text-amber-400">الإرشادية الرئيسية</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            مستندة إلى أدلة الإدارة العامة للتوجيه الطلابي بوزارة التعليم لخدمة طلاب مدرسة الجشة المتوسطة
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="rounded-3xl bg-[#0D1B2E] border border-slate-800 p-5 mb-10 shadow-xl space-y-4">
          
          {/* Top row: Search and View Mode */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-amber-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث بالاسم، الهدف، أو الكلمة المفتاحية..."
                className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Switches & Count */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <span className="text-xs font-bold text-slate-400">
                البرامج المعروضة: <span className="text-amber-400">{filteredPrograms.length}</span> من {GUIDANCE_PROGRAMS.length}
              </span>

              <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                    viewMode === 'grid' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="عرض شبكي مفصل"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">شبكي</span>
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                    viewMode === 'compact' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="عرض مدمج"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">مدمج</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                    viewMode === 'table' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="عرض جدول تنفيذي"
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">جدول</span>
                </button>
              </div>
            </div>

          </div>

          {/* Approaches Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
            <span className="text-xs font-bold text-slate-400 shrink-0 ml-2">المنهج:</span>
            {approachesList.map((appr) => {
              const isActive = selectedApproach === appr;
              const label = appr === 'ALL' ? 'جميع المناهج' : appr;
              return (
                <button
                  key={appr}
                  onClick={() => setSelectedApproach(appr)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Fields Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
            <span className="text-xs font-bold text-slate-400 shrink-0 ml-2">المجال:</span>
            {fieldsList.map((fld) => {
              const isActive = selectedField === fld;
              const label = fld === 'ALL' ? 'جميع المجالات' : fld;
              return (
                <button
                  key={fld}
                  onClick={() => setSelectedField(fld)}
                  className={`px-3 py-1 rounded-lg text-xs transition ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-md'
                      : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/80'
                  }`}
                >
                  {label}
                </button>
              );
            })}

            {(selectedApproach !== 'ALL' || selectedField !== 'ALL' || searchQuery !== '') && (
              <button
                onClick={handleResetFilters}
                className="mr-auto px-3 py-1 rounded-lg text-xs font-bold text-rose-400 hover:bg-rose-950/40 border border-rose-900/50 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>إلغاء التصفية</span>
              </button>
            )}
          </div>

        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 px-4 rounded-3xl bg-[#0D1B2E] border border-slate-800 max-w-md mx-auto">
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">لا توجد برامج مطابقة لبحثك</h3>
            <p className="text-xs text-slate-400 mb-5">
              جرّب تغيير كلمات البحث أو إعادة ضبط فلاتر المنهج والمجال الإرشادي.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
            >
              عرض جميع البرامج الـ 12
            </button>
          </div>
        )}

        {/* 1. Grid View (Luxury Full Cards) */}
        {viewMode === 'grid' && filteredPrograms.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="rounded-2xl bg-gradient-to-b from-[#0E1A2D] to-[#0A1322] border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden"
              >
                {/* Card Top Banner */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center font-black text-sm">
                        {prog.id}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {prog.primaryField}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {prog.categoryTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-amber-400/90 mb-3 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{prog.timing}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {prog.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80 mb-4">
                    <p className="text-[11px] font-bold text-slate-400 mb-1">أبرز الأهداف والإجراءات:</p>
                    {prog.goals.slice(0, 2).map((g, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-400 line-clamp-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="truncate">{g}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target Audience chips preview */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {prog.targetAudience.slice(0, 2).map((target, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {target}
                      </span>
                    ))}
                    {prog.targetAudience.length > 2 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-slate-500">
                        +{prog.targetAudience.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1.5 border border-slate-700 hover:border-amber-500/40"
                  >
                    <span>عرض الدليل والتفاصيل</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onInquireWhatsApp(prog.title)}
                    className="p-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white transition shadow-md shadow-emerald-950/30"
                    title="استفسار فوري عبر واتساب"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Compact View */}
        {viewMode === 'compact' && filteredPrograms.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                onClick={() => onSelectProgram(prog)}
                className="cursor-pointer rounded-2xl bg-[#0E1A2D] border border-slate-800 hover:border-amber-500/50 p-5 shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center font-black text-sm shrink-0">
                    {prog.id}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400">
                        {prog.categoryTag}
                      </span>
                      <span className="text-[11px] text-slate-400">{prog.timing}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1 line-clamp-1">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onInquireWhatsApp(prog.title);
                    }}
                    className="p-2 rounded-xl bg-emerald-600/80 hover:bg-emerald-500 text-white transition"
                    title="واتساب"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <span className="text-amber-400 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    تفاصيل ←
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Table View (Executive Matrix) */}
        {viewMode === 'table' && filteredPrograms.length > 0 && (
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#0E1A2D] shadow-2xl">
            <table className="w-full text-right text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-950 text-amber-400 font-bold border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">#</th>
                  <th className="py-3.5 px-4">البرنامج والخدمة</th>
                  <th className="py-3.5 px-4">التصنيف والمنهج</th>
                  <th className="py-3.5 px-4">المجال الرئيسي</th>
                  <th className="py-3.5 px-4">مؤشر الإنجاز</th>
                  <th className="py-3.5 px-4 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredPrograms.map((prog) => (
                  <tr key={prog.id} className="hover:bg-slate-900/80 transition">
                    <td className="py-3.5 px-4 font-bold text-amber-400">{prog.id}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{prog.title}</div>
                      <div className="text-xs text-slate-400">{prog.timing}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 font-medium text-xs">
                        {prog.categoryTag}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">{prog.primaryField}</td>
                    <td className="py-3.5 px-4 text-xs text-slate-400 max-w-xs">{prog.achievementMetric}</td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => onSelectProgram(prog)}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
                        >
                          الدليل
                        </button>
                        <button
                          onClick={() => onInquireWhatsApp(prog.title)}
                          className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition"
                          title="واتساب"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
