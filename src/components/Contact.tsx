import React from 'react'

const Contact = () => {
  return (
    <div>
        V<div className="contact-section" id="contact">

        <p>Let’s build something awesome together 🚀</p>
        <h2>Contact Me</h2>
        <p>Got an idea or just want to say hi? 👋</p>

        <form
          action="https://formspree.io/f/mwplokbd" // Replace with your Formspree form ID
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact