import React from 'react'
import { Code, Eye } from '@phosphor-icons/react/dist/ssr'
import "./Experiment.scss"


const Experiment = ({ mode }) => {
    return (
        <section className={`experiment-container ${mode ? 'dark' : ''}`} id='experiment'>
            <div className='experiment-wrapper'>
                <nav className='section-title-container'>
                    <h3 className='section-title'><span>Experiment</span></h3>
                </nav>
                <main className='product-container'>
                    <div className="product-card">
                        <img src={require('../../assets/images/movie-rated.png')} alt="Kopal Muhamad" />
                        <div className="text">
                            <h3>Movie Rated</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci quibusdam repellendus dignissimos exercitationem officia expedita dolorem voluptates ipsum cupiditate.</p>
                        </div>
                        <div className="button-container">
                            <a href="https://movie-rated.vercel.app/" className='button'>
                                <span>View Page</span><span><Eye size={24} /></span>
                            </a>
                            <a href="" className='button'><span>View Code</span><span><Code size={24} /></span></a>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={require('../../assets/images/apart.png')} alt="Kopal Muhamad" />
                        <div className="text">
                            <h3>Apart Real</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci quibusdam repellendus dignissimos exercitationem officia expedita dolorem voluptates ipsum cupiditate.</p>
                        </div>
                        <div className="button-container">
                            <a href="https://apart-real.vercel.app" className='button'>
                                <span>View Page</span><span><Eye size={24} /></span>
                            </a>
                            <a href="" className='button'><span>View Code</span><span><Code size={24} /></span></a>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={require('../../assets/images/furnuture.png')} alt="Kopal Muhamad" />
                        <div className="text">
                            <h3>Furnuture</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci quibusdam repellendus dignissimos exercitationem officia expedita dolorem voluptates ipsum cupiditate.</p>
                        </div>
                        <div className="button-container">
                            <a href="https://furnuture.vercel.app/" className='button'>
                                <span>View Page</span><span><Eye size={24} /></span>
                            </a>
                            <a href="" className='button'><span>View Code</span><span><Code size={24} /></span></a>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={require('../../assets/images/tabungan-bersama.png')} alt="Kopal Muhamad" />
                        <div className="text">
                            <h3>Tabungan Bersama</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci quibusdam repellendus dignissimos exercitationem officia expedita dolorem voluptates ipsum cupiditate.</p>
                        </div>
                        <div className="button-container">
                            <a href="https://tabungan-bersama.vercel.app" className='button'>
                                <span>View Page</span><span><Eye size={24} /></span>
                            </a>
                            <a href="" className='button'><span>View Code</span><span><Code size={24} /></span></a>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Experiment