import React, { useState } from 'react'
import "./Navbar.scss"
import { CloudMoon, CloudSun, DotsThreeOutlineVertical } from '@phosphor-icons/react/dist/ssr'

const Navbar = ({ mode, onModeChange }) => {


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className={`navbar-container ${mode ? 'dark' : ''}`}>
                <nav className='navbar-wrapper'>
                    <main className="logo-container">
                        <a href='#' className={`logo ${mode ? 'dark' : ''}`}>Portfolio Web.</a>
                    </main>
                    <ul className={`menu-container ${isMenuOpen ? 'active' : ''}`}>
                        <div className="menu-wrapper">
                            <li><a href="#home" className={`link nav-link ${mode ? 'dark' : ''}`}>Home</a></li>
                            <li><a href="#about" className={`link nav-link ${mode ? 'dark' : ''}`}>About</a></li>
                            <li><a href="#experiment" className={`link nav-link ${mode ? 'dark' : ''}`}>Experiment</a></li>
                            <li><a href="#contact" className={`link nav-link ${mode ? 'dark' : ''}`}>Contact</a></li>
                        </div>
                    </ul>
                    <div className="mode-toggle-container" onClick={onModeChange}>
                        {mode ? <CloudSun size={32} /> : <CloudMoon size={32} />}
                    </div>
                    <div className="menu-toggle-container" onClick={handleMenu}>
                        <DotsThreeOutlineVertical size={32} />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar