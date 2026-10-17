import React from 'react';
import { GUIDANCE_APPROACHES } from '../data/guidanceData';
import { ApproachType } from '../types';
import { TrendingUp, Shield, Activity, Check, ArrowDown } from 'lucide-react';

interface GuidanceApproachesSectionProps {
  onSelectApproach: (approach: ApproachType) => void;
  selectedApproach: ApproachType | 'ALL';
}

export const GuidanceApproachesSection: React.FC<GuidanceApproachesSectionProps> = ({
  onSelectApproach,
  selectedApproach
}) => {
  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8" style={{ color }} />;
      case 'Shield':
        return <Shield className="w-8 h-8" style={{ color }} />;
      case 'Activity':
        return <Activity className="w-8 h-8" style={{ color }} />;
      default:
        return <TrendingUp className="w-8 h-8" style={{ color }} />;
    }
  };

  const getApproachTag = (title: string): ApproachType => {
    if (title.includes('إنمائي')) return 'نمائي';
    if (title.includes('وقائي')) return 'وقائي';
    return 'علاجي';
  };

  return (
    <section id="approaches" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <span>المنهجية العلمية المعتمدة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            مناهج <span className="text-amber-700">التوجيه الطلابي</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            ثلاثة مناهج متكاملة تتدرج من البناء الإنمائي الشامل إلى التحصين الوقائي ثم التدخل العلاجي المتخصص
          </p>
        </div>

        {/* Approaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {GUIDANCE_APPROACHES.map((appr) => {
            const approachTag = getApproachTag(appr.title);
            const isSelected = selectedApproach === approachTag;

            return (
              <div
                key={appr.id}
                onClick={() => onSelectApproach(approachTag)}
                className={`cursor-pointer rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between group bg-white ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-400/30 shadow-md scale-[1.01]'
                    : 'border-slate-200 hover:border-slate-300 hover:-translate-y-1 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-105 transition-transform"
                      style={{ 
                        backgroundColor: `${appr.color}10`, 
                        borderColor: `${appr.color}30` 
                      }}
                    >
                      {getIcon(appr.icon, appr.color)}
                    </div>
                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{ 
                        backgroundColor: `${appr.color}15`, 
                        borderColor: `${appr.color}30`,
                        color: appr.color 
                      }}
                    >
                      {appr.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {appr.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5 font-normal">
                    {appr.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                    <p className="text-xs font-bold text-slate-900 mb-1">الفئة المستهدفة بالمنهج:</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{appr.targetFocus}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-900">أبرز التطبيقات العملية:</p>
                    {appr.methods.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <div 
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${appr.color}20` }}
                        >
                          <Check className="w-2.5 h-2.5" style={{ color: appr.color }} />
                        </div>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold"
                  style={{ color: appr.color }}
                >
                  <span>{isSelected ? 'المنهج نشط في التصفية' : 'تصفية برامج هذا المنهج'}</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
