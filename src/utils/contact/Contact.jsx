import React from 'react'
import "./Contact.scss"

const Contact = ({ mode }) => {
    return (
        <section className={`contact-container ${mode ? 'dark' : ''}`}>
            <div className="contact-wrapper">
                <div className="input-container">
                    <input type="text" placeholder='Name : ' />
                </div>
                <div className="input-container">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message : '></textarea>
                </div>
                <div className="button-container">
                    <a href="#" className="button">Send</a>
                </div>
            </div>
        </section>
    )
}

export default Contact