import './App.css'
import profilePhoto from './assets/mibPic.jpg'
import { useState } from 'react'


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

type ReportKind = 'bug' | 'feature'


type Report = {
  id: string
  text: string
  kind: ReportKind
}



function App() {

  // const sampleReport: Report = {
  //   id: '1',
  //   text: 'Navigation link is broken',
  //   kind: 'bug'
  // }

  // const initialReports: Report[] = [
  //   { id: '1', text: 'Navigation link is broken', kind: 'bug' },
  //   { id: '2', text: 'Add dark mode', kind: 'feature' },
  // ]

  const [reports, setReports] = useState<Report[]>([])
  const [newReportText, setNewReportText] = useState('')

  function addReport() {
    const text = newReportText.trim()
    if (text.length === 0) return

    const newReport: Report = {
      id: crypto.randomUUID(),
      text: text,    
      kind: 'bug',
    }

    setReports([...reports, newReport])
    setNewReportText('')
  }


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

        <section className="report-board">
          <h2>Bugs & Feature Requests</h2>
          <input
            type="text"
            value={newReportText}
            onChange={(event) => setNewReportText(event.target.value)}
            placeholder="Describe a bug..."
            aria-label="New bug report"
          />

          <button type="button" onClick={addReport}>
            Add Bug
          </button>

          <ul>
            {reports.map((report) => (
              <li key={report.id}>
                {report.text} ({report.kind})
              </li>
            ))}
          </ul>
        </section>

      </main>
  )
}

export default App