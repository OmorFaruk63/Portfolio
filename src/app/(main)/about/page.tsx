import PageHeader from "@/components/common/PageHeader";
import AboutSection from "@/components/modules/home/AboutSection";
import CaseExperience from "@/components/modules/home/CaseExperience";
import PricingSection from "@/components/modules/home/PricingSection";
import TestimonialSection from "@/components/modules/home/TestimonialSection";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About Us" }]}
      />
      {/* ===============>> About section start here <<================= */}
      <AboutSection />
      {/* ===============>> About section start here <<================= */}
      {/* ===============>> experience section start here <<================= */}
      <CaseExperience />
      {/* ===============>> experience section end here <<================= */}
      {/* ===============>> Pricing section start here <<================= */}
      <PricingSection />
      {/* ===============>> Pricing section start here <<================= */}
      {/* ===============>> Testimonial section start here <<================= */}
      <TestimonialSection />
      {/* ===============>> Testimonial section start here <<================= */}
    </>
  );
}
