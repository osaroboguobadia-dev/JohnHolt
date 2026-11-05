import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/feature/Navbar";
import Footer from "./components/feature/Footer";
import JsonLd from "./components/base/JsonLd";
import { buildOrganizationSchema } from "./lib/schema";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <div className="min-h-screen flex flex-col bg-background-50">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary-600 focus:text-background-50 focus:text-sm focus:font-semibold"
          >
            Skip to content
          </a>
          <JsonLd data={buildOrganizationSchema()} />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
