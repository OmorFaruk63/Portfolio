import "./hero.css"
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">This is OMOR FARUK</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front end</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">
          <a href="https://drive.google.com/file/d/1Pe03YkIDERVh9jmJZh46VRCMNrRdJebi/view?usp=sharing" target="_blank">Download Resume</a>
        </button>
      </div>
      <div className="hero-img">
        <img className="hero-img" src="./img/hero-img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
