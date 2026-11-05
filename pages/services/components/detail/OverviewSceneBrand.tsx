import BrandPatch from '@/components/base/BrandPatch';
import { brandLogoUrl } from '@/mocks/navigation';

/**
 * Prints the real John Holt mark onto the scene in the overview photo:
 * stencilled onto the stretch-wrapped pallets and carried on the bay door signage.
 * Positioned as percentages of the photo box, shown from desktop widths up where
 * the photo framing is stable.
 */
export default function OverviewSceneBrand() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {/* bay door signage — brand plate above the door number */}
      <div
        className="absolute"
        style={{ left: '11%', top: '31%', transform: 'translate(-50%, -50%)' }}
      >
        <span className="flex items-center gap-2 rounded-md bg-primary-700/90 px-2.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.35)] ring-1 ring-accent-400/45">
          <img
            src={brandLogoUrl}
            alt=""
            className="h-3.5 w-auto max-w-[3.6rem] object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-background-100/85 whitespace-nowrap">
            Bay 03
          </span>
        </span>
      </div>

      {/* stencilled marks on the wrapped pallets */}
      <BrandPatch left="27%" top="63%" width="4.6rem" surface="stencil" rotate={-5} opacity={0.85} />
      <BrandPatch left="49%" top="73%" width="5.2rem" surface="stencil" rotate={4} opacity={0.82} />
      <BrandPatch left="71%" top="65%" width="4.4rem" surface="stencil" rotate={-3} opacity={0.8} />
    </div>
  );
}