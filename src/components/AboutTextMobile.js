import styled, {keyframes} from "styled-components";
import { flipInX} from 'react-animations';
import OnStage from '../img/behind-booth.jpeg';
import Party from '../img/party.webp';
import Belvoire from '../img/Belvoire.jpg';
import corona from '../img/corona.webp';
import decks from '../img/decks.jpg';
import sarcastic from '../img/sarcastic.jpg';
import eyes from '../img/eyes.webp';
import { useEffect, useState } from "react";
import studio from '../img/studio.png';
import vscode from '../img/vscode.webp';
import onCar from '../img/onTheCar2.webp';
import StageShot from '../img/big-stage.webp';
import { colorWhite } from "../helpers/colors";
import { device } from '../helpers/screenSizes';

export default function AboutText (props) {

  const {scrollState, pageHeight} = props;
  const [picSlide, setPicSlide] = useState(0);

  useEffect(() => {
    let heights = pageHeight;
    const percentage = Math.floor((100 / heights) * scrollState);
    setPicSlide(percentage)
  }, [scrollState, pageHeight])

  console.log(`mobile slide ${picSlide}%`)

  return (<>
  <Wrapper>
    <Stage>
      <Hone>I've been a musician my whole life.</Hone>
      <Shots />
    </Stage>

    <Paragraphs >


{/* 1st  */}
    <Partition>
      <Text>And I've been lucky enough to travel and collaborate with people around the world.</Text>

      <ContainerRect>
        <Flip style={{backgroundImage: `url(${Belvoire})`}}/>
      </ContainerRect>      <Cleaner /></Partition>


{/* 2nd */}
    <Partition>
      <Text>My unique skill was audio engineering and audio production, namely, Mastering. 
        <br />Life was good.v</Text>
      <ContainerSquare>
        <Flip style={{backgroundImage: `url(${studio})`}}/>
      </ContainerSquare>      <Cleaner />
      </Partition>


{/* 3rd  */}
    <Partition>
      <Text>Then COVID happens.</Text>
      <ContainerSquare >
        <Flip style={{backgroundImage: `url(${corona})` }}/>
      </ContainerSquare>      <Cleaner /></Partition>


{/* 4th */}
    <Partition>
      <Text >The world shuts down and along with it, music, theatre, touring, festivals, clubs, basically art in general.</Text>  
      <ContainerRect >
        <Flip style={{backgroundImage: `url(${decks})`, backgroundPosition: 'top'}}/>
      </ContainerRect>      <Cleaner />
      </Partition>


{/* 5th */}
    <Partition>
      <Text>In less than a week, all my income streams had 
          vanished and in case you're wondering, musicians aren't cashing in redundancy payouts.</Text>

      <ContainerSquare>
        <Flip style={{backgroundImage: `url(${Party})`}}/>
      </ContainerSquare>      <Cleaner /></Partition>


{/* 6th */}
    <Partition>
      <Text>
      It was time to look for a new career opportunity. To find something just as challenging and exciting.
        And to no surprise, coding is very challenging, creative and incredibly satisfying<br /></Text>
        <ContainerSquare>
        <Flip style={{backgroundImage: `url(${vscode})`}}/>
      </ContainerSquare>      <Cleaner />
      </Partition>

{/* 7th  */}
    <Partition>
      <Text>Now I am but a humble Padawan, with much to learn.  </Text>
      
      <ContainerSquare>
        <Flip style={{backgroundImage: `url(${onCar})`, filter: 'brightness(1.2) contrast(1.2)'}}/>
      </ContainerSquare>      <Cleaner /></Partition>


{/*  8th  */}
    <Partition>
      <Text>
      I hope to find myself interning side by side with the pro's, building apps and 
        games, solving problems, failing compiles. I know this is a field I will be happy.</Text>
        <ContainerSquare>
        <Flip style={{backgroundImage: `url(${eyes})`}}/>
      </ContainerSquare>      <Cleaner /></Partition>

{/*  9th  */}
    <Partition>
      <Text>I didn't study coding at Uni or a bootcamp. I didn't study because a 
        lecturer required me to complete an assignment or because my Mum said I'd be good at it.</Text>

      <ContainerSquare>   
        <Flip style={{backgroundImage: `url(${sarcastic})` }}/>
      </ContainerSquare>      <Cleaner /></Partition>

{/*  10  */}
    <Stage2><Cleaner style={{width: '100%', borderRadius: '20px'}} />
      <Text style={{ height: '30%', fontWeight: '600', backgroundColor: 'hsla(60, 28%, 95%, 0.75)',
      borderRadius: '15px', display: 'flex', alignItems: 'center'}}>  
      I study because I want to. 
      <br />I study because I see coding as my long term  <br /> 
        future and because I'm a ridiculously passionate person.      
          </Text>
      <Shot style={{}}/>

    </Stage2>


    </Paragraphs>

  </Wrapper>
  </>)
}

const Wrapper = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const Cleaner = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: -1;
  opacity: 0.8;
  /* background-color: ${colorWhite}; */
`;
const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Hone = styled.h1`
  margin: 0;
  height: 40%;
  width: 90%;
  font-size: 2rem;
  display: flex;
  padding-top: 30%;
  /* align-items: center; */
  text-align: center;
`;
const Shots = styled.div`
  position: relative;
  border-radius: 10px ;
  background-position: 0px -150px;
  background-size: cover;
  width: 150%;
  height: 60%;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url(${StageShot});
  background-position: top;
  ;
`;
const Paragraphs = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin:  0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;
const Partition = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  z-index: 2;
  flex-direction: column;
  background-color: ${colorWhite};
  border-radius: 15px;
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
`;
const ContainerSquare = styled.div`
    display: flex;
    min-width: 150px;
    min-height: 300px;
    height: 250px;
    width: 100%;
    
`;
const ContainerRect = styled.div`
    display: flex;
    min-width: 200px;
    min-height: 113px;
    height: 250px;
    width: 100%;
`;
const leftFlip =  keyframes`${flipInX}`;
const Flip = styled.div`
  animation: ${leftFlip} 0.8s;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
const Text = styled.div`
  max-width: 95%;
  min-height: 80px;
  text-align: center;
  margin: 2rem 0rem 0.8rem;
  font-size: 1.2rem;
`;
const Stage2 = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Shot = styled.div`
  background-image: url(${OnStage});
  border-radius: 10px ;
  width: 100%;
  height: 70%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -300px -0px;

  ${device.mobile} {
    background-position: -130px -0px;

  }
`;
