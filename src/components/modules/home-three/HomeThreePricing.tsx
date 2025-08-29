import PricingClientSection from "./PricingClientSection";

const HomeThreePricing = () => {
  return (
    <section className="pricing padding-top padding-bottom bg-grid">
      <div className="container">
        <PricingClientSection />
      </div>

      <div className="overlay overlay--top-center" />
      <div className="overlay overlay--bottom-right" />
    </section>
  );
};

export default HomeThreePricing;
