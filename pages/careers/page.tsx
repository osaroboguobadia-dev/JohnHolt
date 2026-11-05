import { useState } from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import CareersHero from './components/CareersHero';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import OpenRoles from './components/OpenRoles';
import HiringProcess from './components/HiringProcess';
import ApplySection from './components/ApplySection';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState('');

  usePageMeta({
    title: 'Careers | John Holt PLC',
    description:
      'Join John Holt PLC. Explore open roles, benefits and our hiring process, and build a career in power, fire safety and engineering across Nigeria.',
    path: '/careers',
  });

  const handleApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const target = document.getElementById('apply');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <CareersHero />
      <WhyWorkWithUs />
      <OpenRoles onApply={handleApply} />
      <HiringProcess />
      <ApplySection selectedRole={selectedRole} />
    </>
  );
}