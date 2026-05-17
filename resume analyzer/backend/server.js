const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());

/* Storage Setup */
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },

});

const upload = multer({ storage });

/* Upload API */
app.post("/upload", upload.single("resume"), (req, res) => {

  console.log("Resume Uploaded");

  console.log(req.file);

  /* Sample AI Logic */
  const atsScore = Math.floor(Math.random() * 30) + 70;

  const skillsFound = [
    "Python",
    "React",
    "Machine Learning",
    "GitHub"
  ];

  const missingSkills = [
    "Docker",
    "AWS",
    "SQL"
  ];

  res.json({

    success: true,

    message: "Resume analyzed successfully",

    atsScore: atsScore,

    skillsFound: skillsFound,

    missingSkills: missingSkills,

  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});