import AboutSection from "@/components/modules/home/AboutSection";
import BannerSection from "@/components/modules/home/BannerSection";
import BlogSection from "@/components/modules/home/BlogSection";
import CaseExperience from "@/components/modules/home/CaseExperience";
import CaseStudies from "@/components/modules/home/CaseStudies";
import ContactSection from "@/components/modules/home/ContactSection";
import PricingSection from "@/components/modules/home/PricingSection";
import ServicesCategory from "@/components/modules/home/services-category";
import ServicesSection from "@/components/modules/home/ServicesSection";
import TestimonialSection from "@/components/modules/home/TestimonialSection";

export default function Home() {
  return (
    <>
      {/* ===============>> Banner section start here <<================= */}
      <BannerSection />
      {/* ===============>> Banner section end here <<================= */}
      {/* ===============>> service category section start here <<================= */}
      <ServicesCategory />
      {/* ===============>> service category section end here <<================= */}
      {/* ===============>> About section start here <<================= */}
      <AboutSection />
      {/* ===============>> About section start here <<================= */}
      {/* ===============>> Services section start here <<================= */}
      <ServicesSection />
      {/* ===============>> Services section end here <<================= */}
      {/* ===============>> Case Studies section start here <<================= */}
      <CaseStudies />
      {/* ===============>> Case Studies section start here <<================= */}
      {/* ===============>> experience section start here <<================= */}
      <CaseExperience />
      {/* ===============>> experience section end here <<================= */}
      {/* ===============>> Pricing section start here <<================= */}
      <PricingSection />
      {/* ===============>> Pricing section start here <<================= */}
      {/* ===============>> Testimonial section start here <<================= */}
      <TestimonialSection />
      {/* ===============>> Testimonial section start here <<================= */}
      {/* ===============>> Blog section start here <<================= */}
      <BlogSection />
      {/* ===============>> Blog section start here <<================= */}
      {/* ===============>> Contact section start here <<================= */}
      <ContactSection />
      {/* ===============>> Contact section start here <<================= */}
    </>
  );
}
