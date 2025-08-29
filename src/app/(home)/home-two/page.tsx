import ExperienceSection from "@/components/modules/home-two/ExperienceSection";
import HomeTwoAbout from "@/components/modules/home-two/HomeTwoAbout";
import HomeTwoBanner from "@/components/modules/home-two/HomeTwoBanner";
import HomeTwoBlogSection from "@/components/modules/home-two/HomeTwoBlogSection";
import HomeTwoCaseStudies from "@/components/modules/home-two/HomeTwoCaseStudies";
import HomeTwoContactSection from "@/components/modules/home-two/HomeTwoContactSection";
import HomeTwoPartner from "@/components/modules/home-two/HomeTwoPartner";
import HomeTwoServices from "@/components/modules/home-two/HomeTwoServices";
import HomeTwoTestimonialSection from "@/components/modules/home-two/HomeTwoTestimonialSection ";
import PricingSection from "@/components/modules/home/PricingSection";

export default function HomeTwo() {
  return (
    <>
      {/* ===============>> Banner section start here <<================= */}
      <HomeTwoBanner />
      {/* ===============>> Banner section end here <<================= */}
      {/* ===============>> partner section start here <<================= */}
      <HomeTwoPartner />
      {/* ===============>> partner section end here <<================= */}
      {/* ===============>> About section start here <<================= */}
      <HomeTwoAbout />
      {/* ===============>> About section start here <<================= */}
      {/* ===============>> Case Studies section start here <<================= */}
      <HomeTwoCaseStudies />
      {/* ===============>> Case Studies section start here <<================= */}
      {/* ===============>> Service2 section start here <<================= */}
      <HomeTwoServices />
      {/* ===============>> Service section end here <<================= */}
      {/* ===============>> experience section start here <<================= */}
      <ExperienceSection />
      {/* ===============>> experience section end here <<================= */}
      {/* ===============>> Pricing section start here <<================= */}
      <PricingSection />
      {/* ===============>> Pricing section start here <<================= */}
      {/* ===============>> Testimonial section start here <<================= */}
      <HomeTwoTestimonialSection />
      {/* ===============>> Testimonial section start here <<================= */}
      {/* ===============>> Contact section start here <<================= */}
      <HomeTwoContactSection />
      {/* ===============>> Contact section start here <<================= */}
      {/* ===============>> Blog section start here <<================= */}
      <HomeTwoBlogSection />
      {/* ===============>> Blog section start here <<================= */}
    </>
  );
}
