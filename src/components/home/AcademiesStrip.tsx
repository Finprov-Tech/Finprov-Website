import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { accreditations, hiringCompanies } from "@/data/site";

function ChipRow({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max items-center gap-4 py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee-slow"}`}>
        {[...Array(2)].map((_, r) => (
          <div key={r} className="flex items-center gap-4 pr-4">
            {items.map((name) => (
              <span
                key={`${r}-${name}`}
                className="frost inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-5 py-3 text-sm font-bold tracking-tight text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <ShieldCheck className="h-4 w-4 text-mint" />
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AcademiesStrip() {
  return (
    <section className="relative overflow-hidden bg-emerald py-8 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-60" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-mint/15 blur-3xl animate-blob" />
      <div className="relative">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The credentials behind your resume</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            Our curriculum is built around certifications and platforms recruiters recognise — and backed by the
            companies that hire our learners.
          </p>
        </Reveal>
        <div className="mt-10">
          <ChipRow items={accreditations} />
        </div>
      </div>
    </section>
  );
}
