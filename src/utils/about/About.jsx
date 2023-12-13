import React from 'react'
import "./About.scss"
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const About = ({ mode }) => {
    return (
        <section className={`about-container ${mode ? 'dark' : ''}`} id='about'>
            <div className='about-wrapper'>
                <aside className='section-title-container'>
                    <h3 className="section-title"><span></span><span>About</span></h3>
                    <h1 className="section-subtitle">Lets Find Out About Me</h1>
                </aside>
                <aside className='text-container'>
                    <h1>Hi, Muhamad kopal here. Obviously!</h1>
                    <p>I am a web developer and brand identity designer who constantly seeks out innovative solutions to everyday problems. For whatever reason it is you are here, welcome.</p>
                    <div className="detail-container">
                        <main className="detail">
                            <h1><span>01</span><span>+</span></h1>
                            <p>Years Experience</p>
                        </main>
                        <main className="detail">
                            <h1><span>04</span><span>+</span></h1>
                            <p>Experiment Completed</p>
                        </main>
                    </div>
                    <main className="skills-container">
                        <h3>What can i do?</h3>
                        <div className="skill-wrapper">
                            <span><i class='bx bxl-html5'></i></span>
                            <span><i class='bx bxl-javascript'></i></span>
                            <span><i class='bx bxl-css3'></i></span>
                            <span><i class='bx bxl-sass'></i></span>
                            <span><i class='bx bxl-react'></i></span>
                            <span><i class='bx bxl-tailwind-css'></i></span>
                        </div>
                    </main>
                    <div className="button-container">
                        <a href='' className='button'><span>Download Resume</span><span><ArrowUpRight size={32} /></span></a>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default About