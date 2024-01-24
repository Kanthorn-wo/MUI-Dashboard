import React, { } from 'react'
import styled from 'styled-components';
const TopNav = ({ isDarkMode, toggleTheme }) => {
  return (
    <>
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
    </>
  );
}

export default TopNav;

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
  /* background-color: ${props => props.isDarkMode ? '#333333' : '#ffffff'}; */
  color: ${props => props.isDarkMode ? '#ffffff' : '#333333'};
  z-index: 999;
  position: fixed;
  width: 100%;
  background: linear-gradient(135deg,rgba(255,255,255,0.1)rgba(255.255.255,0));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 8px 100px 0 rgba(0,0,0,0.37);
    `
