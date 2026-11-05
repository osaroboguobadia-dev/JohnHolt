import { useInView } from '@/hooks/useInView';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }: SectionHeadingProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${inView ? 'animate-fade-up' : 'opacity-0'}`}
    >
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase ${light ? 'text-accent-300' : 'text-accent-600'}`}>
          <span className={`w-6 h-px ${light ? 'bg-accent-300' : 'bg-accent-600'}`}></span>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${light ? 'text-background-50' : 'text-foreground-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-sm md:text-base leading-relaxed ${light ? 'text-background-200' : 'text-foreground-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}