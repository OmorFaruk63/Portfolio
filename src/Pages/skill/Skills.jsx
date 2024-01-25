import data from "../../data/index.json";
import "./skill.css"
import { FaHtml5 } from "react-icons/fa6";
export default function Skills() {
  return (

    <section className="skills--section" id="mySkills">
      <h2 className="skills--section--heading">My Skills</h2>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
