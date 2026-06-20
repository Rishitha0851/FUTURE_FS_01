
import { Download, FileText } from 'lucide-react';
import './ResumeDownload.css';

const ResumeDownload = () => {
  return (
    <section className="resume-section">
      <div className="container">
        <div className="resume-banner glass-panel">
          <div className="resume-content">
            <FileText size={48} className="text-primary resume-icon" />
            <div className="resume-text">
              <h2>Looking for my complete resume?</h2>
              <p>Download it to see my full professional history and academic achievements.</p>
            </div>
          </div>
          <a href="/resume.pdf" download="Rishitha_Makam_Resume.pdf" className="btn-primary resume-btn">
            <Download size={20} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;
