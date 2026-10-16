import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/guidanceData';
import { 
  GraduationCap, 
  Menu, 
  X, 
  MessageCircle, 
  Printer, 
  Compass, 
  Layers, 
  CheckCircle, 
  Clock
} from 'lucide-react';

interface NavbarProps {
  onOpenPrint: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrint, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#vision', label: 'الرؤية والرسالة' },
    { href: '#fields', label: 'المجالات' },
    { href: '#approaches', label: 'المناهج' },
    { href: '#tasks', label: 'المهام اليومية' },
    { href: '#programs', label: 'البرامج والخدمات' },
    { href: '#contact', label: 'التواصل الإرشادي' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A1120]/95 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-amber-500/20 py-2.5' 
          : 'bg-gradient-to-b from-[#0A1120] to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & School Identification */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0A1120] rounded-[10px] flex items-center justify-center">
                <Compass className="w-6 h-6 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  {SCHOOL_INFO.year}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline-block">
                  {SCHOOL_INFO.name}
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
                برامج التوجيه الطلابي
              </h1>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-amber-400 bg-amber-500/10 font-bold border border-amber-500/20'
                    : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="print-nav-btn"
              onClick={onOpenPrint}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-amber-500/30 transition-all flex items-center gap-1.5 shadow-sm"
              title="طباعة أو تصدير الخطة التنفيذية"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>طباعة الخطة</span>
            </button>

            <a
              id="whatsapp-nav-btn"
              href={`https://wa.me/${SCHOOL_INFO.counselor.phone}?text=${encodeURIComponent('السلام عليكم ورحمة الله وبركاته، تحية طيبة للموجه الطلابي أ. عبدالهادي المحسن. أرغب في الاستفسار عن برامج التوجيه الطلابي.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 flex items-center gap-1.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>واتساب الموجه</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700/60"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#0C1527] border-b border-amber-500/20 shadow-2xl px-5 py-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-amber-500/10 hover:text-amber-400 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-500 text-xs">←</span>
              </a>
            ))}
            
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrint();
                }}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-700"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>طباعة وتصدير الخطة الكاملة</span>
              </button>
              <a
                href={`https://wa.me/${SCHOOL_INFO.counselor.phone}?text=${encodeURIComponent('السلام عليكم ورحمة الله وبركاته، أستاذ عبدالهادي المحسن الموجه الطلابي بمدرسة الجشة المتوسطة.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>تواصل مباشر عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
