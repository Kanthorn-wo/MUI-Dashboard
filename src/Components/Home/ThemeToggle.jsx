// ThemeToggle.js
import React, { useState, useEffect } from 'react';
import '../../App.css';
import styled from 'styled-components';

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
    <div>
      <Wrapper isDarkMode={isDarkMode}>
        <Topnav>
          Hello World!
        </Topnav>
        <label className='switch'>
          <input
            type='checkbox'
            checked={isDarkMode}
            onChange={toggleTheme}
            color="default"
          />
          <span className='slider'></span>
        </label>
      </Wrapper>

      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        {children}
      </div>
    </div>
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
    border-bottom: 0.1rem solid var(--c-grey-100);
    font-weight: 400;
    font-family: var(--f-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: ${props => props.isDarkMode ? 'white' : '#333333'};
    color: ${props => props.isDarkMode ? '#333333' : '#ffffff'};
`;
