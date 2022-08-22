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
import studio from '../img/studio.png';
import vscode from '../img/vscode.png';
import thanks from '../img/thanks.jpg';
import StageShot from '../img/big-stage.jpeg';

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
    <Stage>
      <Hone>I've been a musician my whole life.</Hone>
      <Shots />
    </Stage>

    <Paragraphs style={{transform: 'translateY(-100px)'}}>


{/* 1st  */}
    <Partition>
      <Text>And lucky enough to travel and collaborate with people all over the world.</Text>

      <ContainerRect>
        {/* {picSlide > 3 &&  */}
        <Flip style={{backgroundImage: `url(${Belvoire})`}}/>
      </ContainerRect></Partition>


{/* 2nd */}
    <Partition>
      <Text>My special skill was audio engineering and audio production, namely, Mastering.</Text>
      <ContainerSquare>
        {/* {picSlide > 7 &&  */}
        <Flip style={{backgroundImage: `url(${studio})`}}/>
      </ContainerSquare>
      </Partition>


{/* 3rd  */}
    <Partition>
      <Text>Then COVID happens.</Text>
      <ContainerSquare >
        {/* {picSlide > 12 && */}
        <Flip style={{backgroundImage: `url(${corona})` }}/>
      </ContainerSquare></Partition>


{/* 4th */}
    <Partition>
      <Text style={{}}>The world shuts down and along with it, music, theatre, touring, festivals, clubs etc. </Text>  
      <ContainerRect >
        {/* {picSlide > 27 &&  */}
        <Flip style={{backgroundImage: `url(${decks})`, backgroundPosition: 'top'}}/>
      </ContainerRect>
      </Partition>


{/* 5th */}
    <Partition>
      <Text>In less than a week, all my income streams had 
          vanished and in case you're wondering, musicians aren't cashing in redundancy payouts.</Text>

      <ContainerSquare>
        {/* {picSlide > 34 &&  */}
        <Flip style={{backgroundImage: `url(${Party})`}}/>
      </ContainerSquare></Partition>


{/* 6th */}
    <Partition>
      <Text>
      However, this exposes a new opportunity. To find something just as challenging and exciting.
        As it turns out, coding is very challenging, creative and incredibly satisfying.<br /></Text>
        <ContainerSquare>
        {/* {picSlide > 41 &&  */}
        <Flip style={{backgroundImage: `url(${vscode})`}}/>
      </ContainerSquare>
      </Partition>

{/* 7th  */}
    <Partition>
      <Text>Now I am but a coding novice, with much to learn and much to create.</Text>
      
      <ContainerSquare>
        {/* {picSlide > 54 &&  */}
        <Flip style={{backgroundImage: `url(${eyes})`}}/>
      </ContainerSquare></Partition>


{/*  8th  */}
    <Partition>
      <Text>
        I hope to find myself as a humble intern, side by side with the pro's in this field, building apps, 
        games, solving problems, all of it.</Text>
        <ContainerSquare>
        {/* {picSlide > 62 &&  */}
        <Flip style={{backgroundImage: `url(${thanks})`}}/>
      </ContainerSquare></Partition>

{/*  9th  */}
    <Partition>
      <Text>I didn't study coding at Uni or a bootcamp. I didn't study because a 
        lecturer required me to complete an assignment or because I needed to pass.</Text>

      <ContainerSquare>   
        {/* {picSlide > 65 &&  */}
        <Flip style={{backgroundImage: `url(${sarcastic})` }}/>
      </ContainerSquare></Partition>

{/*  10  */}
    <Stage2>
      <Text style={{ textAlign: 'center', height: '30%', alignItems: 'center'}}>  
      I studied because I wanted to. 
      <br />I studied because I see coding as my long term  <br /> 
        future and because I'm a ridiculously passionate person.</Text>

      <Shot style={{}}/>
    </Stage2>

    {/* transform: `translateY(${scrollState - pageHeight}px)` */}
    </Paragraphs>
  </>)
}


const Stage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Hone = styled.h1`
  padding-top: 25%;
  margin: 0;
  height: 50%;
  font-size: 2.6rem;
  text-align: center;
`;
const Shots = styled.div`
  position: relative;
  border-radius: 10px ;
  background-position: 0px -110px;
  background-size: cover;
  width: 150%;
  height: 50%;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url(${StageShot});
  background-position-x: -150px;
  background-position: top;
  ;
`;
const Paragraphs = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  margin: 6rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;
const Partition = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  z-index: 2;
  flex-direction: column;
`;
const ContainerSquare = styled.div`
    display: flex;
    min-width: 150px;
    min-height: 150px;
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
  max-width: 100%;
  text-align: center;
  margin: 5rem 0rem 0.6rem;
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
`;
