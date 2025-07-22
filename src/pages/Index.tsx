import { Header } from "@/components/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WhyElevateSection } from "@/components/sections/WhyElevateSection"
import { TimelineSection } from "@/components/sections/TimelineSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { DashboardSection } from "@/components/sections/DashboardSection"
import { CTASection } from "@/components/sections/CTASection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyElevateSection />
      <TimelineSection />
      <TestimonialsSection />
      <DashboardSection />
      <CTASection />
    </div>
  );
};

export default Index;
