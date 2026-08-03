import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, GraduationCap, Phone, Sparkles, User, X } from "lucide-react";
import { getImgSrc } from "@/lib/utils";
import finprovMark from "@/assets/finprov-mark.jpeg";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

const ease = [0.16, 1, 0.3, 1] as const;

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.18 + i * 0.07, duration: 0.4, ease } }),
};

const inputCls =
  "w-full rounded-xl border border-border bg-bg-light/60 py-3 pl-11 pr-4 text-sm text-navy placeholder:text-text-body/50 outline-none transition-all focus:border-cta focus:bg-white focus:ring-4 focus:ring-cta/10";

export function EnquireModal({
  open,
  onClose,
  defaultCourse,
}: {
  open: boolean;
  onClose: () => void;
  defaultCourse?: string;
}) {
  const [sent, setSent] = useState(false);

  const close = useCallback(() => {
    onClose();
    window.setTimeout(() => setSent(false), 300);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-md"
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="glass-solid relative max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto overflow-x-hidden rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.32, ease }}
          >
            {/* Header band */}
            <div className="relative overflow-hidden bg-gradient-to-br from-navy via-[oklch(0.28_0.09_252)] to-emerald px-7 pb-6 pt-7 text-white">
              <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-60" />
              <div className="pointer-events-none absolute -right-10 -bottom-14 h-32 w-32 rounded-full bg-mint/20 blur-2xl" />

              {/* Close Button with clear click target */}
              <button
                onClick={close}
                aria-label="Close modal"
                className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white shadow-md transition-all hover:scale-110 hover:bg-white/35 active:scale-95"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative flex items-center gap-3">
                <span className="h-11 w-11 overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img src={getImgSrc(finprovMark)} alt="Finprov" className="h-full w-full object-cover" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">Get Free Counselling</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-mint">
                    <Sparkles className="h-3.5 w-3.5" /> Call back within 30 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7">
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants} className="relative">
                      <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-body/50" />
                      <input required placeholder="Full Name" className={inputCls} />
                    </motion.div>
                    <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants} className="relative">
                      <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-body/50" />
                      <input required type="tel" placeholder="Phone Number" className={inputCls} />
                    </motion.div>
                    <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants} className="relative">
                      <GraduationCap className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-body/50" />
                      <select required defaultValue={defaultCourse ?? ""} className={`${inputCls} appearance-none`}>
                        <option value="" disabled>
                          Select Program
                        </option>
                        {courses.map((c) => (
                          <option key={c.slug}>{c.title}</option>
                        ))}
                      </select>
                    </motion.div>
                    <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants}>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-gloss relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cta via-teal to-cta py-3.5 font-semibold text-white shadow-lg shadow-cta/25 animate-gradient-x"
                      >
                        <span className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/25 blur-md animate-shine" />
                        Request Call Back
                      </motion.button>
                    </motion.div>
                    <motion.p custom={4} initial="hidden" animate="visible" variants={fieldVariants} className="text-center text-xs text-text-body/70">
                      Prefer WhatsApp?{" "}
                      <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-cta underline underline-offset-2">
                        Chat with us instantly
                      </a>
                    </motion.p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <motion.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.12, type: "spring", stiffness: 260, damping: 15 }}>
                      <CheckCircle2 className="h-16 w-16 text-teal" />
                    </motion.div>
                    <h4 className="mt-4 text-xl font-bold text-navy">Request received</h4>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-body">
                      A learning advisor will call you within 30 minutes during working hours.
                    </p>
                    <button onClick={close} className="mt-6 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
