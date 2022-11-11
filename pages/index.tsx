import CardSection from "../components/Card";
import ContactSection from "../components/Contact";
import EmailSection from "../components/Email";
import FaqSection from "../components/Faq";
import HeroSection from "../components/Hero";
import PartnersSection from "../components/Partners";
import QuoteSection from "../components/Quote";
import ServiceSection from "../components/Service";
import SupportSection from "../components/Support";
import WhySection from "../components/Why";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CardSection />
      <WhySection />
      <SupportSection />
      <ContactSection />
      <PartnersSection />
      <QuoteSection />
      <FaqSection />
      <EmailSection />
    </>
  )
}