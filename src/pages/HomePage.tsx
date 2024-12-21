// HomePage.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';

interface HomePageProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="home-page">
      <HeroSection isExpanded={isExpanded} onToggle={onToggle} /> {/* Pass the props from the parent */}
    </div>
  );
};

export default HomePage;
