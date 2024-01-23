// ThemeToggle.js
import React, { useState, useEffect } from 'react';
import '../../App.css';
import styled, { StyleSheetManager } from 'styled-components';

const ThemeToggle = ({ children }) => {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isDarkMode'}>
      <Wrapper isDarkMode={isDarkMode}>
        <Topnav>
          Hello World!
        </Topnav>
        <label className='switch'>
          <input
            type='checkbox'
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className='slider'></span>
        </label>
      </Wrapper>

      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { isDarkMode: isDarkMode });
        })}
      </div>
    </StyleSheetManager>
  );
};

export default ThemeToggle;

const Topnav = styled.div`
  color: inherit;
  text-decoration: none;
`

const Wrapper = styled.section`
  padding: 1.2rem;
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.isDarkMode ? '#333333' : '#ffffff'};
  color: ${props => props.isDarkMode ? '#ffffff' : '#333333'};
`;
