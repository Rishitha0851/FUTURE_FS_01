import './App.css';
import { useState } from 'react';
import axios from 'axios';

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

  const handleAnalyze = async () => {

    if (!resume) {
      alert("Please upload a resume first");
      return;
    }

    const formData = new FormData();

    formData.append("resume", resume);

    try {

      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      console.log(response.data);

      setMessage(response.data.message);

      setAtsScore(response.data.atsScore);

      setSkillsFound(response.data.skillsFound);

      setMissingSkills(response.data.missingSkills);

      setShowResult(true);

    } catch (error) {

      console.log(error);

      setMessage("Upload Failed");

    }

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

        <h3>{message}</h3>

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