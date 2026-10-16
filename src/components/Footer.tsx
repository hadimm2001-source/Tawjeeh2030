import React from 'react';
import { SCHOOL_INFO } from '../data/guidanceData';
import { Compass, Phone, Mail, MapPin, ArrowUp, Heart, ShieldCheck, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060B14] border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: About Portal */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-black text-white">قسم التوجيه الطلابي</h4>
                <p className="text-xs text-amber-400/90">{SCHOOL_INFO.name}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              منصة إرشادية رقمية شاملة تقدم برامج وخدمات التوجيه الطلابي وفق المعايير الوزارية الحديثة لبناء جيل طموح ومعتز بهويته الوطنية.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>الإدارة العامة للتوجيه الطلابي • {SCHOOL_INFO.year}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-amber-500 pr-2">
              أقسام المنصة الإرشادية
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> الرئيسية والتعريف
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> الرؤية والرسالة والقيم
                </a>
              </li>
              <li>
                <a href="#fields" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> مجالات التوجيه الستة
                </a>
              </li>
              <li>
                <a href="#approaches" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> مناهج التوجيه (إنمائي، وقائي، علاجي)
                </a>
              </li>
              <li>
                <a href="#tasks" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> المهام اليومية للموجه الطلابي
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> دليل البرامج والخدمات الـ 12
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs Highlights */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-amber-500 pr-2">
              أبرز البرامج الميدانية
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>البرنامج التوجيهي والأسبوع التمهيدي</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>برنامج تعزيز السلوك الإيجابي</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span>برنامج خفض العنف بالمدارس (رفق)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span>التوجيه المهني والتعليمي والمسارات</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>رعاية متكرري الغياب والمتأخرين</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>الاستخدام الآمن للإنترنت والأمن السيبراني</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Counselor Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-amber-500 pr-2">
              بيانات التواصل الإرشادي
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-white">الموجه الطلابي:</div>
              <div className="text-amber-400 font-semibold">{SCHOOL_INFO.counselor.name}</div>
              
              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="dir-ltr">{SCHOOL_INFO.counselor.displayPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>الأحد - الخميس (7:00 ص - 1:30 م)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>مقر التوجيه الطلابي بالمدرسة</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-right">
            © {SCHOOL_INFO.year} • خطة برامج وخدمات التوجيه الطلابي – {SCHOOL_INFO.name} • وزارة التعليم بالمملكة العربية السعودية
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 hover:border-amber-500/40 transition flex items-center gap-1.5"
            title="العودة لأعلى الصفحة"
          >
            <span>أعلى الصفحة</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
