import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Youtube Channel',
    description: 'ENG - My channel where I create interesting content!\nRU - Мой канал на котором я создаю интересный контент!',
    tags: ['React', 'CSS'],
    image: '/images/youtube.png',
    github: 'https://github.com/',
    live: 'https://www.youtube.com/@ChaosPrime'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack online store with cart, payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '',
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Task Manager App',
    description: 'A productivity app with drag-and-drop boards and real-time updates.',
    tags: ['TypeScript', 'React', 'Firebase'],
    image: '',
    github: '#',
    live: '#'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A beautiful weather app with 7-day forecast and interactive maps.',
    tags: ['React', 'OpenWeather API', 'CSS'],
    image: '',
    github: '#',
    live: '#'
  }
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of the things I've built</p>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image && (
                <a href={project.live} target="_blank" rel="noreferrer" className="project-card__image-link">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                  />
                </a>
              )}
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects