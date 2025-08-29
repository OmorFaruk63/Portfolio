import PageHeader from "@/components/common/PageHeader";
import PricingSection from "@/components/modules/home/PricingSection";
import ServicesSection from "@/components/modules/home/ServicesSection";
import TestimonialSection from "@/components/modules/home/TestimonialSection";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />
      {/* ===============>> Services section start here <<================= */}
      <ServicesSection />
      {/* ===============>> Services section end here <<================= */}
      {/* ===============>> Pricing section start here <<================= */}
      <PricingSection />
      {/* ===============>> Pricing section start here <<================= */}
      {/* ===============>> Testimonial section start here <<================= */}
      <TestimonialSection />
      {/* ===============>> Testimonial section start here <<================= */}
    </>
  );
}
