import './App.css';
import { useState } from 'react';

function App() {

  const [resume, setResume] = useState(null);

  const [message, setMessage] = useState("");

  const [atsScore, setAtsScore] = useState(null);

  const [skillsFound, setSkillsFound] = useState([]);

  const [missingSkills, setMissingSkills] = useState([]);

  const [showResult, setShowResult] = useState(false);

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleAnalyze = () => {

    if (!resume) {
      alert("Please upload a resume first");
      return;
    }

    setMessage("Resume analyzed successfully");

    setAtsScore(85);

    setSkillsFound([
      "Python",
      "React",
      "Machine Learning",
      "GitHub"
    ]);

    setMissingSkills([
      "Docker",
      "AWS",
      "SQL"
    ]);

    setShowResult(true);

  };

  return (
    <div className="container">

      <h1 className="title">
        AI Resume Analyzer
      </h1>

      {/* Upload Section */}
      <div className="card">

        <h2>Upload Resume</h2>

        <input
          type="file"
          onChange={handleFileChange}
        />

        <br /><br />

        {resume && (
          <p>
            Selected File: {resume.name}
          </p>
        )}

        <br />

        <button onClick={handleAnalyze}>
          Analyze Resume
        </button>

        <br /><br />

      </div>

      {/* Result Section */}
      {showResult && (

        <>

          {/* ATS Score */}
          <div className="score-card">

            <h2>ATS Score</h2>

            <p className="score">
              {atsScore}%
            </p>

          </div>

          {/* Skills */}
          <div className="skills-section">

            {/* Skills Found */}
            <div className="card">

              <h2>Skills Found</h2>

              <ul>

                {skillsFound.map((skill, index) => (
                  <li key={index}>
                    {skill}
                  </li>
                ))}

              </ul>

            </div>

            {/* Missing Skills */}
            <div className="card">

              <h2>Missing Skills</h2>

              <ul>

                {missingSkills.map((skill, index) => (
                  <li key={index}>
                    {skill}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </>

      )}

    </div>
  );
}

export default App;