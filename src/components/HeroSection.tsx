// HeroSection.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/heroSection.css';

interface HeroSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isExpanded, onToggle }) => {

  // Function to collapse the sidebar when clicked inside HeroSection
  const handleSidebarClick = () => {
    if (isExpanded) {
      onToggle(); // Collapse the sidebar
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector('.navbar');
      if (isExpanded && navbar && !navbar.contains(event.target as Node)) {
        onToggle(); // Collapse the sidebar if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isExpanded, onToggle]);

  return (
    <div className="hero-container" onClick={handleSidebarClick}>
      <main>
        <h1>Hello, I'm</h1>
        <h1><span>Jatin Panghal</span></h1>
        <p>Web Developer | AI/ML Lead @Medoc Health | Flutter & React</p>
        <div className="buttons">
          <Link to="/contact">
            <button className="cta-button">Contact Me</button>
          </Link>
          <Link to="/projects">
            <button className="cta-button">See My Work</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
