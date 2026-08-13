import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Send, Menu, X } from 'lucide-react'
import { navLinks, siteMeta } from '../data/siteContent'

const Header = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-container">
            <Link to="/" className="logo-brand">
              <div className="logo-box">{siteMeta.logoText}</div>
              <span>{siteMeta.brandName}</span>
            </Link>

            <ul className="nav-links">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`nav-link ${location.pathname === to ? 'active' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <button className="btn-primary" onClick={onContactClick}>
              Contact Us
              <Send size={16} />
            </button>

            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <>
          <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
          <div className="mobile-menu">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`mobile-nav-link ${location.pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <button className="btn-primary" onClick={() => {
              setMenuOpen(false)
              onContactClick()
            }}>
              Contact Us
              <Send size={16} />
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Header
