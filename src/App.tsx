import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionMissionValues } from './components/VisionMissionValues';
import { GuidanceFieldsSection } from './components/GuidanceFieldsSection';
import { GuidanceApproachesSection } from './components/GuidanceApproachesSection';
import { DailyTasksSection } from './components/DailyTasksSection';
import { ProgramsDirectory } from './components/ProgramsDirectory';
import { ProgramModal } from './components/ProgramModal';
import { WhatsAppConsultation } from './components/WhatsAppConsultation';
import { PrintablePlan } from './components/PrintablePlan';
import { Footer } from './components/Footer';
import { GUIDANCE_PROGRAMS, SCHOOL_INFO } from './data/guidanceData';
import { GuidanceProgram, ApproachType, FieldType } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApproach, setSelectedApproach] = useState<ApproachType | 'ALL'>('ALL');
  const [selectedField, setSelectedField] = useState<FieldType | 'ALL'>('ALL');
  const [selectedProgramForModal, setSelectedProgramForModal] = useState<GuidanceProgram | null>(null);
  const [inquiryProgramTitle, setInquiryProgramTitle] = useState('');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'vision', 'fields', 'approaches', 'tasks', 'programs', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const handleSelectField = (field: FieldType) => {
    if (selectedField === field) {
      setSelectedField('ALL');
    } else {
      setSelectedField(field);
      handleScrollToPrograms();
    }
  };

  const handleSelectApproach = (approach: ApproachType) => {
    if (selectedApproach === approach) {
      setSelectedApproach('ALL');
    } else {
      setSelectedApproach(approach);
      handleScrollToPrograms();
    }
  };

  const handleInquireWhatsApp = (programTitle: string) => {
    setInquiryProgramTitle(programTitle);
    const target = document.getElementById('contact');
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-['Tajawal',sans-serif] relative selection:bg-amber-500 selection:text-white">
      
      {/* Sticky Luxury Navbar */}
      <Navbar 
        onOpenPrint={() => setIsPrintModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Banner with live search & counselor badge */}
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onExploreClick={handleScrollToPrograms}
        totalPrograms={GUIDANCE_PROGRAMS.length}
      />

      {/* Vision, Mission, and Values Section */}
      <VisionMissionValues />

      {/* Guidance Fields (6 fields) with interactive filter */}
      <GuidanceFieldsSection 
        onSelectField={handleSelectField}
        selectedField={selectedField}
      />

      {/* Guidance Approaches (3 approaches: الإنمائي، الوقائي، العلاجي) */}
      <GuidanceApproachesSection 
        onSelectApproach={handleSelectApproach}
        selectedApproach={selectedApproach}
      />

      {/* Daily Tasks of Student Counselor */}
      <DailyTasksSection />

      {/* Main Programs Directory (All 12 Programs with filters and view modes) */}
      <ProgramsDirectory 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedApproach={selectedApproach}
        setSelectedApproach={setSelectedApproach}
        selectedField={selectedField}
        setSelectedField={setSelectedField}
        onSelectProgram={(p) => setSelectedProgramForModal(p)}
        onInquireWhatsApp={handleInquireWhatsApp}
      />

      {/* WhatsApp Interactive Consultation Section */}
      <WhatsAppConsultation 
        initialProgram={inquiryProgramTitle}
      />

      {/* Footer */}
      <Footer />

      {/* Program Detail Modal */}
      {selectedProgramForModal && (
        <ProgramModal 
          program={selectedProgramForModal}
          onClose={() => setSelectedProgramForModal(null)}
          onInquireWhatsApp={(title) => {
            setSelectedProgramForModal(null);
            handleInquireWhatsApp(title);
          }}
        />
      )}

      {/* Printable Master Plan Modal */}
      {isPrintModalOpen && (
        <PrintablePlan 
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}

    </div>
  );
}
