import './App.css'
import profilePhoto from './assets/mibPic.jpg'

interface Profile {
  name: string
  major: string
  minors: string[]
}

interface InterestListProps {
  interests: string[]
}

const profile: Profile = {
  name: 'John Bauer',
  major: 'Computer Science Major @ Grove City College',
  minors: [
    'AI and Machine Learning',
    'Computer Game Design and Development',
  ],
}

const interests: string[] = ['Soccer', 'Piano', 'Reading good books']

function InterestList({ interests }: InterestListProps) {
  return (
    <ul className="interest-list">
      {interests.map((interest) => (
        <li key={interest}>{interest}</li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <main className="page">
      <header className="intro">
        <img className="photo" src={profilePhoto} alt="Portrait of John Bauer" />
        <h1>{profile.name}</h1>
        <p className="major">{profile.major}</p>
        <p className="minors">Minors in {profile.minors.join(' and ')}</p>
      </header>

      <section>
        <p>
          Hi! Thanks for visiting my page. I love creating new things with code!
          Besides programming, I also enjoy:
        </p>
        <InterestList interests={interests} />
      </section>
    </main>
  )
}

export default App