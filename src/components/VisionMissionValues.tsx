import React from 'react';
import { VISION_MISSION_VALUES } from '../data/guidanceData';
import { Eye, Compass, Gem, CheckCircle2, Award, Heart, Shield } from 'lucide-react';

export const VisionMissionValues: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-[#091120] relative border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Gem className="w-3.5 h-3.5" />
            <span>المرتكزات الإرشادية الاستراتيجية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            الرؤية <span className="text-amber-400">والرسالة والقيم</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            المنطلقات الأساسية المعتمدة من الإدارة العامة للتوجيه الطلابي لبناء بيئة تربوية رائدة بمدرسة الجشة المتوسطة
          </p>
        </div>

        {/* Vision, Mission, and Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Vision Card */}
          <div className="relative group rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0D1B2A] border border-amber-500/30 p-7 shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-md uppercase tracking-wider shadow-md">
              الغاية المستقبلية
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <span>{VISION_MISSION_VALUES.vision.title}</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {VISION_MISSION_VALUES.vision.text}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>بيئة مدرسية آمنة ومحفزة للجميع</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0D1B2A] border border-blue-500/30 p-7 shadow-xl hover:border-blue-400/60 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-blue-500 text-slate-950 text-xs font-black rounded-md uppercase tracking-wider shadow-md">
              الواجب والمسار
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <span>{VISION_MISSION_VALUES.mission.title}</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {VISION_MISSION_VALUES.mission.text}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-blue-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>محققة لأهداف التعليم في المملكة</span>
            </div>
          </div>

          {/* Values Card */}
          <div className="relative group rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0D1B2A] border border-emerald-500/30 p-7 shadow-xl hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-black rounded-md uppercase tracking-wider shadow-md">
              المبادئ الحاكمة
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Gem className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>القيم المؤسسية</span>
              </h3>
              <div className="space-y-3">
                {VISION_MISSION_VALUES.values.map((v, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-100 text-sm">{v.name}: </span>
                      <span className="text-slate-400 text-xs leading-relaxed">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>المهنية والسرية والاحتراف التربوي</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
