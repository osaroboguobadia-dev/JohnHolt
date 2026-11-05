import { useMemo, useState } from 'react';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { careerDepartments, jobRoles, type JobRole } from '@/mocks/careers';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function OpenRoles({ onApply }: { onApply: (roleTitle: string) => void }) {
  const [active, setActive] = useState<string>('All Departments');
  const [openId, setOpenId] = useState<string | null>(jobRoles[0]?.id ?? null);

  const filtered = useMemo(
    () => (active === 'All Departments' ? jobRoles : jobRoles.filter((r) => r.department === active)),
    [active]
  );

  return (
    <section id="open-roles" className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Open Positions"
          title="Current Opportunities"
          description="Explore roles across engineering, power systems, fire safety, sales and corporate support."
        />

        <div className="mt-9 flex flex-wrap gap-2.5">
          {careerDepartments.map((dept) => {
            const isActive = active === dept;
            const count = dept === 'All Departments' ? jobRoles.length : jobRoles.filter((r) => r.department === dept).length;
            return (
              <button
                key={dept}
                type="button"
                onClick={() => setActive(dept)}
                aria-pressed={isActive}
                className={`cursor-pointer whitespace-nowrap inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-600 text-background-50'
                    : 'bg-background-50 border border-background-200 text-foreground-700 hover:border-primary-300'
                }`}
              >
                {dept}
                <span
                  className={`text-[11px] font-semibold rounded-full px-1.5 py-0.5 ${
                    isActive ? 'bg-background-50/20 text-background-50' : 'bg-background-200 text-foreground-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 space-y-4">
            {filtered.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                isOpen={openId === role.id}
                onToggle={() => setOpenId((prev) => (prev === role.id ? null : role.id))}
                onApply={onApply}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center py-16 bg-background-100 rounded-2xl border border-background-200">
            <span className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-background-50 text-foreground-400">
              <i className="ri-briefcase-line text-2xl"></i>
            </span>
            <p className="font-heading mt-4 text-lg font-semibold text-foreground-900">No roles in this department right now</p>
            <p className="mt-1.5 text-sm text-foreground-500">
              We are always interested in great people — send a speculative application below.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function RoleCard({
  role,
  isOpen,
  onToggle,
  onApply,
}: {
  role: JobRole;
  isOpen: boolean;
  onToggle: () => void;
  onApply: (roleTitle: string) => void;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={`bg-background-50 border rounded-2xl transition-colors overflow-hidden ${
        isOpen ? 'border-primary-300' : 'border-background-200 hover:border-primary-300'
      } ${inView ? 'animate-fade-up' : 'opacity-0'}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="cursor-pointer w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left p-6"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950">{role.title}</h3>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-secondary-900 bg-secondary-100 rounded-full px-2.5 py-1">
              {role.level}
            </span>
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm text-foreground-500">
            <span className="flex items-center gap-1.5">
              <i className="ri-building-2-line"></i>
              {role.department}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-map-pin-line"></i>
              {role.location}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-time-line"></i>
              {role.type}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-calendar-line"></i>
              Posted {formatDate(role.posted)}
            </span>
          </div>
        </div>

        <span
          className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
            isOpen ? 'bg-primary-600 border-primary-600 text-background-50' : 'border-background-200 text-foreground-600'
          }`}
        >
          <i className={`${isOpen ? 'ri-subtract-line' : 'ri-add-line'} text-lg`}></i>
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-1 border-t border-background-200 mt-1">
          <p className="mt-5 text-sm md:text-base text-foreground-600 leading-relaxed">{role.summary}</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground-950 uppercase tracking-wide">
                What You&apos;ll Do
              </h4>
              <ul className="mt-3 space-y-2.5">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-700 leading-snug">
                    <i className="ri-arrow-right-s-line text-primary-600 mt-0.5 shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground-950 uppercase tracking-wide">
                What We&apos;re Looking For
              </h4>
              <ul className="mt-3 space-y-2.5">
                {role.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-700 leading-snug">
                    <i className="ri-check-line text-accent-600 mt-0.5 shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onApply(role.title)}
            className="cursor-pointer mt-7 whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors"
          >
            Apply for this role
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      )}
    </div>
  );
}