import styled, {keyframes} from "styled-components";
import { flipInX} from 'react-animations';
import OnStage from '../../img/behind-booth.jpeg';
import Party from '../../img/party.webp';
import Belvoire from '../../img/Belvoire.jpg';
import corona from '../../img/corona.webp';
import decks from '../../img/decks.webp';
import sarcastic from '../../img/sarcastic.webp';
import eyes from '../../img/eyes.webp';
import { useEffect, useState } from "react";
import {device} from '../../helpers/screenSizes';
import studio from '../../img/studio.webp';
import vscode from '../../img/vscode.webp';
import onCar from '../../img/onTheCar2.webp';
import StageShot from '../../img/big-stage.webp';
import { colorWhite} from "../../helpers/colors";
import { aboutTextArray } from "./AboutTextArray";
import { LazyLoadImage } from 'react-lazy-load-image-component'; 
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        <div>
          <img src={StageShot} alt=''
            style={{ transform: `translateY(${-1.65 * scrollState}px)`, }} 
          />
        </div>
      </Stage>
    </Page1>



    
    <Page style={{top: '55%'}}><section>
      <Right>
        <RightText>{aboutTextArray[1]}</RightText>
        <Rect><RightFlip style={{ display: picSlide > 3 ? 'flex' : 'none' }}>
          <LazyLoadImage src={Belvoire}
                          effect='blur'/>
        </RightFlip></Rect>
      </Right>  
      <Left>
        <Square><LeftFlip style={{ display: picSlide > 4 ? 'flex' : 'none' }}>
          <LazyLoadImage src={studio}
                            effect='blur'/>
        </LeftFlip></Square>
        <LeftText>{aboutTextArray[2]}
        <br />{aboutTextArray[3]}</LeftText>
      </Left>
      <Right style={{ justifyContent: 'center',}}>
        <RightText style={{textAlign: 'center', width: '30%'}}>{aboutTextArray[4]}</RightText>
        <Square><RightFlip style={{ display: picSlide > 6 ? 'flex' : 'none' }}>
          <LazyLoadImage src={corona}
                            effect='blur'/>
        </RightFlip></Square>
      </Right>  
    </section></Page>



    <Page style={{top: '155%'}}><section>
      <Left>
      <Rect ><LeftFlip style={{ backgroundPosition: 'top', display: picSlide > 21 ? 'flex' : 'none' }}>
        <LazyLoadImage src={decks}
                       effect='blur'/>
        </LeftFlip>
      </Rect>
      <LeftText>{aboutTextArray[5]} </LeftText>
      </Left>
      <Right>
      <RightText>{aboutTextArray[6]}</RightText>
      <Square> <RightFlip style={{ display: picSlide > 22 ? 'flex' : 'none' }}>
        <LazyLoadImage src={Party}
                            effect='blur'/>
          </RightFlip>
      </Square>
      </Right>
      <Left>
      <Square><LeftFlip style={{ display: picSlide > 24 ? 'flex' : 'none' }}>
        <LazyLoadImage src={vscode}
                        effect='blur'/>
        </LeftFlip>
      </Square>
      <LeftText style={{maxWidth: '60%'}}>
      {aboutTextArray[7]}<br /></LeftText>
      </Left>
    </section></Page>


    <Page style={{top: '255%'}}><section>
      <Right>
      <RightText>{aboutTextArray[8]}</RightText>
      <Square><RightFlip style={{ filter: 'brightness(1.2) contrast(1.2) ', display: picSlide > 49? 'flex' : 'none' }}>
        <LazyLoadImage src={onCar}
                            effect='blur'/>
          </RightFlip>
      </Square>
      </Right>
      <Left>
      <Square><LeftFlip style={{display: picSlide > 50? 'flex' : 'none' }}>
        <LazyLoadImage src={eyes}
                          effect='blur'/>
        </LeftFlip>
      </Square>
      <LeftText>
      {aboutTextArray[9]}</LeftText>
      </Left>
      <Right>
      <RightText>{aboutTextArray[10]}</RightText>
      <Square><RightFlip style={{ display: picSlide > 52? 'flex' : 'none'  }}>
        <LazyLoadImage src={sarcastic}
                        effect='blur'/>
          </RightFlip>
      </Square>
      </Right>
    </section></Page>



    <Page style={{top: '355%'}}><ClosingPage>
      <LeftText style={{maxWidth: '80%'}}> {aboutTextArray[11]}
      <br />{aboutTextArray[12]}<br /> 
      {aboutTextArray[13]}</LeftText>
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
  height: 70%;
  z-index: 2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  
  & > div {
    width: 100%;
    height: 700px;
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
const flipIt =  keyframes`${flipInX}`;
const LeftFlip = styled.div`
  animation: ${flipIt} 1.2s ease-in ;
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
const LeftText = styled.div`
  margin-left: 2rem;
  margin-right: 4rem;
  max-width: 50%;
`;
const RightFlip = styled.div`
  animation: ${flipIt} 1.2s ease-in ;
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
  background-image: url(${OnStage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -100px;
  border-radius:  20px 20px 0px 0px !important;
`;

