import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { StyleSheetManager } from 'styled-components';
import ParticlesBg from 'particles-bg';
import TopNav from './TopNav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import WaveFooter from './Footer';

const ParticlesBgLazy = lazy(() => import('particles-bg'));

const ThemeToggle = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true');
  const [shouldReload, setShouldReload] = useState(false);
  const [particlesNum, setParticlesNum] = useState(getParticlesNum());

  const debouncedToggleTheme = useCallback(
    debounce(() => {
      setIsDarkMode((prevMode) => !prevMode);
    }, 300),
    []
  );

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#333333' : '#ffffff';
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
      setParticlesNum(getParticlesNum());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getParticlesNum() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      return 200; // Desktop
    } else if (screenWidth >= 600) {
      return 100; // Tablet
    } else {
      return 50; // Mobile
    }
  }

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isDarkMode'} style={{ minWidth: '500px' }}>
      <>
        <TopNav isDarkMode={isDarkMode} toggleTheme={debouncedToggleTheme} />
        <Suspense fallback={null}>
          <ParticlesBgLazy
            key={particlesNum} // Add a key to force re-render on size change
            type="cobweb"
            bg={true}
            color={isDarkMode ? '#ffffff' : '#000000'}
            num={particlesNum}
          />
        </Suspense>
        <Section1 isDarkMode={isDarkMode} />
        <Section2 isDarkMode={isDarkMode} />
        <Section3 isDarkMode={isDarkMode} />
        <WaveFooter isDarkMode={isDarkMode} />
      </>
    </StyleSheetManager>
  );
};

export default ThemeToggle;

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
