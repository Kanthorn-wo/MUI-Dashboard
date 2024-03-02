import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const TopNav = ({ isDarkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  //check min-witdth handle close menu
  useEffect(() => {
    const handleResize = () => {
      // Close the menu if the screen width becomes greater than or equal to 769px
      if (window.innerWidth >= 769) {
        setMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount (if not remove maybe Memory Leak!!!)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Wrapper isDarkMode={isDarkMode}>
        <Topnav>
          <StyledText isDarkMode={isDarkMode} href='#'>
            <sapn>Jàa</sapn>
            <sapn> Moo</sapn> {/* Note: There's a space before "Moo" to ensure spacing between the words */}
          </StyledText>

          {menuOpen ? (
            <>
              <MenuItems isDarkMode={isDarkMode}>
                <CloseButton onClick={handleCloseMenu} ><CloseIcon /></CloseButton>
                <MenuItem>
                  <a href='https://github.com/Kanthorn-wo'>
                    <GitHubIcon style={{ marginRight: "10px" }} />Github
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href='https://www.linkedin.com/in/kanthorn-wongsoma-438083244/'>
                    <LinkedInIcon style={{ marginRight: "10px" }} />LinkedIn
                  </a>
                </MenuItem>

              </MenuItems>

            </>
          ) : (
            <HamburgerButton onClick={handleMenuToggle}>
              &#9776;
            </HamburgerButton>
          )}
        </Topnav>
        <SwithDarkMode className='switch' isDarkMode={isDarkMode}>
          <input
            type='checkbox'
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className='slider'></span>
        </SwithDarkMode>
      </Wrapper>
    </>
  );
};

export default TopNav;

const Topnav = styled.div`
  color: inherit;
  text-decoration: none;
`;

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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 8px 100px 0 rgba(0, 0, 0, 0.37);

  
  
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: ${props => props.isDarkMode ? '#ffffff' : '#333333'};
    display: flex;
  align-items:center;
  }
  @media screen and (min-width: 768px) {
    display: none;
  
  }
`;

const MenuItem = styled.div`
  margin-bottom: 1rem;
  
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 15px;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    display: none;
  
  }
`;




const SwithDarkMode = styled.label`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${props => props.isDarkMode ? '#ffffff' : '#333333'};

`
const StyledText = styled.a`
  font-family: Arial, sans-serif; /* Choose a font */
  font-size: 1.5rem; /* Set the font size */
  color: ${props => props.isDarkMode ? '#ffffff' : '#333333'};
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

