import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';

export default function Intro() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          ref={ref}
          className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="w-full h-[320px] md:h-[440px] rounded-2xl overflow-hidden border border-background-200">
            <img
              src="https://public.readdy.ai/ai/img_res/edited_ef1cf486f9b297236e47b9d6ac3e8de0_d246270b.jpg"
              alt="John Holt PLC engineering team"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-primary-700 text-background-50 rounded-xl px-6 py-5 items-center gap-4 border border-primary-600">
            <i className="ri-shield-star-line text-3xl text-accent-300"></i>
            <div>
              <p className="font-heading text-lg font-semibold leading-none">Certified</p>
              <p className="text-xs text-background-200 mt-1">Standards &amp; Safety</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A Century of Trust, Now Serving the World"
            description="Since 1897, John Holt PLC has partnered with businesses, institutions and industries — first across Nigeria, and today around the globe — to deliver dependable power, safety and engineering solutions. Our name has long been associated with quality, integrity and technical capability."
          />
          <ul className="mt-6 space-y-3">
            {[
              'Over a century of heritage across multiple business sectors',
              'In-house certified engineers and technicians',
              'Worldwide sales, installation and after-sales support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground-700">
                <i className="ri-checkbox-circle-fill text-primary-600 mt-0.5"></i>
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="cursor-pointer inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            Learn more about our history
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}