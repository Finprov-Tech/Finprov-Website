import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EnquireModal } from "@/components/site/EnquireModal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Faq } from "@/components/site/Faq";
import { HomeHero } from "@/components/home/HomeHero";
import { AcademiesStrip } from "@/components/home/AcademiesStrip";
import { CourseExplorer } from "@/components/home/CourseExplorer";
import { ProgramQuiz } from "@/components/home/ProgramQuiz";
import { AboutBand } from "@/components/home/AboutBand";
import { PlacementHighlights } from "@/components/home/PlacementHighlights";
import { PolaroidStories } from "@/components/home/PolaroidStories";
import { StudentTestimonialsSection } from "@/components/home/StudentTestimonialsSection";
import { LearningToEarning } from "@/components/home/LearningToEarning";
import { ToolsMarquee } from "@/components/home/ToolsMarquee";
import { MentorsBand } from "@/components/home/MentorsBand";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { LifeAtFinprov } from "@/components/home/LifeAtFinprov";
import { scrollToSection } from "@/lib/scroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/seoSchemas";

export const Route = createFileRoute("/")({
  component: Index,
});

const tickerItems = [
  "Admissions Open 2026–27",
  "100% Placement Assistance",
  "EMI Options Available",
  "Kochi · Kozhikode · Trivandrum · Bengaluru · Online",
  "4,500+ Careers Launched",
];

function AnnouncementTicker() {
  return (
    <div className="relative overflow-hidden border-y border-white/40 bg-gold py-3 shadow-[inset_0_1px_0_rgba(255,255,255,.5),inset_0_-1px_0_rgba(120,70,0,.15)]">
      <div className="flex w-max animate-marquee-reverse items-center whitespace-nowrap">
        {[...Array(2)].map((_, r) => (
          <div key={r} className="flex items-center text-sm font-bold tracking-wide text-navy">
            {tickerItems.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-5">{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-navy/35" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroToPrograms({ onEnquire }: { onEnquire: (course?: string) => void }) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [backdropHeight, setBackdropHeight] = useState(0);

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop) return;

    const updateHeight = () => setBackdropHeight(backdrop.getBoundingClientRect().height);
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(backdrop);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="relative z-10 isolate">
      <div
        ref={backdropRef}
        className="sticky z-0 overflow-hidden bg-emerald"
        style={backdropHeight ? { top: `calc(100dvh - ${backdropHeight}px)` } : undefined}
      >
        <HomeHero onEnquire={() => onEnquire()} />
        <AnnouncementTicker />
        <AcademiesStrip />
      </div>

      <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-[0_-30px_90px_rgba(0,0,0,0.45),0_30px_90px_rgba(0,0,0,0.32)] sm:rounded-[3.5rem] lg:rounded-[4rem]">
        <CourseExplorer onEnquire={onEnquire} />
        <ProgramQuiz onEnquire={onEnquire} />
        <AboutBand />
      </div>
    </div>
  );
}

function ProgramsExitToPlacement() {
  return (
    <div className="relative -mt-[100dvh] h-[200dvh] bg-emerald">
      <div className="sticky top-0 z-0 h-screen overflow-hidden bg-emerald">
        <PlacementHighlights />
      </div>
    </div>
  );
}

function Index() {
  const location = useLocation();
  const [modal, setModal] = useState<{ open: boolean; course?: string }>({ open: false });
  const openModal = (course?: string) => setModal({ open: true, course });

  useEffect(() => {
    if (!location.hash) return;
    const target = location.hash.replace("#", "");
    const frame = window.requestAnimationFrame(() => scrollToSection(target));
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={organizationSchema} />
      <ScrollProgress />
      <SiteHeader />

      <HeroToPrograms onEnquire={openModal} />

      <ProgramsExitToPlacement />
      <StudentTestimonialsSection />
      <PolaroidStories />
      <LearningToEarning />
      <ToolsMarquee />
      <MentorsBand onEnquire={() => openModal()} />
      <WhyChooseUs />
      <LifeAtFinprov />
      <Faq />

      <SiteFooter />
      <EnquireModal open={modal.open} onClose={() => setModal({ open: false })} defaultCourse={modal.course} />
    </div>
  );
}
