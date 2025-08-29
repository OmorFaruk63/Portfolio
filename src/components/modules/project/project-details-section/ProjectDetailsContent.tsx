import Link from "next/link";
import ProjectFeatureImages from "./ProjectFeatureImages";
import ProjectPagination from "./ProjectPagination";
import ProjectResults from "./ProjectResults";
import NextImage from "@/components/common/NextImage";

export default function ProjectDetailsContent() {
  return (
    <div className="project-details__item">
      <div className="project-details__item-inner">
        <div
          className="project-details__thumb mb-40"
          data-aos="fade-up"
          data-aos-duration={800}
        >
          <div className="project-details__thumb-inner">
            <NextImage
              width={730}
              height={370}
              src="/images/project/details/1.png"
              alt="projectz-images"
            />
          </div>
        </div>

        <div
          className="project-details__content"
          data-aos="fade-up"
          data-aos-duration={900}
        >
          <p className="project-details__meta">Restaurants Design</p>
          <h2 className="mb-25">
            <Link href="/project/project-details">Italian food template</Link>
          </h2>
          <p className="mb-45">
            Indulge in the flavors of Italy with our exquisite Italian food
            template, meticulously crafted to showcase the rich culinary
            heritage and irresistible delights of Italian restaurants cuisine.
          </p>

          <h4 className="mb-15">Our Menu</h4>
          <p className="mb-45">
            From classic antipasti to hearty pasta dishes and mouthwatering
            desserts, our menu celebrates the diverse flavors and regional
            specialties of Italy. Indulge in a gastronomic journey that
            tantalizes the taste buds and transports you to the cobblestone
            streets of Rome, the sun-kissed shores of Sicily, and the rolling
            hills of Tuscany.
          </p>

          <h4 className="mb-15">Signature Dishes</h4>
          <p>
            Explore our signature dishes, crafted with love and care by our
            talented chefs. From homemade gnocchi smothered in creamy gorgonzola
            sauce to tender osso buco served with saffron-infused risotto, each
            dish is a masterpiece of flavor and texture.
          </p>
        </div>

        <ProjectFeatureImages />

        <div className="project-details__content">
          <h4 className="mb-15">Reservations</h4>
          <p className="mb-45">
            Ready to experience the taste of Italy? Make a reservation today and
            embark on a culinary journey that will delight your senses and leave
            you craving more.
          </p>
          <h4 className="mb-25">Results</h4>
          <ProjectResults />
        </div>

        <ProjectPagination />
      </div>
    </div>
  );
}
