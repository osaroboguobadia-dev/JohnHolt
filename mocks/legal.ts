export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalDoc = {
  slug: 'privacy-policy',
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  description:
    'How John Holt PLC collects, uses, shares and protects the personal information you provide when you use our website and services.',
  updated: '1 January 2026',
  intro:
    'This Privacy Policy explains how John Holt PLC ("we", "us", "our") handles personal information when you visit our website, submit an enquiry, apply for a role or otherwise interact with us. We are committed to protecting your privacy and handling your information responsibly and transparently.',
  sections: [
    {
      id: 'information-we-collect',
      heading: '1. Information We Collect',
      blocks: [
        {
          type: 'paragraph',
          text: 'We collect information that you voluntarily provide to us and certain information that is collected automatically when you use our website.',
        },
        {
          type: 'list',
          items: [
            'Information you give us — such as your name, company, email address, telephone number and the contents of any message you send through our enquiry, quote, partnership or careers forms.',
            'Information collected automatically — such as your IP address, browser type, device information, pages viewed and the dates and times of your visits.',
            'Information from cookies — small files stored on your device that help the website function and help us understand how it is used, as described in our Cookie Policy.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use',
      heading: '2. How We Use Your Information',
      blocks: [
        {
          type: 'paragraph',
          text: 'We use the information we collect for the following purposes:',
        },
        {
          type: 'list',
          items: [
            'To respond to your enquiries, quotations and service requests.',
            'To provide, operate and improve our products, solutions and services.',
            'To process job and partnership applications you submit to us.',
            'To send you relevant updates where you have asked to receive them.',
            'To maintain the security, integrity and performance of our website.',
            'To comply with our legal, regulatory and contractual obligations.',
          ],
        },
      ],
    },
    {
      id: 'legal-basis',
      heading: '3. Legal Basis for Processing',
      blocks: [
        {
          type: 'paragraph',
          text: 'We process personal information only where we have a lawful basis to do so. This may include your consent, the performance of a contract with you, our legitimate business interests, or compliance with a legal obligation to which we are subject.',
        },
      ],
    },
    {
      id: 'sharing',
      heading: '4. Sharing Your Information',
      blocks: [
        {
          type: 'paragraph',
          text: 'We do not sell your personal information. We may share it with trusted third parties only where necessary, including:',
        },
        {
          type: 'list',
          items: [
            'Service providers who support our operations, such as IT, hosting and communications providers, under appropriate confidentiality obligations.',
            'Professional advisers, including auditors and legal advisers, where required.',
            'Regulatory, governmental or law-enforcement bodies where we are required or permitted to do so by law.',
          ],
        },
      ],
    },
    {
      id: 'retention',
      heading: '5. Data Retention',
      blocks: [
        {
          type: 'paragraph',
          text: 'We retain personal information only for as long as it is needed to fulfil the purposes for which it was collected, or as required to meet legal, accounting or reporting obligations. When information is no longer required, we securely delete or anonymise it.',
        },
      ],
    },
    {
      id: 'security',
      heading: '6. How We Protect Your Information',
      blocks: [
        {
          type: 'paragraph',
          text: 'We apply appropriate technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure or destruction. While we take security seriously, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.',
        },
      ],
    },
    {
      id: 'your-rights',
      heading: '7. Your Rights',
      blocks: [
        {
          type: 'paragraph',
          text: 'Subject to applicable law, you may have the right to:',
        },
        {
          type: 'list',
          items: [
            'Request access to the personal information we hold about you.',
            'Ask us to correct information that is inaccurate or incomplete.',
            'Ask us to delete information that we no longer have a lawful reason to keep.',
            'Object to or restrict certain processing of your information.',
            'Withdraw consent at any time where processing is based on your consent.',
          ],
        },
        {
          type: 'paragraph',
          text: 'To exercise any of these rights, please contact us using the details below.',
        },
      ],
    },
    {
      id: 'changes',
      heading: '8. Changes to This Policy',
      blocks: [
        {
          type: 'paragraph',
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or the law. When we make material changes, we will update the date shown at the top of this page. We encourage you to review this policy periodically.',
        },
      ],
    },
    {
      id: 'contact',
      heading: '9. Contact Us',
      blocks: [
        {
          type: 'paragraph',
          text: 'If you have questions about this Privacy Policy or how we handle your information, please contact us at marketingteam@jhplc.com or by post at our head office address shown on the Contact page.',
        },
      ],
    },
  ],
};

export const termsConditions: LegalDoc = {
  slug: 'terms-conditions',
  eyebrow: 'Legal',
  title: 'Terms & Conditions',
  description:
    'The terms governing your access to and use of the John Holt PLC website and the content and services made available through it.',
  updated: '1 January 2026',
  intro:
    'These Terms & Conditions ("Terms") govern your access to and use of the John Holt PLC website and any content, features or services made available through it. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use the website.',
  sections: [
    {
      id: 'acceptance',
      heading: '1. Acceptance of Terms',
      blocks: [
        {
          type: 'paragraph',
          text: 'By using this website you confirm that you are able to enter into a binding agreement and that you accept these Terms in full. These Terms apply to all visitors and users of the website.',
        },
      ],
    },
    {
      id: 'use-of-website',
      heading: '2. Use of the Website',
      blocks: [
        {
          type: 'paragraph',
          text: 'You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the website by any third party. In particular, you must not:',
        },
        {
          type: 'list',
          items: [
            'Use the website in any way that is unlawful, fraudulent or harmful.',
            'Attempt to gain unauthorised access to the website, its servers or any connected systems.',
            'Introduce viruses, malware or any other harmful material.',
            'Reproduce, duplicate or resell any part of the website in breach of these Terms.',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      heading: '3. Intellectual Property',
      blocks: [
        {
          type: 'paragraph',
          text: 'All content on this website, including text, graphics, logos, images, and the design and arrangement of the site, is owned by or licensed to John Holt PLC and is protected by applicable intellectual property laws. You may view and print content for your own reference, but you may not otherwise copy, reproduce, distribute or exploit it without our prior written consent.',
        },
      ],
    },
    {
      id: 'services-information',
      heading: '4. Service Information & Availability',
      blocks: [
        {
          type: 'paragraph',
          text: 'Information on this website about our products, solutions and services is provided for general information. Specifications, availability and pricing are subject to change and may vary by project. Any quotation or proposal we issue is subject to a separate written agreement between us.',
        },
      ],
    },
    {
      id: 'third-party-links',
      heading: '5. Third-Party Links',
      blocks: [
        {
          type: 'paragraph',
          text: 'Our website may contain links to third-party websites. These links are provided for your convenience only. We do not control and are not responsible for the content, policies or practices of any third-party websites, and the inclusion of a link does not imply our endorsement.',
        },
      ],
    },
    {
      id: 'limitation-liability',
      heading: '6. Limitation of Liability',
      blocks: [
        {
          type: 'paragraph',
          text: 'The website and its content are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we exclude all warranties and shall not be liable for any loss or damage arising from your use of, or inability to use, the website or any content on it. Nothing in these Terms limits liability that cannot be limited under applicable law.',
        },
      ],
    },
    {
      id: 'indemnity',
      heading: '7. Indemnity',
      blocks: [
        {
          type: 'paragraph',
          text: 'You agree to indemnify and hold harmless John Holt PLC, its officers, employees and agents from any claims, liabilities, damages, losses or expenses arising out of your breach of these Terms or your misuse of the website.',
        },
      ],
    },
    {
      id: 'governing-law',
      heading: '8. Governing Law',
      blocks: [
        {
          type: 'paragraph',
          text: 'These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the Nigerian courts.',
        },
      ],
    },
    {
      id: 'changes-terms',
      heading: '9. Changes to These Terms',
      blocks: [
        {
          type: 'paragraph',
          text: 'We may revise these Terms at any time by updating this page. Your continued use of the website after any change constitutes acceptance of the revised Terms.',
        },
      ],
    },
    {
      id: 'contact-terms',
      heading: '10. Contact Us',
      blocks: [
        {
          type: 'paragraph',
          text: 'If you have any questions about these Terms, please contact us at marketingteam@jhplc.com.',
        },
      ],
    },
  ],
};

export const cookiePolicy: LegalDoc = {
  slug: 'cookie-policy',
  eyebrow: 'Legal',
  title: 'Cookie Policy',
  description:
    'How John Holt PLC uses cookies and similar technologies on this website, and how you can manage your preferences.',
  updated: '1 January 2026',
  intro:
    'This Cookie Policy explains how John Holt PLC uses cookies and similar technologies on our website. It describes what these technologies are, why we use them, and the choices you have to control them.',
  sections: [
    {
      id: 'what-are-cookies',
      heading: '1. What Are Cookies?',
      blocks: [
        {
          type: 'paragraph',
          text: 'Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to the owners of the site. Cookies may be "session" cookies, which are deleted when you close your browser, or "persistent" cookies, which remain on your device for a set period.',
        },
      ],
    },
    {
      id: 'how-we-use-cookies',
      heading: '2. How We Use Cookies',
      blocks: [
        {
          type: 'paragraph',
          text: 'We use cookies for several reasons, including:',
        },
        {
          type: 'list',
          items: [
            'Essential cookies — required for the website to function correctly and securely.',
            'Preference cookies — which remember choices you make so we can provide a better experience.',
            'Analytics cookies — which help us understand how visitors use the website so we can improve it.',
            'Performance cookies — which help us monitor and maintain the speed and reliability of the website.',
          ],
        },
      ],
    },
    {
      id: 'types-of-cookies',
      heading: '3. Types of Cookies We Use',
      blocks: [
        {
          type: 'paragraph',
          text: 'The table below summarises the broad categories of cookies that may be set when you use our website. The exact cookies may change over time as we update the website.',
        },
        {
          type: 'list',
          items: [
            'Strictly necessary — enable core functionality such as navigation and security. These cannot be switched off.',
            'Functional — remember your preferences and settings to personalise your experience.',
            'Analytics — collect aggregated, anonymised information about how the site is used.',
            'Third-party — set by external services we use, such as embedded maps, to provide features on our pages.',
          ],
        },
      ],
    },
    {
      id: 'managing-cookies',
      heading: '4. Managing Cookies',
      blocks: [
        {
          type: 'paragraph',
          text: 'Most browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to delete cookies that have already been set. Please note that if you disable or delete cookies, some parts of the website may not function as intended.',
        },
        {
          type: 'paragraph',
          text: 'For guidance on managing cookies, refer to the help pages of your specific browser (such as Chrome, Safari, Firefox or Edge).',
        },
      ],
    },
    {
      id: 'third-party-cookies',
      heading: '5. Third-Party Cookies',
      blocks: [
        {
          type: 'paragraph',
          text: 'Some pages on our website include third-party content or features, such as embedded maps or analytics services. These third parties may set their own cookies, over which we have no control. We recommend reviewing the relevant third party\u2019s cookie and privacy policies for more information.',
        },
      ],
    },
    {
      id: 'changes-cookies',
      heading: '6. Changes to This Policy',
      blocks: [
        {
          type: 'paragraph',
          text: 'We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for operational, legal or regulatory reasons. Please revisit this page periodically to stay informed.',
        },
      ],
    },
    {
      id: 'contact-cookies',
      heading: '7. Contact Us',
      blocks: [
        {
          type: 'paragraph',
          text: 'If you have any questions about our use of cookies, please contact us at marketingteam@jhplc.com.',
        },
      ],
    },
  ],
};

export const legalDocs: LegalDoc[] = [privacyPolicy, termsConditions, cookiePolicy];