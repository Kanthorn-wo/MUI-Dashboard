import React from 'react';
import styled from 'styled-components';
import '../../App.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <ContainerFooter isDarkMode={isDarkMode}>
        <div>
          <GitHubIcon />
        </div>
        <div>
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </ContainerFooter>

    </>

  );
};

export default Footer;

const ContainerFooter = styled.footer`
 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  background: ${(props) =>
    props.isDarkMode
      ? 'linear-gradient(to right, #232526, #414345)' //dark
      : 'linear-gradient(to right, #a5e4f2, #e0acfa,#fc7981)'};//light
  color: ${(props) =>
    props.isDarkMode
      ? '#ffffff' //dark
      : '#333333'};
  z-index: 1;
`;