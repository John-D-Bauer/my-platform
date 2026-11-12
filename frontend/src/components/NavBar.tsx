import { NavLink } from 'react-router'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
]

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-brand">
        {profile.name}
      </NavLink>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
