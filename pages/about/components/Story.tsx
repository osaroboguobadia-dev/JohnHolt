import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { aboutCredentials } from '@/mocks/about';

export default function Story() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div ref={ref} className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="w-full h-[340px] md:h-[480px] rounded-2xl overflow-hidden border border-background-200">
            <img
              src="https://public.readdy.ai/ai/img_res/edited_e2b12a439ef0af77c5fb4db22f7103de_197d9c50.jpg"
              alt="The John Holt PLC team"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-primary-700 text-background-50 rounded-xl px-6 py-5 items-center gap-4 border border-primary-600">
            <i className="ri-history-line text-3xl text-accent-300"></i>
            <div>
              <p className="font-heading text-lg font-semibold leading-none">Since 1861</p>
              <p className="text-xs text-background-200 mt-1">A legacy of trust</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="A Nigerian Institution Built on Trust and Technical Excellence"
            description="From its roots in international trade to its place today as a diversified industrial solutions group, John Holt PLC has always been defined by one thing — doing right by the people who rely on us."
          />
          <p className="mt-5 text-sm md:text-base text-foreground-600 leading-relaxed">
            Over the decades we have grown alongside Nigeria, investing in the engineering capability, service network
            and skilled people needed to keep power flowing, operations safe and businesses moving. That long perspective
            is our advantage: we plan for the long term, stand behind our work, and treat every client as a partnership.
          </p>
          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutCredentials.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-50 text-primary-600 shrink-0">
                  <i className={`${item.icon} text-lg`}></i>
                </span>
                <span className="text-sm text-foreground-700 leading-snug pt-2">{item.label}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/projects"
            className="cursor-pointer inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            See our work in the field
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}