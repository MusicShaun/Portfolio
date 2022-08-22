import styled, {keyframes} from "styled-components";
import { flipInX} from 'react-animations';
import OnStage from '../img/behind-booth.jpeg';
import Party from '../img/party.jpg';
import Belvoire from '../img/Belvoire.jpg';
import corona from '../img/corona.webp';
import decks from '../img/decks.jpg';
import sarcastic from '../img/sarcastic.jpg';
import eyes from '../img/eyes.jpeg';
import { useEffect, useState } from "react";
import {device} from '../helpers/screenSizes';
import studio from '../img/studio.png';
import vscode from '../img/vscode.png';
import thanks from '../img/thanks.jpg';

export default function AboutText (props) {

  const {scrollState, pageHeight} = props;
  const [picSlide, setPicSlide] = useState(0);

  useEffect(() => {
    let heights = pageHeight;
    const percentage = Math.floor((100 / heights) * scrollState);
    setPicSlide(percentage)
  }, [scrollState, pageHeight])


  console.log(`picSlide ${picSlide}%`)

  return (<>

    <Paragraphs style={{transform: `translateY(-350px)`}}>
    
{/* 1st  */}
    <Partition style={{justifyContent: 'flex-end', marginBottom: '50px'}}>
      <RightText>And lucky enough to travel and collaborate with people all over the world.</RightText>

      <ContainerRect>
        {picSlide > 3 && <RightFlip style={{backgroundImage: `url(${Belvoire})`}}/>}
      </ContainerRect></Partition>


{/* 2nd */}
    <Partition style={{ marginBottom: '80px'}}>
      <ContainerSquare>
        {picSlide > 7 && <LeftFlip style={{backgroundImage: `url(${studio})`}}/>}
      </ContainerSquare>
      <LeftText>My special skill was audio engineering and audio production, namely, Mastering.</LeftText></Partition>


{/* 3rd  */}
    <Partition style={{transform: 'translateY(-80px)', justifyContent: 'center',  marginBottom: '100px'}}>
      <RightText>Then COVID happens.</RightText>

      <ContainerSquare >
        {picSlide > 12 &&<RightFlip style={{backgroundImage: `url(${corona})` }}/>}
      </ContainerSquare></Partition>


{/* 4th */}
    <Partition style={{marginBottom: '40px' }}>
      <ContainerRect >
        {picSlide > 27 && <LeftFlip style={{backgroundImage: `url(${decks})`, backgroundPosition: 'top'}}/>}
      </ContainerRect>

      <LeftText style={{}}>The world shuts down and along with it, music, theatre, touring, festivals, clubs etc. </LeftText>
    </Partition>


{/* 5th */}
    <Partition style={{justifyContent: 'flex-end',  marginBottom: '40px'}}>
      <RightText style={{maxWidth: '100%'}}>In less than a week, all my income streams had 
          vanished and in case you're wondering, musicians aren't cashing in redundancy payouts.</RightText>

      <ContainerSquare>
        {picSlide > 34 && <RightFlip style={{backgroundImage: `url(${Party})`}}/>}
      </ContainerSquare></Partition>


{/* 6th */}
    <Partition style={{marginBottom: ' 100px'}}>
      <ContainerSquare>
        {picSlide > 41 && <LeftFlip style={{backgroundImage: `url(${vscode})`}}/>}
      </ContainerSquare>
      <LeftText style={{maxWidth: '80%'}}>
      However, this exposes a new opportunity. To find something just as challenging and exciting.
        As it turns out, coding is very challenging, creative and incredibly satisfying.<br /></LeftText></Partition>

{/* 7th  */}
    <Partition style={{justifyContent: 'flex-end',marginBottom: ' 20px' }}>
      <RightText style={{maxWidth: '80%'}}>Now I am but a coding novice, with much to learn and much to create.</RightText>
      
      <ContainerSquare>
        {picSlide > 54 && <RightFlip style={{backgroundImage: `url(${eyes})`}}/>}
      </ContainerSquare></Partition>


{/*  8th  */}
    <Partition style={{marginBottom: ' 50px'}}>
      <ContainerSquare>
        {picSlide > 62 && <LeftFlip style={{backgroundImage: `url(${thanks})`}}/>}
      </ContainerSquare>
      <LeftText style={{maxWidth: '80%'}}>
        I hope to find myself as a humble intern, side by side with the pro's in this field, building apps, 
        games, solving problems, all of it.</LeftText></Partition>

{/*  9th  */}
    <Partition style={{justifyContent: 'flex-end', marginBottom: ' 220px'}}>
      <RightText style={{maxWidth: '100%'}}>I didn't study coding at Uni or a bootcamp. I didn't study because a 
        lecturer required me to complete an assignment or because I needed to pass.</RightText>

      <ContainerSquare>   
        {picSlide > 65 && <RightFlip style={{backgroundImage: `url(${sarcastic})` }}/>}
      </ContainerSquare></Partition>

{/*  10  */}
    <Partition style={{width: '100%', height: '100%' ,  alignItems: 'center', 
    justifyContent: 'center', marginBottom: ' 40px'}}>
      <LeftText style={{ textAlign: 'center',}}>  
      I studied because I wanted to. 
      <br />I studied because I see coding as my long term  <br /> 
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
  ${device.laptopL} {
    font-size: 1.1rem;
  }
  ${device.laptop} {
    font-size: 1rem;
  }
`;
const ContainerSquare = styled.div`
  ${device.desktop} {
    min-width: 220px;
    height: 220px;}
  ${device.laptopL} {
    min-width: 180px;
    height: 180px;}
  ${device.laptop} {
    min-width: 150px;
    height: 150px;}
`;
const ContainerRect = styled.div`
  ${device.desktop} {
    min-width: 400px;
    height: 225px;}
  ${device.laptopL} {
    min-width: 280px;
    height: 158px;}
  ${device.laptop} {
    min-width: 200px;
    height: 113;}
`;
const leftFlip =  keyframes`${flipInX}`;
const LeftFlip = styled.div`
  animation: ${leftFlip} 0.8s;
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
const rightFlip =  keyframes`${flipInX}`;
const RightFlip = styled.div`
  animation: ${rightFlip} 0.8s;
  background-size: cover;
  background-repeat: no-repeat;
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
  display: flex;
  flex-direction: row;
  z-index: 2;
  overflow: hidden;
  ${device.desktop} {
    min-height: 600px;}
  ${device.laptopL} {
    min-height: 520px;}
  ${device.laptop} {
    min-height: 460px;}
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
