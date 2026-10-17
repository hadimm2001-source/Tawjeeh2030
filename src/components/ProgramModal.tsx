import React, { useEffect } from 'react';
import { GuidanceProgram } from '../types';
import { SCHOOL_INFO } from '../data/guidanceData';
import { 
  X, 
  MessageCircle, 
  CheckCircle2, 
  Target, 
  Clock, 
  TrendingUp, 
  Users, 
  Compass, 
  Sparkles, 
  Copy,
  Check
} from 'lucide-react';

interface ProgramModalProps {
  program: GuidanceProgram | null;
  onClose: () => void;
  onInquireWhatsApp: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onInquireWhatsApp
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (program) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) return null;

  const handleCopySummary = () => {
    const text = `📌 برنامج: ${program.title}
🏷️ التصنيف: ${program.categoryTag}
🎯 الوصف: ${program.description}
📊 مؤشر الإنجاز: ${program.achievementMetric}
🏫 مدرسة الجشة المتوسطة - التوجيه الطلابي (الموجه: أ. عبدالهادي المحسن)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl text-right text-slate-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              {program.categoryTag}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline-block font-medium">
              {program.primaryField}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition text-xs font-semibold flex items-center gap-1.5"
              title="نسخ ملخص البرنامج"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'تم النسخ' : 'نسخ'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-rose-100 hover:text-rose-700 text-slate-500 transition"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Title and Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 mb-1">
                <span>البرنامج رقم ({program.id})</span>
                <span>•</span>
                <span>المنهج: {program.approach}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {program.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>التوقيت والتنفيذ: {program.timing}</span>
              </div>
            </div>

            <button
              onClick={() => onInquireWhatsApp(program.title)}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-sm active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>استفسار حول هذا البرنامج</span>
            </button>
          </div>

          {/* Description Block */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
            <h3 className="text-sm font-black text-amber-900 flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>وصف البرنامج وفكرته العامة</span>
            </h3>
            <p className="text-slate-700 text-base leading-relaxed font-normal">
              {program.description}
            </p>
          </div>

          {/* Two-column Overview: Goals & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Goals */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-amber-900 flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-amber-600" />
                  <span>الأهداف العامة والتربوية</span>
                </h3>
                <div className="space-y-3">
                  {program.goals.map((g, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Audience & Indicators */}
            <div className="space-y-6">
              
              {/* Target Audience */}
              <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-5 sm:p-6">
                <h3 className="text-sm font-black text-amber-900 flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>الفئة المستهدفة</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {program.targetAudience.map((target, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                    >
                      {target}
                    </span>
                  ))}
                </div>
              </div>

              {/* Indicators of Verification */}
              <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-5 sm:p-6">
                <h3 className="text-sm font-black text-amber-900 flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-amber-600" />
                  <span>مؤشرات التحقق والمتابعة</span>
                </h3>
                <div className="space-y-2">
                  {program.indicators.map((ind, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Implementation Steps */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
            <h3 className="text-sm font-black text-amber-900 flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>إجراءات وخطوات التنفيذ الميداني</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium shadow-2xs"
                >
                  <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics & Official Documentation Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold text-amber-900 block mb-1">مؤشر الإنجاز والقياس:</span>
              <p className="text-sm font-bold text-slate-900">{program.achievementMetric}</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
              <span className="text-xs font-bold text-blue-900 block mb-1">الأدلة والوثائق المعتمدة:</span>
              <p className="text-sm font-bold text-slate-900">{program.documentation}</p>
            </div>
          </div>

          {/* Key Outputs */}
          <div>
            <span className="text-xs font-bold text-slate-700 block mb-2">أبرز مخرجات البرنامج:</span>
            <div className="flex flex-wrap gap-2">
              {program.keyOutputs.map((output, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold"
                >
                  ✓ {output}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium">
            <span>مدرسة الجشة المتوسطة</span> • <span>الموجه الطلابي: {SCHOOL_INFO.counselor.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
            >
              إغلاق
            </button>
            <button
              onClick={() => onInquireWhatsApp(program.title)}
              className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition flex items-center gap-1.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>تواصل مباشر حول البرنامج</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
