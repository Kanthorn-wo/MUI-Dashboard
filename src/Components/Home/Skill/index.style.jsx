import styled from 'styled-components';

export const ContainerSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
`;

export const SkillCard = styled.div`
  padding: 2rem 0.2rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const SubSkillCard = styled.div`
  display: inline;
  transition: all 0.2s ease;
  font-size: 2.4rem;
`;