import React from 'react'
import styled from 'styled-components'

const Section2 = () => {
  return (
    <ContainerSection2>
      <h1>
        My Project
      </h1>
      <Content>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>

      </Content>
    </ContainerSection2>
  )
}

export default Section2

const ContainerSection2 = styled.div`
    background: var(--c-primary-light);
    background: linear-gradient(to right,var(--c-primary-light-2),var(--c-primary-light));
    color: var(--c-black);
    padding: 6rem 10vw;

`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(32rem,1fr));
    grid-gap: 4.2rem 6rem;
    gap: 4.2rem 6rem;

`
const ProjectCard = styled.div`
    width: 100%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    color: var(--c-black);
    justify-self: stretch;
    font-family: var(--f-1);
`

const Box = styled.div`
  width: 100%;
  height: 300px;
  background-color: greenyellow;

`