import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TypeAnimation } from 'react-type-animation';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Section1 = ({ isDarkMode }) => {
  const [textColor, setTextColor] = useState('black');

  const sizeWindow = window.innerWidth;
  return (
    <ContainerSection1>
      <AboutMe isDarkMode={isDarkMode}>
        About Me
        <a href='https://kanthorn-wo.github.io/Portfolio/'>
          <OpenInNewIcon style={{ marginLeft: '15px' }} />
        </a>
        <FullName isDarkMode={isDarkMode}>Kanthron Wongsoma</FullName>
      </AboutMe>
      <Paragraph isDarkMode={isDarkMode}>Computer Engineer</Paragraph>
      <div

        style={{
          fontSize: sizeWindow > 768 ? '35px' : '28px',
          color: textColor,

        }}
      >
        <TypeAnimation
          sequence={[
            800,
            () => setTextColor('aqua'),
            '',
            800,
            () => setTextColor('aqua'),
            'I\'m Front-End Developer',
            800,
            () => setTextColor('aqua'),
            '',
            800,
            () => setTextColor('red'),
            '',
            800,
            () => setTextColor('red'),
            'I\'m Back-End Developer',
            800,
            () => setTextColor('red'),
            '',
          ]}
          repeat={Infinity}
        />
      </div>

    </ContainerSection1>
  );
};

export default Section1;

const ContainerSection1 = styled.div`
  height:100vh ;
  position: relative;
  padding: 20vh calc(5vw + 1rem) 10vh;
  min-height: 50vh;
  z-index: 1;
  color: ${(props) =>
    props.isDarkMode
      ? '#ffffff' //dark
      : '#333333'};
  @media screen and (max-width: 768px) {
    padding: 10vh calc(2.5vw + 0.5rem) 5vh;
    min-height: 30vh;
  }
`;

const FullName = styled.p`
  display: block;
  font-weight: 600;
  background-image: ${(props) => (props.isDarkMode ? 'linear-gradient(175deg, #00f610, #40fee5, #af00ff 75%)' : 'linear-gradient(175deg, #40cbf5, #b01fdf, #fdbb2d 75%)')};
  
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#333333')};
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutMe = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 4rem;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#333333')};
`;

const Paragraph = styled.p`
  display: block;
  font-size: 20px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#333333')};
 
`;

