import { BackToTop } from "@/src/components/back-to-top";
import { Footer } from "@/src/components/footer";
import { Navbar } from "@/src/components/navbar";
import { ScrollProgress } from "@/src/components/scroll-progress";
import { SplashScreen } from "@/src/components/splash-screen";
import { WhatsAppFloat } from "@/src/components/whatsapp-float";
import { About } from "@/src/components/sections/about";
import { Contact } from "@/src/components/sections/contact";
import { Experience } from "@/src/components/sections/experience";
import { FAQ } from "@/src/components/sections/faq";
import { Hero } from "@/src/components/sections/hero";
import { LaunchStrip } from "@/src/components/sections/launch-strip";
import { Process } from "@/src/components/sections/process";
import { Projects } from "@/src/components/sections/projects";
import { Services } from "@/src/components/sections/services";
import { Skills } from "@/src/components/sections/skills";
import { Stats } from "@/src/components/sections/stats";
import { Testimonials } from "@/src/components/sections/testimonials";
import { TrustBadges } from "@/src/components/sections/trust-badges";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative flex flex-1 flex-col">
        <Hero />
        <LaunchStrip />
        <TrustBadges />
        <About />
        <Experience />
        <Skills />
        <Stats />
        <Testimonials />
        <Projects />
        <Services />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
