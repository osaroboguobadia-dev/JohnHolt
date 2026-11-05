import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';

const channels = [
  {
    icon: 'ri-phone-line',
    title: 'Call Our Team',
    description: 'Speak directly with our support team during business hours for quick answers and urgent help.',
    action: 'Call 0700 5646 4658',
    href: 'tel:070056464658',
    external: true,
  },
  {
    icon: 'ri-mail-line',
    title: 'Email Us',
    description: 'Send us the details and we will respond with a clear, considered answer to your question.',
    action: 'marketingteam@jhplc.com',
    href: 'mailto:marketingteam@jhplc.com',
    external: true,
  },
  {
    icon: 'ri-file-text-line',
    title: 'Request a Quote',
    description: 'Have a project in mind? Share your requirements and receive a tailored technical proposal.',
    action: 'Start a request',
    href: '/contact',
    external: false,
  },
];

export default function FaqSupport() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="py-20 md:py-24 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Talk to Us"
          title="Didn&rsquo;t Find Your Answer?"
          description="Pick the channel that suits you best &mdash; our team is ready to help with anything the FAQs didn't cover."
          align="center"
        />

        <div ref={ref} className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bg-background-50 border border-background-200 rounded-2xl p-6 md:p-7 flex flex-col hover:border-primary-300 transition-colors"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <i className={`${channel.icon} text-xl`}></i>
              </span>
              <h3 className="font-heading mt-5 text-base font-semibold text-foreground-950">{channel.title}</h3>
              <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed flex-1">{channel.description}</p>
              {channel.external ? (
                <a
                  href={channel.href}
                  className="cursor-pointer mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  {channel.action}
                  <i className="ri-arrow-right-line"></i>
                </a>
              ) : (
                <Link
                  to={channel.href}
                  className="cursor-pointer mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  {channel.action}
                  <i className="ri-arrow-right-line"></i>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}