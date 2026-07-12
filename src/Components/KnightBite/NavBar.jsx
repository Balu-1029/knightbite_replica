import { useEffect, useState } from 'react'
import logo from '../../assets/images/brand-logo.svg'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = ({ isDarkMode, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const updateNavbar = () => setHasScrolled(window.scrollY > 24)
    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${hasScrolled ? 'is-scrolled' : ''}`}>
      <div className='navbar__inner'>
        <NavLink to='/' className='navbar__brand'>
          <img src={logo} alt='Knight Bite logo' />
        </NavLink>

        <div className='navbar__navigation'>
          <ul id='primary-navigation' className={`navbar__links ${isMenuOpen ? 'is-open' : ''}`}>
            <li>
              <NavLink to='/' onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={closeMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to='/menu' onClick={closeMenu}>Menu</NavLink>
            </li>
            <li>
              <NavLink to='/franchise' onClick={closeMenu}>Franchise</NavLink>
            </li>
          </ul>

          <div className='navbar__controls'>
            <button
              type='button'
              className='navbar__theme'
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={onThemeToggle}
            >
              <span aria-hidden='true'>{isDarkMode ? '☀' : '☾'}</span>
            </button>
            <button
              type='button'
              className={`navbar__toggle ${isMenuOpen ? 'is-open' : ''}`}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls='primary-navigation'
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
