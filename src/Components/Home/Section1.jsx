import React from 'react'
import styled from '@emotion/styled'
import { TypeAnimation } from 'react-type-animation';
const Section1 = () => {
  return (
    <ContainerSection1>
      <AboutMe>
        About Me
        <FullName style={{ marginTop: '0' }}>
          Kanthron Wongsoma
        </FullName>
      </AboutMe>
      <Paragraph>
        Computer Engineer
      </Paragraph>
      <TypeAnimation
        sequence={[
          `I'm`,
          1000,
          `I'm Front-End Developer`,
          1000,
          `I'm Back-End Developer`,
          1000,
          `I'm Full-Stack Developer`,
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </ContainerSection1>
  )
}

export default Section1

const ContainerSection1 = styled.section`
  position: relative;
  padding: 20vh calc(5vw + 1rem) 10vh; 
  min-height: 50vh;
  background-color: var(--c-white);
  border: 1px solid black;

  @media screen and (max-width: 768px) {
    padding: 10vh calc(2.5vw + 0.5rem) 5vh; 
    min-height: 30vh; 
  }
`

const FullName = styled.p`
  display: block;
  font-weight: 600;
  background-image: linear-gradient(175deg, #40cbf5, #b01fdf, #fdbb2d 75%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem; 
  }
`;

const AboutMe = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    font-family: var(--f-1);
    margin-bottom: 4rem;
`

const Paragraph = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`