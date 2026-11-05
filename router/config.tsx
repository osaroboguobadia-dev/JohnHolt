import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import About from "@/pages/about/page";
import Services from "@/pages/services/page";
import ServiceDetail from "@/pages/services/ServiceDetail";
import Projects from "@/pages/projects/page";
import News from "@/pages/news/page";
import ArticleRoute from "@/pages/news/ArticleRoute";
import Careers from "@/pages/careers/page";
import Partners from "@/pages/partners/page";
import Faqs from "@/pages/faqs/page";
import Contact from "@/pages/contact/page";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsConditions from "@/pages/legal/TermsConditions";
import CookiePolicy from "@/pages/legal/CookiePolicy";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/power-generation",
    element: <ServiceDetail slug="power-generation" />,
  },
  {
    path: "/services/fire-safety",
    element: <ServiceDetail slug="fire-safety" />,
  },
  {
    path: "/services/engineering-services",
    element: <ServiceDetail slug="engineering-services" />,
  },
  {
    path: "/services/marine-boat-building",
    element: <ServiceDetail slug="marine-boat-building" />,
  },
  {
    path: "/services/renewable-energy",
    element: <ServiceDetail slug="renewable-energy" />,
  },
  {
    path: "/services/warehousing-logistics",
    element: <ServiceDetail slug="warehousing-logistics" />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:slug",
    element: <ArticleRoute />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-conditions",
    element: <TermsConditions />,
  },
  {
    path: "/cookie-policy",
    element: <CookiePolicy />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;