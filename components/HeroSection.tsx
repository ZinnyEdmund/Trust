// components/HeroSection.js
import React from 'react';

interface HeroSectionProps {
  onConnectClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onConnectClick }) => {
  return (
    <div className="hero-sect">
      <h1>TruthCheck! <br /> Your shield against lies.</h1>
      <p>Verify news and claims in Nigeria <br /> instantly with QuickCheck Tool.</p>
      <button className="select-btn" onClick={onConnectClick}>
       Search with Quick Check
      </button>
    </div>
  );
};

export default HeroSection;