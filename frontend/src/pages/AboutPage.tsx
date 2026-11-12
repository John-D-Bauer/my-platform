import profilePhoto from '../assets/mibPic.jpg'
import ContactLinks from '../components/ContactLinks'
import PillList from '../components/PillList'
import { activities, contact, education, interests, profile, skills } from '../data/profile'

function AboutPage() {
  return (
    <main className="page">
      <header className="hero hero-compact">
        <img className="photo photo-small" src={profilePhoto} alt="Portrait of John Bauer" />
        <h1>About Me</h1>
      </header>

      <section className="panel">
        <h2>Who I Am</h2>
        <p>
          Hi! Thanks for visiting my page. I'm a {profile.major}, with minors in{' '}
          {profile.minors.join(' and ')}. {profile.tagline}
        </p>
      </section>

      <section className="panel">
        <h2>Education</h2>
        <p className="panel-highlight">{education.school}</p>
        <p>{education.degree}</p>
        <p>
          {education.graduation} · GPA {education.gpa}
        </p>
        <ul className="detail-list">
          {education.honors.map((honor) => (
            <li key={honor}>{honor}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>Skills</h2>
        <PillList items={skills} />
      </section>

      <section className="panel">
        <h2>Leadership & Activities</h2>
        {activities.map((activity) => (
          <div className="activity" key={activity.role}>
            <p className="panel-highlight">{activity.role}</p>
            <p className="activity-dates">{activity.dates}</p>
            <p>{activity.summary}</p>
          </div>
        ))}
      </section>

      <section className="panel">
        <h2>Outside of Programming</h2>
        <p>Besides programming, I also enjoy:</p>
        <PillList items={interests} />
      </section>

      <section className="panel">
        <h2>Get in Touch</h2>
        <p>
          I'm always happy to talk about internships, projects, or anything code. The
          best way to reach me is a message on LinkedIn.
        </p>
        <ContactLinks showLabels />
        <a className="button resume-button" href={contact.resume} target="_blank" rel="noreferrer">
          View My Resume
        </a>
      </section>
    </main>
  )
}

export default AboutPage
