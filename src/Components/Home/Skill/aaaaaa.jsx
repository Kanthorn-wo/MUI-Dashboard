import React from 'react';
import styled from 'styled-components';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Section2 = ({ isDarkMode }) => {
  return (
    <ContainerSection2 isDarkMode={isDarkMode}>
      <TitleProject>My Project</TitleProject>

      <Content>
        {[...Array(4)].map((_, index) => (
          <Box key={index}>
            <Img />
            <Stack>
              <SubStack>React</SubStack>
              <SubStack>Node.js</SubStack>
              <SubStack>Express</SubStack>
              <SubStack>MongoDB</SubStack>
              <SubStack>GraphQL</SubStack>
              <SubStack>Docker</SubStack>
            </Stack>
            <Detail>
              <p>Project description goes here.</p>
            </Detail>
          </Box>
        ))}
      </Content>
    </ContainerSection2>
  );
};

export default Section2;

const TitleProject = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

const ContainerSection2 = styled.div`
  background: ${(props) =>
    props.isDarkMode
      ? 'linear-gradient(to right, #232526, #414345)' //dark
      : 'linear-gradient(to right, #a5e4f2, #e0acfa,#fc7981)'}; //light
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#333333')};
  padding: 6rem 5vw;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 6rem 10vw;
  }
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
  margin: 15px 0 0;
`;

const Box = styled.div`
  border: 1px solid #dbdbdb;
  box-shadow: 0 3px 6px #00000029;
  background-color: #fff;
  padding: 0px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg,rgba(255,255,255,0.1)rgba(255.255.255,0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border:1px solid rgba(255,255,255,0.18);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
  text-align: center;
  justify-content: center;
`;

const Img = styled.img`
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  background: #f1f2f3;
  content: url('https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png');
  width: 100%;
  max-width: 400px; 
  height: auto;   
`;

const Stack = styled.div`
  display: flex;
  gap: 0.6rem;
  padding: 1rem 1.5rem 0;
  flex-wrap: wrap;
`;

const SubStack = styled.div`
  background-color: ${(props) => generateRandomColor(props)};
  border-radius: 10px;
  padding: 5px;
`;

const Detail = styled.div`
  padding: 10px 1.5rem 1rem;
  display: grid;
  grid-gap: 5px;
  align-items: flex-start;
  align-content: flex-start;
`;


