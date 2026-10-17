import React, { useState, useMemo } from 'react';
import { GUIDANCE_PROGRAMS, SCHOOL_INFO } from '../data/guidanceData';
import { GuidanceProgram, ApproachType, FieldType } from '../types';
import { 
  Search, 
  Compass, 
  MessageCircle, 
  ArrowLeft, 
  Layers, 
  Clock, 
  Grid, 
  List, 
  RotateCcw,
  CheckCircle2
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
    <section id="programs" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>خطة التوجيه الطلابي المعتمدة {SCHOOL_INFO.year}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            البرامج والخدمات <span className="text-amber-700">الإرشادية الرئيسية</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            مستندة إلى أدلة الإدارة العامة للتوجيه الطلابي بوزارة التعليم لخدمة طلاب مدرسة الجشة المتوسطة
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="rounded-3xl bg-white border border-slate-200 p-5 mb-10 shadow-sm space-y-4">
          
          {/* Top row: Search and View Mode */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-amber-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث بالاسم، الهدف، أو الكلمة المفتاحية..."
                className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Switches & Count */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <span className="text-xs font-bold text-slate-600">
                البرامج المعروضة: <span className="text-amber-800">{filteredPrograms.length}</span> من {GUIDANCE_PROGRAMS.length}
              </span>

              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                    viewMode === 'grid' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="عرض شبكي مفصل"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">شبكي</span>
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                    viewMode === 'compact' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="عرض مدمج"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">مدمج</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                    viewMode === 'table' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
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
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-700 shrink-0 ml-2">المنهج:</span>
            {approachesList.map((appr) => {
              const isActive = selectedApproach === appr;
              const label = appr === 'ALL' ? 'جميع المناهج' : appr;
              return (
                <button
                  key={appr}
                  onClick={() => setSelectedApproach(appr)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Fields Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-700 shrink-0 ml-2">المجال:</span>
            {fieldsList.map((fld) => {
              const isActive = selectedField === fld;
              const label = fld === 'ALL' ? 'جميع المجالات' : fld;
              return (
                <button
                  key={fld}
                  onClick={() => setSelectedField(fld)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}

            {(selectedApproach !== 'ALL' || selectedField !== 'ALL' || searchQuery !== '') && (
              <button
                onClick={handleResetFilters}
                className="mr-auto px-3 py-1 rounded-lg text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>إلغاء التصفية</span>
              </button>
            )}
          </div>

        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 px-4 rounded-3xl bg-white border border-slate-200 max-w-md mx-auto shadow-xs">
            <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">لا توجد برامج مطابقة لبحثك</h3>
            <p className="text-xs text-slate-500 mb-5">
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
                className="rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden"
              >
                {/* Card Top Banner */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-black text-sm">
                        {prog.id}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {prog.primaryField}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      {prog.categoryTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-amber-700 transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-amber-800 mb-3 font-bold">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{prog.timing}</span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
                    {prog.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    <p className="text-[11px] font-bold text-slate-700 mb-1">أبرز الأهداف والإجراءات:</p>
                    {prog.goals.slice(0, 2).map((g, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 line-clamp-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="truncate">{g}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target Audience chips preview */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {prog.targetAudience.slice(0, 2).map((target, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                      >
                        {target}
                      </span>
                    ))}
                    {prog.targetAudience.length > 2 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-slate-500 font-medium">
                        +{prog.targetAudience.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-amber-50 text-slate-800 hover:text-amber-800 text-xs font-bold transition flex items-center justify-center gap-1.5 border border-slate-200 hover:border-amber-300 shadow-2xs"
                  >
                    <span>عرض الدليل والتفاصيل</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onInquireWhatsApp(prog.title)}
                    className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm active:scale-95"
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
                className="cursor-pointer rounded-2xl bg-white border border-slate-200 hover:border-amber-400 p-5 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-black text-sm shrink-0">
                    {prog.id}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        {prog.categoryTag}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">{prog.timing}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-slate-600 text-xs mt-1 line-clamp-1 font-normal">
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
                    className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition"
                    title="واتساب"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <span className="text-amber-700 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    تفاصيل ←
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Table View (Executive Matrix) */}
        {viewMode === 'table' && filteredPrograms.length > 0 && (
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-right text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">#</th>
                  <th className="py-3.5 px-4">البرنامج والخدمة</th>
                  <th className="py-3.5 px-4">التصنيف والمنهج</th>
                  <th className="py-3.5 px-4">المجال الرئيسي</th>
                  <th className="py-3.5 px-4">مؤشر الإنجاز</th>
                  <th className="py-3.5 px-4 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredPrograms.map((prog) => (
                  <tr key={prog.id} className="hover:bg-amber-50/50 transition">
                    <td className="py-3.5 px-4 font-bold text-amber-800">{prog.id}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">{prog.title}</div>
                      <div className="text-xs text-slate-500 font-medium">{prog.timing}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 font-semibold text-xs">
                        {prog.categoryTag}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{prog.primaryField}</td>
                    <td className="py-3.5 px-4 text-xs text-slate-600 max-w-xs">{prog.achievementMetric}</td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => onSelectProgram(prog)}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-2xs"
                        >
                          الدليل
                        </button>
                        <button
                          onClick={() => onInquireWhatsApp(prog.title)}
                          className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-2xs"
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
