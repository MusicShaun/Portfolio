import styled from 'styled-components';
import { colorBlack, colorCream, colorDarkGrey, colorSand} from '../../helpers/colors';
import { device } from '../../helpers/screenSizes';
import Loader from '../../components/Loader';
import React, { useEffect , useState } from 'react';
import PDFIcon from '../../img/download-pdf.png'
import { Helmet } from "react-helmet-async";

export default function Skills() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  }, [])

  const DARKBLUE = 'hsl(215,58%,83%)';
  const ORANGE = 'hsl(27,86%,76%)';
  const YELLOW = 'hsl(50,98%,76%)';
  const LIGHTBLUE = 'hsl(193,60%,78%)';
  const LIGHTORANGE = 'hsl(28,90%,80%)';

  const INTROBOX = {
    subHeading: ['PROFESSIONAL SUMMARY'],
    list: [`Passionate and collaborative IT professional with strong communication skills and a 
      knack for motivation. Eager to leverage my diverse skill set in a dynamic role where I 
      can continue to grow and build a long-term career.`
    ],
  }

  const SKILLSBOX = {
    title: [
      'IT SUPPORT & NETWORKING', 'FRONTEND DEVELOPMENT', 'RECENT CERTIFICATIONS'
    ],
    subHeading: [
      [
        'HARDWARE', "OPERATING SYSTEMS", 'NETWORKING', 'SECURITY', 'TROUBLESHOOTING', 'OPERATIONAL PROCEDURES'
      ],
      [
        'LANGUAGES', 'LIBRARIES', 'FRAMEWORKS', 'DATABASES',
      ],
      [
        'QUEENSLAND UNIVERSITY OF TECHNOLOGY', 
        'COMPTIA', 
        'COMPTIA', 
      ]
    ],
    list: [
      [
        ['Installation, configuration, and troubleshooting of PCs, laptops, mobiles'],
        ['Windows, macOS installation, configuration, and management'],
        ['TCP/IP, DNS, DHCP, and wireless protocols;'],
        ['Basic security measures, understanding and troubleshooting security issues'],
        ['Identifying and resolving software issues, maintaining operating systems'],
        ['Best practices in documentation, safety procedures, and environmental impacts']
      ],
      [
        ['HTML, CSS, Javascript, NodeJS'],
        ['React, Vue'],
        ['TypeScript, RTK, NextJS'],
        ['MongoDb, RESTful API\'s'],
      ],
      [
        ['Post-gradudate Certificate in ICT'],
        ['Network+'],
        ['A+']
      ]
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
    list: ['18 months full-time frontend development home study with deployment of various websites and technologies', 
      'Achieved a 250% increase in student enrollment by the third year of employment at Helena College.', 
      'Maintained a consistent global music clientele by producing exceptional results and collaborating closely with clients. ',
      'Successfully managed global releases, national touring, marketing, and video productions through careful prioritization of tasks using S.M.A.R.T goals.'
      
    ]
  }


  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shaun's Resume and skills</title>
        <meta property='og:title' content="Shaun's Resume and skills" />
        <meta property='og:image' content='https://res.cloudinary.com/dyneqi48f/image/upload/v1686370752/portfolio/Screenshot_2023-06-10_at_12.19.04_pm_ib2s0p.png' />
        <meta property='og:description' content="View or download Shaun's CV and explore his skills. Get insights into his professional experience and accomplishments." />
        <meta name="description" content="View or download Shaun's CV and explore his skills. Get insights into his professional experience and  accomplishments." />
        <link rel='canonical' href='https://www.shaunpickett.com/skills' />
      </Helmet>

      <h1 style={{ position: 'absolute', visibility: 'hidden' }}>View my skills and CV </h1>
      <h2  style={{ position: 'absolute', visibility: 'hidden' }}>You can download the CV by clicking the button</h2>

    {loading && <Loader />}
    <BoxWrap>
      <Box>
        {/* <Header>Skills</Header> */}
        <Containers style={{ backgroundColor: YELLOW }}>
          <UL>
            <SubHeading>{INTROBOX.subHeading}</SubHeading>
            {INTROBOX.list.map((item, index) => {  // MAP THE LIST ARRAY
            return (
              <PARA key={index + 300}>{item}</PARA>
            )
            })}
          </UL>
          </Containers>
          
        {/*! CERTIFICATIONS  */}
        <Containers style={{backgroundColor: LIGHTBLUE, width: '100%', marginLeft: '0%' }}>
              <UL key={0 + 200}>
                <SubHeading>{SKILLSBOX.title[2]}</SubHeading>
                {SKILLSBOX.subHeading[2].map((item, listNo) => {
                  return (
                    <div>
                      <LI key={listNo + 400}>
                      <Title  style={{marginTop: '1rem'}}>{item}</Title> 
                        <span>
                          {SKILLSBOX.list[2][listNo]}
                      </span>
                      </LI>
                      </div>
                    )
                  })
                }
              </UL>
          </Containers>

          {/* NETWORKING  */}
        <Containers style={{backgroundColor: ORANGE, width: '100%', marginLeft: '0%' }}>
              <UL key={0 + 200}>
                <SubHeading>{SKILLSBOX.title[0]}</SubHeading>
                {SKILLSBOX.subHeading[0].map((item, listNo) => {
                  return (
                    <div>
                      <LI key={listNo + 400}>
                      <Title  style={{marginTop: '1rem'}}>{item}</Title> 
                        <span>
                          {SKILLSBOX.list[0][listNo]}
                      </span>
                      </LI>
                      </div>
                    )
                  })
                }
              </UL>
          </Containers>
          


      </Box>
        


{/* //* RIGHT HAND SIDE  */}
        <Box>
          
          {/* FRONT END DEV */}
          <Containers style={{backgroundColor: DARKBLUE, width: '100%', marginLeft: '0%' }}>
              <UL key={0 + 200}>
                <SubHeading>{SKILLSBOX.title[1]}</SubHeading>
                {SKILLSBOX.subHeading[1].map((item, listNo) => {
                  return (
                    <div>
                      <LI key={listNo + 400}>
                      <Title  style={{marginTop: '1rem'}}>{item}</Title> 
                        <span>
                          {SKILLSBOX.list[1][listNo]}
                      </span>
                      </LI>
                      </div>
                    )
                  })
                }
              </UL>
          </Containers>

        {/* PROFESSIONAL CAREER */}
        {/* <Containers style={{ backgroundColor: DARKBLUE }}>  
          {ABOUTBOX.title.map((heading, index) => {  //MAP THE SUB HEADINGS 
            return (
              <UL key={index + 100}>
                <SubHeading >{ABOUTBOX.subHeading[index]}</SubHeading>
                <Title style={{marginTop: '1rem'}}>{heading}</Title>
                <Title style={{marginBottom: '1rem', fontStyle: 'italic'}}>{ABOUTBOX.date[index]}</Title>
                  {ABOUTBOX.list[index].map((item, index) => {  // MAP THE LIST ARRAY
                    return (
                      <LI key={index + 700}><span>{item}</span></LI>
                    )
                  })}
                  </UL>
                )
              })}
        </Containers> */}
    
        <Containers style={{backgroundColor: YELLOW}}>
          <UL >
            <SubHeading style={{marginBottom: '1rem'}}>{LASTBOX.subHeading}</SubHeading>
              {LASTBOX.list.map((item, index) => {  // MAP THE LIST ARRAY
              return (
                <LI key={index + 150}><span>{item}</span></LI>
              )
            })}
            </UL>
          </Containers>

          <Containers style={{ backgroundColor: LIGHTBLUE, width: '100%', marginLeft: '0%'}}>
          <PDFWrap>
            <PDFPreview src={PDFIcon} alt='Download PDF'></PDFPreview> 
          </PDFWrap>
            <DownloadBtn>
              <a title='Click here to download my resume as a PDF'
                href='https://drive.google.com/file/d/1wTvSvoMMDYt7WUYRGqbRXEotUnlJlKSo/view?usp=sharing'
                download='SHAUN-PICKETT-RESUME'
                target="_blank" 
                rel='noreferrer'
                aria-label="Download my resume as a PDF"
              >
                Download Resume as PDF
            </a></DownloadBtn>
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
  min-height: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;

  ${device.laptopL}{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 4rem;
  }
`
const Box = styled.div`
  width:40%;
  min-height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${device.laptopL}{
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: auto;
  }
  ${device.mobile}{
    width:90%;
  }

`;

const Containers = styled.div`
  z-index: 1;
  border-radius: 5px;
  padding-bottom: 1rem;
  box-shadow: 5px 5px 15px lightgrey;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 3px lightgrey;
  }

  & ul:first-child {
    margin-top: 1.5rem;
  }

`;

const UL = styled.ul`
  margin: 0 ;
  padding-right: 1rem;

  ${device.mobile}{
    padding-left: 1rem;
  }
`;
const SubHeading = styled.h2`
  font-size: 1.35rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
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
    /* margin-left: 0.5rem; */
    letter-spacing: 0.3px;
    font-size: 0.9rem;
    line-height: 16px;


  }
`;

const PARA = styled.p`
  font-size: 0.9rem;
  padding-right: 0.3rem;
  margin-left: 1rem;
  line-height: 16px;

`
const DownloadBtn = styled.button`
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  border-radius: 10px;
  height: 60px;
  width: 290px;
  border: solid 2.2px hsl(40,3%,17%);
  cursor: pointer;
  transition: font-weight 0.08s ease-in-out, background-color 0.08s ease-in-out;
  &:hover {
    background-color: ${colorSand};
    font-weight: 600;
  }
& a {
  text-decoration: none;
  color: ${colorBlack};
}
`
const PDFWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const PDFPreview = styled.img`
  height: 100px;
  margin: 1rem 0 0.5rem;
  
`