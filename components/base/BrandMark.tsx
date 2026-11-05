import { brandLogoUrl } from '@/mocks/navigation';

interface BrandMarkProps {
  /**
   * watermark: subtle white logo centered over dark hero imagery
   * badge: solid John Holt logo chip centered over photo panels
   * corner: full-colour logo chip pinned to the top-right of a photo
   * banner: large full-colour logo crest sitting high on a full-bleed banner
   * overlay: white logo that sits directly on a brand-tinted photo overlay
   */
  variant?: 'watermark' | 'badge' | 'corner' | 'banner' | 'overlay';
  className?: string;
  /** Tailwind height classes for the overlay logo (default tuned for small photo cards). */
  logoClassName?: string;
}

export default function BrandMark({
  variant = 'watermark',
  className = '',
  logoClassName = 'h-6 md:h-7',
}: BrandMarkProps) {
  if (variant === 'overlay') {
    return (
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-4 ${className}`}
        aria-hidden="true"
      >
        <img
          src={brandLogoUrl}
          alt=""
          style={{ filter: 'brightness(0) invert(1)' }}
          className={`${logoClassName} w-auto max-w-[200px] object-contain opacity-85 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]`}
        />
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-10 md:pt-16 ${className}`}
        aria-hidden="true"
      >
        <span className="flex flex-col items-center rounded-[24px] bg-background-50/95 px-8 py-5 md:px-12 md:py-7 shadow-[0_22px_50px_-18px_rgba(0,0,0,0.65)] ring-1 ring-background-50/60 backdrop-blur-md animate-fade-up">
          <img
            src={brandLogoUrl}
            alt=""
            className="h-12 md:h-20 w-auto max-w-[260px] object-contain"
          />
          <span className="mt-3.5 h-px w-14 md:w-20 bg-foreground-950/15"></span>
        </span>
      </div>
    );
  }

  if (variant === 'corner') {
    return (
      <span
        className={`pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-lg bg-background-50/95 px-2 py-1 shadow-sm ring-1 ring-foreground-950/5 backdrop-blur-sm ${className}`}
      >
        <img src={brandLogoUrl} alt="John Holt PLC" className="h-4 md:h-5 w-auto object-contain" />
      </span>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <span className="flex items-center justify-center rounded-2xl bg-background-50/90 backdrop-blur-sm px-4 py-2.5 shadow-lg ring-1 ring-foreground-950/5">
          <img
            src={brandLogoUrl}
            alt=""
            className="h-6 md:h-7 w-auto max-w-[140px] object-contain"
          />
        </span>
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <img
        src={brandLogoUrl}
        alt=""
        style={{ filter: 'brightness(0) invert(1)' }}
        className="h-8 md:h-11 w-auto max-w-[180px] object-contain opacity-30"
      />
    </div>
  );
}