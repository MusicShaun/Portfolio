import styled from 'styled-components';
import stars from '../img/stars.png';
import moon from '../img/moon.png';

const dayLength = '110s'; 

export default function AnimatedBackground() {


  return (<>
    <Wrapper>

      <Stars />
      <SunSpot />
      <Sun />
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

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
`;
const SunSpot = styled.div`
  position: absolute;
  left: -40%;
  top: 15%;
  width: 180%;
  height: 150%;
  z-index: 0;
  background:radial-gradient(circle at 11% 50%, rgba(255,251,125,0.8) 4%, rgba(0, 188, 212, 0) 5%, rgba(238, 130, 238, 0) 100%);
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
  left: -40%;
  top: 15%;
  width: 180%;
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
const SettingSun = styled.div`
  position: absolute;
  left: -44%;
  top: 15%;
  width: 200%;
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
  top: 30%;
  left: -10%;
  width: 120%;
  height: 100%;
  z-index: 0;
  animation: MoonMovement ${dayLength} linear infinite;
  @keyframes MoonMovement {
    0% {
      transform: rotate(0deg);
      opacity: 1;
    } 10% {
      opacity: 0;
    } 50% {
      opacity: 0;
    } 60%{
      opacity: 1;
    } 100% {
      transform: rotate(-360deg);
      opacity: 1;
    } 
  }
`;
const Moon = styled.div`
  width: 20%;
  height: 20%;
  filter: brightness(0.85);
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
      transform: rotate(-4deg);
      }
    65% {
      opacity: 0.8} 
    88% {
      opacity: 0.8;}
    100% {
      opacity: 0;
      left: 0;
      transform: rotate(2deg)} 
  }
`;