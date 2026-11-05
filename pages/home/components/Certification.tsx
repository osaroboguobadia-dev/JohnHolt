import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { certification } from '@/mocks/home';

export default function Certification() {
  const left = useInView<HTMLDivElement>(0.2);
  const right = useInView<HTMLDivElement>(0.2);

  return (
    <section id="home-certification" className="py-20 md:py-28 bg-background-100 border-y border-background-200">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <div ref={left.ref} className={`relative max-w-[560px] w-full mx-auto ${left.inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-2xl bg-accent-500/10 border border-accent-400/40"
            aria-hidden="true"
          ></div>

          <figure className="relative bg-background-50 rounded-2xl p-3 md:p-4 border border-background-200 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)]">
            <div className="relative rounded-xl border border-accent-400/60 px-5 py-8 md:px-8 md:py-10 text-center overflow-hidden">
              <span className="absolute top-3 left-3 w-7 h-7 border-t border-l border-accent-500/70" aria-hidden="true"></span>
              <span className="absolute top-3 right-3 w-7 h-7 border-t border-r border-accent-500/70" aria-hidden="true"></span>
              <span className="absolute bottom-3 left-3 w-7 h-7 border-b border-l border-accent-500/70" aria-hidden="true"></span>
              <span className="absolute bottom-3 right-3 w-7 h-7 border-b border-r border-accent-500/70" aria-hidden="true"></span>

              <div className="flex items-center justify-center gap-2 text-secondary-600">
                <span className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-shield-check-line text-base"></i>
                </span>
                <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.24em] uppercase">
                  {certification.issuedBy}
                </span>
              </div>

              <p className="mt-5 text-[10px] md:text-[11px] font-semibold tracking-[0.28em] uppercase text-accent-600">
                {certification.certificateTitle}
              </p>

              <p className="font-heading mt-2 text-2xl md:text-3xl font-semibold text-foreground-950 leading-none">
                {certification.standard}
              </p>
              <p className="mt-2 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-foreground-500">
                {certification.standardTitle}
              </p>

              <div className="my-6 flex items-center justify-center gap-3" aria-hidden="true">
                <span className="h-px w-12 bg-background-300"></span>
                <span className="w-1.5 h-1.5 rotate-45 bg-accent-500"></span>
                <span className="h-px w-12 bg-background-300"></span>
              </div>

              <p className="text-[10px] md:text-[11px] text-foreground-500 leading-relaxed max-w-[280px] mx-auto">
                This is to certify that the Quality Management System of
              </p>
              <p className="font-heading mt-3 text-xl md:text-2xl font-semibold text-primary-800 leading-snug">
                {certification.organisation}
              </p>
              <p className="mt-2 text-[10px] md:text-[11px] text-foreground-500 leading-relaxed max-w-[300px] mx-auto">
                {certification.address}
              </p>

              <div className="mt-7 grid grid-cols-3 gap-2 text-center border-t border-background-200 pt-4">
                <div>
                  <p className="text-[9px] tracking-[0.12em] uppercase text-foreground-400">Certificate No.</p>
                  <p className="mt-1 text-[10px] md:text-[11px] font-semibold text-foreground-800 leading-tight break-words">
                    {certification.certificateNumber}
                  </p>
                </div>
                <div className="border-x border-background-200 px-1">
                  <p className="text-[9px] tracking-[0.12em] uppercase text-foreground-400">Surveillance</p>
                  <p className="mt-1 text-[10px] md:text-[11px] font-semibold text-foreground-800 leading-tight">
                    {certification.surveillanceDate}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.12em] uppercase text-foreground-400">Valid Until</p>
                  <p className="mt-1 text-[10px] md:text-[11px] font-semibold text-foreground-800 leading-tight">
                    {certification.expiryDate}
                  </p>
                </div>
              </div>

              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-dashed border-accent-500/40 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center">
                  <i className="ri-verified-badge-line text-accent-600 text-2xl"></i>
                </div>
              </div>
            </div>

            <figcaption className="mt-3 flex items-center justify-between gap-3 px-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase text-foreground-500">
                <i className="ri-file-pdf-2-line text-secondary-600 text-sm"></i>
                Official PDF
              </span>
              <a
                href={certification.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary-700 hover:text-primary-800"
              >
                Open document
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </figcaption>
          </figure>
        </div>

        <div ref={right.ref} className={right.inView ? 'animate-fade-up' : 'opacity-0'}>
          <SectionHeading
            eyebrow="Certification & Compliance"
            title="Independently audited to ISO 9001:2015"
            description="Our quality management system is certified and kept under continuous surveillance by SCK Certifications, an independent accreditation body. It is our assurance to clients that every installation, service call and contract follows a documented, auditable process."
          />

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {[
              { label: 'Standard', value: certification.standard },
              { label: 'Certificate number', value: certification.certificateNumber },
              { label: 'Issued by', value: certification.issuedBy },
              { label: 'Valid until', value: certification.expiryDate },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-accent-400/60 pl-4">
                <dt className="text-[10px] md:text-[11px] font-semibold tracking-[0.16em] uppercase text-foreground-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground-900 break-words">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7">
            <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.16em] uppercase text-foreground-500">
              Audited scope
            </p>
            <p className="mt-2 text-sm text-foreground-600 leading-relaxed">{certification.scopeSummary}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs text-foreground-500">IAF codes</span>
              {certification.iafCodes.map((code) => (
                <span
                  key={code}
                  className="inline-flex items-center rounded-full bg-background-200 px-2.5 py-0.5 text-[11px] font-semibold text-secondary-800"
                >
                  {code}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={certification.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-background-50 hover:bg-primary-800 transition-colors"
            >
              <i className="ri-file-pdf-2-line text-base"></i>
              View certificate (PDF)
            </a>
            <a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full border border-background-300 bg-background-50 px-6 py-3 text-sm font-semibold text-foreground-800 hover:border-primary-400 hover:text-primary-800 transition-colors"
            >
              <i className="ri-shield-star-line text-base text-accent-600"></i>
              Verify with SCK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}