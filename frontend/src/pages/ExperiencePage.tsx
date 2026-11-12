import ExperienceCard from '../components/ExperienceCard'
import { internships, projects } from '../data/profile'

function ExperiencePage() {
  return (
    <main className="page page-wide">
      <header className="hero hero-compact">
        <h1>Internships & Projects</h1>
        <p className="major">What I've worked on</p>
      </header>

      <section>
        <h2 className="section-title">Internships</h2>
        <div className="card-grid">
          {internships.map((internship) => (
            <ExperienceCard key={internship.title} experience={internship} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <ExperienceCard key={project.title} experience={project} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ExperiencePage
