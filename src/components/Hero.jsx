import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Chaos Prime</h1>
          <h2 className="hero__role">Frontend Developer</h2>
          <p className="hero__description">
            I build modern web applications with clean code and great user experiences.
          </p>
          <div className="hero__buttons">
            <a href="#projects" className="hero__btn hero__btn--primary">View Projects</a>
            <a href="#contact" className="hero__btn hero__btn--secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__glow"></div>
          <div className="hero__code-block">
            <div className="code-header">
              <span className="code-dot code-dot--red"></span>
              <span className="code-dot code-dot--yellow"></span>
              <span className="code-dot code-dot--green"></span>
            </div>
            <pre><code>{`const developer = {
  name: "Chaos Prime",
  skills: ["React", "Node.js"],
  passion: "Building web apps",
  coffee: true
};`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
