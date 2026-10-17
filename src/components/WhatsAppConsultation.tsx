import React, { useState } from 'react';
import { SCHOOL_INFO, GUIDANCE_PROGRAMS } from '../data/guidanceData';
import { 
  MessageCircle, 
  Send, 
  Phone, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  User, 
  HelpCircle
} from 'lucide-react';

interface WhatsAppConsultationProps {
  initialProgram?: string;
}

export const WhatsAppConsultation: React.FC<WhatsAppConsultationProps> = ({
  initialProgram = ''
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('ولي أمر الطالب');
  const [grade, setGrade] = useState('الصف الأول متوسط');
  const [selectedProgram, setSelectedProgram] = useState(initialProgram);
  const [requestType, setRequestType] = useState('طلب استشارة إرشادية خاصة');
  const [message, setMessage] = useState('');

  // Update if prop changes
  React.useEffect(() => {
    if (initialProgram) {
      setSelectedProgram(initialProgram);
    }
  }, [initialProgram]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const counselorPhone = SCHOOL_INFO.counselor.phone;
    
    // Construct professional formatted Arabic WhatsApp message
    const formattedMessage = `السلام عليكم ورحمة الله وبركاته
سعادة الموجه الطلابي: أ. عبدالهادي المحسن المحترم
(مدرسة الجشة المتوسطة)

تحية طيبة وبعد، أود التواصل معكم بخصوص:
👤 الاسم: ${name.trim() || 'ولي أمر طالب'}
🏷️ الصفة: ${role}
📚 الصف الدراسي: ${grade}
📋 نوع الطلب: ${requestType}
📌 البرنامج المعني: ${selectedProgram || 'الخدمات الإرشادية العامة'}

💬 تفاصيل الرسالة والاستفسار:
${message.trim() || 'أرجو التكرم بالاطلاع والتواصل معي لترتيب الاستشارة.'}

شاكراً ومقدراً جهودكم الكريمة في خدمة أبنائنا الطلاب.`;

    const whatsappUrl = `https://wa.me/${counselorPhone}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqs = [
    {
      q: 'هل الجلسات والاستشارات الإرشادية سرية تماماً؟',
      a: 'نعم بكل تأكيد، السرية المهنية والأمانة الأخلاقية هي الركيزة الأولى لعمل الموجه الطلابي بموجب اللائحة الوزارية، ولا يتم إفشاء أي معلومات إلا بموافقة نظامية.'
    },
    {
      q: 'ما هي الأوقات المناسبة لزيارة الموجه الطلابي بالمدرسة؟',
      a: 'يتم استقبال أولياء الأمور الكرام طوال أيام الأسبوع الدراسي من الساعة 7:30 صباحاً وحتى 1:00 ظهراً، ويُفضل التنسيق المسبق عبر واتساب لتحديد الموعد بدقة.'
    },
    {
      q: 'كيف يساهم الموجه الطلابي في رعاية المتأخرين دراسياً؟',
      a: 'يقوم الموجه بتشخيص الأسباب الفردية، وتنسيق الخطط العلاجية مع معلمي المواد، وتوفير حصص الدعم وتنظيم الوقت ومتابعة التحسن أسبوعياً.'
    },
    {
      q: 'ما دور التوجيه في الاختبارات الوطنية (نافس)؟',
      a: 'تهيئة الطلاب نفسياً ومعنوياً، وخفض قلق الاختبارات، وتوعية الأسر بأهمية المشاركة الفعالة لرفع جودة مخرجات التعليم.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>بوابة الاستشارات والتواصل الإرشادي المباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            تواصل مع <span className="text-emerald-700">الموجه الطلابي</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            يسعد الموجه الطلابي الأستاذ عبدالهادي بن محمد المحسن بالإجابة على استفساراتكم وتقديم الدعم التربوي والنفسي لأبنائنا الطلاب
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Info Column: Counselor Details & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Counselor Identity Card */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-sm">
                  <div className="w-full h-full bg-amber-50 rounded-[14px] flex items-center justify-center text-amber-700">
                    <User className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 inline-block mb-1">
                    الموجه الطلابي
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {SCHOOL_INFO.counselor.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{SCHOOL_INFO.name} • {SCHOOL_INFO.stage}</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">رقم الواتساب والاتصال الرسمي:</p>
                    <a 
                      href={`https://wa.me/${SCHOOL_INFO.counselor.phone}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-slate-900 hover:text-amber-700 transition dir-ltr inline-block"
                    >
                      {SCHOOL_INFO.counselor.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">أوقات العمل واستقبال أولياء الأمور:</p>
                    <p className="font-semibold text-slate-800">{SCHOOL_INFO.counselor.officeHours}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">مقر المكتب الإرشادي:</p>
                    <p className="font-semibold text-slate-800">{SCHOOL_INFO.counselor.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">السرية والأمانة:</p>
                    <p className="font-semibold text-slate-800">جلسات خاصة وسرية تامة 100%</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.counselor.phone}?text=${encodeURIComponent('السلام عليكم ورحمة الله وبركاته، أستاذ عبدالهادي المحسن الموجه الطلابي بمدرسة الجشة المتوسطة.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>فتح محادثة واتساب فورية</span>
                </a>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 shadow-sm">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>الأسئلة الشائعة لأولياء الأمور</span>
              </h4>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <p className="text-xs font-bold text-amber-900 mb-1">{faq.q}</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right / Form Column: Smart Structured WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  نموذج صياغة الاستشارة الإرشادية
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                  املأ البيانات أدناه لإنشاء رسالة استشارة رسمية ومنسقة وإرسالها فوراً إلى واتساب الموجه الطلابي
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name and Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      الاسم الكريم (اختياري / للتعريف)
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: محمد بن فهد الخالدي"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-2xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      صفة المتصل
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-2xs font-medium"
                    >
                      <option value="ولي أمر الطالب">ولي أمر الطالب</option>
                      <option value="طالب بالمدرسة">طالب بالمدرسة</option>
                      <option value="معلم بالمدرسة">معلم بالمدرسة</option>
                      <option value="زائر أو مهتم">زائر أو مهتم</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Grade and Request Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      الصف الدراسي المعني
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-2xs font-medium"
                    >
                      <option value="الصف الأول متوسط">الصف الأول متوسط</option>
                      <option value="الصف الثاني متوسط">الصف الثاني متوسط</option>
                      <option value="الصف الثالث متوسط">الصف الثالث متوسط</option>
                      <option value="المستجدين بالمدرسة">المستجدين بالمدرسة</option>
                      <option value="عام (جميع المراحل)">عام (جميع المراحل)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      نوع الطلب الإرشادي
                    </label>
                    <select
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-2xs font-medium"
                    >
                      <option value="طلب استشارة إرشادية خاصة">طلب استشارة إرشادية خاصة</option>
                      <option value="حجز موعد مقابلة حضورية">حجز موعد مقابلة حضورية</option>
                      <option value="متابعة مستوى دراسي أو تعثر">متابعة مستوى دراسي أو تعثر</option>
                      <option value="متابعة انتظام وحالات غياب">متابعة انتظام وحالات غياب</option>
                      <option value="استفسار عن برنامج تخصصي">استفسار عن برنامج تخصصي</option>
                      <option value="رعاية موهبة أو تفوق">رعاية موهبة أو تفوق</option>
                      <option value="ظروف أسرية أو صحية خاصة">ظروف أسرية أو صحية خاصة</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Program Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    البرنامج المعني (اختر برنامجاً محدداً أو استشارة عامة)
                  </label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-2xs font-medium"
                  >
                    <option value="">-- استشارة إرشادية عامة / غير محدد --</option>
                    {GUIDANCE_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        برنامج {prog.id}: {prog.title} ({prog.categoryTag})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Message Content */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    نص الاستفسار أو الملاحظة الإرشادية
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب هنا تفاصيل استفسارك أو الحالة التي ترغب في استشارة الموجه الطلابي بشأنها..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-2xs resize-none leading-relaxed font-medium"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm sm:text-base transition shadow-sm active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>إرسال الاستفسار عبر واتساب الموجه الطلابي</span>
                    <Send className="w-4 h-4 mr-1 rotate-180" />
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
                    🔒 جميع الرسائل والبيانات الواردة تعامل بسرية وأمانة تامة وفق الأنظمة الإرشادية
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
