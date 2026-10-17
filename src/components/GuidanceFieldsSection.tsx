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
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-purple-600" />;
      default: return <Sparkles className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="fields" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <span>المسارات التخصصية الستة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            مجالات <span className="text-amber-700">التوجيه الطلابي</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
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
                    ? 'bg-amber-50/60 border-amber-500 ring-2 ring-amber-400/30 shadow-md scale-[1.01]'
                    : 'bg-slate-50/70 border-slate-200 hover:border-amber-400 hover:bg-white hover:-translate-y-1 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(field.icon)}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200 shadow-2xs">
                      مجال رئيسي
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-amber-700 transition-colors">
                    {field.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5 font-normal">
                    {field.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200">
                    <p className="text-xs font-bold text-amber-900 mb-1">أبرز مرتكزات المجال:</p>
                    {field.focalPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800">
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
