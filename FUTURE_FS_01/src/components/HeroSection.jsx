import { ArrowRight, Download, Mail } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-content animate-fade-in-up">
        <div className="hero-profile-image">
          {/* Profile Image Placeholder */}
          <div className="profile-placeholder-circle">
            <span className="profile-initial">RM</span>
          </div>
        </div>
        <h2 className="hero-subtitle">Hello, I'm</h2>
        <h1 className="hero-title">
          <span className="text-primary">Rishitha</span> Makam
        </h1>
        <p className="hero-description">
          Aspiring AI & Data Science Engineer passionate about building intelligent and impactful digital solutions.
        </p>
        
        <div className="hero-socials">
          <a href="https://github.com/Rishitha0851" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/rishitha-makam-25186a369" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:rishitha@example.com" className="social-icon" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRight size={20} />
          </a>
          <a href="/resume.pdf" download="Rishitha_Makam_Resume.pdf" className="btn-outline">
            <Download size={20} /> Resume
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
