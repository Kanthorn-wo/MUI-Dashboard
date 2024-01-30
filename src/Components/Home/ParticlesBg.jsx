import React, { lazy, useEffect, useState } from 'react';

const ParticlesBgLazy = lazy(() => import('particles-bg'));

const ParticlesBg = ({ isDarkMode }) => {
  const getParticlesNum = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      return 200; // Desktop
    } else if (screenWidth >= 600) {
      return 100; // Tablet
    } else {
      return 50; // Mobile
    }
  };

  const [particlesNum, setParticlesNum] = useState(getParticlesNum());

  useEffect(() => {
    const handleResize = () => {
      setParticlesNum(getParticlesNum());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ParticlesBgLazy
      key={particlesNum}
      type="cobweb"
      bg={true}
      color={isDarkMode ? '#ffffff' : '#000000'}
      num={particlesNum}
    />
  );
};

export default ParticlesBg;
