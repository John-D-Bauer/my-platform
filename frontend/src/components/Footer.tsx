import { profile } from '../data/profile'
import ContactLinks from './ContactLinks'

function Footer() {
  return (
    <footer className="footer">
      <ContactLinks />
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}

export default Footer
