import styled from 'styled-components';

export const ContainerSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  gap: 10px;
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
  filter: grayscale(100%) drop-shadow(5px 5px 4px #dddddd);
  &:hover {
    transform: scale(1.1);
    filter: none;

  }
`;

export const SubTitleSkill = styled.h1`
  font-size: 1rem;
  font-weight: 400;

`