import React from 'react';
import { VISION_MISSION_VALUES } from '../data/guidanceData';
import { Eye, Compass, Gem, CheckCircle2 } from 'lucide-react';

export const VisionMissionValues: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-3">
            <Gem className="w-3.5 h-3.5" />
            <span>المرتكزات الإرشادية الاستراتيجية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            الرؤية <span className="text-amber-700">والرسالة والقيم</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            المنطلقات الأساسية المعتمدة من الإدارة العامة للتوجيه الطلابي لبناء بيئة تربوية رائدة بمدرسة الجشة المتوسطة
          </p>
        </div>

        {/* Vision, Mission, and Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Vision Card */}
          <div className="relative group rounded-2xl bg-white border border-amber-200/90 p-7 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-md uppercase tracking-wider shadow-sm">
              الغاية المستقبلية
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span>{VISION_MISSION_VALUES.vision.title}</span>
              </h3>
              <p className="text-slate-700 text-base leading-relaxed font-normal">
                {VISION_MISSION_VALUES.vision.text}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>بيئة مدرسية آمنة ومحفزة للجميع</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group rounded-2xl bg-white border border-blue-200/90 p-7 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md uppercase tracking-wider shadow-sm">
              الواجب والمسار
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span>{VISION_MISSION_VALUES.mission.title}</span>
              </h3>
              <p className="text-slate-700 text-base leading-relaxed font-normal">
                {VISION_MISSION_VALUES.mission.text}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-blue-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>محققة لأهداف التعليم في المملكة</span>
            </div>
          </div>

          {/* Values Card */}
          <div className="relative group rounded-2xl bg-white border border-emerald-200/90 p-7 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-md uppercase tracking-wider shadow-sm">
              المبادئ الحاكمة
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Gem className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>القيم المؤسسية</span>
              </h3>
              <div className="space-y-3">
                {VISION_MISSION_VALUES.values.map((v, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{v.name}: </span>
                      <span className="text-slate-600 text-xs leading-relaxed">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>المهنية والسرية والاحتراف التربوي</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
