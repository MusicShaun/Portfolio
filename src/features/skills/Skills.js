import styled from 'styled-components';
import { colorBlack, colorCream, colorDarkGrey} from '../../helpers/colors';
import { device } from '../../helpers/screenSizes';
import Loader from '../../components/Loader';
import { useEffect , useState } from 'react';

export default function Skills() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  }, [])
  
  useEffect(() => {
    document.title = 'Shaun\'s Skills';
  }, [])


  const DARKBLUE = '#90ABD1';
  const ORANGE = '#F4A86A';
  const YELLOW = 'hsl(50,98%,76%)';
  const LIGHTBLUE = 'hsl(193,60%,78%)';
  const LIGHTORANGE = '#F2BC8D';

  const SKILLSBOX = {
    heading: 'Skills',
    subHeading: [
      'LANGUAGES', 'FRAMEWORKS', 'LIBRARIES', 'OTHER',
    ],
    list: [
      ['HTML', 'CSS', 'JAVASCRIPT', 'NodeJS'],
      ['React', 'Vue'],
      ['RTK-Query', 'NextJS'],
      ['MongoDb','RESTful API\'s', 'Typescript', 'RTK-Query' ,'Responsive Design'],
      ['']
    ],
  }
  const INTROBOX = {
    heading: 'SHAUN PICKETT',
    subHeading: [''],
    list: [
      ['music.ShaunPickett@gmail.com'],
      ['0412 220 332'], ['Trigg, Perth, Wa 6029'],
      ['www.ShaunPickett.com']
    ],
  }


  return (
  <Wrapper>
            {loading && <Loader /> }
    <Box>
        <Header>Skills</Header>



    <Containers style={{ backgroundColor: YELLOW }}>
      <Headings>{INTROBOX.heading}</Headings>
        <UL>
          {INTROBOX.list.map((item, index) => {  // MAP THE LIST ARRAY
          return (
            <LI><span>{item}</span></LI>
          )
          })}
        </UL>
      </Containers>

      <Containers style={{backgroundColor: LIGHTBLUE}}>
      {SKILLSBOX.subHeading.map((heading, index) => {  //MAP THE SUB HEADINGS 
            return (
              <UL>
                <SubHeading>{heading}</SubHeading>
                {SKILLSBOX.list[index].map((item, index) => {  // MAP THE LIST ARRAY
                return (
                  <LI><span>{item}</span></LI>
                )
              })}
              </UL>
            )
          })}
      </Containers>

      <Containers style={{backgroundColor: DARKBLUE}}>
        <Headings>Work Descriptions    </Headings>
          <SubHeading>Music Teacher </SubHeading>
        <UL>
            <LI>Liaising with parents, teachers, principles, children and people with learning difficulties</LI>
            <LI>Organising concerts and performances</LI>
            <LI>Creating curriculum for the students</LI>
            <LI>Safe and inclusive work practices</LI>
        </UL>
        <SubHeading>Mastering Engineer</SubHeading>
        <UL>
            <LI>Liaising with international artists and working towards a common goal.</LI>
            <LI>Striving for the best product every time.</LI>
            <LI>Providing community and mentorship to up and coming artists</LI>
            <LI>Working with high pressure deadlines and intense environments</LI>
        </UL>
          <SubHeading>Producer / Sound Designer / Artist</SubHeading>
        <UL>
            <LI>Writing & producing music</LI>
            <LI>Creating visual content and music videos</LI>
            <LI>Leading a 4 person team throughout many national tours </LI>
            <LI>Workshopping audio with actors and lighting</LI>
            <LI>Being performance ready for every show</LI>
        </UL>

    </Containers>
    
    <Containers style={{backgroundColor: LIGHTORANGE}}>
      <Headings>Skills</Headings>
        <UL>
          <LI>CSS/SASS</LI>
          <LI>Javascript/React/Typescript</LI>
          <LI>Node.js</LI>
          <LI>RTK - Query</LI>
          <LI>NextJS</LI>
          <LI>MUI</LI>
          <LI>Anything Audio</LI>
        </UL>
    </Containers>

    <Containers style={{backgroundColor: '#F2BC8D'}}>
      <Headings>Current</Headings>
        <UL>
          <LI>Current study focus - Node.JS</LI>
          <LI>Finishing a MERN stack eCommerce Site</LI>
        </UL>
    </Containers>
    </Box>
  </Wrapper>
  )
}




const Wrapper = styled.div`
  position: relative;
  width:100%;
  height: 100%;
  background-color: ${colorCream};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  flex-direction: row;

  color:${colorBlack} ;
`;
const Box = styled.div`
  width:90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${device.laptopL}{
    justify-content: center;
  }

`;
const Header = styled.div`
  font-size: 3rem;
  margin-top: 1.6rem;
  padding-left: 1rem;
  line-height: 75%;
  width: 40%;
  align-self: center;
  z-index: 1;
  font-family: 'Fredericka the Great', cursive;
  ${device.mobile}{
    align-self: flex-start;
  }
`;
const Containers = styled.div`
  width:49%;
  height: auto;
  margin: 1rem 0;
  z-index: 1;
  border-radius: 5px;
  padding-bottom: 1rem;
  ${device.laptopL}{
    width:90%;
  }
`;
const Headings = styled.div`
  margin-left: 0.6rem;
  font-size: 2rem;
  padding: 0;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;

`;
const UL = styled.ul`
  margin: 0 ;
`;
const SubHeading = styled.div`
  font-size: 1.35rem;
  font-weight: 500;
  margin-left: 0rem;
  color: ${colorDarkGrey};
`;
const LI = styled.li`
  font-size: 0.5rem;
  padding-right: 0.3rem;
  margin-left: 1rem;

  & span {
    margin-left: 0.5rem;
    letter-spacing: 0.7px;
    font-size: 0.9rem;

  }
`;
