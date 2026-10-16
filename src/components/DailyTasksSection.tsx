import React from 'react';
import { DAILY_TASKS, SCHOOL_INFO } from '../data/guidanceData';
import { 
  ClipboardCheck, 
  Heart, 
  Search, 
  FileText, 
  PhoneCall, 
  Clock, 
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

export const DailyTasksSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6 text-amber-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-400" />;
      case 'Search': return <Search className="w-6 h-6 text-blue-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-400" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-cyan-400" />;
      default: return <ClipboardCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="tasks" className="py-20 bg-[#0C1527] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>المسؤوليات التشغيلية الميدانية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            المهام اليومية <span className="text-amber-400">للموجه الطلابي</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            منظومة عمل يومية دقيقة ومنتظمة يلتزم بها الموجه الطلابي ({SCHOOL_INFO.counselor.name}) لضمان رعاية شاملة لكل طالب
          </p>
        </div>

        {/* Daily Tasks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {DAILY_TASKS.slice(0, 4).map((task, index) => (
            <div
              key={task.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#0E1A2D] border border-slate-800 hover:border-amber-500/40 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group border-b-4 border-b-amber-500"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(task.icon)}
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {task.badge}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-amber-400/90 mb-2 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{task.timing}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                  {task.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {task.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-slate-800">
                {task.procedures.map((proc, pIndex) => (
                  <div key={pIndex} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Family Partnership Banner (5th task from document highlighted) */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/15 border border-amber-500/40 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-right">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0">
                <PhoneCall className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1 inline-block">
                  شراكة حيوية مستمرة
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  التواصل المستمر مع الأسرة وأولياء الأمور
                </h4>
                <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
                  استقبال أولياء الأمور، تقديم الاستشارات التخصصية، ومشاركتهم في خطط الدعم والحلول التربوية المناسبة لأبنائهم بسرية تامة.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20 active:scale-95"
              >
                طلب استشارة مع الموجه
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
