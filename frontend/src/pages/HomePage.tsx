import { Link } from 'react-router'
import profilePhoto from '../assets/mibPic.jpg'
import { contact, profile } from '../data/profile'

function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <img className="photo" src={profilePhoto} alt="Portrait of John Bauer" />
        <h1>{profile.name}</h1>
        <p className="major">{profile.major}</p>
        <p className="minors">Minors in {profile.minors.join(' and ')}</p>
        <p className="tagline">{profile.tagline}</p>
      </header>

      <section className="cta-row">
        <Link className="button" to="/about">
          About Me
        </Link>
        <Link className="button button-outline" to="/experience">
          Internships & Projects
        </Link>
        <a
          className="button button-outline"
          href={contact.resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </section>
    </main>
  )
}

export default HomePage
