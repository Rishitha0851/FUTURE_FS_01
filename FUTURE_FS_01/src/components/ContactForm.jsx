import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple frontend validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // Simulate form submission delay
    setSubmitStatus({ type: 'success', message: 'Thank you for reaching out. Your message has been received successfully.' });
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Clear message after 5 seconds
    setTimeout(() => {
      setSubmitStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-surface">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I am actively seeking internship, placement, and project opportunities in AI, Data Science, Machine Learning, and Full Stack Development. Feel free to connect with me for collaborations, internships, professional discussions, or exciting technology projects.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:rishithamakam0851@gmail.com" className="contact-link">
                      rishithamakam0851@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7330714754</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type === 'error' ? 'status-error' : 'status-success'}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                minLength="3"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows="5"
                minLength="10"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary submit-btn">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
