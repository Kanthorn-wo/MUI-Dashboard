import React from 'react';
import styled from 'styled-components';

const Section2 = ({ isDarkMode }) => {
  return (
    <ContainerSection2 isDarkMode={isDarkMode}>
      <TitleProject>My Project</TitleProject>

      <Content >
        <Box>Comming Soon...</Box>
        <Box>Comming Soon...</Box>
        <Box>Comming Soon...</Box>
      </Content>


    </ContainerSection2>
  );
};

export default Section2;

const TitleProject = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`

const ContainerSection2 = styled.div`
  background: ${(props) =>
    props.isDarkMode
      ? 'linear-gradient(to right, #232526, #414345)' //dark
      : 'linear-gradient(to right, #a5e4f2, #e0acfa,#fc7981)'};//light
  color: ${(props) =>
    props.isDarkMode
      ? '#ffffff' //dark
      : '#333333'};
  padding: 6rem 10vw;
  z-index: 1;
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  grid-gap: 4.2rem 6rem;
  gap: 4.2rem 6rem;
  margin-top: 30px;
`;


const Box = styled.div`
    width: 100%;
    height: 300px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-self: stretch;
    background: linear-gradient(135deg,rgba(255,255,255,0.1)rgba(255.255.255,0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255,255,255,0.18);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
    text-align: center;
    justify-content: center;
`;

