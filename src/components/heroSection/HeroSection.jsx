import "./hero.css";
import { TypeAnimation } from "react-type-animation";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            This is <span>OMOR FARUK</span>
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front end</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I specialize in creating responsive and user-friendly web
            interfaces. With a passion for front-end development, My skills
            include
            <br />
            <TypeAnimation
              sequence={[
                "HTML",
                1000,
                "CSS",
                1000,
                "JavaScript",
                1000,
                "React",
                1000,
              ]}
              wrapper="span"
              speed={10}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
                color: "#7d4d00ff",
              }}
              repeat={Infinity}
            />
          </p>
        </div>
        <a
          className="btn btn-primary"
          href="https://drive.google.com/file/d/1Pe03YkIDERVh9jmJZh46VRCMNrRdJebi/view?usp=sharing"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
      <div className="hero-img">
        <img className="hero-img" src="./img/hero-img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
