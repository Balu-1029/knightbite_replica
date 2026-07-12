import { useEffect, useState } from 'react'
import './App.css'
import KnightBite from './Components/KnightBite/KnightBite'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className={`app ${isDarkMode ? 'app--dark' : ''}`}>
        <KnightBite
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode((currentTheme) => !currentTheme)}
        />
    </div>
  )
}

export default App
