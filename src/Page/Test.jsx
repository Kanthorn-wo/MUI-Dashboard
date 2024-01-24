import React, { useEffect, useState } from 'react'
import ParticlesBg from 'particles-bg'

const Test = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // You can add any side effects here when dark mode changes
    // For example, you might want to update other components or styles
    document.body.style.backgroundColor = isDarkMode ? '#333333' : '#ffffff';
  }, [isDarkMode]);
  return (
    <>
      <div>
        {/* Your content goes here */}
        <button onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>

      {/* Particles background with dark mode */}
      <ParticlesBg
        type="cobweb"
        bg={true}
        color={isDarkMode ? '#ffffff' : '#000000'}
        num={isDarkMode ? 100 : 100}
      />
    </>


  )
}

export default Test