import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import TopNav from './TopNav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import WaveFooter from './Footer';
import ParticlesBg from './ParticlesBg';



const ThemeToggle = () => {
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
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isDarkMode'} style={{ minWidth: "500px" }}>
      <>
        <TopNav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ParticlesBg isDarkMode={isDarkMode} />
        <Section1 isDarkMode={isDarkMode} />
        <Section2 isDarkMode={isDarkMode} />
        <Section3 isDarkMode={isDarkMode} />
        <WaveFooter isDarkMode={isDarkMode} />
      </>
    </StyleSheetManager>
  );
};

export default ThemeToggle;


