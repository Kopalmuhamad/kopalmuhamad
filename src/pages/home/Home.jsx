import React, { useState } from 'react'
import "./Home.scss"
import Hero from '../../utils/hero/Hero'
import About from '../../utils/about/About'
import Experiment from '../../utils/experiment/Experiment'
import Contact from '../../utils/contact/Contact'

const Home = ({ mode }) => {

    return (
        <>
            <Hero mode={mode} />
            <About mode={mode} />
            <Experiment mode={mode} />
            <Contact mode={mode} />
        </>
    )
}

export default Home