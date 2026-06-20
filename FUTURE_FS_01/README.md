# Rishitha Makam Portfolio Website

## Project Overview
A professional, recruiter-ready personal portfolio website for Rishitha Makam, an Artificial Intelligence and Data Science engineering student. This modern portfolio showcases academic achievements, technical skills, and featured projects with a focus on AI, Data Science, and Full Stack Web Development.

## Features
- **Modern UI/UX**: Glassmorphism cards, smooth scrolling, and elegant animations.
- **Responsive Design**: Mobile-first approach ensuring the site looks great on desktops, tablets, and smartphones.
- **Interactive Elements**: Scroll progress indicator, back-to-top button, and interactive hover effects.
- **Dynamic Projects Section**: Showcases key projects with direct links to GitHub repositories and Live Demos.
- **Contact Form**: Functional layout with HTML5 form validation and success/error states.
- **SEO Optimized**: Includes proper meta tags, Open Graph properties, and semantic HTML for high search engine visibility.
- **Easy Resume Download**: Seamlessly download the latest version of the professional resume.

## Technology Stack
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with CSS Variables for theming
- **Icons**: Lucide React
- **Deployment**: Vercel ready

## Project Structure
```
FUTURE_FS_01/
├── public/                 # Static assets
│   ├── favicon.svg         # Site favicon
│   └── resume.pdf          # Professional Resume PDF
├── src/                    # Source files
│   ├── components/         # Reusable UI components
│   │   ├── AboutMe.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeDownload.jsx
│   │   └── Skills.jsx
│   ├── context/            # React Context providers (ThemeContext)
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles and CSS variables
│   └── main.jsx            # Application entry point
├── DEPLOYMENT.md           # Deployment and maintenance guide
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd FUTURE_FS_01
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Locally
To run the project in a local development environment:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port provided in your terminal).

## Deployment Instructions
For comprehensive deployment instructions, please refer to the `DEPLOYMENT.md` file included in this repository. 

Briefly:
1. Build the production application:
   ```bash
   npm run build
   ```
2. Deploy the generated `dist` folder to your preferred hosting platform like Vercel, Netlify, or GitHub Pages.

## Screenshots Section
*(Add your screenshots here to showcase the beautiful UI!)*

## Future Enhancements
- Connect the contact form to a backend service or EmailJS to handle real-time message routing.
- Add an integrated blog section for technical writing and sharing AI/DS insights.
- Implement a 3D interactive element using Three.js or React Three Fiber for the Hero section.
- Connect the GitHub API to automatically fetch and display the latest public repositories.

## Contact Information
- **Name**: Rishitha Makam
- **Email**: rishitha@example.com
- **LinkedIn**: [Rishitha Makam](https://www.linkedin.com/in/rishitha-makam-25186a369)
- **GitHub**: [Rishitha0851](https://github.com/Rishitha0851)
