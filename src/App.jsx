import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./features/hero/HeroSection";
import AboutUs from "./features/about/AboutUs";
import PartnerLogos from "./features/partners/PartnerLogos";
import ContactSection from "./features/contact/ContactSection";
import WorkingProcess from "./features/process/WorkingProcess";
import TeamSection from "./features/team/TeamSection";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutUs />
          <WorkingProcess />
          <TeamSection />
          <PartnerLogos />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
