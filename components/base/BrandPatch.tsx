import { brandLogoUrl } from '@/mocks/navigation';

interface BrandPatchProps {
  /** Horizontal position as a percentage of the photo box. */
  left: string;
  /** Vertical position as a percentage of the photo box. */
  top: string;
  /** Width of the printed mark. */
  width?: string;
  /** vest = white mark for red workwear, helmet = full-colour decal for white helmets, stencil = flat printed mark for wrap and signage. */
  surface?: 'vest' | 'helmet' | 'stencil';
  /** Slight angle so the mark follows the curve of the fabric or helmet shell. */
  rotate?: number;
  opacity?: number;
}

export default function BrandPatch({
  left,
  top,
  width = '4.25rem',
  surface = 'vest',
  rotate = 0,
  opacity = 0.92,
}: BrandPatchProps) {
  const isHelmet = surface === 'helmet';
  const isStencil = surface === 'stencil';

  const filter = isStencil
    ? 'brightness(0) invert(1) drop-shadow(0 1px 1px rgba(0,0,0,0.35))'
    : isHelmet
      ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.28))'
      : 'brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,0.45))';

  return (
    <span
      className="pointer-events-none absolute select-none"
      style={{
        left,
        top,
        width,
        opacity,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <img
        src={brandLogoUrl}
        alt=""
        className="w-full h-auto object-contain"
        style={{
          filter,
        }}
      />
    </span>
  );
}