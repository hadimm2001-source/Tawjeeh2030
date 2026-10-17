import React from 'react';
import { SCHOOL_INFO, GUIDANCE_PROGRAMS, GUIDANCE_FIELDS, GUIDANCE_APPROACHES, VISION_MISSION_VALUES } from '../data/guidanceData';
import { Printer, X, Download, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PrintablePlanProps {
  onClose: () => void;
}

export const PrintablePlan: React.FC<PrintablePlanProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4 sm:p-8 text-right font-['Tajawal',sans-serif]">
      <div className="max-w-5xl mx-auto bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-10 my-6 relative print:p-0 print:m-0 print:shadow-none print:w-full">
        
        {/* Floating Controls (Hidden in Print) */}
        <div className="sticky top-4 z-30 mb-8 flex items-center justify-between bg-slate-900 text-white p-4 rounded-xl shadow-lg print:hidden">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">معاينة طباعة الخطة الشاملة للتوجيه الطلابي {SCHOOL_INFO.year}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة / حفظ كـ PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              <span>إغلاق</span>
            </button>
          </div>
        </div>

        {/* Official Header */}
        <div className="border-b-2 border-slate-900 pb-6 mb-8">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 leading-relaxed">
            <div>
              <p>المملكة العربية السعودية</p>
              <p>وزارة التعليم</p>
              <p>الإدارة العامة للتعليم</p>
              <p>قسم التوجيه الطلابي</p>
              <p className="text-slate-950 font-black text-sm mt-1">{SCHOOL_INFO.name}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto border-2 border-slate-900 rounded-full flex items-center justify-center font-black text-xs text-amber-600 mb-1">
                رؤية 2030
              </div>
              <p className="font-bold text-slate-900">خطة برامج وخدمات التوجيه الطلابي</p>
              <p className="text-xs text-slate-600">العام الدراسي: {SCHOOL_INFO.year}</p>
            </div>

            <div className="text-left dir-ltr">
              <p>Kingdom of Saudi Arabia</p>
              <p>Ministry of Education</p>
              <p>Student Guidance Dept.</p>
              <p className="font-bold text-slate-900 mt-1">Al-Jasha Intermediate School</p>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="mb-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="text-base font-black text-slate-900 mb-2">الرؤية والرسالة الإرشادية:</h3>
          <p className="text-xs text-slate-800 leading-relaxed mb-2">
            <span className="font-bold">الرؤية: </span>{VISION_MISSION_VALUES.vision.text}
          </p>
          <p className="text-xs text-slate-800 leading-relaxed mb-3">
            <span className="font-bold">الرسالة: </span>{VISION_MISSION_VALUES.mission.text}
          </p>
          <div className="text-xs text-slate-700">
            <span className="font-bold">القيم: </span>
            {VISION_MISSION_VALUES.values.map(v => v.name).join(' • ')}
          </div>
        </div>

        {/* Guidance Fields Summary */}
        <div className="mb-8">
          <h3 className="text-sm font-black text-slate-900 mb-3 border-b border-slate-300 pb-1">
            أولاً: مجالات التوجيه الطلابي الستة
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            {GUIDANCE_FIELDS.map(f => (
              <div key={f.id} className="p-3 border border-slate-200 rounded-lg bg-white">
                <span className="font-bold text-slate-950 block">{f.title}</span>
                <span className="text-slate-600 text-[11px] mt-0.5 block">{f.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Master Programs Table */}
        <div className="mb-8">
          <h3 className="text-sm font-black text-slate-900 mb-3 border-b border-slate-300 pb-1">
            ثانياً: خطة البرامج والخدمات الإرشادية المعتمدة ({GUIDANCE_PROGRAMS.length} برنامجاً)
          </h3>
          
          <table className="w-full text-right text-xs border border-slate-300 border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-950 font-bold border-b border-slate-300">
                <th className="p-2 border-l border-slate-300 w-8 text-center">#</th>
                <th className="p-2 border-l border-slate-300 w-44">اسم البرنامج</th>
                <th className="p-2 border-l border-slate-300 w-28">المنهج والتصنيف</th>
                <th className="p-2 border-l border-slate-300">الوصف والأهداف</th>
                <th className="p-2 border-l border-slate-300 w-40">الفئة المستهدفة</th>
                <th className="p-2 w-36">مؤشر الإنجاز والتحقق</th>
              </tr>
            </thead>
            <tbody>
              {GUIDANCE_PROGRAMS.map((prog) => (
                <tr key={prog.id} className="border-b border-slate-200 align-top">
                  <td className="p-2 border-l border-slate-200 text-center font-bold text-slate-900">{prog.id}</td>
                  <td className="p-2 border-l border-slate-200 font-bold text-slate-900">
                    <div>{prog.title}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{prog.timing}</div>
                  </td>
                  <td className="p-2 border-l border-slate-200">
                    <span className="font-semibold text-slate-800">{prog.approach}</span>
                    <div className="text-[10px] text-slate-500">{prog.categoryTag}</div>
                  </td>
                  <td className="p-2 border-l border-slate-200 text-[11px] leading-relaxed">
                    <p className="text-slate-800 font-medium mb-1">{prog.description}</p>
                    <p className="text-[10px] text-slate-600">الأهداف: {prog.goals.slice(0, 2).join(' • ')}</p>
                  </td>
                  <td className="p-2 border-l border-slate-200 text-[11px] text-slate-700">
                    {prog.targetAudience.join('، ')}
                  </td>
                  <td className="p-2 text-[10px] text-slate-700 font-medium leading-tight">
                    {prog.achievementMetric}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Signatures & Accreditation */}
        <div className="mt-12 pt-8 border-t-2 border-slate-900">
          <div className="grid grid-cols-3 gap-6 text-center text-xs font-bold text-slate-900">
            <div>
              <p className="mb-8">الموجه الطلابي الأول</p>
              <p className="text-slate-950 font-black">{SCHOOL_INFO.counselor.name}</p>
              <p className="text-[10px] text-slate-500">التوقيع: ...........................</p>
            </div>

            <div>
              <p className="mb-8">وكيل الشؤون التعليمية والطلابية</p>
              <p className="text-slate-950 font-black">......................................</p>
              <p className="text-[10px] text-slate-500">التوقيع: ...........................</p>
            </div>

            <div>
              <p className="mb-8">مدير مدرسة الجشة المتوسطة</p>
              <p className="text-slate-950 font-black">......................................</p>
              <p className="text-[10px] text-slate-500">الختم والتوقيع: ...........................</p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-4 text-center text-[10px] text-slate-500 border-t border-slate-200">
          تم إنشاء واعتماد هذه الوثيقة وفق الدليل الإجرائي والتنظيمي لبرامج وخدمات التوجيه الطلابي بوزارة التعليم للعام الدراسي {SCHOOL_INFO.year}.
        </div>

      </div>
    </div>
  );
};
