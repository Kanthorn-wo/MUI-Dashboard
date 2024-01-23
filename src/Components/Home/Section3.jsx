import React from 'react'
import styled from 'styled-components'
import FrontEnd from './Skill/FrontEnd'
import BackEnd from './Skill/BackEnd'
import Tools from './Skill/Tools'

const Section3 = () => {
  return (
    <ContainerSection3>
      <h2>Skill</h2>
      <FrontEnd />
      <BackEnd />
      <Tools />
    </ContainerSection3>
  )
}

export default Section3

const ContainerSection3 = styled.div`
    padding: 4rem 10vw;

`