import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colorCream } from '../helpers/colors';

export default function Bird() {

  const [pathNum, setPathNum] = useState(1);
  const [arraySpeed, setArraySpeed] = useState(80)
  
  const PathLeftArray = [
    `M -40 40 Q 150 -100 330 110`,
    `M -60 86 L 400 86`,
    `M -10 80 Q 150 300 330 20`,
    `M -60 86 L 400 86`,
  ]
  // pushes right -  rotates from right axis // lean to side - mid up/down  //width  rotates from left axis
  const PathRightArray = [
    `M -30 120 Q 200 -120 500 80`,
    `M -60 86 L 400 86`,
    `M -20 30 Q 150 300 330 80`,
    `M -60 86 L 400 86`,
  ]

  //setting interval speed
  useEffect(() => {
    const intervalID = setInterval(() => {
      setArraySpeed(prevSpeed => prevSpeed + 100)
    }, 4500);
    return () => clearInterval(intervalID);  
  }, [])

  //speeds through array
  useEffect(() => {
    const intervalID = setInterval(() => {
      pathNum < 3 ?
      setPathNum(prevNum => prevNum + 1)
      :
      setPathNum(0)       
    }, arraySpeed);
    return () => clearInterval(intervalID);
  }, [pathNum])



return (<>
<Wrapper>
  <Container>

    <SVG height='100' width='250'>
      <path 
        fill="transparent" 
        id="curveL"
        d={PathLeftArray[pathNum]}  
        /> 
      <Text x="50" y="215" fill={colorCream}  >
        <textPath xlinkHref="#curveL">Hello! It's g</textPath>
      </Text>
    </SVG>


    <Middle  height='100' width='40'>
        <Text x="0" y="85" fill={colorCream} >
        oo
      </Text>
    </Middle>

    <SVG height="100" width="340">
    <path 
      fill="transparent" 
      id="curveR" 
      d={PathRightArray[pathNum]} 
      />
      <Text x="75" y="15" fill={colorCream}  className='right'>
        <textPath xlinkHref="#curveR">d to see you</textPath>
      </Text>
    </SVG> 



  </Container>
</Wrapper>
  </>)
}

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 150%;
  top: -15%;

  white-space: nowrap;
  animation: pos 5s linear 2s 1 forwards;

  @keyframes pos {
    0%{
      left: 120%;
      top: -15%;
      transform: scale(0.1);
      opacity: 1;
    } 10% {
      left: 70%;
      top: -10%;
    } 20% {
      left: 20%;
      top: 10%;
    } 30% {
      left: -20%;
      top: 50%;
    } 40% {
      left: 30%;
      top: 70%;
    } 50% {
      left: 48%;
      top: 48%;
      transform: translate(-50%, -50%); 
    } 90% {
      left: 48%;
      top: 48%;
      transform: translate(-50%, -50%) scale(1);     
    } 99.9% {
      left: 48%;
      top: 48%;
      transform: translate(-50%, -50%) scale(25);
    } 100% {
      left: 200%;
    }
  }
`;
const SVG = styled.svg`
  z-index: -10;
  overflow: visible;
  background-color: transparent;
  margin: 1rem;
  color: ${colorCream};

`;
const Middle = styled.svg`
  overflow: visible;
  
`;
const Text = styled.text`
  font-size: 3rem;
  font-weight: 600;
`;



