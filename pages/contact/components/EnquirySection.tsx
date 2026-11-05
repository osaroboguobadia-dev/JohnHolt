import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { contactAssurances } from '@/mocks/contact';
import EnquiryForm from './EnquiryForm';

export default function EnquirySection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="enquiry-form" className="py-20 md:py-24 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Send an Enquiry"
          title="Tell Us What You Need"
          description="Share a few details and the right specialist will get back to you quickly."
        />

        <div ref={ref} className={`mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="lg:col-span-2">
            <div className="bg-background-50 border border-background-200 rounded-2xl p-6 md:p-8">
              <EnquiryForm />
            </div>
          </div>

          <aside className="flex flex-col gap-5">
            <div className="bg-foreground-950 rounded-2xl p-6 md:p-7 text-background-200">
              <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-background-50/10 text-accent-300">
                <i className="ri-headphone-line text-xl"></i>
              </span>
              <h3 className="font-heading mt-4 text-lg font-semibold text-background-50">
                Prefer to Talk it Through?
              </h3>
              <p className="mt-2 text-sm text-background-300 leading-relaxed">
                Our team is available during business hours for urgent enquiries and technical advice. For emergencies,
                our support line operates around the clock.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:070056464658"
                  className="cursor-pointer inline-flex items-center gap-2.5 text-sm font-semibold text-background-50 hover:text-accent-300 transition-colors"
                >
                  <i className="ri-phone-line text-accent-400"></i>
                  0700 5646 4658
                </a>
                <a
                  href="mailto:marketingteam@jhplc.com"
                  className="cursor-pointer inline-flex items-center gap-2.5 text-sm font-semibold text-background-50 hover:text-accent-300 transition-colors"
                >
                  <i className="ri-mail-line text-accent-400"></i>
                  marketingteam@jhplc.com
                </a>
              </div>
            </div>

            {contactAssurances.map((item) => (
              <div
                key={item.title}
                className="bg-background-50 border border-background-200 rounded-2xl p-5 flex items-start gap-4"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700 shrink-0">
                  <i className={`${item.icon} text-lg`}></i>
                </span>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground-950">{item.title}</h4>
                  <p className="mt-1 text-xs text-foreground-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}