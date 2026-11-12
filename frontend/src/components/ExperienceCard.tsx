import type { Experience } from '../data/profile'
import PillList from './PillList'

interface ExperienceCardProps {
  experience: Experience
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="card">
      <header className="card-header">
        <h3>{experience.title}</h3>
        <span className="card-dates">{experience.dates}</span>
      </header>
      <p className="card-org">{experience.organization}</p>
      <p>{experience.summary}</p>
      <PillList items={experience.skills} small />
      {experience.link && (
        <a className="card-link" href={experience.link} target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </article>
  )
}

export default ExperienceCard
