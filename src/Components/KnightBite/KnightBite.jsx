import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Franchise from './Franchise'
import About from './About'
import NavBar from './NavBar'

const KnightBite = ({ isDarkMode, onThemeToggle }) => {
  return (
    <>
        <BrowserRouter>
        <NavBar isDarkMode={isDarkMode} onThemeToggle={onThemeToggle}/>
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<About/>} path='/about'/>
                <Route element={<Menu/>} path='/menu'/>
                <Route element={<Franchise/>} path='/franchise'/>
                <Route element={<center><h1 style={{color:"red"}}>404 : Page Not Found Error</h1></center>} path='/*'/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default KnightBite
