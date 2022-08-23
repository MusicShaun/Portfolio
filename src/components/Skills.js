import styled from 'styled-components';
import { colorBlack, colorCream } from '../helpers/colors';

export default function Skills() {



  return (
    <Wrapper>
    <Header>Skills</Header>
    <Containers style={{backgroundColor: '#7691b7'}}>
      <Headings>Education      </Headings>
        <UL>
          <LI>Bachelors Degree of Classical Music at WAAPA</LI>
        </UL>
      </Containers>

      <Containers style={{backgroundColor: '#e79b5d'}}>
      <Headings>Work Titles</Headings>
        <UL>
          <LI>Mastering Engineer for COMMAND Q - 2015 to present</LI>
          <LI>Producer, song writer and performer for Monsoon Moon & Command Q</LI>
          <LI>Sound Designer</LI>
          <LI>Music Teacher - Helena College, 3 years</LI>
          <LI>Music Teacher - Government, 3 years</LI>
        </UL>
      </Containers>

      <Containers style={{backgroundColor: '#ebc661'}}>
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
    
    <Containers style={{backgroundColor: '#8bc3d2'}}>
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

    <Containers style={{backgroundColor: '#F2BC8D'}}>
      <Headings>Current</Headings>
        <UL>
          <LI>Full-Time home study</LI>
          <LI>Teaching Music Part-time</LI>
        </UL>
    </Containers>

    </Wrapper>
  )
}




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
`;
const Containers = styled.div`
  width:90%;
  height: auto;
  margin: 1rem 0;
  z-index: 1;
  border-radius: 5px;
  padding-bottom: 1rem;
`;
const Headings = styled.div`
  margin-left: 0.6rem;
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
  margin-left: 1rem;
`;
const LI = styled.li`
  font-size: 0.9rem;
  padding-right: 0.3rem;
`;
