import './About.css'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'HTML/CSS', 'Git', 'Python', 'PostgreSQL'
]

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A bit about who I am and what I do</p>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a passionate developer who loves creating elegant solutions
              to complex problems. With a strong foundation in both frontend
              and backend technologies, I enjoy building full-stack applications
              that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
          <div className="about__skills">
            <h3 className="about__skills-title">Tech Stack</h3>
            <div className="about__skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="about__skill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
