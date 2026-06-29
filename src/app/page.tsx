import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { SocialProof9 } from "@/components/social-proof-9";
import Services from "@/components/services";
import Specializations from "@/components/specializations";
import ImEinsatz from "@/components/im-einsatz";
import HowItWorks6 from "@/components/how-it-works-6";
import About from "@/components/about";
import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <Services />
        <SocialProof9 />
        <Specializations />
        <HowItWorks6 />
        
        <About />
        <ImEinsatz />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
