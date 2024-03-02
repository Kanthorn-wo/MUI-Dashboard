import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';



const Menu = ({ isDarkMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <ContainerMenu isDarkMode={isDarkMode}>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon />
      </MenuButton>
      <DropdownContainer isOpen={isMenuOpen}>

        <FrameIcon isDarkMode={isDarkMode}>
          <a href='https://github.com/Kanthorn-wo'>
            <GitHubIcon />
          </a>
        </FrameIcon>

        <FrameIcon isDarkMode={isDarkMode}>
          <a href='https://www.linkedin.com/in/kanthorn-wongsoma-438083244/'>
            <LinkedInIcon />
          </a>
        </FrameIcon>

        <FrameIcon isDarkMode={isDarkMode}>
          <Link to='/login' style={{ textDecorationColor: '' }}>
            <LoginIcon />
          </Link>
        </FrameIcon>
      </DropdownContainer>
    </ContainerMenu>
  );
};

export default Menu;

const commonStyles = `
  cursor: pointer;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const ContainerMenu = styled.div`
  position: fixed;
  z-index: 98;
  display: flex;
  height: 100vh;
 
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  right: 20px;
  box-sizing: border-box;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  ${commonStyles}
  margin-top: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  border: none;
`;

const DropdownContainer = styled.div`
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? '200px' : '0')};
  max-width: ${(props) => (props.isOpen ? '100px' : '0')};
  transition: max-height 0.5s ease-in-out;
  
`;

const FrameIcon = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${commonStyles}
  border: 0.5px solid ${(props) => (props.isDarkMode ? 'white' : 'black')};

  a {
    text-decoration: none;
    color: ${props => props.isDarkMode ? '#ffffff' : '#333333'};
  }
  
`;