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
import {device} from '../helpers/screenSizes';
import studio from '../img/studio.png';
import vscode from '../img/vscode.webp';
import thanks from '../img/thanks.jpg';
import StageShot from '../img/big-stage.webp';
import { colorWhite} from "../helpers/colors";

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
    <Page1>
      <Opener>I've been a musician my whole life.</Opener>
        <Stage><div style={{transform: `translateY(${-1.5 * scrollState}px)`, backgroundImage: `url(${StageShot})`}} />
      </Stage>
    </Page1>



    
    <Page style={{top: '50%'}}><section>
      <Right>
        <RightText>And lucky enough to travel and collaborate with people from around the world.</RightText>
        <Rect><RightFlip style={{backgroundImage: `url(${Belvoire})`, display: picSlide > 6 ? 'flex' : 'none' }}/></Rect>
      </Right>  
      <Left>
        <Square><LeftFlip style={{backgroundImage: `url(${studio})`, display: picSlide > 9 ? 'flex' : 'none' }}/></Square>
        <LeftText>My special skill was audio engineering and audio production, namely, Mastering. 
        <br />Life was good.</LeftText>
      </Left>
      <Right>
        <RightText style={{textAlign: 'center', width: '80%'}}>Then COVID happens.</RightText>
        <Square><RightFlip style={{backgroundImage: `url(${corona})`, display: picSlide > 12 ? 'flex' : 'none' }}/></Square>
      </Right>  
    </section></Page>



    <Page style={{top: '150%'}}><section>
      <Left>
      <Rect ><LeftFlip style={{backgroundImage: `url(${decks})`, backgroundPosition: 'top', display: picSlide > 28 ? 'flex' : 'none' }}/></Rect>
      <LeftText>The world shuts down and along with it, music, theatre, touring, festivals, clubs, basically art in general. </LeftText>
      </Left>
      <Right>
      <RightText>In less than a week, all my income streams had 
          vanished and in case you're wondering, musicians aren't cashing in redundancy payouts.</RightText>
      <Square> <RightFlip style={{backgroundImage: `url(${Party})`, display: picSlide > 32 ? 'flex' : 'none' }}/></Square>
      </Right>
      <Left>
      <Square><LeftFlip style={{backgroundImage: `url(${vscode})`, display: picSlide > 36 ? 'flex' : 'none' }}/></Square>
      <LeftText style={{maxWidth: '60%'}}>
        It was time to look for a new career opportunity. To find something just as challenging and exciting.
        And to no surprise, coding is very challenging, creative and incredibly satisfying.<br /></LeftText>
      </Left>
    </section></Page>


    <Page style={{top: '250%'}}><section>
      <Right>
      <RightText>Now I am but a humble Padawan, with much to learn.  </RightText>
      <Square><RightFlip style={{backgroundImage: `url(${eyes})`, display: picSlide > 54? 'flex' : 'none' }}/></Square>
      </Right>
      <Left>
      <Square><LeftFlip style={{backgroundImage: `url(${thanks})`, display: picSlide > 58? 'flex' : 'none' }}/></Square>
      <LeftText>
        I hope to find myself interning, side by side with the pro's, building apps and 
        games, solving problems, failing compiles. I know this is a field I will be happy.</LeftText>
      </Left>
      <Right>
      <RightText>I didn't study coding at Uni or a bootcamp. I didn't study because a 
        lecturer required me to complete an assignment or because my Mum said I'd be good at it.</RightText>
      <Square><RightFlip style={{backgroundImage: `url(${sarcastic})`, display: picSlide > 62? 'flex' : 'none'  }}/></Square>
      </Right>
    </section></Page>



    <Page style={{top: '350%'}}><ClosingPage>
      <LeftText style={{maxWidth: '80%'}}>  I study because I want to. 
      <br />I study because I see coding as my long term  <br /> 
        future and because I'm passionate about it'.</LeftText>
    <ClosingImg style={{backgroundPositionY: `-${(pageHeight - (scrollState -100))}px`}}/>
    </ClosingPage> </Page>


  </>)
}
const Page1 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Opener = styled.h1`
  height: 50%;
  width: 80%;
  font-size: 2.6rem;
  text-align: center;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  z-index: 2;
  overflow: hidden;
  & div {
    border-radius: 10px ;
    background-position: 0px -0px;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
const Page = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 1200px;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  & section {
    width: 75%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colorWhite};  
    border-radius: 20px;
    font-size: 1.2rem;
  
  }
`;
const Square = styled.div`
    ${device.desktop} {
    width: 220px;
    height: 220px;}
  ${device.laptopL} {
    width: 180px;
    height: 180px;}
  ${device.laptop} {
    width: 150px;
    height: 150px;}
`;
const Rect = styled.div`
  ${device.desktop} {
    width: 400px;
    height: 225px;}
  ${device.laptopL} {
    width: 280px;
    height: 158px;}
  ${device.laptop} {
    width: 200px;
    height: 113;}
`;
const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const flipIt =  keyframes`${flipInX}`;
const LeftFlip = styled.div`
  animation: ${flipIt} 1.2s ease-in ;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
const LeftText = styled.div`
  margin-left: 2rem;
  margin-right: 4rem;
  max-width: 50%;
`;
const RightFlip = styled.div`
  animation: ${flipIt} 1.2s ease-in ;
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
const ClosingPage = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  & div  {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 1.3rem;
    background-color: ${colorWhite};
    border-radius: 20px;
    overflow: hidden;
  }
  & div:first-child {
    height: 40%;} 
  & div:nth-child(2){
    height: 60%;}
`;
const ClosingImg = styled.div`
  min-width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(${OnStage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -100px;
  border-radius:  20px 20px 0px 0px !important;
`;

