
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeDownload from './components/ResumeDownload';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <ResumeDownload />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
