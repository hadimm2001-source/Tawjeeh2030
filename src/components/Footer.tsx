import React from 'react';
import { SCHOOL_INFO } from '../data/guidanceData';
import { Compass, Phone, MapPin, ArrowUp, ShieldCheck, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: About Portal */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">قسم التوجيه الطلابي</h4>
                <p className="text-xs text-amber-800 font-bold">{SCHOOL_INFO.name}</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              منصة إرشادية رقمية شاملة تقدم برامج وخدمات التوجيه الطلابي وفق المعايير الوزارية الحديثة لبناء جيل طموح ومعتز بهويته الوطنية.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>الإدارة العامة للتوجيه الطلابي • {SCHOOL_INFO.year}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 border-r-2 border-amber-500 pr-2">
              أقسام المنصة الإرشادية
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-amber-800 transition flex items-center gap-1.5">
                  <span className="text-slate-400">›</span> الرئيسية والتعريف
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-amber-800 transition flex items-center gap-1.5">
                  <span className="text-slate-400">›</span> الرؤية والرسالة والقيم
                </a>
              </li>
              <li>
                <a href="#fields" className="hover:text-amber-800 transition flex items-center gap-1.5">
                  <span className="text-slate-400">›</span> مجالات التوجيه الستة
                </a>
              </li>
              <li>
                <a href="#approaches" className="hover:text-amber-800 transition flex items-center gap-1.5">
                  <span className="text-slate-400">›</span> مناهج التوجيه (إنمائي، وقائي، علاجي)
                </a>
              </li>
              <li>
                <a href="#tasks" className="hover:text-amber-800 transition flex items-center gap-1.5">
                  <span className="text-slate-400">›</span> المهام اليومية للموجه الطلابي
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-800 transition flex items-center gap-1.5">
                  <span className="text-slate-400">›</span> دليل البرامج والخدمات الـ 12
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs Highlights */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 border-r-2 border-amber-500 pr-2">
              أبرز البرامج الميدانية
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>البرنامج التوجيهي والأسبوع التمهيدي</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>برنامج تعزيز السلوك الإيجابي</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>برنامج خفض العنف بالمدارس (رفق)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span>التوجيه المهني والتعليمي والمسارات</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>رعاية متكرري الغياب والمتأخرين</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>الاستخدام الآمن للإنترنت والأمن السيبراني</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Counselor Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 mb-4 border-r-2 border-amber-500 pr-2">
              بيانات التواصل الإرشادي
            </h4>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
              <div className="font-bold text-slate-900">الموجه الطلابي:</div>
              <div className="text-amber-800 font-bold">{SCHOOL_INFO.counselor.name}</div>
              
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="dir-ltr font-bold text-slate-800">{SCHOOL_INFO.counselor.displayPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>الأحد - الخميس (7:00 ص - 1:30 م)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>مقر التوجيه الطلابي بالمدرسة</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-right font-medium">
            © {SCHOOL_INFO.year} • خطة برامج وخدمات التوجيه الطلابي – {SCHOOL_INFO.name} • وزارة التعليم بالمملكة العربية السعودية
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 transition flex items-center gap-1.5 shadow-2xs font-semibold"
            title="العودة لأعلى الصفحة"
          >
            <span>أعلى الصفحة</span>
            <ArrowUp className="w-4 h-4 text-amber-600" />
          </button>
        </div>
      </div>
    </footer>
  );
};
