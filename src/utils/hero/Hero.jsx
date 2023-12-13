import React from 'react'
import "./Hero.scss"
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const Hero = ({ mode }) => {
    return (
        <section className={`home-container ${mode ? 'dark' : ''}`} id='home'>
            <section className="home-wrapper">
                <aside className='image-container'>
                    <div className="image-wrapper">
                        <img src={require('../../assets/images/man.png')} alt="" width={280} height={280} className='image' />
                    </div>
                </aside>
                <article className='text-container'>
                    <h1 className='title'>Hello I'm Kopal Muhamad</h1>
                    <p className='subtitle'>As a Frontend Developer</p>
                    <div className="social-media-container">
                        <a href='' className={`social-media-icon ${mode ? 'dark' : ''}`}><InstagramLogo size={28} /></a>
                        <a href='' className={`social-media-icon ${mode ? 'dark' : ''}`}><WhatsappLogo size={28} /></a>
                        <a href='' className={`social-media-icon ${mode ? 'dark' : ''}`}><LinkedinLogo size={28} /></a>
                    </div>
                    <button className='button'>Get in Touch</button>
                </article>
            </section>
        </section>
    )
}

export default Hero