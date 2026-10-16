import React from 'react';
import { GUIDANCE_FIELDS } from '../data/guidanceData';
import { FieldType } from '../types';
import { 
  Sparkles, 
  GraduationCap, 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  Briefcase,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

interface GuidanceFieldsSectionProps {
  onSelectField: (fieldName: FieldType) => void;
  selectedField: FieldType | 'ALL';
}

export const GuidanceFieldsSection: React.FC<GuidanceFieldsSectionProps> = ({
  onSelectField,
  selectedField
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-purple-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="fields" className="py-20 bg-[#0C1527] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-3">
            <span>المسارات التخصصية الستة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            مجالات <span className="text-amber-400">التوجيه الطلابي</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            ستة مجالات تكاملية تبني شخصية الطالب المتزنة وتلبي مختلف احتياجاته النمائية والتربوية
          </p>
        </div>

        {/* Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDANCE_FIELDS.map((field) => {
            const isSelected = selectedField === field.title;
            return (
              <div
                key={field.id}
                onClick={() => onSelectField(field.title as FieldType)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/20 shadow-2xl scale-[1.02]'
                    : 'bg-[#0E1B2E]/90 border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 hover:-translate-y-1 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(field.icon)}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      مجال رئيسي
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {field.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {field.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800">
                    <p className="text-xs font-semibold text-amber-400/90 mb-1">أبرز مرتكزات المجال:</p>
                    {field.focalPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>{isSelected ? 'المجال محدد حالياً' : 'تصفية البرامج الخاصة بهذا المجال'}</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
