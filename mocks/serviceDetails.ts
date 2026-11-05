export interface ServiceStrength {
  icon: string;
  title: string;
  text: string;
}

export interface ServiceCapability {
  icon: string;
  title: string;
  text: string;
}

export interface ServiceDetailFaq {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  overviewImage: string;
  strengthsHeading: string;
  strengthsIntro: string;
  strengths: ServiceStrength[];
  capabilitiesHeading: string;
  capabilitiesIntro: string;
  capabilities: ServiceCapability[];
  faqs: ServiceDetailFaq[];
}

export const serviceDetails: ServiceDetailData[] = [
  {
    slug: 'power-generation',
    name: 'Power Generation & Generators',
    shortName: 'Power Generation',
    icon: 'ri-flashlight-line',
    eyebrow: 'Power Generation & Generators',
    heroTitle: 'Power That Never Lets Your Business Down',
    heroDescription:
      'Generator sales, turnkey installation and round-the-clock servicing — sized correctly, installed properly and supported for the long run.',
    heroImage:
      'https://static.readdy.ai/image/c6e5abfce77454c22db1d81a54ed6a5f/0ad9f4a3a131668f8afa38531b17ba21.webp',
    overviewHeading: 'Dependable Power, Engineered Around Your Load',
    overviewParagraphs: [
      'For any operation where an outage means lost production, spoiled stock or missed commitments, dependable power is not a luxury — it is a lifeline. John Holt supplies, installs and maintains generators and power systems sized precisely for the load they need to carry.',
      'From a single standby generator for a retail outlet to multi-unit systems for industrial facilities, our engineers manage the full journey — load assessment, equipment selection, supply, installation, commissioning, servicing and genuine spare parts.',
    ],
    overviewImage:
      'https://readdy.ai/api/search-image?query=industrial%20generator%20hall%20with%20large%20power%20generators%20and%20control%20panels%2C%20warm%20golden%20light%20streaming%20through%20tall%20high%20windows%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20clean%20composition%20with%20strong%20contrast%20and%20sense%20of%20reliability&width=1200&height=900&seq=jh-service-power-overview-01&orientation=landscape',
    strengthsHeading: 'Why Clients Choose Our Power Team',
    strengthsIntro:
      'Every installation is backed by the same discipline: do it right the first time, then keep it running.',
    strengths: [
      {
        icon: 'ri-scales-3-line',
        title: 'Right-sized from the start',
        text: 'We calculate your true load and duty cycle so you never pay for more power than you need — or come up short when it counts.',
      },
      {
        icon: 'ri-hammer-line',
        title: 'Turnkey installation',
        text: 'Site preparation, fuel systems, switchgear, wiring and commissioning are handled end to end by our own teams.',
      },
      {
        icon: 'ri-customer-service-2-line',
        title: 'Round-the-clock support',
        text: '24/7 emergency response and planned preventive maintenance keep your power systems ready at all times.',
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Genuine parts & brands',
        text: 'We supply authentic components and equipment through authorised brand partnerships, backed by real warranties.',
      },
    ],
    capabilitiesHeading: 'What We Deliver',
    capabilitiesIntro:
      'A complete power service — from the first site survey to years of dependable after-sales support.',
    capabilities: [
      {
        icon: 'ri-flashlight-line',
        title: 'Generator Sales & Sizing',
        text: 'Standby and prime-power generators selected to match your load, site and operating conditions.',
      },
      {
        icon: 'ri-tools-line',
        title: 'Installation & Commissioning',
        text: 'Professional installation, testing and handover with full documentation for every system.',
      },
      {
        icon: 'ri-settings-3-line',
        title: 'Preventive Maintenance',
        text: 'Scheduled servicing and inspections that prevent breakdowns and extend equipment life.',
      },
      {
        icon: 'ri-service-line',
        title: 'Emergency Repair — 24/7',
        text: 'Rapid response breakdown support so an unexpected fault never becomes a long outage.',
      },
      {
        icon: 'ri-archive-2-line',
        title: 'Genuine Spare Parts',
        text: 'Authentic spares, consumables and accessories supplied through authorised channels.',
      },
      {
        icon: 'ri-oil-line',
        title: 'Fuel & Control Systems',
        text: 'Fuel storage, delivery and control-panel solutions integrated with your generator system.',
      },
    ],
    faqs: [
      {
        question: 'How do I know what size generator my business needs?',
        answer:
          'Our engineers carry out a load assessment of your facility, reviewing connected equipment, starting loads and duty cycle, then recommend the correct rating with headroom for growth.',
      },
      {
        question: 'Do you install the generator as well as supply it?',
        answer:
          'Yes. We provide turnkey installation including foundations, fuel systems, switchgear, wiring, testing and commissioning, so you deal with a single accountable team.',
      },
      {
        question: 'What maintenance do you provide after installation?',
        answer:
          'We offer planned preventive maintenance contracts covering servicing, inspections, consumables and genuine parts, alongside 24/7 emergency breakdown support.',
      },
      {
        question: 'Can you service generators you did not supply?',
        answer:
          'In most cases, yes. Our service teams work across major generator brands and can take over the maintenance of your existing equipment.',
      },
      {
        question: 'How quickly can you respond to a breakdown?',
        answer:
          'We operate round-the-clock emergency support with regional teams positioned to respond quickly and get you back up and running.',
      },
    ],
  },
  {
    slug: 'fire-safety',
    name: 'Fire Safety & Firefighting Solutions',
    shortName: 'Fire Safety',
    icon: 'ri-fire-line',
    eyebrow: 'Fire Safety & Firefighting',
    heroTitle: 'Protection Designed Around Your Risk',
    heroDescription:
      'Certified fire detection, suppression and firefighting systems that safeguard people, property and operations — assessed, installed and maintained to recognised standards.',
    heroImage:
      'https://static.readdy.ai/image/c6e5abfce77454c22db1d81a54ed6a5f/985b5c056cacca7938f2de9ae79da77c.webp',
    overviewHeading: 'Fire Safety That Starts With Understanding the Risk',
    overviewParagraphs: [
      'Effective fire protection is never one-size-fits-all. It begins with a proper assessment of your building, your operations and the people inside them — then a system designed to match that exact risk profile.',
      'John Holt delivers the full spectrum: risk assessments and compliance audits, detection and alarm systems, suppression and extinguishing solutions, firefighting equipment supply, installation, commissioning, maintenance and staff training.',
    ],
    overviewImage:
      'https://readdy.ai/api/search-image?query=fire%20safety%20control%20room%20with%20fire%20detection%20alarm%20panels%20and%20red%20firefighting%20equipment%20neatly%20arranged%2C%20dramatic%20warm%20lighting%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20clean%20composition%20with%20sense%20of%20protection%20and%20readiness&width=1200&height=900&seq=jh-service-fire-overview-01&orientation=landscape',
    strengthsHeading: 'Why Clients Trust Our Fire Team',
    strengthsIntro:
      'Compliance, reliability and clear documentation — so you are always inspection-ready and genuinely protected.',
    strengths: [
      {
        icon: 'ri-file-shield-2-line',
        title: 'Standards-led design',
        text: 'Systems are designed and installed to recognised fire safety standards, with compliance documentation provided.',
      },
      {
        icon: 'ri-search-eye-line',
        title: 'Assessment before hardware',
        text: 'We start with a genuine risk assessment, so every detector and extinguisher earns its place.',
      },
      {
        icon: 'ri-user-star-line',
        title: 'People, not just systems',
        text: 'We train your teams on equipment use and emergency response, because the human factor saves lives.',
      },
      {
        icon: 'ri-refresh-line',
        title: 'Maintained, not forgotten',
        text: 'Planned servicing and inspections keep detection and suppression systems ready every single day.',
      },
    ],
    capabilitiesHeading: 'What We Deliver',
    capabilitiesIntro:
      'A complete fire safety service — from compliance audit through to training and ongoing maintenance.',
    capabilities: [
      {
        icon: 'ri-clipboard-line',
        title: 'Risk Assessments & Audits',
        text: 'Detailed fire risk assessments and compliance audits that identify hazards and prioritise action.',
      },
      {
        icon: 'ri-alarm-warning-line',
        title: 'Detection & Alarm Systems',
        text: 'Smoke, heat and multi-sensor detection with alarms and warning systems tailored to your site.',
      },
      {
        icon: 'ri-water-flash-line',
        title: 'Suppression & Extinguishing',
        text: 'Sprinkler, gas, foam and specialised suppression systems engineered for the hazard they protect.',
      },
      {
        icon: 'ri-fire-line',
        title: 'Firefighting Equipment Supply',
        text: 'Extinguishers, hydrants, hose reels and firefighting equipment supplied and commissioned.',
      },
      {
        icon: 'ri-tools-line',
        title: 'Installation & Commissioning',
        text: 'Certified installation, testing and commissioning with clear as-built documentation.',
      },
      {
        icon: 'ri-graduation-cap-line',
        title: 'Maintenance & Training',
        text: 'Scheduled servicing, inspections and staff fire-response training to keep everyone prepared.',
      },
    ],
    faqs: [
      {
        question: 'Are your fire safety systems certified?',
        answer:
          'Our detection and suppression solutions are designed and installed to recognised fire safety standards, and we provide compliance documentation for each project.',
      },
      {
        question: 'Can you carry out a fire risk assessment for us?',
        answer:
          'Yes. We conduct detailed fire risk assessments that identify hazards, evaluate existing controls and recommend clear, prioritised actions.',
      },
      {
        question: 'Do you supply firefighting equipment as well as install it?',
        answer:
          'We supply, install and commission extinguishers, hydrants, hose reels and other firefighting equipment, then support it with maintenance.',
      },
      {
        question: 'Do you provide training for our staff?',
        answer:
          'Yes. We deliver practical fire-response and equipment-use training so your teams know exactly what to do in an emergency.',
      },
      {
        question: 'How often should fire systems be serviced?',
        answer:
          'Servicing frequency depends on the system and applicable standards. We set up a maintenance schedule that keeps you compliant and always inspection-ready.',
      },
    ],
  },
  {
    slug: 'engineering-services',
    name: 'Engineering & Technical Services',
    shortName: 'Engineering Services',
    icon: 'ri-tools-line',
    eyebrow: 'Engineering & Technical Services',
    heroTitle: 'Expertise That Keeps Operations Moving',
    heroDescription:
      'End-to-end electrical, mechanical and industrial engineering — installation, retrofits, planned maintenance and technical consultancy backed by decades of know-how.',
    heroImage:
      'https://public.readdy.ai/ai/img_res/edited_1aaa0bed2b4220c1a738e35e055f0e90_62bcda6b.jpg',
    overviewHeading: 'Engineering Support You Can Build a Business On',
    overviewParagraphs: [
      'Behind every reliable operation is engineering done properly. John Holt provides the technical capability that keeps industries, institutions and infrastructure running — from electrical and mechanical works to industrial installation, retrofits and planned maintenance.',
      'Our teams bring decades of hands-on experience and a practical, safety-first approach, supported by design and documentation that gives you confidence long after the work is done.',
    ],
    overviewImage:
      'https://readdy.ai/api/search-image?query=precision%20engineering%20workshop%20with%20technicians%20working%20on%20machinery%20and%20blueprints%2C%20warm%20industrial%20lighting%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20clean%20composition%20with%20strong%20contrast%20and%20sense%20of%20craft&width=1200&height=900&seq=jh-service-engineering-overview-01&orientation=landscape',
    strengthsHeading: 'Why Clients Partner With Our Engineers',
    strengthsIntro:
      'Multidisciplinary expertise, disciplined execution and support that continues well beyond handover.',
    strengths: [
      {
        icon: 'ri-stack-line',
        title: 'Multidisciplinary teams',
        text: 'Electrical, mechanical and installation specialists working together under one accountable partner.',
      },
      {
        icon: 'ri-shield-star-line',
        title: 'Safety-first execution',
        text: 'Every job is planned and delivered with strict safety discipline and minimal disruption to your operations.',
      },
      {
        icon: 'ri-line-chart-line',
        title: 'Planned, not reactive',
        text: 'Structured maintenance programmes that reduce downtime and extend the life of your assets.',
      },
      {
        icon: 'ri-draft-line',
        title: 'Clear documentation',
        text: 'Design drawings, method statements and as-built records handed over so nothing is left to guesswork.',
      },
    ],
    capabilitiesHeading: 'What We Deliver',
    capabilitiesIntro:
      'A broad technical skill set covering design, installation, maintenance and consultancy.',
    capabilities: [
      {
        icon: 'ri-plug-2-line',
        title: 'Electrical Engineering',
        text: 'Power distribution, control systems and electrical works designed and executed to standard.',
      },
      {
        icon: 'ri-settings-5-line',
        title: 'Mechanical Engineering',
        text: 'Mechanical systems, machinery works and plant support delivered by experienced engineers.',
      },
      {
        icon: 'ri-building-3-line',
        title: 'Industrial Installation & Retrofits',
        text: 'New installations and upgrades of existing plant and equipment, executed with minimal downtime.',
      },
      {
        icon: 'ri-calendar-check-line',
        title: 'Planned Maintenance',
        text: 'Structured maintenance programmes that keep critical systems running reliably year after year.',
      },
      {
        icon: 'ri-lightbulb-flash-line',
        title: 'Technical Consultancy',
        text: 'Engineering advice, feasibility input and design support for projects of every scale.',
      },
      {
        icon: 'ri-file-list-3-line',
        title: 'Design & Documentation',
        text: 'Drawings, specifications and as-built records that make your systems easy to operate and maintain.',
      },
    ],
    faqs: [
      {
        question: 'What kinds of engineering projects do you take on?',
        answer:
          'We handle electrical, mechanical and industrial installation work — from focused upgrades and retrofits to complete engineering packages for facilities and infrastructure.',
      },
      {
        question: 'Do you work on existing systems or only new installations?',
        answer:
          'Both. We install new systems and also extend, repair, upgrade and maintain existing plant and equipment across many industries.',
      },
      {
        question: 'Can you provide ongoing maintenance after a project?',
        answer:
          'Yes. We offer planned maintenance programmes that keep your systems performing after the project is handed over.',
      },
      {
        question: 'Do you provide design and documentation?',
        answer:
          'We provide engineering design, drawings, specifications and as-built documentation so your systems are fully understood and maintainable.',
      },
      {
        question: 'Which industries do you support?',
        answer:
          'We support manufacturing, oil and gas, banking, healthcare, government, retail, hospitality, education and more.',
      },
    ],
  },
  {
    slug: 'marine-boat-building',
    name: 'Marine & Boat Building',
    shortName: 'Marine & Boat Building',
    icon: 'ri-sailboat-line',
    eyebrow: 'Marine & Boat Building',
    heroTitle: 'Vessels Built for Nigeria’s Waterways',
    heroDescription:
      'Design, construction, refit and repair of workboats, patrol craft and passenger vessels — delivered by shipwrights and marine engineers who understand what the water demands.',
    heroImage:
      'https://readdy.ai/api/search-image?query=Wide%20realistic%20editorial%20photograph%20of%20a%20coastal%20boat%20building%20yard%20in%20Nigeria%20with%20a%20large%20workboat%20hull%20under%20construction%20on%20timber%20cradles%2C%20African%20shipwrights%20in%20overalls%20and%20hard%20hats%20working%20along%20the%20hull%2C%20timber%20frames%20and%20tools%20around%2C%20warm%20late%20afternoon%20light%20over%20calm%20tidal%20water%2C%20muted%20teal%20and%20ochre%20tones%2C%20cinematic%20documentary%20style%2C%20no%20text%2C%20high%20detail&width=1600&height=900&seq=jh-service-marine-hero-01&orientation=landscape',
    overviewHeading: 'Marine Engineering Rooted in Craft',
    overviewParagraphs: [
      'A boat is only as good as the hands that built it. John Holt brings together experienced shipwrights and marine engineers to design and construct workboats, patrol craft and passenger vessels suited to the conditions they will actually face — shallow creeks, open coastal waters or busy inland routes.',
      'We also keep working vessels working. Refits, hull repairs, engine replacement and full outfitting are carried out in our yard, with genuine marine components and the documentation operators need for survey and compliance.',
    ],
    overviewImage:
      'https://readdy.ai/api/search-image?query=boat%20building%20workshop%20with%20timber%20frames%20and%20fibreglass%20hull%20sections%20under%20construction%2C%20hand%20tools%20and%20clamps%20arranged%20on%20workbenches%2C%20warm%20golden%20light%20through%20open%20workshop%20doors%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20clean%20composition%20with%20strong%20contrast%20and%20sense%20of%20craftsmanship&width=1200&height=900&seq=jh-service-marine-overview-01&orientation=landscape',
    strengthsHeading: 'Why Operators Build With Us',
    strengthsIntro:
      'Real boatbuilding skill, vessels matched to the route they serve, and support long after launch.',
    strengths: [
      {
        icon: 'ri-hammer-line',
        title: 'Built by craftsmen',
        text: 'Experienced shipwrights and marine engineers who shape, fit and finish every hull to a proper standard.',
      },
      {
        icon: 'ri-compasses-2-line',
        title: 'Specified for your water',
        text: 'Hull form, draught, power and layout chosen around the waters you operate in and the cargo you carry.',
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Genuine marine components',
        text: 'Engines, fittings and safety equipment supplied through authorised channels with real warranties.',
      },
      {
        icon: 'ri-tools-line',
        title: 'Supported after launch',
        text: 'Refits, repairs and scheduled maintenance keep your vessel in service, not tied up waiting for parts.',
      },
    ],
    capabilitiesHeading: 'What We Deliver',
    capabilitiesIntro:
      'A complete marine service — from first design sketches through launch, refit and long-term vessel support.',
    capabilities: [
      {
        icon: 'ri-draft-line',
        title: 'Boat Design & Specification',
        text: 'Hull form, layout, power and capacity worked out around your route, cargo and operating conditions.',
      },
      {
        icon: 'ri-hammer-line',
        title: 'New Build Construction',
        text: 'Workboats, patrol craft, ferries and barges built in timber, fibreglass or aluminium at our yard.',
      },
      {
        icon: 'ri-settings-3-line',
        title: 'Engine & Systems Installation',
        text: 'Outboards, inboards, shafting, steering and vessel electrical systems fitted and commissioned.',
      },
      {
        icon: 'ri-tools-line',
        title: 'Refit, Repair & Hull Works',
        text: 'Hull repairs, deck replacement and full refits that bring working vessels back into reliable service.',
      },
      {
        icon: 'ri-anchor-line',
        title: 'Outfitting & Safety Equipment',
        text: 'Navigation, lighting, deck gear and safety equipment supplied and installed to standard.',
      },
      {
        icon: 'ri-compasses-2-line',
        title: 'Marine Engineering Support',
        text: 'Surveys, technical advice and scheduled maintenance for vessels already operating.',
      },
    ],
    faqs: [
      {
        question: 'What kinds of vessels do you build?',
        answer:
          'We build workboats, crew and patrol craft, passenger ferries and barges, along with smaller utility boats. Tell us the route, load and conditions and we will propose a suitable design.',
      },
      {
        question: 'Can you repair or refit a boat you did not build?',
        answer:
          'Yes. Our yard takes on hull repairs, deck works, engine replacement and full refits on vessels of any origin, once we have surveyed the condition.',
      },
      {
        question: 'Which materials do you work in?',
        answer:
          'Timber, marine plywood, fibreglass (GRP) and aluminium. The right choice depends on the vessel’s use, the waters it operates in and the maintenance regime you can support.',
      },
      {
        question: 'How long does a new build take?',
        answer:
          'It depends on size and specification. Once the design is agreed we set out a build schedule with milestone dates and keep you updated on progress at the yard.',
      },
      {
        question: 'Do you supply engines and marine equipment?',
        answer:
          'We supply genuine marine engines, fittings, navigation and safety equipment through authorised channels, with warranties and installation included where required.',
      },
    ],
  },
  {
    slug: 'renewable-energy',
    name: 'Renewable Energy & Solar Solutions',
    shortName: 'Renewable Energy',
    icon: 'ri-sun-line',
    eyebrow: 'Renewable Energy & Solar',
    heroTitle: 'Clean Power That Keeps Costs Down',
    heroDescription:
      'Solar, hybrid and battery-storage systems engineered around your real energy profile — designed, installed and maintained to cut fuel spend and keep the lights on.',
    heroImage:
      'https://readdy.ai/api/search-image?query=Wide%20realistic%20editorial%20photograph%20of%20a%20large%20solar%20panel%20array%20on%20the%20roof%20of%20a%20modern%20Nigerian%20commercial%20building%20at%20golden%20hour%2C%20an%20African%20engineer%20in%20a%20white%20hard%20hat%20walking%20along%20the%20array%20checking%20panels%2C%20warm%20amber%20sunlight%2C%20clear%20deep%20sky%2C%20muted%20earth%20and%20steel%20tones%2C%20cinematic%20documentary%20style%2C%20no%20text%2C%20high%20detail&width=1600&height=900&seq=jh-service-renewable-hero-01&orientation=landscape',
    overviewHeading: 'Solar Done Right, Not Just Installed',
    overviewParagraphs: [
      'Renewable energy only pays back when the system is sized for how you actually use power. John Holt starts with an energy audit — reviewing your load profile, tariff exposure, generator running hours and roof or ground space — then designs a solar or hybrid system that delivers a measurable saving.',
      'From panel arrays and inverters to battery storage and controls, we handle supply, installation, commissioning and ongoing maintenance, and we integrate cleanly with your existing generator and grid supply so nothing is left stranded.',
    ],
    overviewImage:
      'https://readdy.ai/api/search-image?query=solar%20inverter%20and%20battery%20storage%20room%20with%20neatly%20mounted%20inverters%2C%20battery%20banks%20and%20monitoring%20screens%2C%20warm%20golden%20light%20through%20a%20side%20window%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20clean%20composition%20with%20strong%20contrast%20and%20sense%20of%20modern%20efficiency&width=1200&height=900&seq=jh-service-renewable-overview-01&orientation=landscape',
    strengthsHeading: 'Why Clients Choose Our Energy Team',
    strengthsIntro:
      'Measured savings, proper engineering and systems that keep performing years after commissioning.',
    strengths: [
      {
        icon: 'ri-line-chart-line',
        title: 'Sized on real data',
        text: 'Every proposal starts with an energy audit of your actual consumption, so the numbers on paper hold up in practice.',
      },
      {
        icon: 'ri-plug-2-line',
        title: 'Hybrid by design',
        text: 'Solar, battery, generator and grid working together on one control strategy — never a system that fights itself.',
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Quality components',
        text: 'Tier-one panels, proven inverters and genuine batteries supplied through authorised channels with real warranties.',
      },
      {
        icon: 'ri-tools-line',
        title: 'Looked after for years',
        text: 'Planned cleaning, inspection and performance checks keep output where it should be, season after season.',
      },
    ],
    capabilitiesHeading: 'What We Deliver',
    capabilitiesIntro:
      'A complete renewable energy service — from audit and design through to installation and lifetime support.',
    capabilities: [
      {
        icon: 'ri-survey-line',
        title: 'Energy Audits & Feasibility',
        text: 'Load profiling, site assessment and payback modelling before a single panel is ordered.',
      },
      {
        icon: 'ri-sun-line',
        title: 'Solar PV Design & Installation',
        text: 'Rooftop and ground-mount arrays engineered for your site, structure and yield targets.',
      },
      {
        icon: 'ri-battery-charge-line',
        title: 'Battery Storage & Inverters',
        text: 'Battery banks, hybrid inverters and monitoring supplied, installed and configured.',
      },
      {
        icon: 'ri-flashlight-line',
        title: 'Hybrid & Backup Integration',
        text: 'Solar integrated cleanly with your generators and grid supply for seamless switching.',
      },
      {
        icon: 'ri-water-flash-line',
        title: 'Solar Water & Street Lighting',
        text: 'Solar water heating, borehole pumping and off-grid lighting for sites without reliable power.',
      },
      {
        icon: 'ri-refresh-line',
        title: 'Maintenance & Monitoring',
        text: 'Panel cleaning, inspections and performance reporting that protect your investment.',
      },
    ],
    faqs: [
      {
        question: 'How much can solar actually save my business?',
        answer:
          'Savings depend on your load profile, daytime consumption and current fuel or tariff costs. We carry out an energy audit and model the expected payback before recommending a system.',
      },
      {
        question: 'Can solar work alongside my existing generator?',
        answer:
          'Yes. Hybrid systems are one of our most common installations — solar and battery carry the base load while your generator covers peaks or extended cloudy periods.',
      },
      {
        question: 'Do you handle installation and commissioning?',
        answer:
          'We deliver turnkey installation including mounting structures, wiring, inverters, battery storage, testing and commissioning, with documentation at handover.',
      },
      {
        question: 'What maintenance does a solar system need?',
        answer:
          'Mainly periodic cleaning, inspection of connections and mounting, and performance checks on inverters and batteries. We offer scheduled maintenance plans for all systems we install.',
      },
      {
        question: 'Do you supply systems for homes as well as industry?',
        answer:
          'Yes. We design systems ranging from small residential backups through to commercial and industrial-scale solar installations.',
      },
    ],
  },
  {
    slug: 'warehousing-logistics',
    name: 'Warehousing & Inventory Management',
    shortName: 'Warehousing',
    icon: 'ri-archive-line',
    eyebrow: 'Warehousing & Inventory Management',
    heroTitle: 'Storage and Distribution You Can Rely On',
    heroDescription:
      'Secure warehousing, disciplined inventory control and dependable distribution — so your stock is always accounted for and always where it needs to be.',
    heroImage:
      'https://public.readdy.ai/ai/img_res/edited_67595e659193c5c979f7f22c8beded10_b3b2259a.jpg',
    overviewHeading: 'A Warehouse That Works Like Clockwork',
    overviewParagraphs: [
      'Stock that cannot be found is stock that cannot be sold. John Holt provides organised, secure warehousing supported by clear inventory systems — every item received, stored, tracked and dispatched under proper control.',
      'Our facilities and processes are built for real operating conditions in Nigeria: disciplined handling, accurate records, safe storage for sensitive or high-value goods, and distribution support that reaches customers and project sites nationwide.',
    ],
    overviewImage:
      'https://readdy.ai/api/search-image?query=warehouse%20dispatch%20bay%20with%20wrapped%20pallets%20lined%20up%20beside%20loading%20doors%20and%20a%20delivery%20truck%20backed%20in%2C%20orderly%20inventory%20shelving%20in%20the%20background%2C%20warm%20golden%20light%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20clean%20composition%20with%20strong%20contrast%20and%20sense%20of%20organisation&width=1200&height=900&seq=jh-service-warehouse-overview-01&orientation=landscape',
    strengthsHeading: 'Why Clients Store With Us',
    strengthsIntro:
      'Accurate records, secure space and a distribution network that keeps your stock moving.',
    strengths: [
      {
        icon: 'ri-lock-2-line',
        title: 'Secure, monitored space',
        text: 'Controlled access, security presence and organised racking that protect your goods around the clock.',
      },
      {
        icon: 'ri-file-list-3-line',
        title: 'Accurate inventory records',
        text: 'Goods received, stored and issued against documented processes, with regular stock counts you can trust.',
      },
      {
        icon: 'ri-truck-line',
        title: 'Dispatch that keeps up',
        text: 'Coordinated loading and delivery so orders leave on time and arrive where they were promised.',
      },
      {
        icon: 'ri-map-pin-2-line',
        title: 'Nationwide reach',
        text: 'Backed by our distribution network, reaching businesses and project sites across multiple states.',
      },
    ],
    capabilitiesHeading: 'What We Deliver',
    capabilitiesIntro:
      'A complete storage and distribution service — from goods-in through to final delivery.',
    capabilities: [
      {
        icon: 'ri-archive-line',
        title: 'Secure Storage',
        text: 'Racked and bulk storage for equipment, spares, fast-moving goods and project materials.',
      },
      {
        icon: 'ri-file-chart-line',
        title: 'Inventory Management',
        text: 'Stock recording, tracking and reconciliation so you always know what you hold and where it is.',
      },
      {
        icon: 'ri-box-3-line',
        title: 'Handling & Palletising',
        text: 'Careful handling, wrapping and palletising to protect goods through every movement.',
      },
      {
        icon: 'ri-route-line',
        title: 'Order Fulfilment',
        text: 'Picking, packing and dispatch managed against agreed turnaround times.',
      },
      {
        icon: 'ri-truck-line',
        title: 'Distribution & Delivery',
        text: 'Coordinated transport getting goods to customers and sites nationwide.',
      },
      {
        icon: 'ri-customer-service-2-line',
        title: 'Project Stock Support',
        text: 'Holding and staged release of materials for projects, so sites get what they need when they need it.',
      },
    ],
    faqs: [
      {
        question: 'What types of goods can you store?',
        answer:
          'We store equipment, spare parts, fast-moving consumer goods, project materials and general cargo. Tell us about anything sensitive or oversized and we will confirm suitable space.',
      },
      {
        question: 'How do you keep track of our stock?',
        answer:
          'All goods received and issued are recorded against documented processes, with regular stock counts and reconciliation so records stay accurate.',
      },
      {
        question: 'Can you handle distribution as well as storage?',
        answer:
          'Yes. We provide order fulfilment and delivery supported by our nationwide distribution network, so storage and delivery work as one service.',
      },
      {
        question: 'Do you offer short-term or project-based storage?',
        answer:
          'We can accommodate project-based requirements, including staged release of materials to site over the life of a project. Talk to us about the duration you need.',
      },
      {
        question: 'Is the warehouse secure?',
        answer:
          'Our facilities operate with controlled access, security presence and organised racking to protect stored goods at all times.',
      },
    ],
  },
];

export const getServiceDetail = (slug: string): ServiceDetailData | undefined =>
  serviceDetails.find((d) => d.slug === slug);