import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactAdvisors } from "@/components/home/ContactAdvisors";
import { Faq } from "@/components/site/Faq";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Finprov — Talk to a Learning Advisor" },
      { name: "description", content: "Reach Finprov's learning advisors by phone, WhatsApp, or the enquiry form to find the right program for you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-24 sm:pt-28">
        <ContactAdvisors />
      </main>

      <Faq />
      <SiteFooter />
    </div>
  );
}
