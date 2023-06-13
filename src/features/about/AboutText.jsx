import styled, {keyframes} from "styled-components";
import { flipInX} from 'react-animations';
import { useEffect, useState } from "react";
import {device} from '../../helpers/screenSizes';
import { colorWhite} from "../../helpers/colors";
import { aboutTextArray } from "./AboutTextArray";
import ImageGenerator from "./ImageGenerator";
import React from 'react';
import { ABOUT_IMGS } from "@helpers/images";

const flipIt =  keyframes`${flipInX}`;
const left_flip_class = {
  animationDuration: '1.2s',
  animationFillMode: 'forwards',
  animationIterationCount: '1',
  annimationTimingFunction: 'ease-in',
  opacity: 1
};
const animation_off = {
  animation: 'none',
  opacity: 0  
}
// where has all the color gone below? 

export default function AboutText (props) {

  const {scrollState, pageHeight} = props;
  const [picSlide, setPicSlide] = useState(0);

  useEffect(() => {
    let heights = pageHeight;
    const percentage = Math.floor((100 / heights) * scrollState);
    setPicSlide(percentage)
  }, [scrollState, pageHeight])



  

  return (<>
    <Page1>
      <Opener>{aboutTextArray[0]}</Opener>
      <Stage>
        <div style={{ transform: `translateY(${-1.65 * scrollState}px)` }}>
          <ImageGenerator publicId={ABOUT_IMGS.BIG_STAGE} alt='Shaun Pickett on stage'
          />
        </div>
      </Stage>  
    </Page1>



    
    <Page style={{top: '55%'}}><section>
      <Right>
        <RightText>{aboutTextArray[1]}</RightText>
        <Rect><RightFlip style={picSlide > 3 ? left_flip_class : animation_off}>
          <ImageGenerator publicId={ABOUT_IMGS.BELVOIRE} alt='Command q performing in perth' />
        </RightFlip></Rect>
      </Right>  
      <Left>
        <Square><LeftFlip style={picSlide > 4 ? left_flip_class : animation_off}>
          <ImageGenerator publicId={ABOUT_IMGS.STUDIO} alt='mastering studio' />

        </LeftFlip></Square>
        <LeftText>{aboutTextArray[2]}
        <br />{aboutTextArray[3]}</LeftText>
      </Left>
      <Right style={{ justifyContent: 'center',}}>
        <RightText style={{textAlign: 'center', width: '30%'}}>{aboutTextArray[4]}</RightText>
        <Square>
          <RightFlip style={picSlide > 6 ? left_flip_class : animation_off}>
            <ImageGenerator publicId={ABOUT_IMGS.CORONA} alt='covid in cartoon' />
          </RightFlip>
        </Square>
      </Right>  
    </section>
    </Page>



    <Page style={{top: '155%'}}><section>
      <Left>
      <Rect ><LeftFlip style={{...(picSlide > 21 ? left_flip_class : animation_off), backgroundPosition: 'top' }}>
      <ImageGenerator publicId={ABOUT_IMGS.DECKS} alt='no drinks on the fucking decks' />

        </LeftFlip>
      </Rect>
      <LeftText>{aboutTextArray[5]} </LeftText>
      </Left>
      <Right>
      <RightText>{aboutTextArray[6]}</RightText>
      <Square> <RightFlip style={picSlide > 22 ? left_flip_class : animation_off}>
      <ImageGenerator publicId={ABOUT_IMGS.PARTY} alt='command q party in queensland' />

          </RightFlip>
      </Square>
      </Right>
      <Left>
      <Square><LeftFlip style={picSlide > 24 ? left_flip_class : animation_off}>
          <ImageGenerator publicId={ABOUT_IMGS.VSCODE}  alt='vscode' />

        </LeftFlip>
      </Square>
      <LeftText style={{maxWidth: '60%'}}>
      {aboutTextArray[7]}<br /></LeftText>
      </Left>
    </section></Page>


    <Page style={{top: '255%'}}><section>
      <Right>
      <RightText>{aboutTextArray[8]}</RightText>
      <Square><RightFlip style={{ filter: 'brightness(1.2) contrast(1.2) ', ...(picSlide > 50 ? left_flip_class : animation_off) }}>
      <ImageGenerator publicId={ABOUT_IMGS.ONTHECAR} alt='monsoon moon doing yoga' />

          </RightFlip>
      </Square>
      </Right>
      <Left>
      <Square><LeftFlip  style={picSlide > 50 ? left_flip_class : animation_off}>
      <ImageGenerator publicId={ABOUT_IMGS.EYES} alt='monsoon moon album artwork' />

        </LeftFlip>
      </Square>
      <LeftText>
      {aboutTextArray[9]}</LeftText>
      </Left>
      <Right>
      <RightText>{aboutTextArray[10]}</RightText>
      <Square><RightFlip  style={picSlide > 52 ? left_flip_class : animation_off}>
      <ImageGenerator publicId={ABOUT_IMGS.SARCASTIC} alt='command q album cover' />

          </RightFlip>
      </Square>
      </Right>
    </section></Page>



    <Page style={{top: '355%'}}><ClosingPage>
      <LeftText style={{maxWidth: '80%'}}> {aboutTextArray[11]}
      <br />{aboutTextArray[12]}<br /> 
      {aboutTextArray[13]}</LeftText>
      <ClosingImg style={{ backgroundPositionY: `-${(pageHeight - (scrollState - 100))}px` }}>
      <ImageGenerator publicId={ABOUT_IMGS.BEHIND_BOOTH} alt='command q in perth bunbury' />
      </ClosingImg>
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
  height: 70%;
  z-index: 2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  
  & > div {
    width: 100%;
    min-width: 100%;
    min-height: 700px; 
   & img {
      border-radius: 10px ;
      background-position: 0px -440px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-repeat: no-repeat;
      ${device.desktop} {
        background-position: 0px -125px;
      }
      ${device.laptopL} {
        background-position: 0px -30px;
      }
      ${device.laptop} {
        background-position: 0px -0px;
      }
    }
  }
`;
const Page = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 1500px;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  & section {
    width: 82%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colorWhite};  
    border-radius: 20px;
    font-size: 1.6rem;
    ${device.desktop} {
      font-size: 1.1rem;
  }
  }
  ${device.desktop} {
    max-height: 1200px;
    max-width: 1200px;
  }
`;
const Square = styled.div`

    ${device.desktopL} {
    width: 380px;
    height: 380px;}
    ${device.desktop} {
    width: 255px;
    height: 255px;}
    ${device.desktopS} {
    width: 230px;
    height: 230px;}
  ${device.laptopL} {
    width: 210px;
    height: 210px;}
  ${device.laptop} {
    width: 180px;
    height: 180px;}
`;
const Rect = styled.div`
  ${device.desktopL} {
    width: 600px;
    height: 381px;}
  ${device.desktop} {
    width: 450px;
    height: 248px;}
  ${device.desktopS} {
    width: 410px;
    height: 225px;}
  ${device.laptopL} {
    width: 340px;
    height: 194px;}
  ${device.laptop} {
    width: 280px;
    height: 160px;}
`;
const Left = styled.div`
  width: 93%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Right = styled.div`
  width: 93%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const LeftFlip = styled.div`
  width: 100%;
  height: 100%;
  animation-name: ${flipIt};
  & img {
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;
const LeftText = styled.div`
  margin-left: 2rem;
  margin-right: 4rem;
  max-width: 50%;
`;
const RightFlip = styled.div`
  animation-name: ${flipIt} ;
  width: 100%;
  height: 100%;
  & img {
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
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
    font-size: 1.7rem;
    background-color: ${colorWhite};
    border-radius: 20px;
    overflow: hidden;
    ${device.desktop}{
      font-size: 1.3rem;  
    }
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -100px;
  border-radius:  20px 20px 0px 0px !important;

  & img { 
    width: 100%;
  }
`;

