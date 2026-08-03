import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions – Finprov" },
      {
        name: "description",
        content:
          "Terms and Conditions governing the use of Finprov Learning platform, programs, and services.",
      },
    ],
  }),
  component: TermsPage,
});

const container = "mx-auto w-full max-w-[860px] px-6 md:px-8";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 border-t border-border pt-8">
      <h2 className="text-lg font-bold text-navy">{title}</h2>
      <div className="mt-3 space-y-4 text-sm leading-relaxed text-text-body">{children}</div>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-14 text-white">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-cta/20 blur-3xl" />
        <div className={`${container} relative`}>
          <p className="text-xs font-bold uppercase tracking-widest text-gold">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className={container}>

          {/* Opening */}
          <h2 className="text-xl font-bold text-navy">Terms and Conditions – Finprov</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-body">
            <p>
              This is a legal and binding agreement between you, the user (referred to as "user" or
              "you") of the Programs, as defined below, and Finprov (referred to as "we", "us" or
              "Finprov") stating the terms that govern your use of the Platform, as defined below.
              The website https://finprov.com/ and Other services (collectively referred to as the
              "Platform") and the information, and other materials contained therein are provided and
              operated by Finprov. Finprov offers curated and specially designed online higher
              education and industry-relevant programs and career assistance services ("Programs").
            </p>
            <p>
              Please review our Terms of Use, Privacy Policy and other policies available on the
              Platform (collectively referred to as the "Terms") that govern the use of the Platform
              and Programs. By accepting these Terms in any manner or accessing the website, you
              consent, agree and undertake to abide, be bound by and adhere to the Terms and if you
              do not agree to these Terms, you are not entitled to avail of/use the Programs and any
              use thereafter shall be unauthorised.
            </p>
            <p>
              Each Program may have a separate set of terms dealing with refunds, deferrals,
              payments, etc. governing such Programs, and our corporate clients may have executed
              separate written agreements with us, which, in the event of a conflict, will supersede
              these Terms to the extent of the conflicting provisions.
            </p>

            <h3 className="pt-2 text-base font-bold text-navy">Terms &amp; Conditions</h3>
            <p>
              Finprov ("https://finprov.com/"). Owned by Finprov Learning Private Limited
              ("Company"), a company duly registered and incorporated under the Companies Act, 2013,
              Located at Kochi, Kerala, India. We maintain this Website as a service to our
              customers. By using our website, you are agreeing to comply with and be bound by the
              following Terms of Use. Please review the following Terms of Use carefully. If you do
              not agree to any of these terms, you should not use, review, or subscribe to the
              website, information and educational services we provide respectively.
            </p>
          </div>

          <Section title="Terms of Use">
            <p>
              These Terms &amp; Conditions ("Terms") of (a) use of our website{" "}
              <a href="https://finprov.com/" className="text-cta hover:underline">
                https://finprov.com/
              </a>{" "}
              ("Website"),or any products or services in connection with the Website/products
              ("Services") or (b) any modes of registrations or usage of products, including through
              Pen Drives, SD cards, tablets or other storage/transmitting device are between Finprov
              Learning Private Limited ("Company/We/Us/Our") and its users ("User/You/Your").
            </p>
            <p>
              These Terms constitute an electronic record in accordance with the provisions of the
              Information Technology Act, 2000 and the Information Technology (Intermediaries
              guidelines) Rules, 2011 thereunder, as amended from time to time.
            </p>
          </Section>

          <Section title="Legal notice">
            <p>
              All textual, graphical, video, and other content appearing on this Website unless
              otherwise noted, are the property of the Company.
            </p>
          </Section>

          <Section title="General">
            <p>
              You agree to the terms and conditions outlined in this Terms of Use ("Terms of Use")
              with respect to https://finprov.com/ ("Finprov Learning"/"Website")". These Terms of
              Use constitute the entire and only agreement between us and you and supersedes all
              prior or contemporaneous agreements, representations, warranties and understandings
              with respect to the Website, the content, products or services provided by or through
              the Website. This Terms of Use may be amended from time to time by us without specific
              notice to you. The latest Terms of Use will be posted on the Website, and you should
              review this Terms of Use prior to using the Website at each instance.
            </p>
            <p>
              Your use of the Website and their services are governed by the following Terms of Use
              as applicable to the Website and products including the applicable policies which are
              incorporated herein by way of reference. If you transact on the Website and, you shall
              be subject to the policies that are applicable to the Website for such transaction. By
              mere use of the Website and, you shall be contracting with the Company and these terms
              and conditions including the policies constitute your binding obligations, with the
              Company.
            </p>
            <p>
              For these Terms of Use, wherever the context so requires "You" or "User" shall mean
              any natural or legal person who has agreed to become a subscriber on the Website by
              providing information on the Website using the computer systems. The term "We", "Us",
              "Our" shall mean the Company.
            </p>
            <p>The terms of Use stated herein shall govern the Website Finprov</p>
            <p>
              Please read the Terms and the privacy policy of the Company ("Privacy Policy") with
              respect to registration with us, the use of the Website, Services and products
              carefully before using the Website, Services or products. In the event of any
              discrepancy between the Terms and any other policies with respect to the Website or
              Services or products, the provisions of the Terms shall prevail.
            </p>
            <p>
              Your use/access/browsing of the Website or the Services or products or registration
              (with or without payment/with or without a subscription) through any means shall
              signify Your acceptance of the Terms and Your agreement to be legally bound by the
              same.
            </p>
            <p>
              If You do not agree with the Terms or the Privacy Policy, please do not use the
              Website or avail of the Services or products. Any access to our Services/products
              through registrations/subscription is non-transferable.
            </p>
            <p>Except as mentioned below,</p>
            <p>
              all information, content, material, trademarks, services marks, trade names, and trade
              secrets including but not limited to the software, text, images, graphics, video,
              script and audio, contained in the Website, Services and products are proprietary
              property of the Company ("Proprietary Information"). No Proprietary Information may be
              copied, downloaded, reproduced, modified, republished, uploaded, posted, transmitted
              or distributed in any way without obtaining prior written permission from the Company
              and nothing on this Website or Services shall be or products deemed to confer a
              license of or any other right, interest or title to or in any of the intellectual
              property rights belonging to the Company, to the User. You may own the medium on which
              the information, content or materials resides, but the Company shall at all times
              retain full and complete title to the information, content or materials and all
              intellectual property rights inserted by the Company on such medium. Certain contents
              on the Website may belong to third parties. Such contents have been reproduced after
              taking prior consent from said party and all rights relating to such content will
              remain with such third party. Further, you recognize and acknowledge that the ownership
              of all trademarks, copyright, logos, service marks and other intellectual property
              owned by any third party shall continue to vest with such party and You are not
              permitted to use the same without the consent of the respective third party.
            </p>
          </Section>

          <Section title="Copyright">
            <p>
              The content, organization, graphics, design, compilation, magnetic translation,
              videos, digital conversion and other matters related to the Website are protected under
              applicable copyrights, trademarks and other proprietary (including but not limited to
              intellectual property) rights. The copying, redistribution, use or publication by you
              of any such matters or any part of the Website, except as allowed by Section 4, is
              strictly prohibited. You do not acquire ownership rights to any content, document or
              other materials viewed through the Website or through any other products. The posting
              of information or materials on the Website does not constitute a waiver of any right in
              such information and materials.
            </p>
            <p>
              You may view, copy, print and use content contained on this Website solely for your
              own personal use and provided that: (1) the content available from this Website is
              used for informational and non-commercial purposes only; (2) no text, graphics or
              other content available from this Website is modified in any way; (3) no graphics
              available from this Website are used, copied or distributed separate from accompanying
              text; (4) no content available from this Website may be used for any purpose which is
              offensive or which disparages, damages or otherwise negatively reflects upon Company,
              its products, its employees or its management. Nothing contained herein shall be
              construed as conferring by implication, estoppel or otherwise any license or other
              grant of right to use any patent, copyright, trademark or other intellectual property
              of Company or any third party, except as expressly provided herein.
            </p>
            <p>
              We reserve the right in our sole discretion to edit or delete any documents,
              information or other content appearing on the Website and. Trademarks mentioned in the
              Website are either trademarks or registered trademarks of the Company.
            </p>
            <p>
              When you use the website or send emails or other data, information or communication to
              us, you agree and understand that you are communicating with us through electronic
              records and you consent to receive communications via electronic records from us
              periodically and as and when required. We may communicate with you by email or by such
              other mode of communication, electronic or otherwise.
            </p>
          </Section>

          <Section title="Copyrights and copyright agents">
            <p>
              We respect the intellectual property of others, and we ask you to do the same. If you
              believe that your work has been copied in a way that constitutes copyright
              infringement, please provide our Copyright Agent with the following information:
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                An electronic or physical signature of the person authorized to act on behalf of the
                owner of the copyright interest;
              </li>
              <li>A description of the copyrighted work that you claim has been infringed;</li>
              <li>
                A description of where the material that you claim is infringing is located on the
                Website;
              </li>
              <li>Your address, telephone number, and e-mail address;</li>
              <li>
                A statement by you that you have a good faith belief that the disputed use is not
                authorized by the copyright owner, its agent, or the law; and
              </li>
              <li>
                A statement by you, made under penalty of perjury, that the above information in
                your Notice is accurate and that you are the copyright owner or authorized to act on
                the copyright owner's behalf.
              </li>
            </ul>
            <p>
              Our Copyright Agent for Notice of claims of copyright infringement on the Website is
              Director who can be reached at contact@finprov.com
            </p>
          </Section>

          <Section title="Sharing of Copyrighted Data on our platforms">
            <p>
              We take our Intellectual Property and the legal rights that come along with them with
              the highest level of seriousness and we will pursue all legal methods and remedies in
              order to protect them; we believe the same about others rights to protect their IP
              rights as well. Hence we expressly prohibit sharing of IP of others on our platforms
              and in case such sharing happens and comes to our notice we shall have all rights to
              block users of our platforms who are sharing such information for such time periods as
              may be decided solely by us including banning them permanently from our platforms. We
              shall also have all rights to delete such information from the platform and also our
              servers as we do not we to partake in any such illegal sharing of IP protected content.
            </p>
            <p>
              We shall share with all legal and regulatory authorities all such information as they
              may seek in connection with any user who partakes in such activities
            </p>
          </Section>

          <Section title="User Restrictions">
            <p>
              Your use of our products, Website, Services is solely for Your personal and
              non-commercial use. Any use of the Website, Services or products or their contents
              other than for personal purposes is prohibited. Your personal and non-commercial use of
              this Website, products and / or our Services shall be subjected to the following
              restrictions:
            </p>
            <ol className="ml-4 list-decimal space-y-2">
              <li>
                You may not decompile, reverse engineer, or disassemble the contents of our Website
                and/or Services/ products or modify, copy, distribute, transmit, display, perform,
                reproduce, publish, license, create derivative works from, transfer, or sell any
                information or software obtained from the Website and/or Services/products, or
                remove any copyright, trademark registration, or other proprietary notices from the
                contents of the Website and/or Services/products.
              </li>
              <li>
                You will not (a) use this Website and/or any of our product/s or Service/s for
                commercial purposes of any kind, or (b) advertise or sell any products, services or
                domain names or otherwise (whether or not for profit), or solicit others (including,
                without limitation, solicitations for contributions or donations) or use any public
                forum for commercial purposes of any kind, or (c) use the Website/our products and
                Services in any way that is unlawful, or harms the Company or any other person or
                entity as determined by the Company.
              </li>
              <li>
                No User shall be permitted to perform any of the following prohibited activities
                while availing our Services:
              </li>
            </ol>
            <ol className="ml-8 list-decimal space-y-2">
              <li>
                Making available any content that is misleading, unlawful, harmful, threatening,
                abusive, tortious, defamatory, libelous, vulgar, obscene, child-pornographic, lewd,
                lascivious, profane, invasive of another's privacy, hateful, or racially, ethnically
                or otherwise objectionable.
              </li>
              <li>Stalking, intimidating and/or harassing another and/or inciting other to commit violence;</li>
              <li>
                Transmitting material that encourages anyone to commit a criminal offence, that
                results in civil liability or otherwise breaches any relevant laws, regulations or
                code of practice;
              </li>
              <li>Interfering with any other person's use or enjoyment of the Website/Services;</li>
              <li>
                Making, transmitting or storing electronic copies of materials protected by copyright
                without the permission of the owner, committing any act that amounts to the
                infringement of intellectual property or making available any material that infringes
                any intellectual property rights or other proprietary rights of anyone else;
              </li>
              <li>
                Make available any content or material that You do not have a right to make
                available under any law or contractual or fiduciary relationship unless You own or
                control the rights thereto or have received all necessary consents for such use of
                the content;
              </li>
              <li>
                Impersonate any person or entity, or falsely state or otherwise misrepresent Your
                affiliation with a person or entity;
              </li>
              <li>
                Post, transmit or make available any material that contains viruses, trojan horses,
                worms, spyware, time bombs, cancelbots, or other computer programming routines,
                code, files or such other programs that may harm the services, interests or rights
                of other users or limit the functionality of any computer software, hardware or
                telecommunications, or that may harvest or collect any data or personal information
                about other Users without their consent;
              </li>
              <li>
                Access or use the Website/Services/products in any manner that could damage,
                disable, overburden or impair any of the/Website's servers or the networks connected
                to any of the servers on which the Website is hosted;
              </li>
              <li>
                Intentionally or unintentionally interfere with or disrupt the Services or violate
                any applicable laws related to the access to or use of the
                Website/Services/products, violate any requirements, procedures, policies or
                regulations of networks connected to the Website/Services/products, or engage in any
                activity prohibited by these Terms;
              </li>
              <li>
                Disrupt or interfere with the security of, or otherwise cause harm to, the
                Website/Services/products, materials, systems resources, or gain unauthorized access
                to user accounts, passwords, servers or networks connected to or accessible through
                the Website/Services/products or any affiliated or linked sites;
              </li>
              <li>
                Interfere with, or inhibit any user from using and enjoying access to the Website/
                Services/products, or other affiliated sites, or engage in disruptive attacks such
                as denial of service attack on the Website/Services/products;
              </li>
              <li>
                Use deep-links, page-scrape, robot, spider or other automatic devices, program,
                algorithm or methodology, or any similar or equivalent manual process, to increase
                traffic to the Website/Services/products, to access, acquire, copy or monitor any
                portion of the Website/Services/products, or in any way reproduce or circumvent the
                navigational structure or presentation of the content, to obtain or attempt to
                obtain any content, documents or information through any means not specifically made
                available through the Website/Services/products;
              </li>
              <li>Alter or modify any part of the Services;</li>
              <li>
                Use the Services for purposes that are not permitted by (i) these Terms; and (ii)
                any applicable law, regulation or generally accepted practices or guidelines in the
                relevant jurisdiction; or
              </li>
              <li>
                Violate any of the terms specified under the Terms for the use of the
                Website/Services/products.
              </li>
            </ol>
            <p>
              A user can access purchased courses through two devices – one through a browser (on
              any device like mobile / Tab / PC / laptop / Mac) and the other. Once a user accesses
              the course through a browser (on a device) the user will be able to access courses
              only through those devices. Also, the user will not be able to access the course on
              any different browser too. If the user attempts to login through a different browser
              or device, the user's access to purchased courses is blocked.
            </p>
            <p>
              Further, all the purchases made on our website, are exclusively for the use of the
              user who has made the purchase. Attempts by any other user to access such course is in
              explicit violation of our Terms and Conditions. We shall block the accounts of any
              such users who are attempting to share their IDs or machines and we shall also not
              refund the money paid by such users.
            </p>
            <p>
              By submitting content on or through the Services (your "Material"), you grant us a
              worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use,
              copy, reproduce, process, adapt, modify, publish, transmit, display and distribute
              such Material in any and all media or distribution methods (now known or later
              developed) and to associate your Material with you, except as described below. You
              agree that others may use Your Material in the same way as any other content available
              through the Services. Other users of the Services may fork, tweak and repurpose your
              Material in accordance with these Terms. If you delete your user account your Material
              and name may remain available through the Services
            </p>
            <p>
              In the preparation of the Website/Services/products and contents therein, every effort
              has been made to offer the most current, correct, and clearly expressed information
              possible. Nevertheless, inadvertent errors may occur. In particular, but without
              limiting anything here, the Company disclaims any responsibility for any errors and
              accuracy of the information that may be contained in the website. Any feedback from
              User is most welcome to make the contents thereof error-free and user friendly. The
              company also reserves the right and discretion to make any changes/corrections or
              withdraw/add contents at any time without notice. Neither the Company nor any third
              parties provide any warranty or guarantee as to the accuracy, timeliness, performance,
              completeness or suitability of the information and materials found or offered on
              Website/Services/products for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and we expressly exclude
              liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </p>
            <p>
              Our Website provides Users with access to compiled educational information and related
              sources. Such information is provided on an As-Is basis and We assume no liability for
              the accuracy or completeness or use or non-obsolescence of such information. We shall
              not be liable to update or ensure continuity of such information contained on the
              Website. We would not be responsible for any errors, which might appear in such
              information, which is compiled from third party sources or for any unavailability of
              such information. From time to time the Website may also include links to other
              websites. These links are provided for your convenience to provide further information.
              They do not signify that we endorse the website(s)). We have no responsibility for the
              content of the linked website(s). You may not create a link to the Website from
              another website or document without the Company's prior written consent.
            </p>
            <p>
              The contents of the Services/products are developed on the concepts covered in the
              structured curriculum syllabus prescribed for students of various courses. The usage
              of the Services/products is not endorsed as a substitution to the curriculum-based
              education provided by the educational institutions but is intended to supplement the
              same by explaining and presenting the concepts in a manner enabling easy understanding.
            </p>
            <p>
              The basic definitions and formulae of the subject matter would remain the same. The
              Company acknowledges that there are various means of delivering structured curriculum
              pedagogy and inclusion of methods in the Services/products does not imply endorsement
              of any particular method nor exclusion imply disapproval. Usage of our
              Services/Website/products does not in any manner guarantee admission to any
              educational institutions or passing of any exams or achievement of any specified
              percentage of marks in any examinations.
            </p>
            <p>
              Certain contents in the Services/Website/products (in particular relating to
              assistance in preparations for administrative services) may contain opinions and views.
              The Company shall not be responsible for such opinions or any claims resulting from
              them. Further, the Company makes no warranties or representations whatsoever regarding
              the quality, content, completeness, or adequacy of such information and data.
            </p>
            <p>
              Some parts of the Services are interactive, and we encourage contributions by Users,
              which may or may not be subject to editorial control prior to being posted. The Company
              accepts no responsibility or liability for any material communicated by third parties
              in this way. The Company reserves the right at its sole discretion to remove, review,
              edit or delete any content. Similarly, We will not be responsible or liable for any
              content uploaded by Users directly on the Website, irrespective of whether We have
              certified any answer uploaded by the User. We would not be responsible to verify
              whether such questions/answers or contents placed by any User contain infringing
              materials or not.
            </p>
            <p>
              The Company may, based on any form of access to the Services or Website or
              registrations through any source whatsoever, contact the User through sms, email and
              call, to give information about its products as well as notifications on various
              important updates and/or to seek permission for demonstration of its products. The
              User expressly grants such permission to contact him/her through telephone, SMS, e-mail
              and holds the Company indemnified against any liabilities including financial
              penalties, damages, expenses in case the User's mobile number is registered with Do
              not Call (DNC) database. By registering yourself, you agree to make your contact
              details available to Our employees, associates and partners so that you may be
              contacted for education information and promotions through telephone, SMS, email etc.
            </p>
            <p>
              While the Company may, based on the User's confirmation, facilitate the demonstration
              of its products at the location sought by the User, the User acknowledges that he/she
              has not been induced by any statements or representations of any person with respect
              to the quality or conditions of the products and that User has relied solely on the
              investigations, examinations and inspections as the User has chosen to make and that
              the Company has afforded the User the opportunity for full and complete investigations,
              examinations and inspections.
            </p>
            <p>
              Upon registration through any means whatsoever, the Company may contact You through
              the registered mobile number or e-mail or any other mobile number or contact number or
              email provided by You to enable effective provision of Services. The User expressly
              permits the Company to contact him/her and the student utilising the Services, through
              the above-mentioned means at any time post-registration. Further, the Company shall
              have the right to monitor the download and usage of the Services/products and the
              contents thereof by the User/student, to analyze such usage and discuss the same with
              the User/student to enable effective and efficient usage of the Services. The User
              expressly permits the Company to clear the doubts of the student using the
              Services/online portal by answering the questions placed before it, providing study
              plans, informing of the progress, providing feedback, communicating with the student
              and mentoring the student through telephone or e-mail on the express consent of the
              legal guardian/parent of the User or through any other forum.
            </p>
            <p>
              While the Company has made efforts to train the personnel engaged in the sales and
              services relating to its products to enable quality control, it makes no warranties or
              representations whatsoever regarding the quality and competence of such personnel and
              would not be responsible for any deviant behaviour of any such personnel. Any feedback
              from User relating to the same is most welcome and Company reserves the right and
              discretion to take any action in this regard.
            </p>
            <p>
              Access to certain elements of the Services including doubt clearance, mentoring
              services etc may be subject to separate terms, conditions and fair usage policy. The
              Company reserves the right to determine the criteria for provision of various elements
              of Services to the different categories of Users based on its policies. Hence,
              subscription to the products or registrations do not automatically entitle the User to
              any and all elements of Services provided by the Company and the Company shall be
              entitled to exercise its discretion while providing access to and determining
              continuity of certain elements of Services. We reserve the right to extend, cancel,
              discontinue, prematurely withdraw or modify any of Our Services at Our discretion.
            </p>
            <p>
              The Company's products and / or Services, including the content, are compatible only
              with certain devices/tablets/instruments/hardware. The Company shall not be obligated
              to provide workable products and/or services for any instruments that are not
              recognized by the Company or those instruments that may be purchased from any third
              party which are not compatible with the Company's products and Services. The company
              reserves the right to upgrade the table/ type of compatible devices as required from
              time to time.
            </p>
            <p>
              The Company shall have no responsibility for any loss or damage caused to tablet or
              any other hardware and / or software and/or instrument, including loss of data or
              effect on the processing speed, resulting from Your use of our products and Services.
            </p>
            <p>
              You have to specify the address to which shipments if any have to be made at the time
              of purchase. All product(s) shall be delivered directly to the address as specified at
              the point of ordering and You cannot, under any circumstances whatsoever, change the
              address after the order is processed. In case of any change in the address, You need
              to specify the same to us in writing well in advance to the shipping date. Any
              inconsistencies in name or address will result in non-delivery of the product(s).
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                For return of product(s) damaged at the time of delivery, the shipping charges shall
                be borne by the Company. However, for return any of the product(s) for any other
                reasons, it shall be the responsibility of the User to arrange for the return of
                such cancelled product(s) and the shipping charges shall be borne by such User.
              </li>
              <li>
                We request you not to accept any product package that seems to be tampered with,
                opened or damaged at the time of delivery. The products must be returned in the same
                condition as delivered by the Company. Any products returned showing signs of any
                use or damage in any manner shall not be accepted for return.
              </li>
            </ul>
            <p>
              You acknowledge that the Company is not the manufacturer of the Books / Material /
              instrument/medium/hardware and hence, any defect relating to the same shall be
              reported to the manufacturer whose details shall be specified on the packaging and the
              Company shall not be in any manner responsible for the same. The Company does not
              provide any guarantee or warranty relating to the Books / Material/
              instrument/medium/hardware
            </p>
            <p>
              In order to access the Services and to avail the use of the products, You shall be
              required to register yourself with the Services/products, and maintain an account with
              the Services/products. You will be required to furnish certain information and
              details, including Your name, mobile number, e-mail address, residential address,
              grade/class of the student, school name, payment information (credit/debit card
              details) if required, and any other information deemed necessary by the website. With
              respect to the provision of information, the following may be noted:-
            </p>
          </Section>

          <Section title="User Responsibilities">
            <ul className="ml-4 list-disc space-y-3">
              <li>
                It is Your sole responsibility to ensure that the account information provided by
                You is accurate, complete and latest.
              </li>
              <li>
                You shall be responsible for maintaining the confidentiality of the account
                information and for all activities that occur under Your account. You agree to (a)
                ensure that You successfully log out from Your account at the end of each session,
                and (b) immediately notify the Company of any unauthorized use of Your account. If
                there is reason to believe that there is likely to be a breach of security or misuse
                of Your account, we may request You to change the password or we may suspend Your
                account without any liability to the Company, for such period of time as we deem
                appropriate in the circumstances. We shall not be liable for any loss or damage
                arising from Your failure to comply with this provision.
              </li>
              <li>
                You acknowledge that Your ability to use Your account is dependent upon external
                factors such as internet service providers and internet network availability and the
                Company cannot guarantee accessibility to the website at all times. In addition to
                the disclaimers set forth in the Terms, the Company shall not be liable to You for
                any damages arising from Your inability to log into Your account and access the
                services of the platformat any time.
              </li>
              <li>
                Persons who are "competent/capable" of contracting within the meaning of the Indian
                Contract Act, 1872 shall be eligible to register in the website and all Our products
                or Services. Persons who are minors, un-discharged insolvents etc. are not eligible
                to register for Our products or Services. As a minor if You wish to use Our products
                or Services, such use shall be made available to You by Your legal guardian or
                parents, who has agreed to these Terms. In the event a minor utilizes the
                Website/Services, it is assumed that he/she has obtained the consent of the legal
                guardian or parents and such use is made available by the legal guardian or parents.
                The Company will not be responsible for any consequence that arises as a result of
                misuse of any kind Our products or Services that may occur by virtue of any person
                including a minor registering for the Services/products provided. By using the
                products or Services You warrant that all the data provided by You is accurate and
                complete and that student using the website has obtained the consent of
                parent/legal guardian (in case of minors). The Company reserves the right to
                terminate Your subscription and / or refuse to provide You with access to the
                products or Services if it is discovered that You are under the age of 18
                (eighteen) years and the consent to use the products or Services is not made by
                Your parent/legal guardian or any information provided by You is inaccurate. You
                acknowledge that the Company does not have the responsibility to ensure that You
                conform to the aforesaid eligibility criteria. It shall be Your sole responsibility
                to ensure that You meet the required qualification. Any persons under the age of 18
                (eighteen) should seek the consent of their parents/legal guardians before providing
                any Information about themselves or their parents and other family members on
                thewebsite.
              </li>
              <li>
                You agree to defend, indemnify and hold harmless the Company, its officers,
                directors, employees and agents, from and against any and all claims, damages,
                obligations, losses, liabilities, costs or debt, and expenses (including but not
                limited to attorney's fees) arising from: (i) Your use of and access of the
                Website/Services; (ii) Your violation of any term of these Terms or any other policy
                of the Company; (iii) Your violation of any third party right, including without
                limitation, any copyright, property, or privacy right; or (iv) any claim that Your
                use of the Website/Services has caused damage to a third party. This defense and
                indemnification obligation will survive these Terms.
              </li>
              <li>
                In no event shall the Company, its officers, directors, employees, partners or
                agents be liable to You or any third party for any special, incidental, indirect,
                consequential or punitive damages whatsoever, including those resulting from loss of
                use, data or profits or any other claim arising out, of or in connection with, Your
                use of, or access to, the Website.
              </li>
              <li>
                In the event of Your breach of these Terms, You agree that the Company will be
                irreparably harmed and may not have an adequate remedy in money or damages. The
                Company therefore, shall be entitled in such event to obtain an injunction against
                such a breach from any court of competent jurisdiction. The Company's right to
                obtain such relief shall not limit its right to obtain other remedies.
              </li>
              <li>
                Any violation by You of the terms of this Clause may result in immediate suspension
                or termination of Your Accounts apart from any legal remedy that the Company can
                avail. In such instances, the Company may also disclose Your Account Information if
                required by any Governmental or legal authority. You understand that the violation
                of these Terms could also result in civil or criminal liability under applicable
                laws.
              </li>
              <li>
                The Terms shall be governed by and construed in accordance with the laws of India,
                without regard to conflict of law principles. Further, the Terms shall be subject to
                the exclusive jurisdiction of the competent courts located in Hyderabad and You
                hereby accede to and accept the jurisdiction of such courts.
              </li>
              <li>
                You shall not probe, scan or test the vulnerability of the Website or any network
                connected to the Website nor breach the security or authentication measures on the
                Website or any network connected to the Website. You may not reverse look-up, trace
                or seek to trace any information on any other User of or visitor to Website, or any
                other customer, including any account on the Website not owned by You, to its
                source, or exploit the Website or any service or information made available or
                offered by or through the Website, in any way where the purpose is to reveal any
                information, including but not limited to personal identification or information,
                other than Your own information, as provided for by the Website.
              </li>
              <li>
                The Company has the right to change modify, suspend, or discontinue and/or eliminate
                any aspect(s), features or functionality of the Services as it deems fit at any time
                without notice. Further, the Company has the right to amend these Terms from time to
                time without prior notice to you. The Company makes no commitment, express or
                implied, to maintain or continue any aspect of the Website. You agree that the
                Company shall not be liable to You or any third party for any modification,
                suspension or discontinuance of the Services. All prices are subject to change
                without notice.
              </li>
              <li>
                You shall not use any "deep-link", "page-scrape", "robot", "spider" or other
                automatic device, program, algorithm or methodology, or any similar or equivalent
                manual process, to access, acquire, copy or monitor any portion of the Website any
                Content, or in any way reproduce or circumvent the navigational structure or
                presentation of the Website or any Content, to obtain or attempt to obtain any
                materials, documents or information through any means not purposely made available
                through the Website. We reserve Our right to bar any such activity.
              </li>
              <li>
                You shall not make any negative, denigrating or defamatory statement(s) or
                comment(s) about Us or the brand name or domain name used by Us including the terms
                finprov.com, Learning.finprov.com, hire.finprove.com or otherwise engage in any
                conduct or action that might tarnish the image or reputation, of Finprov or
                otherwise tarnish or dilute any Finprov's trade or service marks, trade name and/or
                goodwill associated with such trade or service marks, trade name as may be owned or
                used by us.
              </li>
              <li>
                You may not forge headers or otherwise manipulate identifiers in order to disguise
                the origin of any message or transmittal you send to us on or through the Website or
                any service offered on or through the Website. You may not pretend that you are, or
                that you represent, someone else, or impersonate any other individual or entity.
              </li>
              <li>
                You may not use the Website or any content for any purpose that is unlawful or
                prohibited by these Terms of Use, or to solicit the performance of any illegal
                activity or other activity which infringes the rights of the Company.
              </li>
            </ul>
          </Section>

          <Section title="Disclaimer and limits">
            <p>
              DISCLAIMER: THIS WEBSITE, AND THE SERVICES ARE PROVIDED ON AN "AS IS" BASIS WITH ALL
              FAULTS AND WITHOUT ANY WARRANTY OF ANY KIND. THE COMPANY HEREBY DISCLAIMS ALL
              WARRANTIES AND CONDITIONS WITH REGARD TO THE WEBSITE, PRODUCTS AND THE SERVICES,
              INCLUDING WITHOUT LIMITATION, ALL IMPLIED WARRANTIES AND CONDITIONS OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, TIMELINESS.
              PERFORMANCE, COMPLETENESS, SUITABILITY AND NON-INFRINGEMENT. ADDITIONALLY, THE
              COMPANY SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE
              USE OR PERFORMANCE OF THIS SITE, OR THE SERVICES. YOUR USE OF ANY INFORMATION OR
              MATERIALS ON THIS WEBSITE/SERVICES/PRODUCTS IS ENTIRELY AT YOUR OWN RISK, FOR WHICH
              WE SHALL NOT BE LIABLE. IT SHALL BE YOUR OWN RESPONSIBILITY TO ENSURE THAT SERVICES
              PROVIDED BY US MEET YOUR SPECIFIC REQUIREMENTS.
            </p>
            <p>
              Reasonable efforts are taken to ensure the accuracy and integrity of information and
              related materials provided by the Company on this Website but the Company is not
              responsible for misprints, out-of-date information, technical or pricing inaccuracies,
              typographical or other errors appearing on this Website. Information and related
              materials are subject to change without notice. The information from or through the
              website is provided "as is," "as available," and all warranties, express or implied,
              are disclaimed (including, but not limited to, the disclaimer of any implied warranties
              of merchantability and fitness for a particular purpose). The information and services
              may contain bugs, errors, problems or other limitations. We and our affiliated parties
              have no liability whatsoever for your use of any information or service. In particular,
              but not as a limitation thereof, we and our affiliated parties are not liable for any
              direct or indirect, special, incidental or consequential damages (including damages for
              loss of business, loss of profits, litigation, or the like). The negation of damages
              set forth above is a fundamental element of the basis of the bargain between us and
              you. No advice or information, whether oral or written, obtained by you from us through
              the website shall create any warranty, representation or guarantee not expressly stated
              in this terms of use.
            </p>
            <p>
              All responsibility or liability for any damages caused by viruses contained within the
              electronic file containing the form or document is disclaimed. we will not be liable
              to you for any direct or incidental, special or consequential damages of any kind that
              may result from use of or inability to use our website or in connection with these
              terms of use, even if user has been informed in advance of the possibility of such
              damages. Our maximum liability to you under all circumstances will be equal to the
              purchase price you pay for any products, services or information.
            </p>
            <p>
              We view protection of your privacy as a very important principle. We understand clearly
              that you and your Personal Information is one of our most important assets. We store
              and process your information in accordance with Information Technology Act 2000 and
              Rules there under. Our current Privacy Policy is available at{" "}
              <a href="https://www.finprov.com/" className="text-cta hover:underline">
                www.finprov.com
              </a>{" "}
              If you object to your information being transferred or used in this way please do not
              use Website.
            </p>
            <p>
              Reference to any product, process, publication, service, or offering of any third
              party by trade name, trademark, and manufacturer or otherwise does not necessarily
              constitute or imply the endorsement or recommendation of such by Company.
            </p>
          </Section>

          <Section title="Securities laws">
            <p>
              This Website may include statements concerning our operations, prospects, strategies,
              financial condition, future economic performance and demand for our products or
              services, as well as our intentions, plans and objectives, which are forward-looking
              statements. These statements are based upon a number of assumptions and estimates which
              are subject to significant uncertainties, many of which are beyond our control. When
              used on our Website, words like "anticipates," "expects," "believes," "estimates,"
              "seeks," "plans," "intends" and similar expressions are intended to identify
              forward-looking statements designed to fall within securities law safe harbors for
              forward-looking statements. The Website and the information contained herein do not
              constitute an offer or a solicitation of an offer for the sale of any securities. None
              of the information contained herein is intended to be, and shall not be deemed to be,
              incorporated into any of our securities-related filings or documents.
            </p>
          </Section>

          <Section title="Firm Reviews">
            <p>
              The data / ratings shared by users of the Website on Firm Reviews is purely the
              opinion of such user and Finprov.com bears no responsibility on ether authenticity /
              validity / accuracy of such information. Finprov just is a collector and disseminator
              of such information. If a user chooses to review a firm anonymously, Finprov shall not
              share the name / contact details of such user unless as required by law. We do not
              issue any guarantee on the accuracy / validity / authenticity of information on
              identity of the Firms or users rating them. Finprov bears no Liability either to the
              user or the rated firm on account of any such reviews.
            </p>
            <p>
              All the Firm details in this Firm Review section of the Website have been collected
              from publicly available sources. If anyone has any objection to any content in this
              section or needs any correction to information provided in this section, they may reach
              out to us at Contact@finprov.com While we are not bound to make any changes based on
              any such communication, we may take such requests into consideration purely based on
              our internal opinions of the facts highlighted.
            </p>
            <p>
              Firms may not offer incentives to users in exchange for favourable reviews. Users may
              not trade reviews with Firms. We will remove reviews where we have evidence that users
              were compensated to leave reviews.
            </p>
            <p>
              Firms may not coerce Users to leave reviews. Coercion includes asking Users to provide
              proof to an Firm that they wrote a review whether or not that proof includes the
              content of the review itself.
            </p>
          </Section>

          <Section title="Links to other websites / Apps">
            <p>
              This Website may be accessed by users internationally and may contain references or
              cross-references to Company products, programs and services that are not available or
              are prohibited in your country. Such references do not imply that Company intends to
              make available in your country such products, programs or services or that such
              products may lawfully be used in your country. Company reserves the right without prior
              notice to discontinue models, parts and accessories, and other items or change
              specifications at any time without incurring any obligations.
            </p>
          </Section>

          <Section title="Product description">
            <p>
              We do not warrant that Product description or other content of this Website is
              accurate, complete, reliable, current, or error-free and assumes no liability in this
              regard.
            </p>
            <p>
              Finprov does not make any representation or warranty as to specifics of the images,
              content, notes, Q&amp;A, displayed on the Website and their end usability in the
              examination. The Users shall take no inference based on the picturization of the
              products offered. The price indications on the Website may vary due to some technical
              issue, typographical error or difference in product information and the Company shall
              not be responsible for the changed prices during the transaction. The terms and
              conditions of delivery, payment, etc. shall be governed by the Subscription Agreement
              signed by the User/subscriber
            </p>
            <p>
              Should any user of this Website send any feedback or data, such as ideas, comments,
              suggestions or questions regarding any Company product or service or the content of
              this Website, such information shall be deemed to be non-confidential, and Company
              shall have no obligation of any kind with respect to such information and shall be free
              to reproduce, use, disclose and distribute the information to others without
              limitation. Further, Company shall be free to use any ideas, concepts, know-how or
              techniques contained in such information for any purpose whatsoever, including but not
              limited to developing, manufacturing and marketing products incorporating such ideas,
              concepts, know-how or techniques We reserve the right, and you authorize us, to use
              and assign all information regarding Website uses by you and all information provided
              by you in any manner consistent with our Privacy Policy.
            </p>
          </Section>

          <Section title="Payments">
            <p>You represent and warrant that if you are subscribing to the Experiences from us that</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                any credit, debit, net banking, cheque or any other mode of transfer information you
                supply is true and complete
              </li>
              <li>
                charges incurred by you will be honoured by your credit card/debit card/banking
                company, and
              </li>
              <li>you will pay the charges incurred by you at the posted prices, including any applicable taxes.</li>
            </ul>
            <p>
              While availing the payment method/s available on the Website, we will not be
              responsible or assume any liability, whatsoever in respect of any loss or damage
              arising directly or indirectly to You due to Lack of authorization for any
              transaction/s, or Exceeding the preset limit mutually agreed by You and between
              "Bank/s", or Any payment issues arising out of the transaction, or Decline of
              transaction for any other reasons.
            </p>
            <p>
              All payments made against the products/services on Website by you shall be
              compulsorily in Indian Rupees acceptable in the Republic of India. Website will not
              facilitate transaction with respect to any other form of currency with respect to the
              purchases made on Website..
            </p>
            <p>
              Transactions, Transaction Price and all commercial terms such as Delivery, Dispatch of
              products and/or services are as per principal to principal bipartite contractual
              obligations between Subscriber and the Company and payment facility is merely used to
              facilitate the completion of the Transaction. Use of the payment facility shall not
              render the Company liable or responsible for the non-delivery, non-receipt,
              non-payment, damage, breach of representations and warranties, or warranty services or
              fraud as regards the products and /or services listed on the Website.
            </p>
            <p>
              Access to this Website are monitored. The requesting URLs, the machine originating the
              request, and the time of the request are logged for access statistics and security
              purposes. Use of this Website constitutes consent to such monitoring. This Website may
              be unavailable from time to time due to mechanical, telecommunication, software,
              hardware and third-party vendor failures. Company cannot predict or control when such
              downtime may occur and cannot control the duration of such downtime.
            </p>
          </Section>

          <Section title="Payment &amp; Refund Policy">
            <p>
              We have a no Refund Policy – we do not refund any money in respect of courses that are
              purchased from us
            </p>
          </Section>

          <Section title="Assignment">
            <p>
              You cannot assign or otherwise transfer Your obligations under the Terms, or any right
              granted hereunder to any third party. The Company's rights under the Terms are freely
              transferable by the Company to any third parties without the requirement of seeking
              Your consent.
            </p>
          </Section>

          <Section title="Severability">
            <p>
              If, for any reason, a court of competent jurisdiction finds any provision of the
              Terms, or portion thereof, to be unenforceable, that provision shall be enforced to
              the maximum extent permissible so as to give effect to the intent of the parties as
              reflected by that provision, and the remainder of the Terms shall continue in full
              force and effect.
            </p>
          </Section>

          <Section title="Waiver">
            <p>
              Any failure by the Company to enforce or exercise any provision of the Terms, or any
              related right, shall not constitute a waiver by the Company of that provision or right.
            </p>
          </Section>

          <Section title="Relationship">
            <p>
              You acknowledge that Your participation on the website does not make You an employee
              or agency or partnership or joint venture or franchise of the Company.
            </p>
            <p>
              The Company provides these Terms so that You are aware of the terms that apply to your
              use of the Website and Services. You acknowledge that, the Company has given You a
              reasonable opportunity to review these Terms and that You have agreed to them.
            </p>
          </Section>

          <Section title="Feedback">
            <p>
              Any feedback You provide with respect to the website shall be deemed to be
              non-confidential. The Website shall be free to use such information on an unrestricted
              basis. Further, by submitting the feedback, You represent and warrant that
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>Your feedback does not contain confidential or proprietary information of You or of third parties;</li>
              <li>
                the Company is not under any obligation of confidentiality, express or implied, with
                respect to the feedback;
              </li>
              <li>the website may have something similar to the feedback already under consideration or in development; and</li>
              <li>
                You are not entitled to any compensation or reimbursement of any kind from the
                Company for the feedback under any circumstances, unless specified.
              </li>
            </ul>
            <p>
              Under no circumstances shall the Company be held responsible in any manner for any
              content provided by other users even such content is offensive, hurtful or offensive.
              Please exercise caution while accessing the website.
            </p>
          </Section>

          <Section title="Miscellaneous">
            <p>
              Terms of Use shall be governed by and interpreted and construed in accordance with the
              laws of India. The place of jurisdiction shall be exclusively in Hyderabad. Should any
              part of this Terms of Use be held invalid or unenforceable, that portion shall be
              construed consistent with applicable law and the remaining portions shall remain in
              full force and effect. To the extent that anything in or associated with the Website
              is in conflict or inconsistent with this Terms of Use, this Terms of Use shall take
              precedence. Our failure to enforce any provision shall not be deemed a waiver of such
              provision nor of the right to enforce such provision.
            </p>
          </Section>

          <Section title="Customer Care">
            <p>All queries and grievances must be addressed to Contact@finprov.com</p>
          </Section>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
