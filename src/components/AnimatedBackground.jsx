import styled from 'styled-components';
import stars from '../img/stars.webp';
import moon from '../img/moon.webp';
import { device } from '../helpers/screenSizes';
import React, { memo } from 'react';

const dayLength = '90s'; 

function AnimatedBackground() {

  return (<>
    <Wrapper>

      <Stars />
      <SunSpot />
      <Sun />
      <SunGlare />
      <SunGlare2  />
      <SunGlare3  />
      <SunGlare4  />
      <SunGlare5  />
      <MoonContainer>
        <Moon />
      </MoonContainer>
      <SettingSun />
      <Dawn />
      <Sunset />
      <Night />
      <StaticBackground />

    </Wrapper>
  </>)

}

export default memo(AnimatedBackground)

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
  overflow: hidden;
  ${device.tablet}{ 
    left: 0px;
    display: none;
  }
  ${device.mobile}{ 
    display: none;
  }
`;
const SunSpot = styled.div`
  position: absolute;
  left: -10%;
  top: 15%;
  width: 130%;
  height: 150%;
  z-index: 0;
  background:radial-gradient(circle at 11% 50%, rgba(255,251,125,0.8) 2%, rgba(0, 188, 212, 0) 5%, rgba(238, 130, 238, 0) 100%);
  animation: sunMovement ${dayLength} linear infinite;
  @keyframes sunMovement {
    0% {
      transform: rotate(180deg); 
      opacity: 1;
    } 40% {
      opacity: 1;
    } 50% {
      opacity: 0;
    } 95%{
      opacity: 0;
    } 100% {
      transform: rotate(-180deg);
      opacity: 1;
    } 
  }
`;
const Sun = styled.div`
  position: absolute;
  left: -10%;
  top: 15%;
  width: 130%;
  height: 150%;
  z-index: -1;
  background:radial-gradient(circle at 11% 50%, rgba(255,251,125,0.8) 0%, rgba(0, 188, 212, 0) 11%, rgba(238, 130, 238, 0) 100%);
  animation: sunMovement ${dayLength} linear infinite;
  @keyframes sunMovement {
    0% {
      transform: rotate(180deg); 
      opacity: 1;
    } 40% {
      opacity: 1;
    } 50% { 
      opacity: 0;
    } 95%{
      opacity: 0;
    } 100% {
      transform: rotate(-180deg);
      opacity: 1;
    } 
  }
`;
const SunGlare = styled.div`
  position: absolute;
  left: -20%;
  top: 38%;
  width: 150%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(circle at 30% 50%, rgba(255,215,181,1) 2%, rgba(255,215,120,0) 2.5%, rgba(255,249,181,0) 100%);
  animation: sunGlare ${dayLength} linear infinite;
  @keyframes sunGlare {
    0% {
      transform: rotate(180deg); 
      opacity: 0;
    } 6% {
      opacity: 0;
    } 11%{
      opacity: 0.7;
    } 15%{
      opacity: 0;
    } 43% {
      opacity: 0;
    } 45% {
      opacity: 0.7;
    } 47% {
      opacity: 0;
    } 50% {
      opacity: 0;
    } 100% {
      transform: rotate(-180deg);
      opacity: 0;
    } 
  }
`;
const SunGlare2 = styled.div`
  position: absolute;
  left: -20%;
  top: 38%;
  width: 150%;
  height: 100%;
  z-index: -1;
  animation: sunGlare2 ${dayLength} linear infinite;
  background: radial-gradient(circle at 25% 50%, rgba(255,249,181,0) 1%, rgba(219,142,59,1) 1.3%, rgba(226,187,33,0) 1.6%, rgba(0,255,29,0) 6%, rgba(255,249,181,0) 100%);  animation: sunGlare ${dayLength} linear infinite;
  @keyframes sunGlare2 {
    0% {
      transform: rotate(180deg); 
      opacity: 0;
    } 3%{
      opacity: 0;
    } 9%{
      opacity: 0.7;
    } 14%{
      opacity: 0;
    } 45% {
      opacity: 0;
    } 52% {
      opacity: 0.7;
    } 56% {
      opacity: 0;
    } 50% {
      opacity: 0;
    } 96% {
      opacity:0;
    } 
  }
`;
const SunGlare3 = styled.div`
  position: absolute;
  left: -20%;
  top: 38%;
  width: 150%;
  height: 100%;
  z-index: -1;
  animation: sunGlare3 ${dayLength} linear infinite;
  background: radial-gradient(circle at 32% 50%, rgba(255,251,203,0) 1%, rgba(244,224,203,1) 1.4%, rgba(244,234,200,0) 1.8%, rgba(255,249,181,0) 100%);
  @keyframes sunGlare3 {
    0% {
      transform: rotate(180deg); 
      opacity: 0;
    } 8% {
      opacity: 0;
    } 11%{
      opacity: 0.7;
    } 15%{
      opacity: 0;
    } 35% {
      opacity: 0;
    } 42% {
      opacity: 0.7;
    } 46% {
      opacity: 0;
    } 50% {
      opacity: 0;
    } 100% {
      transform: rotate(-180deg);
      opacity: 0;
    } 
  }
`;
const SunGlare4 = styled.div`
  position: absolute;
  left: -20%;
  top: 38%;
  width: 150%;
  height: 100%;
  z-index: -1;
  animation: sunGlare4 ${dayLength} linear infinite;
  background: radial-gradient(circle at 35% 50%, rgba(255,251,203,0) 1.6%, rgba(252,244,234,1) 1.8%, rgba(247,243,228,0) 2%, rgba(255,249,181,0) 100%);
  @keyframes sunGlare4 {
    0% {
      transform: rotate(180deg); 
      opacity: 0;
    } 8% {
      opacity: 0;
    } 12%{
      opacity: 0.7;
    } 15%{
      opacity: 0;
    } 37% {
      opacity: 0;
    } 42% {
      opacity: 0.7;
    } 48% {
      opacity: 0;
    } 50% {
      opacity: 0;
    } 100% {
      transform: rotate(-180deg);
      opacity: 0;
    } 
  }
`;
const SunGlare5 = styled.div`
  position: absolute;
  left: -20%;
  top: 38%;
  width: 150%;
  height: 100%;
  z-index: -1;
  animation: sunGlare5 ${dayLength} linear infinite;
  background: radial-gradient(circle at 22% 50%, rgba(255,251,203,0) 0.5%, rgba(255,248,217,1) 0.8%, rgba(247,243,228,0) 1%, rgba(255,249,181,0) 100%);
  @keyframes sunGlare5 {
    0% {
      transform: rotate(180deg); 
      opacity: 0;
      height: 100%;
    } 9% {
      opacity: 0;
    } 12%{
      opacity: 0.6;
    } 15.5%{
      opacity: 0;
    } 37% {
      opacity: 0;
    } 42% {
      opacity: 0.6;
    } 48% {
      opacity: 0;
    } 50% {
      opacity: 0;
    } 100% {
      transform: rotate(-180deg);
      opacity: 0;
    } 
  }
`;
const SettingSun = styled.div`
  position: absolute;
  left: -20%;
  top: 15%;
  width: 140%;
  height: 200%;
  z-index: -2;
  background:radial-gradient(circle at 11% 50%, rgba(255, 75, 0, 1) 0%, rgba(0, 188, 212, 0) 31%, rgba(238, 130, 238, 0) 100%);
  animation: sunMovement2 ${dayLength} linear infinite;
  @keyframes sunMovement2 {
    0% {
      transform: rotate(180deg);
      opacity: 1;
    } 5% {
      opacity: 0;
    } 42% {
      opacity: 0;
    } 55%{
      opacity: 1;
    } 60% {
      opacity: 0;
    } 100% {
      transform: rotate(-180deg);
      opacity: 1;
    } 
  }
`;
const MoonContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 5%;

  width: 90%;
  height: 110%;
  z-index: 0;
  animation: MoonMovement ${dayLength} linear infinite;
  @keyframes MoonMovement {
    0% {
      transform: rotate(0deg);
    } 100% {
      transform: rotate(-360deg);
    } 
  }
`;
const Moon = styled.div`
  width: 13%;
  height: 13%;
  filter: brightness(0.88);
  background-size: contain;
  background-image: url(${moon});
  background-repeat: no-repeat;
`;
const StaticBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -4;
  background: linear-gradient(180deg, rgba(15,84,167,1) 0%, rgba(68,130,205,1) 48%, rgba(255,255,222,1) 140%);
  animation: Opals ${dayLength} linear infinite;
  @keyframes Opals {
    0% {
      opacity: 0;
    } 25% {
      opacity: 1;
    } 75% {
      opacity: 0;
    } 100% {
      opacity: 0;
  }
}
`;
const Dawn = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -3;
  background: linear-gradient(0deg, rgba(255,175,123,1) 0%, rgba(215, 109, 120, 0.886) 50%, rgba(58, 28, 113, 0.769) 100%);
  animation: dawn ${dayLength} linear infinite;
  @keyframes dawn {
    0% {
      opacity: 0.3; }
    5% {
      opacity: 1; }
    10% {
      opacity: 0;}
    95% {
      opacity: 0} 
    100% {
      opacity: 0.3;
    }  
  }
`;
const Sunset = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -3;
  background-image: linear-gradient(#a82833, #faff7c);
  animation: sunset ${dayLength} linear infinite;
  @keyframes sunset {
    0% {
      opacity: 0;}
    42% {
      opacity: 0;}
    50% {
      opacity: 1} 
    60% {
      opacity: 0} 
    100% {
      opacity: 0;}
  }
`;
const Night = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -3;
  background: linear-gradient(0deg, rgb(1, 61, 100) 0%, rgb(0, 49, 84) 15%, rgb(0, 44, 77) 32%, rgb(0, 35, 62) 52%, rgb(1, 18, 37) 80%, rgb(0, 14, 26) 100%);
  animation: nightChange ${dayLength} linear infinite;
  @keyframes nightChange {
    0% {
      opacity: 1; }
    10% {
      opacity: 0; }
    45% {
      opacity: 0;}
    55% {
      opacity: 1} 

    100% {
      opacity: 1} 
  }
`;

const Stars = styled.div`
  position: absolute;
  width: 200%;
  top: 0;
  left: 0;
  transform: rotate(180deg);
  height: 100%;
  background-image: url(${stars});
  background-repeat: repeat;
  animation: stars ${dayLength} linear infinite;
  @keyframes stars {
    0% {
      opacity: 0;
      left: 0;
      }
    45% {
      opacity: 0;
      left: -10%;
      transform: rotate(-10deg);
      }
    65% {
      opacity: 0.8} 
    88% {
      opacity: 0.8;}
    100% {
      opacity: 0;
      left: 0;
      transform: rotate(10deg)} 
  }
`;