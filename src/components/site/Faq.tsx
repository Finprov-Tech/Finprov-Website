import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/data/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateFaqSchema } from "@/lib/seoSchemas";

export function Faq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you're probably wondering before you enquire.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const faqSchema = generateFaqSchema(faqs.map((f) => [f.q, f.a]));

  return (
    <section className="section-ambient py-10">
      <JsonLd data={faqSchema} />
      <div className="mx-auto w-full max-w-[800px] px-6 md:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
          <p className="mt-3 text-text-body">{subtitle}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="glass gloss-soft rounded-2xl border-b-0 px-5">
                <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-text-body">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
