import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, BadgeCheck, GraduationCap, MapPin, UsersRound } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { getImgSrc } from "@/lib/utils";
import heroStudent from "@/assets/hero-student.png";
import { Typewriter } from "@/components/motion/Typewriter";
import { Magnetic } from "@/components/motion/Magnetic";
import { siteStats } from "@/data/site";

const container = "mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10 xl:px-14";

export function HomeHero({ onEnquire }: { onEnquire: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    let ctx: gsap.Context | null = null;
    const splits: SplitType[] = [];
    let cancelled = false;

    const build = () => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
          const headlineChars = gsap.utils
            .toArray<HTMLElement>("[data-split-line]")
            .map((el) => {
              const split = new SplitType(el, { types: "words,chars" });
              splits.push(split);
              return (split.chars ?? []) as HTMLElement[];
            });

          const para = section.querySelector<HTMLElement>("[data-hero-para]");
          let paraLines: HTMLElement[] = [];
          if (para) {
            const split = new SplitType(para, { types: "lines" });
            splits.push(split);
            paraLines = (split.lines ?? []) as HTMLElement[];
          }

          const entrance = gsap.timeline({ defaults: { ease: "power4.out" } });
          entrance
            .from("[data-hero-badge]", {
              clipPath: "inset(0 100% 0 0)",
              duration: 0.9,
              ease: "power3.inOut",
            })
            .from(
              headlineChars[0] ?? [],
              { yPercent: 115, stagger: 0.02, duration: 0.85 },
              0.15,
            )
            .from(
              headlineChars[1] ?? [],
              { yPercent: 115, stagger: 0.02, duration: 0.85 },
              0.3,
            )
            .from("[data-hero-type]", { y: 44, opacity: 0, duration: 0.8 }, 0.55)
            .from(
              paraLines,
              { y: 26, opacity: 0, stagger: 0.09, duration: 0.8 },
              0.6,
            )
            .from(
              "[data-hero-ctas] > *",
              { y: 28, opacity: 0, scale: 0.95, stagger: 0.09, duration: 0.7 },
              0.75,
            )
            .from(
              "[data-hero-badges] > *",
              { y: 16, opacity: 0, stagger: 0.06, duration: 0.5 },
              0.95,
            )
            .from(
              "[data-hero-portrait]",
              {
                clipPath: "inset(16% 10% 12% 10% round 2.5rem)",
                scale: 1.08,
                duration: 1.25,
                ease: "power3.inOut",
              },
              0.3,
            )
            .from(
              "[data-hero-chip]",
              { y: 24, opacity: 0, scale: 0.9, stagger: 0.12, duration: 0.6, ease: "back.out(1.6)" },
              1.0,
            );

          gsap
            .timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
              defaults: { ease: "none" },
            })
            .to("[data-hero-copy]", { yPercent: -16, opacity: 0.25 }, 0)
            .to("[data-hero-chip]", { yPercent: -34 }, 0)
            .to("[data-hero-portrait]", { yPercent: 9, scale: 1.06 }, 0)
            .to("[data-hero-bg]", { yPercent: 14 }, 0);

          gsap.to("[data-hero-panel]", {
            scale: 1.05,
            duration: 16,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        });
      }, section);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(build);
    } else {
      build();
    }

    return () => {
      cancelled = true;
      for (const s of splits) s.revert();
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-[oklch(0.24_0.08_252)] to-emerald-deep text-white"
    >
      {/* Background plane */}
      <div data-hero-bg className="pointer-events-none absolute inset-0 will-change-transform">
        <div className="absolute inset-0 bg-grid-lines opacity-70 [mask-image:linear-gradient(180deg,black,transparent_85%)]" />
        <div className="absolute -left-32 top-16 h-[380px] w-[380px] rounded-full bg-cta/20 blur-3xl" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-mint/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />
      </div>

      <div className={`${container} relative grid gap-6 pb-8 pt-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-8 lg:pb-10 lg:pt-8`}>
        {/* Foreground plane */}
        <div data-hero-copy className="flex flex-col justify-center will-change-transform">
          <div
            data-hero-badge
            className="flex flex-wrap items-center gap-3 [will-change:clip-path]"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/35 bg-mint/10 px-3.5 py-1 text-xs font-medium text-mint sm:text-sm">
              <Award className="h-3.5 w-3.5" />
              Founded &amp; led by Chartered Accountants
            </span>
            <Link
              to="/"
              hash="centre-map"
              aria-label="View our centre locations"
              className="hidden items-center gap-1.5 rounded-full text-xs text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:inline-flex sm:text-sm"
            >
              <MapPin className="h-3.5 w-3.5" /> {siteStats.centres} centres · Kerala &amp; Bengaluru
            </Link>
          </div>

          <h1 className="mt-3.5 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[52px]">
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-split-line className="block">Digital-First World.</span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-split-line className="block">Future-Ready</span>
            </span>
            <span
              data-hero-type
              className="relative block h-[1.3em] overflow-hidden whitespace-nowrap leading-[1.12] text-[clamp(1.7rem,7vw,2.1rem)] sm:text-5xl lg:text-[52px]"
            >
              <span className="absolute inset-x-0 top-0">
                <Typewriter
                  words={["Accounting.", "Analytics.", "Marketing.", "Gulf Careers."]}
                  className="bg-gradient-to-r from-mint via-teal to-gold bg-clip-text text-transparent"
                  caretClassName="bg-mint"
                />
              </span>
            </span>
          </h1>

          <p data-hero-para className="mt-3 max-w-[540px] text-xs leading-relaxed text-white/80 sm:text-base">
            Finprov transforms aspiring professionals into industry-ready talent through real workplace
            exposure — {siteStats.coursesOffered}+ programs in accounting, taxation, data analytics, and digital
            marketing, with a curriculum that evolves as fast as the industry does.
          </p>

          <div data-hero-ctas className="mt-5 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link to="/courses">
                <motion.span
                  whileTap={{ scale: 0.98 }}
                  className="btn-gloss group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-e3 transition-shadow duration-200 hover:shadow-e4 sm:text-base"
                >
                  Explore Courses
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-navy text-gold transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </motion.span>
              </Link>
            </Magnetic>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onEnquire}
              className="frost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-colors hover:text-mint sm:text-base"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-mint" />
              Free Consultation
            </motion.button>
          </div>

          <div data-hero-badges className="mt-5 flex flex-wrap gap-2">
            {["100% placement assistance", "7-day free trial", "EMI options"].map((b) => (
              <span
                key={b}
                className="frost inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white/90 sm:text-xs"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-mint" /> {b}
              </span>
            ))}
          </div>
        </div>

        {/* Midground plane */}
        <div className="relative flex items-start justify-center lg:justify-end">
          <div className="relative mt-2 lg:mt-0">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/20 blur-2xl" />

            <div
              data-hero-portrait
              className="relative z-10 w-[min(82vw,380px)] will-change-transform [will-change:transform,clip-path]"
            >
              <div className="absolute inset-x-0 bottom-0 top-[60px] overflow-hidden rounded-[2.2rem] ring-1 ring-white/25">
                <div
                  data-hero-panel
                  className="absolute inset-0 bg-gradient-to-b from-mint via-[oklch(0.62_0.14_245)] to-emerald-deep will-change-transform"
                >
                  <div className="absolute inset-0 bg-grid-lines opacity-50" />
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15 blur-xl" />
                </div>
              </div>
              <img
                src={getImgSrc(heroStudent)}
                alt="Finprov learner ready for a finance career"
                width={450}
                height={450}
                className="relative z-10 w-full object-contain drop-shadow-[0_24px_40px_rgba(3,15,45,0.5)]"
              />
              <div className="glass-dark gloss-soft absolute inset-x-0 bottom-0 z-20 rounded-2xl p-3.5">
                <p className="text-xs sm:text-sm font-bold text-white">Learn directly from practising CAs</p>
                <p className="mt-0.5 text-[11px] sm:text-xs text-white/75">{siteStats.yearsExpertise}+ years of combined industry expertise</p>
              </div>
              <div data-hero-chip className="absolute bottom-28 right-2 z-20 will-change-transform">
                <div className="glass-gloss gloss-soft rounded-2xl px-3.5 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-mint/15 text-mint">
                      <UsersRound className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-none text-white">{siteStats.placements.toLocaleString()}+</div>
                      <div className="mt-1 text-[10px] text-white/70">careers launched</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-hero-chip className="relative left-0 bottom-80 z-20 w-[170px] will-change-transform">
              <div className="glass-gloss gloss-soft rounded-2xl px-3 py-2">
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-0 grid h-7 w-7 place-items-center rounded-full bg-mint/15 text-mint">
                    <GraduationCap className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 text-center">
                    <div className="whitespace-nowrap text-[11px] font-bold text-white">IIT Palakkad iHub</div>
                    <div className="text-[10px] text-white/70">Certified programs</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="scene-vignette" />
      <div className="scene-grain" />
    </section>
  );
}
