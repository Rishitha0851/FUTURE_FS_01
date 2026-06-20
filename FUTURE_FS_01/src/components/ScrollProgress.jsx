import { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScroll = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateScroll);
    return () => window.removeEventListener('scroll', calculateScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: scrollPercentage }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
