import { useState } from "react"
import "./ContactSection.css"
import { FaTwitter, FaYoutube, FaGithub, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="contact-section__container">
      <div className="contact-section__left-panel">
        <h1 className="contact-section__main-heading">Contact me</h1>
        <p className="contact-section__description">
        Feel free to reach out for collaborations, design projects, or any inquiries. 
        Let’s create something amazing together! 
        </p>

        <div className="contact-section__info-item">
          <div className="contact-section__info-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-section__info-content">
            <h3 className="contact-section__info-title">Office</h3>
            <p className="contact-section__info-text">
            111 CKM Cholk,Jaipur
              <br />
              Rajasthan, India.
            </p>
          </div>
        </div>

        <div className="contact-section__info-item">
          <div className="contact-section__info-icon">
            <FaPhone />
          </div>
          <div className="contact-section__info-content">
            <h3 className="contact-section__info-title">Phone</h3>
            <p className="contact-section__info-text">+91 - 97725 68998</p>
          </div>
        </div>

        <div className="contact-section__info-item">
          <div className="contact-section__info-icon">
            <FaEnvelope />
          </div>
          <div className="contact-section__info-content">
            <h3 className="contact-section__info-title">Email</h3>
            <p className="contact-section__info-text">rs3274357@example.com</p>
          </div>
        </div>

        <div className="contact-section__social">
          <h3 className="contact-section__social-title">Follow me</h3>
          <div className="contact-section__social-icons">
            <a href="#" className="contact-section__social-link">
              <FaTwitter />
            </a>
            <a href="#" className="contact-section__social-link">
              <FaYoutube />
            </a>
            <a href="https://github.com/Rohit0072" className="contact-section__social-link">
              <FaGithub />
            </a>
            <a href="#" className="contact-section__social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-section__right-panel">
        <div className="contact-section__form-container">
          <h2 className="contact-section__form-heading">Send a message</h2>
          <form onSubmit={handleSubmit} className="contact-section__form">
            <div className="contact-section__form-row">
              <div className="contact-section__form-group">
                <label htmlFor="firstName" className="contact-section__form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First"
                  className="contact-section__form-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-section__form-group contact-section__form-group--last">
                <label htmlFor="lastName" className="contact-section__form-label contact-section__form-label--hidden">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last"
                  className="contact-section__form-input"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-section__form-group">
              <label htmlFor="email" className="contact-section__form-label">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="contact-section__form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-section__form-group">
              <label htmlFor="subject" className="contact-section__form-label">
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="contact-section__form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-section__form-group">
              <label htmlFor="message" className="contact-section__form-label">
                Comment or Message*
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-section__form-textarea"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              ></textarea>
            </div>

            <button type="submit" className="contact-section__submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="contact-section__newsletter">
        <h2 className="contact-section__newsletter-heading">
          Get all the latest news and info
          <br />
          sent to your inbox.
        </h2>
        <form onSubmit={handleNewsletterSubmit} className="contact-section__newsletter-form">
          <input
            type="email"
            name="newsletter"
            placeholder="Email address"
            className="contact-section__newsletter-input"
            value={formData.newsletter}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contact-section__newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection

