import { useInView } from '@/hooks/useInView';
import ApplicationForm from './ApplicationForm';

export default function ApplySection({ selectedRole }: { selectedRole: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="apply" className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="lg:col-span-1">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-600">
              <span className="w-6 h-px bg-accent-600"></span>
              Join Our Team
            </span>
            <h2 className="font-heading mt-3 text-3xl md:text-4xl font-semibold text-foreground-950 leading-tight">
              Ready to Apply?
            </h2>
            <p className="mt-4 text-sm md:text-base text-foreground-600 leading-relaxed">
              Fill in the form and tell us which role interests you. Even if nothing matches right now, send a
              speculative application — we are always glad to hear from talented people.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                { icon: 'ri-mail-line', label: 'Email', value: 'careers@jhplc.com' },
                { icon: 'ri-phone-line', label: 'Phone', value: '0700 5646 4658' },
                { icon: 'ri-map-pin-line', label: 'Head Office', value: '11B Ilabere Avenue, Ikoyi, Lagos, Nigeria' },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-background-100 text-primary-600">
                    <i className={`${item.icon} text-lg`}></i>
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide text-foreground-500">{item.label}</span>
                    <span className="block text-sm font-semibold text-foreground-900">{item.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={ref}
            className={`lg:col-span-2 bg-background-100 border border-background-200 rounded-3xl p-6 md:p-9 ${
              inView ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <ApplicationForm selectedRole={selectedRole} />
          </div>
        </div>
      </div>
    </section>
  );
}