
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech Artificial Intelligence and Data Science',
      institution: 'Saveetha Institute of Medical and Technical Sciences',
      year: '2024 - 2028',
      description: 'Current CGPA: 9.70. Focusing on AI, Machine Learning, Data Analytics, and web technologies.'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <GraduationCap size={24} className="timeline-icon text-surface" />
              </div>
              <div className="timeline-content glass-panel">
                <h3 className="degree">{item.degree}</h3>
                <h4 className="institution">{item.institution}</h4>
                <div className="year">
                  <Calendar size={16} /> {item.year}
                </div>
                <p className="edu-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
