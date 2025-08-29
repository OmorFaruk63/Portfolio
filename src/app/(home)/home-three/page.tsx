import HomeThreeAbout from "@/components/modules/home-three/HomeThreeAbout";
import HomeThreeBanner from "@/components/modules/home-three/HomeThreeBanner";
import HomeThreeBlog from "@/components/modules/home-three/HomeThreeBlog";
import HomeThreePartner from "@/components/modules/home-three/HomeThreePartner";
import HomeThreePortfolio from "@/components/modules/home-three/HomeThreePortfolio";
import HomeThreePricing from "@/components/modules/home-three/HomeThreePricing";
import HomeThreeServices from "@/components/modules/home-three/HomeThreeServices";
import HomeThreeTestimonials from "@/components/modules/home-three/HomeThreeTestimonials";

export default function HomeThree() {
  return (
    <>
      {/* ===============>> Banner section start here <<================= */}
      <HomeThreeBanner />
      {/* ===============>> Banner section end here <<================= */}
      {/* ===============>> About section start here <<================= */}
      <HomeThreeAbout />
      {/* ===============>> About section start here <<================= */}
      {/* ===============>> partner section start here <<================= */}
      <HomeThreePartner />
      {/* ===============>> partner section end here <<================= */}
      {/* ===============>> portfolio section start here <<================= */}
      <HomeThreePortfolio />
      {/* ===============>> portfolio section end here <<================= */}
      {/* ===============>> services section start here <<================= */}
      <HomeThreeServices />
      {/* ===============>> services section end here <<================= */}
      {/* ===============>> Pricing section start here <<================= */}
      <HomeThreePricing />
      {/* ===============>> Pricing section start here <<================= */}
      {/* ===============>> Testimonial section start here <<================= */}
      <HomeThreeTestimonials />
      {/* ===============>> Testimonial section start here <<================= */}
      {/* ===============>> Blog section start here <<================= */}
      <HomeThreeBlog />
      {/* ===============>> Blog section start here <<================= */}
    </>
  );
}
