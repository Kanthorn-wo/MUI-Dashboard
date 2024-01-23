import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
const FooterContainer = styled.footer`
  text-align: center;
  padding: 50px 0 50px 0; 
`;

const FooterLink = styled.a`
  margin: 0 10px;
  color: #333; 
  text-decoration: none;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>

      <hr></hr>
      <FooterContainer>
        <p>
          &copy; {currentYear} JarMoo. All rights reserved. Connect with me on
          <FooterLink href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
          and
          <GitHubIcon href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            GitHub
          </GitHubIcon>
        </p>
      </FooterContainer>
    </>

  );
};

export default Footer;
