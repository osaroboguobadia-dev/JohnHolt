import { Link } from 'react-router-dom';
import { footerCompanyLinks, footerLegalLinks, footerServiceLinks, socialLinks, brandLogoUrl } from '@/mocks/navigation';
import NewsletterForm from '@/components/feature/NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-foreground-950 text-background-200">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 pt-14 md:pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="cursor-pointer inline-flex mb-5 bg-background-50 rounded-xl px-4 py-3" aria-label="John Holt PLC Home">
              <img
                src={brandLogoUrl}
                alt="John Holt PLC"
                className="h-16 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-background-300 max-w-sm">
              A respected Nigerian business group delivering power generation, fire safety and engineering solutions
              with decades of heritage and technical excellence.
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-wide uppercase text-background-50 mb-2">Stay updated</p>
              <NewsletterForm />
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="cursor-pointer w-9 h-9 rounded-full bg-background-50/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <i className={`${s.icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-background-50 font-semibold text-sm tracking-wide uppercase mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerServiceLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="cursor-pointer text-sm text-background-300 hover:text-accent-300 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-background-50 font-semibold text-sm tracking-wide uppercase mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerCompanyLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="cursor-pointer text-sm text-background-300 hover:text-accent-300 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-background-50 font-semibold text-sm tracking-wide uppercase mb-4">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-background-300">
              <li className="flex items-start gap-2.5">
                <i className="ri-map-pin-line mt-0.5 text-accent-400"></i>
                <span>11B Ilabere Avenue, Ikoyi, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="ri-phone-line text-accent-400"></i>
                <a href="tel:070056464658" className="cursor-pointer hover:text-accent-300">0700 5646 4658</a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="ri-mail-line text-accent-400"></i>
                <a href="mailto:marketingteam@jhplc.com" className="cursor-pointer hover:text-accent-300">marketingteam@jhplc.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="ri-global-line text-accent-400"></i>
                <a href="https://www.jhplc.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent-300">www.jhplc.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="ri-time-line text-accent-400"></i>
                <span>Mon – Fri, 8:00am – 5:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background-50/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background-400 text-center sm:text-left">
            © {new Date().getFullYear()} John Holt PLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {footerLegalLinks.map((l) => (
              <Link key={l.path} to={l.path} className="cursor-pointer text-xs text-background-400 hover:text-accent-300 transition-colors whitespace-nowrap">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}