import React from 'react';
import styled from 'styled-components';
import thesis from '../../Assets/Img/thesis.png'
import rr from '../../Assets/Img/rr.png'
import usi from '../../Assets/Img/usi.png'
import web from '../../Assets/Img/web.png'
import touch from '../../Assets/Img/touch.png'
const Section2 = ({ isDarkMode }) => {
  return (
    <ContainerSection2 isDarkMode={isDarkMode}>
      <TitleProject>My Project</TitleProject>

      <Content>
        <Box >
          <Tag>
            Thesis
          </Tag>
          <ImgFrame>
            <a href='https://www.dosl.rmuti.ac.th/'>
              <Img src={thesis} alt="thesis" />
            </a>

          </ImgFrame>
          <Stack>
            <SubStack bg={"red"} color={"white"}>Laravel 8</SubStack>
            <SubStack bg={"orange"}>MySQL</SubStack>
            <SubStack bg={"purple"} color={"white"}>BootStrap</SubStack>
            <SubStack bg={"white"} color={"black"}>SweetAlert2</SubStack>

          </Stack>
          <Detail>
            <h4>Document Student Loan Fund System</h4>
            <p>ระบบส่งเอกสาร กยศ. ออนไลน์ถูกพัฒนาขึ้นเพื่อให้บริการแก่แผนกงานกองทุนให้กู้ยืมเพื่อการศึกษาโดยมีวัตถุประสงค์หลักเพื่ออำนวยความสะดวกและรวดเร็วในกระบวนการส่งเอกสารและตรวจสอบเอกสารขอกู้ยืม</p>
          </Detail>
        </Box>

        <Box >
          <Tag>
            Mini Project
          </Tag>
          <ImgFrame>
            <a href='https://rmuti.ac.th/student/kanthorn.wo/os-rr/'>
              <Img src={rr} alt="rr" />
            </a>
          </ImgFrame>
          <Stack>
            <SubStack bg={"skyblue"} >React</SubStack>
            <SubStack bg={"purple"} color={"white"}>BootStrap</SubStack>
          </Stack>
          <Detail>
            <h4>Round Robin</h4>
            <p>Mini Project วิชา OS Round-Robin Scheduling อัลกอริทึมในการตัดสินใจลำดับการทำงานของโปรเซสในระบบปฏิบัติการ โดยมีหลักการคือการให้ทุกๆ โปรเซสมีโอกาสทำงานเท่าๆ กันตามลำดับในรอบเวลาที่กำหนดไว้ โดยไม่พิจารณาถึงระดับความสำคัญของแต่ละโปรเซส</p>
          </Detail>
        </Box>

        <Box >
          <Tag>
            Demo
          </Tag>
          <ImgFrame>
            <a href='https://usi-ez-boi.000webhostapp.com/'>
              <Img src={usi} alt="usi" />
            </a>
          </ImgFrame>
          <Stack>
            <SubStack bg={"yellow"} color={"black"}>Java Script</SubStack>

            <SubStack bg={"purple"} color={"white"}>BootStrap</SubStack>

          </Stack>
          <Detail>
            <h4>USI</h4>
            <p>Form ของ USI </p>
          </Detail>
        </Box>

        <Box >
          <Tag>
            Website
          </Tag>
          <ImgFrame>
            <Img src={web} alt="web" />
          </ImgFrame>
          <Stack>
            <SubStack bg="green">MongoDB</SubStack>
            <SubStack bg="orange">Express</SubStack>
            <SubStack bg="skyblue">React</SubStack>
            <SubStack bg="yellowgreen">Node</SubStack>
            <SubStack bg={"pink"}>Styled-Components</SubStack>

          </Stack>
          <Detail>
            <h4>Portfolio V2</h4>
            <p>
              เว็บรวบรวมผลงาน กำลังเขียนระบบ หลังบ้านโดยใช้ MERN เป็นหลัก
            </p>
          </Detail>
        </Box>
        <Box >
          <Tag>
            Internship
          </Tag>
          <ImgFrame>
            <Img src={touch} alt="touch" />
          </ImgFrame>
          <Stack>
            <SubStack bg={"skyblue"} >React</SubStack>
            <SubStack bg={"linear-gradient(90deg, rgba(28,17,242,0.896796218487395) 0%, rgba(223,11,11,1) 100%)"} color={'White'}>Ant Design</SubStack>
            <SubStack bg={"pink"}>Styled-Components</SubStack>

          </Stack>
          <Detail>
            <h4>Touch New Web</h4>
            <p>Project Mockup เว็บไซต์แสดงผลข่าวเชื่อมต่อ API จากระบบ CMS โปรเจคนี้ไม่มีอะไรเน้น Layout และ CSS ในการจัดวางเพื่อแสดงผลข้อมูล ใช้ Figma ออกแบบ Wire Frame Prototype</p>
          </Detail>
        </Box>


      </Content>
    </ContainerSection2>
  );
};

export default Section2;

const TitleProject = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

const Tag = styled.div`
  position: absolute;
  right: 1.5rem; /* Adjust the right distance as needed */
  top: 5px;
  margin-top: 0.5rem; /* Adjust the margin as needed */
  
  font-weight: 500;

`

const ContainerSection2 = styled.div`
  background: ${(props) =>
    props.isDarkMode
      ? 'linear-gradient(to right, #232526, #414345)' //dark
      : 'linear-gradient(to right, #a5e4f2, #e0acfa,#fc7981)'}; //light
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#333333')};
  padding: 6rem 5vw;
  z-index: 1;
  min-width: 300px;
  @media screen and (min-width: 768px) {
    padding: 6rem 10vw;
  }
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin: 15px 0 0;
`;

const Box = styled.div`
  border: 1px solid #dbdbdb;
  box-shadow: 0 3px 6px #00000029;
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
 
`;

const ImgFrame = styled.div`
  padding: 10px 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`

const Img = styled.img`
  overflow: hidden;
  width: 100%;
  max-width: 300px; 
  height: auto;
  transition: transform 0.5s ease-in-out; 
  transform-origin: center center; 
  &:hover {
    transform: scale(1.1);
  }
`;

const Stack = styled.div`
  display: flex;
  gap: 0.6rem;
  padding: 1rem 1.5rem 0;
  flex-wrap: wrap;
`;

const SubStack = styled.div`
  background: ${props => (props.bg ? props.bg : 'transparent')};
  color: ${props => props.color || ''};
  border-radius: 20px;
  padding: 5px 10px 5px 10px;
  font-size: 15px;
`;

const Detail = styled.div`

  position: relative;
  padding: 10px 1.5rem 1rem;
 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
    opacity: 0.8; /* Adjust the opacity as needed */
    z-index: -1;
  }

  p {
    z-index: 1;
    margin-top: 10px;
  }
`;


