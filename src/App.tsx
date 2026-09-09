import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { PrivacyModal } from './components/modals/PrivacyModal';
import { TermsModal } from './components/modals/TermsModal';

export function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-800 w-full overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navbar
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <Services onSelectService={handleSelectService} />
        <Projects />
        <Skills />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      {/* Terms & Conditions Modal */}
      <TermsModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />
    </div>
  );
}

export default App;
