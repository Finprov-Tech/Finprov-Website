import { createFileRoute } from "@tanstack/react-router";
import { getImgSrc } from "@/lib/utils";
import { useState } from "react";
import { Star, Play, X, Quote, Video, Image, Plus, CheckCircle2, MessageSquare } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { studentTestimonials, StudentTestimonial } from "@/data/studentTestimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Student Testimonials & Video Reviews | Finprov Learning" },
      {
        name: "description",
        content:
          "Hear what our students have to say about Finprov learning! Video reviews, practical experiences, and career success stories.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const container = "mx-auto w-full max-w-[1240px] px-6 md:px-8";

function TestimonialsPage() {
  const [filter, setFilter] = useState<"All" | "Video Reviews" | "Text Reviews">("All");
  const [selectedVideo, setSelectedVideo] = useState<StudentTestimonial | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Custom user input state for submit review
  const [newReview, setNewReview] = useState({
    name: "",
    program: "",
    quote: "",
    photoUrl: "",
    videoUrl: "",
  });

  const [testimonialsList, setTestimonialsList] = useState<StudentTestimonial[]>(studentTestimonials);

  const filteredItems = testimonialsList.filter((item) => {
    if (filter === "Video Reviews") return item.type === "video";
    if (filter === "Text Reviews") return item.type === "text";
    return true;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.program) return;

    const isVideo = !!newReview.videoUrl.trim();
    const created: StudentTestimonial = {
      id: `custom-${Date.now()}`,
      name: newReview.name,
      program: newReview.program,
      rating: 5,
      type: isVideo ? "video" : "text",
      quote: newReview.quote,
      photoUrl: newReview.photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      videoUrl: newReview.videoUrl,
      videoThumbnail: isVideo
        ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
        : undefined,
      badge: isVideo ? "Video Review" : undefined,
    };

    setTestimonialsList([created, ...testimonialsList]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setShowSubmitModal(false);
      setNewReview({ name: "", program: "", quote: "", photoUrl: "", videoUrl: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Header matching screenshot exact text */}
      <section className="relative overflow-hidden bg-navy py-16 text-white">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-teal/20 blur-3xl animate-blob" />
        
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                <MessageSquare className="h-4 w-4" /> Learner Reviews
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl leading-tight">
                Hear What Our Students Have To Say About Us!
              </h1>
            </div>
            <div>
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                Our students, trained through our job oriented courses, are chosen by leading companies, with many working across India and abroad.
              </p>

              <button
                onClick={() => setShowSubmitModal(true)}
                className="mt-6 btn-gloss inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-navy shadow-lg shadow-gold/20 transition-all hover:bg-gold-light"
              >
                <Plus className="h-4 w-4" /> Share Your Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content Grid */}
      <section className="py-12">
        <div className={container}>
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex flex-wrap gap-2">
              {(["All", "Video Reviews", "Text Reviews"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                    filter === tab
                      ? "bg-navy text-white shadow-md"
                      : "frost-light text-text-body hover:text-navy"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <span className="text-xs font-semibold text-text-body/70">
              Showing {filteredItems.length} student reviews
            </span>
          </div>

          {/* Testimonial Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {item.type === "video" ? (
                  /* Video Card */
                  <div>
                    <div className="relative overflow-hidden rounded-xl bg-navy aspect-[4/5]">
                      <img
                        src={getImgSrc(item.videoThumbnail)}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                      
                      {/* Play Button */}
                      <button
                        onClick={() => setSelectedVideo(item)}
                        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald text-white shadow-xl shadow-emerald/40 transition-transform group-hover:scale-110"
                      >
                        <Play className="h-7 w-7 fill-white translate-x-0.5" />
                      </button>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="inline-block rounded-full bg-gold/90 px-3 py-1 text-[10px] font-extrabold uppercase text-navy">
                          {item.badge || "Video Review"}
                        </span>
                        <h3 className="mt-2 text-lg font-bold text-white">{item.name}</h3>
                        <p className="text-xs text-white/80">{item.program}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Text Card matching real site card layout */
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="mt-4 text-sm leading-relaxed text-text-body">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Student Info */}
                    <div className="mt-6 flex items-center gap-3.5 border-t border-border/60 pt-4">
                      {item.photoUrl ? (
                        <img
                          src={getImgSrc(item.photoUrl)}
                          alt={item.name}
                          className="h-11 w-11 rounded-full object-cover ring-2 ring-emerald/30"
                        />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                          {item.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-navy">{item.name}</h4>
                        <p className="text-xs text-text-body/70">{item.program}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.name}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-navy p-4 text-white">
              <h3 className="font-bold text-lg">{selectedVideo.name}</h3>
              <p className="text-xs text-white/70">{selectedVideo.program}</p>
            </div>
          </div>
        </div>
      )}

      {/* Submit Review Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute right-4 top-4 text-text-body/60 hover:text-navy"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-bold text-navy">Share Your Finprov Experience</h2>
            <p className="mt-1 text-xs text-text-body">
              Provide your review, image URL, or video testimonial link!
            </p>

            {submittedSuccess ? (
              <div className="my-8 rounded-xl bg-emerald/10 p-6 text-center text-emerald">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald" />
                <h3 className="mt-2 font-bold">Review Added Successfully!</h3>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-navy">Your Name *</label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Aswathy Krishna"
                    className="mt-1 w-full rounded-xl border border-border px-3.5 py-2.5 text-sm focus:border-emerald focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy">Course / Program *</label>
                  <input
                    type="text"
                    value={newReview.program}
                    onChange={(e) => setNewReview({ ...newReview, program: e.target.value })}
                    placeholder="e.g. SAP FICO / PGDIFA / Digital Marketing"
                    className="mt-1 w-full rounded-xl border border-border px-3.5 py-2.5 text-sm focus:border-emerald focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy">Written Review / Quote</label>
                  <textarea
                    rows={3}
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    placeholder="Describe your learning experience..."
                    className="mt-1 w-full rounded-xl border border-border px-3.5 py-2.5 text-sm focus:border-emerald focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy">Photo Image URL (Optional)</label>
                  <input
                    type="url"
                    value={newReview.photoUrl}
                    onChange={(e) => setNewReview({ ...newReview, photoUrl: e.target.value })}
                    placeholder="https://..."
                    className="mt-1 w-full rounded-xl border border-border px-3.5 py-2.5 text-sm focus:border-emerald focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy">Video Embed URL (Optional for Video Review)</label>
                  <input
                    type="url"
                    value={newReview.videoUrl}
                    onChange={(e) => setNewReview({ ...newReview, videoUrl: e.target.value })}
                    placeholder="https://www.youtube.com/embed/..."
                    className="mt-1 w-full rounded-xl border border-border px-3.5 py-2.5 text-sm focus:border-emerald focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="rounded-xl border border-border px-5 py-2.5 text-xs font-bold text-text-body hover:bg-background"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-gloss rounded-xl bg-emerald px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald/20"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
