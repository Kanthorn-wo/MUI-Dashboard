import React from 'react'
import styled from 'styled-components'
import FrontEnd from './Skill/FrontEnd'
import BackEnd from './Skill/BackEnd'
import Tools from './Skill/Tools'

const Section3 = ({ isDarkMode }) => {
  return (
    <ContainerSection3 isDarkMode={isDarkMode}>
      <TitleSkill >Skill</TitleSkill>
      <FrontEnd />
      <BackEnd />
      <Tools />
    </ContainerSection3>
  )
}

export default Section3

const ContainerSection3 = styled.section`
    padding: 4rem 10vw;
    background-color: ${(props) =>
    props.isDarkMode
      ? '#333333' //dark
      : '#ffffff'};//light
    color: ${(props) =>
    props.isDarkMode
      ? '#ffffff' //dark
      : '#333333'};
`
const TitleSkill = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;

`

