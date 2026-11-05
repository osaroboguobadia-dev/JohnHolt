export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  category: string;
  icon: string;
  description: string;
  faqs: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'general',
    category: 'General & Company',
    icon: 'ri-information-line',
    description: 'Who we are, the sectors we serve and how to reach the right team.',
    faqs: [
      {
        question: 'What does John Holt PLC do?',
        answer:
          'John Holt PLC is a long-established Nigerian business group delivering power generation, fire safety and engineering solutions, alongside trading and distribution. We serve businesses, institutions and industry with equipment, installation, maintenance and dependable after-sales support.',
      },
      {
        question: 'Which regions of Nigeria do you cover?',
        answer:
          'We serve clients across multiple states nationwide, supported by a responsive sales, installation and after-sales network that reaches where our clients operate.',
      },
      {
        question: 'Do you work with both private and public sector clients?',
        answer:
          'Yes. We partner with corporate, industrial and institutional clients across the private and public sectors, tailoring scope and compliance to each client\u2019s requirements.',
      },
      {
        question: 'How long has the company been operating?',
        answer:
          'John Holt PLC has a heritage spanning decades as a respected Nigerian institution. Our experience across power, safety and engineering is one of the reasons clients return project after project.',
      },
      {
        question: 'How do I request a quotation?',
        answer:
          'Simply use the Request a Quote button or contact form and share your requirements. Our team will review your needs and respond with clear technical and commercial options.',
      },
    ],
  },
  {
    id: 'power-generation',
    category: 'Power Generation & Generators',
    icon: 'ri-flashlight-line',
    description: 'Sizing, installation and servicing of generators and standby power systems.',
    faqs: [
      {
        question: 'Do you sell and install generators?',
        answer:
          'Yes. We supply, size, install and commission generators and standby power systems for homes, businesses and industry \u2014 matched to your true load so the system is neither undersized nor wasteful.',
      },
      {
        question: 'How do I know what size generator I need?',
        answer:
          'Our engineers carry out a proper load assessment rather than guessing. We measure your actual demand, account for starting currents and growth, then recommend a generator sized to run efficiently.',
      },
      {
        question: 'Do you offer generator maintenance contracts?',
        answer:
          'We offer planned preventive maintenance contracts covering servicing, consumables and inspections, so your standby system stays ready to perform whenever it is needed.',
      },
      {
        question: 'Can you respond to a generator breakdown urgently?',
        answer:
          'Yes. We operate 24/7 emergency support, with regional teams positioned to respond quickly to urgent breakdowns and restore power as fast as is safely possible.',
      },
      {
        question: 'Are your generators and spare parts genuine?',
        answer:
          'We supply genuine equipment and spare parts through our authorised brand partnerships and distribution network, so you get reliability, documentation and warranty support.',
      },
    ],
  },
  {
    id: 'fire-safety',
    category: 'Fire Safety & Firefighting',
    icon: 'ri-fire-line',
    description: 'Detection, suppression, compliance and firefighting equipment.',
    faqs: [
      {
        question: 'Are your fire safety systems certified?',
        answer:
          'Our fire detection and suppression solutions are designed and installed to recognised fire safety standards, and we provide compliance audits, documentation and handover records.',
      },
      {
        question: 'Do you carry out fire risk assessments?',
        answer:
          'Yes. We assess fire risk across your facility, identify gaps against recognised codes, and recommend a compliant, practical set of measures to protect people and property.',
      },
      {
        question: 'What fire systems do you install?',
        answer:
          'We install detection, alarm and warning systems as well as suppression and extinguishing systems, selecting the right combination for each environment and its risks.',
      },
      {
        question: 'Do you supply firefighting equipment and training?',
        answer:
          'Yes. We supply firefighting equipment and can train your teams on correct operation, so staff are prepared to respond confidently and safely.',
      },
      {
        question: 'Can you upgrade an existing fire safety system?',
        answer:
          'Absolutely. We regularly upgrade ageing or non-compliant systems, bringing them up to recognised standards with minimal disruption to your operations.',
      },
    ],
  },
  {
    id: 'engineering',
    category: 'Engineering & Technical Services',
    icon: 'ri-tools-line',
    description: 'Installation, retrofits, maintenance programmes and technical consultancy.',
    faqs: [
      {
        question: 'What engineering services do you provide?',
        answer:
          'We deliver electrical and mechanical engineering, industrial installation and retrofits, planned maintenance programmes, and technical consultancy including design and documentation.',
      },
      {
        question: 'Can you work with our existing team and facilities?',
        answer:
          'Yes. We integrate closely with your team and site constraints, planning work around operations and shutdowns so disruption is kept to a minimum.',
      },
      {
        question: 'Do you offer long-term maintenance programmes?',
        answer:
          'We build planned maintenance programmes tailored to your equipment and criticality, combining scheduled servicing with responsive support to maximise uptime.',
      },
      {
        question: 'Do you handle projects from design to handover?',
        answer:
          'Yes. We can take a project from consultation and design through installation and commissioning to documented handover, so nothing is left to guesswork.',
      },
      {
        question: 'Can you modernise ageing plant infrastructure?',
        answer:
          'We regularly retrofit and modernise ageing infrastructure, upgrading switchgear, distribution and controls to improve reliability, safety and efficiency.',
      },
    ],
  },
  {
    id: 'trading',
    category: 'Trading, Supply & Distribution',
    icon: 'ri-ship-2-line',
    description: 'Genuine equipment, spare parts, sourcing and nationwide logistics.',
    faqs: [
      {
        question: 'Do you supply spare parts and consumables?',
        answer:
          'Yes. We supply genuine spare parts and consumables through our distribution network, so maintenance is never delayed by the wrong or unavailable parts.',
      },
      {
        question: 'How do you handle nationwide supply?',
        answer:
          'We combine sourcing, warehousing and logistics to deliver equipment and parts to sites across states, coordinating supply so projects stay on schedule.',
      },
      {
        question: 'Can you source specific or specialist equipment?',
        answer:
          'We leverage our authorised brand partnerships and supply chains to source specialist equipment and components when a standard catalogue item will not do.',
      },
      {
        question: 'Do you offer bulk or project supply?',
        answer:
          'Yes. We support bulk and project-based supply, coordinating quantities, timelines and delivery to match your project programme and site requirements.',
      },
      {
        question: 'Are the brands you distribute authorised?',
        answer:
          'We work through authorised brand partnerships and trusted channels, which means genuine products, correct documentation and warranty support you can rely on.',
      },
    ],
  },
  {
    id: 'support',
    category: 'Service, Support & Warranty',
    icon: 'ri-customer-service-2-line',
    description: 'After-sales care, maintenance contracts and warranty support.',
    faqs: [
      {
        question: 'What after-sales support do you offer?',
        answer:
          'We provide planned preventive maintenance, responsive repairs and genuine parts, so the systems we install keep performing long after handover.',
      },
      {
        question: 'How quickly can you respond to an emergency?',
        answer:
          'We operate 24/7 service and maintenance support, with regional teams positioned to respond quickly to urgent breakdowns and minimise downtime.',
      },
      {
        question: 'Do your installations come with a warranty?',
        answer:
          'Our installations are carried out to specification and backed by warranty support. Specific terms depend on the equipment and scope, and our team will confirm them with your proposal.',
      },
      {
        question: 'Can I schedule routine servicing in advance?',
        answer:
          'Yes. Planned servicing can be scheduled in advance to suit your operations, reducing the risk of unexpected breakdowns and extending equipment life.',
      },
      {
        question: 'Do you provide documentation after service?',
        answer:
          'We maintain clear service records and provide documentation, so you have a full history of work carried out and the condition of your equipment.',
      },
    ],
  },
];

export interface FaqHighlight {
  icon: string;
  title: string;
  description: string;
}

export const faqHighlights: FaqHighlight[] = [
  {
    icon: 'ri-flashlight-line',
    title: 'Power & Generators',
    description: 'Sizing, installation, maintenance and 24/7 emergency support.',
  },
  {
    icon: 'ri-fire-line',
    title: 'Fire Safety',
    description: 'Detection, suppression, compliance and firefighting equipment.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Engineering Services',
    description: 'Installation, retrofits, maintenance and technical consultancy.',
  },
  {
    icon: 'ri-ship-2-line',
    title: 'Trading & Supply',
    description: 'Genuine equipment, spares and nationwide distribution.',
  },
];