import styled from 'styled-components';
import { colorBlack, colorCream } from '../helpers/colors';
import stars from '../img/stars.png';


export default function Skills() {



  return (
    <Wrapper>
    <Header>Skills</Header>
    <Containers>
      <Headings>Education      </Headings>
        <UL>
          <LI>Bachelors Degree of Classical Music at WAAPA</LI>
        </UL>

      </Containers>
      <Containers>
      <Headings>Work Titles</Headings>
        <UL>
          <LI>Mastering Engineer for COMMAND Q - 2015 to present</LI>
          <LI>Producer, song writer and performer for Monsoon Moon & Command Q</LI>
          <LI>Sound Designer</LI>
          <LI>Music Teacher - Helena College, 3 years</LI>
          <LI>Music Teacher - Government, 3 years</LI>
        </UL>
      </Containers>

      <Containers>
      <Headings>Work Descriptions    </Headings>
        <SubHeading>Command Q </SubHeading>
        <UL>
            <LI>Leading a 4 man team, (Booking Agent, Marketing creator,live performer, Manager)</LI>
            <LI>Producing song artworks, show posters</LI>
            <LI>Liaising with promoters, club owners, labels, fans, artists, managers, lawyers, distro, radio</LI>
            <LI>Working with high pressure deadlines and intense environments</LI>
            <LI>Sometimes not sleeping</LI>
        </UL>
          <SubHeading>Monsoon Moon</SubHeading>
        <UL>
            <LI>Same as above</LI>
            <LI>Creating music videos</LI>
        </UL>  
          <SubHeading>Sound Designer</SubHeading>
        <UL>
            <LI>Workshopping creative audio with actors and lighting</LI>
            <LI>Producing performance ready content on an unmoveable deadline</LI>
        </UL>
          <SubHeading>Music Teacher </SubHeading>
        <UL>
            <LI>Liaising with parents, teachers, principles, children and people with learning difficulties</LI>
            <LI>Organising concerts and performances</LI>
            <LI>Creating curriculum for the students</LI>
          
        </UL>
    </Containers>
    
    <Containers>
      <Headings>Skills</Headings>
        <UL>
          <LI>HTML</LI>
          <LI>CSS</LI>
          <LI>Javascript</LI>
          <LI>React</LI>
          <LI>Photoshop</LI>
          <LI>Word</LI>
          <LI>Everything Audio</LI>
        </UL>
    </Containers>

    <Containers>
      <Headings>Current</Headings>
        <UL>
          <LI>Full-Time home study</LI>
          <LI>Teaching Music Part-time</LI>
        </UL>
    </Containers>

    {/* <CircleWrap>
    <Cirle1 />
    <Cirle2 />
    <Cirle3 />
    <Cirle4 />
    <Cirle5 />
    </CircleWrap> */}
    <Night />
    <Stars />
    </Wrapper>
  )
}

const Night = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgb(1, 51, 90) 0%, rgb(0, 45, 80) 15%, rgb(0, 40, 70) 32%, rgb(0, 26, 52) 52%, rgb(1, 18, 27) 80%, rgb(0, 10, 20) 100%);
`;
const Stars = styled.div`
  position: absolute;
  width: 200%;
  top: 0;
  left: 0;
  transform: rotate(180deg);
  height: 100%;
  background-image: url(${stars});
  background-repeat: repeat;
  animation: stars linear 120s infinite;
  @keyframes stars {
    0% {
      left: 0;
      transform: rotate(2deg)
      }
    50% {
      left: -10%;
      transform: rotate(-4deg);
      }
    100% {
      left: 0;
      transform: rotate(2deg)} 
  }
`;
// const CircleWrap = styled.div`  
//   opacity: 0.8;
// `;
// const Cirle1 = styled.div`
//   position: absolute;
//   top: -7%;
//   left: -10%;
//   border-radius: 50%;
//   height: 260px;
//   width: 260px;
//   background-color: #7691b7;
// `;
// const Cirle2 = styled.div`
//   position: absolute;
//   top: 40%;
//   left: 40%;
//   border-radius: 50%;
//   height: 500px;
//   width: 500px;
//   background-color: #e79b5d;
// `;
// const Cirle3 = styled.div`
//   position: absolute;
//   top: 80%;
//   left: -20%;
//   border-radius: 50%;
//   height: 350px;
//   width: 350px;
//   background-color: #ebc661;
// `;
// const Cirle4 = styled.div`
//   position: absolute;
//   top: 32%;
//   left: 7%;
//   border-radius: 50%;
//   height: 170px;
//   width: 170px;
//   background-color: #8bc3d2;
// `;
// const Cirle5 = styled.div`
//   position: absolute;
//   top: 18%;
//   left: 62%;
//   border-radius: 50%;
//   height: 140px;
//   width: 140px;
//   background-color: #F2BC8D;
// `;


const Wrapper = styled.div`
  width:100%;
  height: 100%;
  background-color: ${colorCream};
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color:${colorBlack} ;
`;
const Header = styled.div`
  font-size: 2.5rem;
  margin-top: 1.6rem;
  padding-left: 1rem;
  width: 100%;
  align-self: flex-start;
  font-weight: 600;
  z-index: 1;
  color: ${colorCream};
`;
const Containers = styled.div`
  width:90%;
  height: auto;
  margin: 1rem 0;
  z-index: 1;
  color: ${colorCream};
`;
const Headings = styled.div`
  font-size: 2rem;
  padding: 0;
  text-decoration: underline;
`;
const UL = styled.ul`
  margin: 0 ;
`;
const SubHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;
const LI = styled.li`
  font-size: 0.8rem;
`;
