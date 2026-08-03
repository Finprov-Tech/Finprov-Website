import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy: Certification Courses | Finprov Learning" },
      {
        name: "description",
        content:
          "Privacy Policy for Finprov Learning Private Limited. Read about how we collect, use, store, and protect your personal information.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const container = "mx-auto w-full max-w-[860px] px-6 md:px-8";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 border-t border-border pt-8">
      <h2 className="text-xl font-bold text-navy">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-body">{children}</div>
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-14 text-white">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-cta/20 blur-3xl" />
        <div className={`${container} relative`}>
          <p className="text-xs font-bold uppercase tracking-widest text-gold">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className={container}>

          <Section title="Who we are">
            <p>
              Finprov (“https://finprov.com/”). Owned by Finprov Learning Private Limited (”Company”), a company duly registered and incorporated under the Companies Act, 2013, Located at Kochi, Kerala, India. We maintain this Website as a service to our customers. By using our website, you are agreeing to comply with and be bound by the following Terms of Use. Please review the following Terms of Use carefully. If you do not agree to any of these terms, you should not use, review, or subscribe to the website, information and educational services we provide respectively.
            </p>
          </Section>

          <Section title="General">
            <p>
              You agree to the terms and conditions outlined in this Terms of Use (“Terms of Use”) with respect to https://finprov.com/ (“Finprov Learning”/”Website”)”. These Terms of Use constitute the entire and only agreement between us and you and supersedes all prior or contemporaneous agreements, representations, warranties and understandings with respect to the Website, the content, products or services provided by or through the Website. This Terms of Use may be amended from time to time by us without specific notice to you. The latest Terms of Use will be posted on the Website, and you should review these Terms of Use prior to using the Website at each instance.
            </p>
            <p>
              Your use of the Website and its services are governed by the following Terms of Use as applicable to the Website and products including the applicable policies which are incorporated herein by way of reference. If you transact on the Website, you shall be subject to the policies that are applicable to the Website for such transactions. By mere use of the Website, you shall be contracting with the Company and these terms and conditions including the policies constitute your binding obligations, with the Company.
            </p>
          </Section>

          <Section title="Information collected by Finprov">
            <p>
              We collect the content, communications and other information you provide when you use our Products, including when you sign up for an account, create or share content and message or communicate with others. This can include information in or about the content that you provide (e.g. metadata), such as the location of a photo or the date a file was created.
            </p>
          </Section>

          <Section title="Device information">
            <p>
              As described below, we collect information from and about the computers, phones, connected TVs, and other web-connected devices you use that integrate with our products. We combine this information across different devices you use.
            </p>
          </Section>

          <Section title="Information and Data usage">
            <p>
              We use the information that we have to deliver our Products, including personalising features and content and making suggestions for you (such as groups or events that you may be interested in or topics that you may want to follow) on and off our Products. To create personalised Products that are unique and relevant to you, we use your purchased courses, preferences, interests and activities based on the data that we collect and learn from you and others (including any data with special protections you choose to provide); how you use and interact with our Courses; and the people, places or things that you’re connected to and interested in on and off our Products.
            </p>
          </Section>

          <Section title="User Data and Information deletion">
            <p>
              We provide you with the ability to access, rectify, port and delete your data.
            </p>
            <p>
              We store data until it is no longer necessary to provide our services and Products or until your account is deleted – whichever comes first. This is a case-by-case determination that depends on the nature of the data, why it is collected and processed, and relevant legal or operational retention needs.
            </p>
            <p>
              When you delete your account, we delete things that you have posted, such as your personal information, photos and learning updates, and you won’t be able to recover that information later. Information that others have shared about you isn’t part of your account and won’t be deleted. If you don’t want to temporarily delete your account but want to stop using the Products temporarily, you can deactivate your account. To delete or deactivate your account, please mail to{" "}
              <a href="mailto:tech@finprov.com" className="font-semibold text-cta hover:underline">
                tech@finprov.com
              </a>
            </p>
          </Section>

          <Section title="Privacy Policy changes notification">
            <p>
              We’ll notify you before we make changes to this Policy and allow you to review the revised Policy before you choose to continue using our Products.
            </p>
          </Section>

          <Section title="Media">
            <p>
              If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
            </p>
            <p>
              If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
            </p>
            <p>
              When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
            </p>
            <p>
              If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
            </p>
          </Section>

          <Section title="Embedded content from other websites">
            <p>
              Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            </p>
          </Section>

          <Section title="Who we share your data with">
            <p>
              If you request a password reset, your IP address will be included in the reset email.
            </p>
          </Section>

          <Section title="Payments">
            <p>
              You represent and warrant that if you are subscribing to the Experiences from us that:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>any credit, debit, net banking, cheque or any other mode of transfer information you supply is true and complete,</li>
              <li>charges incurred by you will be honoured by your credit card/debit card/banking company, and</li>
              <li>you will pay the charges incurred by you at the posted prices, including any applicable taxes.</li>
            </ul>
            <p>
              While availing of the payment method/s available on the Website, we will not be responsible or assume any liability, whatsoever in respect of any loss or damage arising directly or indirectly to You due to Lack of authorization for any transaction/s, or Exceeding the preset limit mutually agreed by You and between “Bank/s”, or Any payment issues arising out of the transaction, or Decline of transaction for any other reasons.
            </p>
            <p>
              All payments made against the products/services on the Website by you shall be compulsorily in Indian Rupees acceptable in the Republic of India. The website will not facilitate transactions with respect to any other form of currency with respect to the purchases made on the Website.
            </p>
            <p>
              Transactions, Transaction Price and all commercial terms such as Delivery, Dispatch of products and/or services are as per principal to principal bipartite contractual obligations between Subscriber and the Company and payment facility is merely used to facilitate the completion of the Transaction. Use of the payment facility shall not render the Company liable or responsible for the non-delivery, non-receipt, non-payment, damage, breach of representations and warranties, or warranty services or fraud as regards the products and /or services listed on the Website.
            </p>
            <p>
              Access to this Website is monitored. The requesting URLs, the machine originating the request, and the time of the request are logged for access statistics and security purposes. Use of this Website constitutes consent to such monitoring. This Website may be unavailable from time to time due to mechanical, telecommunication, software, hardware and third-party vendor failures. The company cannot predict or control when such downtime may occur and cannot control the duration of such downtime.
            </p>
          </Section>

          <Section title="Payment & Refund Policy">
            <p>
              We have a no Refund Policy – we do not refund any money in respect of courses that are purchased from us.
            </p>
            <p>
              If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>
          </Section>

          <Section title="Where we send your data">
            <p>
              Visitor comments may be checked through an automated spam detection service.
            </p>
          </Section>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
