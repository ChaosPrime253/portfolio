import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Youtube Channel',
    description: 'ENG - My channel where I create interesting content!\nRU - Мой канал на котором я создаю интересный контент!',
    tags: ['Youtube'],
    image: '/images/youtube.png',
    youtube: 'https://www.youtube.com/@ChaosPrime',
    live: 'https://www.youtube.com/@ChaosPrime'
  },
  {
    id: 2,
    title: 'Soundcloud Profile',
    description: 'ENG - Here I’ve posted a couple of audio tracks that I created myself through improvisation!\nRU - Здесь я выложил пару аудиозаписей, которые создал сам методом импровизации!',
    tags: ['Soundcloud'],
    image: '/images/soundcloud.png',
    soundcloud: 'https://soundcloud.com/chaosprime253',
    live: 'https://soundcloud.com/chaosprime253'
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
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.soundcloud ? (
                    <a href={project.soundcloud} target="_blank" rel="noreferrer" aria-label="SoundCloud">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.175 12.225c-.055 0-.105.045-.105.105l-.24 2.27.24 2.27c0 .06.05.105.105.105.06 0 .105-.045.105-.105l.255-2.27-.255-2.27c0-.06-.045-.105-.105-.105zm1.88-1.13c-.06 0-.11.045-.11.105l-.315 3.37.315 3.37c0 .06.05.105.11.105.06 0 .105-.045.105-.105l.36-3.37-.36-3.37c0-.06-.045-.105-.105-.105zm1.9-1.5c-.06 0-.105.045-.105.105l-.375 4.765.375 4.77c0 .06.045.105.105.105.06 0 .105-.045.105-.105l.42-4.77-.42-4.765c-.035-.06-.08-.105-.14-.105zm1.865-1.395c-.06 0-.105.045-.105.105l-.42 6.06.42 6.06c0 .06.045.105.105.105.06 0 .105-.045.105-.105l.464-6.06-.465-6.06c0-.06-.045-.105-.104-.105zm1.905-.33c-.06 0-.105.045-.105.105l-.45 6.39.45 6.375c0 .06.05.105.105.105.06 0 .105-.045.105-.105l.495-6.375-.495-6.39c0-.06-.045-.105-.105-.105zm1.9-.615c-.06 0-.105.045-.105.105l-.481 6.9.48 6.885c0 .06.05.105.105.105.06 0 .105-.045.105-.105l.526-6.885-.526-6.9c-.045-.06-.09-.105-.15-.105zm1.905-.645c-.06 0-.105.045-.105.105l-.48 7.545.48 7.53c0 .06.05.105.105.105.06 0 .105-.045.105-.105l.54-7.53-.54-7.545c0-.06-.045-.105-.105-.105zm3.765-.885c-.06 0-.105.045-.105.105l-.495 8.145.495 8.13c0 .06.045.105.105.105.06 0 .105-.045.105-.105l.524-8.13-.524-8.145c0-.06-.045-.105-.105-.105zm1.89-.18c-.06 0-.105.045-.105.105l-.465 8.325.465 8.31c0 .06.045.105.105.105.06 0 .105-.045.105-.105l.51-8.31-.51-8.325c0-.06-.045-.105-.105-.105zm1.965.045c-.06 0-.105.045-.105.105l-.495 8.265.495 8.25c0 .06.045.105.105.105.06 0 .105-.045.105-.105l.54-8.25-.54-8.265c0-.06-.045-.105-.105-.105zm18.63 2.19c-.27-.06-.57-.105-.87-.12.045-1.185-.3-2.385-1.08-3.27-1.02-1.17-2.4-1.665-3.84-1.65-.6.015-1.2.15-1.755.36-.27.105-.465.255-.645.42v8.34c.21.165.42.315.645.42.555.225 1.155.36 1.755.375 1.44 0 2.865-.51 3.84-1.68.81-.94 1.17-2.235 1.05-3.48.045 0 .075.015.12.015.96.585 2.19.45 2.985-.33.735-.75.81-1.98.18-2.835-.645-.855-1.995-1.14-3.06-.78z"/>
                      </svg>
                    </a>
                  ) : project.youtube ? (
                    <a href={project.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  ) : (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
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