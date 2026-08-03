import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { getImgSrc } from "@/lib/utils";
import finprovWordmark from "@/assets/finprov-wordmark.jpeg";
import { site } from "@/data/site";

const container = "mx-auto w-full max-w-[1320px] px-6 md:px-8 lg:px-12";

const officialLocations = [
  "Kochi, Vytilla HO",
  "Kochi , Vytilla",
  "Ernakulam South",
  "Trivandrum",
  "Manjeri",
  "Pandalam",
  "Alappuzha",
  "Kollam",
  "Kozhikode",
  "Koramangala, Bengaluru",
  "Vijayanagar, Bengaluru",
];

const columns = [
  {
    title: "Programs",
    links: [
      { label: "All Courses", to: "/courses" },
      { label: "Finance", to: "/courses" },
      { label: "Analytics", to: "/courses" },
      { label: "Marketing", to: "/courses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/team" },
      { label: "Online Admission", to: "/admission" },
      { label: "Careers", to: "/careers" },
      { label: "Placements", to: "/placements" },
      { label: "Student Testimonials", to: "/testimonials" },
      { label: "Blog", to: "/blog" },
      { label: "Events & Workshops", to: "/events" },
      { label: "FAQ", to: "/faq" },
      { label: "Certificate Verification", to: "/verify-certificate" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
    ],
  },
] as const;

export function SiteFooter({ onOpenEnquire }: { onOpenEnquire?: () => void } = {}) {
  return (
    <footer className="bg-navy text-white/70">
      <div className="h-1 w-full bg-gradient-to-r from-teal via-cta to-gold animate-gradient-x" />

      <div className={`${container} py-16`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex rounded-xl bg-white px-3 py-2 shadow-lg shadow-black/10 transition-transform duration-300 hover:scale-105">
              <img src={getImgSrc(finprovWordmark)} alt="Finprov" className="h-8 w-auto object-contain" />
            </Link>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed">
              Industry-validated finance, analytics, and marketing programs — built for freshers and working
              professionals ready to accelerate their careers.
            </p>
          </div>

          {/* Programs, Company & Legal */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{col.title}</h4>
              <ul className="mt-3.5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-xs sm:text-sm transition-colors hover:text-gold hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Our Locations List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Our Locations</h4>
            <ul className="mt-3.5 space-y-2 text-xs">
              {officialLocations.map((loc) => (
                <li key={loc}>
                  <Link
                    to="/"
                    hash="centre-map"
                    className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-gold"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-white fill-white" />
                    <span>{loc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Prominent Privacy Policy & Terms Badges */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs sm:text-sm md:flex-row">
          <p className="text-white/80 font-medium">© 2026 Finprov Learning Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/privacy-policy"
              className="rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:border-gold hover:bg-gold hover:text-navy hover:shadow-lg"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:border-gold hover:bg-gold hover:text-navy hover:shadow-lg"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
