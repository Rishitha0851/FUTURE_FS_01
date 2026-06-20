
import { ExternalLink, Stethoscope, BarChart3, FileText } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'MediNova Smart Clinic',
      description: 'A modern healthcare website with appointment booking functionality and responsive design.',
      icon: <Stethoscope size={48} className="project-icon" />,
      tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      github: 'https://github.com/Rishitha0851',
      demo: 'https://medinova-smart-clinic.vercel.app/'
    },
    {
      title: 'Student Performance Analytics Dashboard',
      description: 'A dashboard that visualizes and analyzes student academic performance using interactive charts and insights.',
      icon: <BarChart3 size={48} className="project-icon" />,
      tags: ['React', 'Recharts', 'Express', 'PostgreSQL'],
      github: 'https://github.com/Rishitha0851/Student-Performance-Analytics-Dashboard',
      demo: 'Coming Soon'
    },
    {
      title: 'SkillScan AI Resume Analyzer',
      description: 'An AI-powered application that analyzes resumes, extracts skills, and helps improve candidate profiles.',
      icon: <FileText size={48} className="project-icon" />,
      tags: ['React', 'Python', 'OpenAI API', 'FastAPI'],
      github: 'https://github.com/Rishitha0851/SkillScan--AI',
      demo: 'Coming Soon'
    }
  ];

  return (
    <section id="projects" className="section bg-surface">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-image-placeholder">
                {project.icon}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '0.5rem'}}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg> Code
                  </a>
                  {project.demo === 'Coming Soon' ? (
                    <span className="project-link disabled" aria-label="Live Demo Coming Soon">
                      <ExternalLink size={20} /> Coming Soon
                    </span>
                  ) : (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
