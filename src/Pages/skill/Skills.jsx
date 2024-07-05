import data from "../../data/index.json";
import "aos/dist/aos.css";
import AOS from "aos";
import "./skill.css";
export default function Skills() {
  AOS.init({ duration: 1000, offset: 250 });
  // eslint-disable-next-line no-unsafe-optional-chaining
  let data1 = data?.skills ? [...data?.skills] : [];

  data1 = data1?.reverse();
  console.log(data1);

  return (
    <section className="skills--section" id="mySkills">
      <h2 className="skills--section--heading">My Skills</h2>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} data-aos="flip-right">
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


