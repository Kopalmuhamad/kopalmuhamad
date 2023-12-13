import React from 'react'
import "./Footer.scss"

const Footer = ({ mode }) => {
    return (
        <section className={`footer-container ${mode ? 'dark' : ''}`}>
            <div className="footer-wrapper">
                <main className='content'>
                    <aside className='left'>
                        <h1>Portfolio Web.</h1>
                        <a href="">Get in touch</a>
                    </aside>
                    <aside className='right'>
                        <h3>Menu</h3>
                        <ul className='list'>
                            <li><a href="" className="link">Home</a></li>
                            <li><a href="" className="link">About</a></li>
                            <li><a href="" className="link">Experiment</a></li>
                            <li><a href="" className="link">Contact</a></li>
                        </ul>
                    </aside>
                </main>
                <main></main>
                <footer className='copyright'>
                    <p>© Made With 💜 By Kopal Muhamad Using reactJS</p>
                </footer>
            </div>
        </section>
    )
}

export default Footer