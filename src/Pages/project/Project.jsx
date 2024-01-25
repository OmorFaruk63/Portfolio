import data from "../../data/index.json";
import "./project.css"
export default function Project() {
  return (
    <section className="project--section" id="Myproject">
      <div className="project--container-box">
        <h1 className="section--heading">My Project</h1>
      </div>
      <div className="project--section--container">
        {data?.project?.map((item, index) => (
          <div key={index} className="project--section--card">
            <div className="project--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="project--section--card--content">
              <div>
                <h3 className="project--section--title">{item.title}</h3>
              </div>
              <div className="project-link">
                <span>
                  <a href={item.link1} target="_blank">Github </a>
                </span>
                <span>
                  <a href={item.link2} target="_blank">Live link </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
