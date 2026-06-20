
import { MonitorSmartphone, Server, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <MonitorSmartphone size={32} className="skill-icon text-primary" />,
      skills: ['Python', 'Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Web Development',
      icon: <Server size={32} className="skill-icon text-primary" />,
      skills: ['HTML', 'CSS', 'React.js', 'Node.js']
    },
    {
      title: 'Database',
      icon: <Server size={32} className="skill-icon text-primary" />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools',
      icon: <Wrench size={32} className="skill-icon text-primary" />,
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-panel">
              <div className="skill-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
