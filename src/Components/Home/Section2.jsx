import React from 'react';
import styled from 'styled-components';

const Section2 = ({ isDarkMode }) => {
  console.log('isDarkMode', isDarkMode);



  console.log('isDarkMode', isDarkMode);
  return (
    <ContainerSection2 isDarkMode={isDarkMode}>
      <h1>My Project</h1>

      <Content >
        <Box>Comming Soon...</Box>
        <Box>Comming Soon...</Box>
        <Box>Comming Soon...</Box>
      </Content>


    </ContainerSection2>
  );
};

export default Section2;

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
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  grid-gap: 4.2rem 6rem;
  gap: 4.2rem 6rem;
  border: 1px solid black;
  margin-top: 30px;
`;


const Box = styled.div`
    width: 100%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-self: stretch;
    background-color: aqua;
`;

