import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mainNavLinks, serviceLinks, brandLogoUrl } from '@/mocks/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const isHome = location.pathname === '/';
  const useTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useTransparent ? 'bg-transparent' : 'bg-background-50/95 backdrop-blur-md border-b border-background-200/70'
      }`}
    >
      <nav className="mx-auto max-w-[1440px] px-4 md:px-8 h-20 md:h-28 flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer shrink-0" aria-label="John Holt PLC Home">
          <img
            src={brandLogoUrl}
            alt="John Holt PLC"
            className={`h-14 md:h-24 w-auto object-contain ${useTransparent ? 'bg-background-50 rounded-xl px-3.5 py-2' : ''}`}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {mainNavLinks.map((link) =>
            link.name === 'Services' ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  aria-label="Services — open menu and view all services"
                  onClick={() => navigate('/services')}
                  onFocus={() => setServicesOpen(true)}
                  className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                    useTransparent ? 'text-background-50 hover:text-accent-300' : 'text-foreground-700 hover:text-primary-600'
                  }`}
                >
                  Services
                  <i className="ri-arrow-down-s-line text-base" aria-hidden="true"></i>
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px] transition-all duration-200 ${
                    servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-background-50 rounded-xl border border-background-200 p-4 grid grid-cols-2 gap-2">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="cursor-pointer flex items-start gap-3 p-3 rounded-lg hover:bg-background-100 transition-colors"
                      >
                        <span className="w-9 h-9 flex items-center justify-center rounded-md bg-primary-50 text-primary-600 shrink-0">
                          <i className={`${s.icon} text-lg`}></i>
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground-900">{s.name}</span>
                          <span className="block text-xs text-foreground-500 mt-0.5 leading-snug">{s.description}</span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="cursor-pointer col-span-2 mt-1 flex items-center justify-between px-3 py-2.5 rounded-lg bg-primary-600 text-background-50 text-sm font-semibold"
                    >
                      View all Services & Solutions
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  useTransparent ? 'text-background-50 hover:text-accent-300' : 'text-foreground-700 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:070056464658"
            className={`cursor-pointer flex items-center gap-2 text-sm font-medium whitespace-nowrap ${
              useTransparent ? 'text-background-100' : 'text-foreground-600'
            }`}
          >
            <i className="ri-phone-line"></i>
            0700 5646 4658
          </a>
          <Link
            to="/contact"
            className="cursor-pointer whitespace-nowrap px-5 py-2.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        <button
          className={`lg:hidden cursor-pointer w-10 h-10 flex items-center justify-center rounded-md ${
            useTransparent ? 'text-background-50' : 'text-foreground-900'
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-background-50 border-t border-background-200 max-h-[calc(100vh-5rem)] md:max-h-[calc(100vh-7rem)] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">
            {mainNavLinks.map((link) =>
              link.name === 'Services' ? (
                <div key={link.path}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="cursor-pointer w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-foreground-900"
                  >
                    Services
                    <i className={`ri-arrow-down-s-line text-lg transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true"></i>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 pb-2 flex flex-col gap-1">
                      {serviceLinks.map((s) => (
                        <Link key={s.slug} to={`/services/${s.slug}`} className="cursor-pointer px-3 py-2 text-sm text-foreground-600 rounded-md hover:bg-background-100">
                          {s.name}
                        </Link>
                      ))}
                      <Link to="/services" className="cursor-pointer px-3 py-2 text-sm font-semibold text-primary-600">
                        View all services
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.path} to={link.path} className="cursor-pointer px-3 py-3 text-sm font-semibold text-foreground-900 rounded-md hover:bg-background-100">
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="cursor-pointer mt-2 text-center whitespace-nowrap px-5 py-3 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}