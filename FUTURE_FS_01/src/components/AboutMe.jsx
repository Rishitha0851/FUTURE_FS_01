
import { User, Target, Coffee } from 'lucide-react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="section bg-surface">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Turning Data into Intelligent Solutions</h3>
            <p>
              I am a dedicated Artificial Intelligence and Data Science student at Saveetha Institute of Medical and Technical Sciences, currently maintaining a CGPA of 9.7.
              My journey is driven by a passion for creating intelligent systems and extracting meaningful insights from data.
            </p>
            <p>
              Beyond core AI and Machine Learning concepts, I have a strong interest in Data Analytics, Cloud Computing, and Full Stack Web Development. 
              I am actively seeking internship and career opportunities to apply my technical skills to real-world projects and drive innovation.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="about-card glass-panel">
              <User className="about-icon text-primary" size={32} />
              <h4>Academics</h4>
              <p>B.Tech in AI & Data Science with a 9.7 CGPA.</p>
            </div>
            <div className="about-card glass-panel">
              <Target className="about-icon text-primary" size={32} />
              <h4>Interests</h4>
              <p>AI, Machine Learning, Data Analytics & Full Stack Dev.</p>
            </div>
            <div className="about-card glass-panel">
              <Coffee className="about-icon text-primary" size={32} />
              <h4>Goals</h4>
              <p>Seeking real-world internships to drive impactful innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
