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


  const DARKBLUE = 'hsl(215,58%,79%)';
  const ORANGE = 'hsl(27,86%,76%)';
  const YELLOW = 'hsl(50,98%,76%)';
  const LIGHTBLUE = 'hsl(193,60%,78%)';
  const LIGHTORANGE = 'hsl(28,90%,80%)';

  const SKILLSBOX = {
    heading: 'Skills',
    subHeading: [
      'LANGUAGES', 'FRAMEWORKS', 'LIBRARIES', 'OTHER',
    ],
    list: [
      ['HTML', 'CSS', 'JAVASCRIPT', 'NodeJS'],
      ['React', 'Vue'],
      ['RTK-Query', 'NextJS'],
      ['MongoDb','RESTful API\'s', 'Typescript' ,'Responsive Design'],
      ['']
    ],
  }
  const INTROBOX = {
    subHeading: ['PROFESSIONAL SUMMARY'],
    list: [`        Logical and results-driven Web Developer dedicated to building and optimizing user-focused 
    websites for customers with various business objectives. Judicious and creative when crafting
     effective websites, apps and platforms to propel competitive advantage and revenue growth.
      Technically proficient and analytical problem solver with calm and focused demeanor.`
    ],
  }
  const ABOUTBOX = {
    subHeading: [
      'PROFESSIONAL EXPERIENCE'
    ],
    title: ['Mix Engineer & Mastering Engineer, Song Writer', 'Helena College - Teacher '],
    date: ['01/2011 - 01/2022', '01/2014 - 01/2017'],
    list: [
      ['Collaborated with producers and performers to create and brainstorm new ideas and works.',
        'Toured as a performer.',
        'Mixed and mastered vocal arrangements and music compositions, and optimized songs and albums.',
        'Used Ableton and hardware to mix and edit tracks.'],
      ['Worked cooperatively with other teachers, administrators and parents to help students reach learning objectives.',
      'Communicated frequently with parents, students and faculty to provide feedback and discuss instructional strategies.',
      'Kept students on-task with proactive behavior modification and positive reinforcement strategies.',
      'Incorporated multiple types of teaching strategies into classroom.',
        'Planned and implemented integrated lessons to meet national standards.'],
      ['At Helena College, I achieved a 250% increase in student enrollment by the third year of employment',
      'As an audio engineer I maintained consistent music clientele from around the world by repeatedly producing exceptional results and collaborating closely with clients to ensure their complete satisfaction',
      'As an artist and brand, I successfully managed global releases, national touring, marketing, and video productions through careful prioritization of tasks using S.M.A.R.T goals']
    ]
  }
  const LASTBOX = {
    subHeading: 'ACCOMPLISHMENTS',
    list: ['At Helena College, I achieved a 250% increase in student enrollment by the third year of employment',
    'As an audio engineer I maintained consistent music clientele from around the world by repeatedly producing exceptional results and collaborating closely with clients to ensure their complete satisfaction',
      'As an artist and brand, I successfully managed global releases, national touring, marketing, and video productions through careful prioritization of tasks using S.M.A.R.T goals'
    ]
  }


  return (
  <Wrapper>
      {loading && <Loader />}
      <BoxWrap>
    <Box>
        {/* <Header>Skills</Header> */}



    <Containers style={{ backgroundColor: YELLOW }}>
          <UL>
          <SubHeading>{INTROBOX.subHeading}</SubHeading>
          {INTROBOX.list.map((item, index) => {  // MAP THE LIST ARRAY
          return (
            <PARA>{item}</PARA>
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
          
      <Containers style={{ backgroundColor: ORANGE }}>
      <DownloadBtn>Download Resume as PDF</DownloadBtn>
          <PDFPreview></PDFPreview> 

      </Containers>
          
        </Box>
        <Box>
          <Containers style={{ backgroundColor: LIGHTORANGE }}>
            
      {ABOUTBOX.title.map((heading, index) => {  //MAP THE SUB HEADINGS 
            return (
              <UL>
                <SubHeading>{ABOUTBOX.subHeading[index]}</SubHeading>
                <Title style={{marginTop: '1rem'}}>{heading}</Title>
                <Title style={{marginBottom: '1rem', fontStyle: 'italic'}}>{ABOUTBOX.date[index]}</Title>
                {ABOUTBOX.list[index].map((item, index) => {  // MAP THE LIST ARRAY
                return (
                  <LI><span>{item}</span></LI>
                )
              })}
              </UL>
            )
          })}

    </Containers>
    
    <Containers style={{backgroundColor: DARKBLUE}}>
              <UL>
                <SubHeading>{LASTBOX.subHeading}</SubHeading>
                {LASTBOX.list.map((item, index) => {  // MAP THE LIST ARRAY
                return (
                  <LI><span>{item}</span></LI>
                )
              })}
              </UL>
    </Containers>

   
        </Box>
        </BoxWrap>
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
const BoxWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`
const Box = styled.div`
  width:40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;

  ${device.laptopL}{
    /* justify-content: center; */
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
  z-index: 1;
  border-radius: 5px;
  padding-bottom: 1rem;

  & ul:first-child {
    margin-top: 1.5rem;
  }
  ${device.laptopL}{
    /* width:90%; */
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
  font-weight: 600;
  color: ${colorDarkGrey};
`;
const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 600;

`
const LI = styled.li`
  font-size: 0.5rem;
  padding-right: 0.3rem;
  margin-left: 1rem;
  padding-bottom: 5px;

  & span {
    margin-left: 0.5rem;
    letter-spacing: 0.3px;
    font-size: 0.9rem;
    line-height: 16px;


  }
`;

const PARA = styled.p`
  font-size: 0.9rem;
  padding-right: 0.3rem;
  margin-left: 1rem;

`
const DownloadBtn = styled.button`


`
const PDFPreview = styled.div`

`