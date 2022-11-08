import CardSection from "../components/Card";
import HeroSection from "../components/Hero";
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
    </>
  )
}