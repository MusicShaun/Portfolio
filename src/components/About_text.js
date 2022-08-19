import styled, {keyframes} from "styled-components";
import { bounce, flipInX, slideInRight, bounceInLeft, bounceInRight, rotateInUpLeft,rotateInUpRight } from 'react-animations';
import {colorCream, colorGrey } from '../helpers/colors';
import HeadShot from '../img/headshot.jpg';
import Couch from '../img/couch-shot.jpg';
import CLG from '../img/cant-let-go.jpg';
import Animals from '../img/we-are-animals.jpg';
import Pride from '../img/pride-pic.jpg';
import Profile from '../img/profile-pic.jpeg';
import Smokey from '../img/smoky-head-shot.jpg';
import LouAndMe from '../img/lou-and-i.jpg';
import JustFriends from '../img/just-friends.jpg';
import JustFriends2 from '../img/just-friends-2.jpg';
import OnStage from '../img/behind-booth.jpeg';
import Party from '../img/party.jpg';
import Belvoire from '../img/Belvoire.jpg';
import corona from '../img/corona.webp';
import decks from '../img/decks.jpg';
import StageShot from '../img/big-stage.jpeg';
import sarcastic from '../img/sarcastic.jpg';
import couch2 from '../img/couch2.jpg';
import jump from '../img/jump.jpg';
import { useEffect, useState } from "react";
import {device} from '../helpers/screenSizes';

export default function About_text (props) {



  const {scrollState, pageHeight} = props;

  const [picSlide, setPicSlide] = useState(0);

  useEffect(() => {
    const percentage = Math.floor((100 /pageHeight) * scrollState);
    setPicSlide(percentage)
  }, [scrollState])


  console.log(`picSlide ${picSlide}%`)

  return (<>

    <Paragraphs style={{transform: `translateY(-350px)`}}>
    
{/* 1st  */}
    <Partition style={{justifyContent: 'flex-end', marginBottom: '50px'}}>
      <RightText>And lucky enough to travel and collaborate with people all over the world.</RightText>

      <RightContainer style={{  maxWidth: '400px', maxHeight:' 220px', width: '100%', height: '200%'}}>
        {picSlide > 3 && <RightFlip style={{backgroundImage: `url(${Belvoire})`}}/>}
      </RightContainer></Partition>


{/* 2nd */}
    <Partition style={{ marginBottom: '80px'}}>
      <LeftContainer style={{minWidth: '270px', minHeight: '270px', height: '270px'}}>
        {picSlide > 7 && <LeftFlip style={{backgroundImage: `url(${Party})`}}/>}
      </LeftContainer>
      <LeftText>My specialty was audio engineering and audio production, namely, Mastering.</LeftText></Partition>


{/* 3rd  */}
    <Partition style={{transform: 'translateY(-40px)', justifyContent: 'center',  marginBottom: '100px'}}>
      <RightText>Then COVID happens.</RightText>

      <RightContainer style={{minWidth: '220px', minHeight: '220px', height: '220px'}}>
        {picSlide > 15 &&<RightFlip style={{backgroundImage: `url(${corona})` }}/>}
      </RightContainer></Partition>


{/* 4th */}
    <Partition style={{marginBottom: '40px' }}>
      <LeftContainer style={{minWidth: '400px', minHeight: '220px', height: '220px'}}>
        {picSlide > 27 && <LeftBounce style={{backgroundImage: `url(${decks})`, backgroundPosition: 'top'}}/>}
      </LeftContainer>

      <LeftText style={{}}>4th The world shuts down and along with it, music, theatre, touring, festivals, clubs etc. </LeftText>
    </Partition>


{/* 5th */}
    <Partition style={{justifyContent: 'flex-end',  marginBottom: '40px'}}>
      <RightText style={{maxWidth: '100%'}}>5555 In less than a week, all my income streams had 
          vanished and in case you're wondering, musicians aren't cashing in redundancy payouts.</RightText>

      <RightContainer style={{minWidth: '200px', minHeight: '200px', height: '200px'}}>
        {picSlide > 34 && <RightBounce style={{backgroundImage: `url(${HeadShot})`}}/>}
      </RightContainer></Partition>


{/* 6th */}
    <Partition style={{marginBottom: ' 100px'}}>
      <LeftContainer style={{ minWidth: '220px', minHeight: '220px', height: '220px'}}>
        {picSlide > 44 && <LeftBounce style={{backgroundImage: `url(${couch2})`}}/>}
      </LeftContainer>
      <LeftText style={{maxWidth: '80%'}}>
      6th However, this exposes a new opportunity. To find something just as challenging and exciting.
        As it turns out, coding is very challenging, creative and incredibly satisfying.<br /></LeftText></Partition>

{/* 7th  */}
    <Partition style={{justifyContent: 'flex-end',marginBottom: ' 20px' }}>
      <RightText style={{maxWidth: '80%'}}>7th Now I am but a novice, with much to learn and much to create.</RightText>
      
      <RightContainer style={{ minWidth: '220px', minHeight: '220px', height: '220px'}}>
        {picSlide > 54 && <RightPulse style={{backgroundImage: `url(${JustFriends})`}}/>}
      </RightContainer></Partition>


{/*  8th  */}
    <Partition style={{marginBottom: ' 50px'}}>
      <LeftContainer style={{ minWidth: '220px', minHeight: '220px', height: '220px'}}>
        {picSlide > 64 && <LeftPulse style={{backgroundImage: `url(${LouAndMe})`}}/>}
      </LeftContainer>
      <LeftText style={{maxWidth: '80%'}}>
        888 I hope to find myself as a humble intern, side by side with the pro's in this field, building apps, 
        games, solving problems, you name it.</LeftText></Partition>

{/*  9th  */}
    <Partition style={{justifyContent: 'flex-end', marginBottom: ' 220px'}}>
      <RightText style={{maxWidth: '100%'}}>9 I didn't study coding at Uni or a bootcamp. I didn't study because a 
        lecturer required me to complete an assignment or because I needed to pass.</RightText>

      <RightContainer style={{ minWidth: '300px', minHeight: '220px', height: '220px'}}>   
        {picSlide > 70 && <RightPulse style={{backgroundImage: `url(${sarcastic})` }}/>}
      </RightContainer></Partition>

{/*  10  */}
    <Partition style={{width: '100%', marginBottom: ' 80px'}}>
      <LeftText style={{maxWidth: '100%', textAlign: 'center'}}>10 I studied because I wanted to. I studied because I see coding as my long term 
        future and because I'm a ridiculously passionate person.</LeftText>
    </Partition>
    <ClosingImg >
      <Shot style={{transform: `translateY(${scrollState - pageHeight}px)`}}/>
    </ClosingImg>

    </Paragraphs>
  </>)
}


const Paragraphs = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  margin: 6rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;
const Partition = styled.div`
  width: 80%;
  height: 250px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  z-index: 2;
  ${device.laptop} {
    font-size: 1rem;
  }
`;

const LeftContainer = styled.div`
`;
const leftFlip =  keyframes`${flipInX}`;
const LeftFlip = styled.div`
  animation: ${leftFlip} 1.8s;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
const leftBounce=  keyframes`${bounceInLeft}`;
const LeftBounce = styled.div`
  animation: ${leftBounce} 1.8s;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
const leftPulse=  keyframes`${rotateInUpLeft}`;
const LeftPulse = styled.div`
  animation: ${leftPulse} 1s;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
const LeftText = styled.div`
  margin-left: 1rem;
  margin-right: 4rem;
  max-width: 50%;
`;

const RightContainer = styled.div`
`;
const rightFlip =  keyframes`${flipInX}`;
const RightFlip = styled.div`
  animation: ${rightFlip} 1s;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 110px;
`;
const rightBounce =  keyframes`${bounceInRight}`;
const RightBounce = styled.div`
  animation: ${rightBounce} 1s;
  object-fit: contain;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
const rightPulse =  keyframes`${rotateInUpRight}`;
const RightPulse = styled.div`
  animation: ${rightPulse} 1s;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;


const RightText = styled.div`
  margin-right: 1rem;
  margin-left: 3rem;
  max-width: 50%;
`;

const ClosingImg = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  z-index: 2;
  overflow: hidden;
`;
const Shot = styled.div`
  background-image: url(${OnStage});
  border-radius: 10px ;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: 0px 10px; */
`;
