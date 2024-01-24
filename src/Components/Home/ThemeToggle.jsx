import React, { useState, useEffect } from 'react';
import '../../App.css';
import { StyleSheetManager } from 'styled-components';
import TopNav from './TopNav';
import ParticlesBg from 'particles-bg';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import WaveFooter from './Footer';

const ThemeToggle = () => {
  // Retrieve dark mode state from localStorage or default to false
  const storedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true');

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#333333' : '#ffffff';
  }, [isDarkMode]);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isDarkMode'}>
      <>
        <TopNav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ParticlesBg
          type="cobweb"
          bg={true}
          color={isDarkMode ? '#ffffff' : '#000000'}
          num={isDarkMode ? 200 : 200}
        />
        <Section1 isDarkMode={isDarkMode} />
        <Section2 isDarkMode={isDarkMode} />
        <Section3 isDarkMode={isDarkMode} />
        <WaveFooter isDarkMode={isDarkMode} />
      </>
    </StyleSheetManager>
  );
};

export default ThemeToggle;
