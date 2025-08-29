import HomeThreePartnerSlider from "./HomeThreePartnerSlider";

const HomeThreePartner = () => {
  return (
    <section className="partner partner--style2 padding-bottom">
      <div className="container">
        <div
          className="partner__header text-center"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <h5 className="partner__header-title">
            My Partner in Digital Growth
          </h5>
        </div>

        <HomeThreePartnerSlider />
      </div>
    </section>
  );
};

export default HomeThreePartner;
