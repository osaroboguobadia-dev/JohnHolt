import { useInView } from '@/hooks/useInView';
import { contactChannels } from '@/mocks/contact';

export default function ContactChannels() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="relative -mt-16 md:-mt-20 z-20 pb-4">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {contactChannels.map((channel) => (
            <div
              key={channel.title}
              className="bg-background-50 border border-background-200 rounded-2xl p-6 flex flex-col"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <i className={`${channel.icon} text-xl`}></i>
              </span>
              <h3 className="font-heading mt-4 text-base font-semibold text-foreground-950">{channel.title}</h3>
              <ul className="mt-2.5 flex flex-col gap-0.5 flex-1">
                {channel.lines.map((line) => (
                  <li key={line} className="text-sm text-foreground-600 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href={channel.href}
                className="cursor-pointer mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors whitespace-nowrap"
              >
                {channel.action}
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}