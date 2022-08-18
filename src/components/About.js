import styled from "styled-components";
import {colorCream, colorGrey } from '../helpers/colors';
import About_text from "./About_text";
import { useState, useEffect } from 'react'; 
import StageShot from '../img/big-stage.jpeg';
import JustFriends2 from '../img/just-friends-2.jpg';
import backer from '../img/backer.jpg';

export default function About () {

  const [scrollState, setScrollState] = useState(0);
  const [pageHeight, setPageHeight] = useState(0)

  function handleScroll(e) {
    // console.log('div height!: ', e.currentTarget.scrollHeight - e.target.offsetHeight);
    const position = e.currentTarget.scrollTop;
    const size = e.currentTarget.scrollHeight - e.target.offsetHeight;
    setScrollState(position);
    setPageHeight(size)
  };


  return (
    <Wrapper>
      <Container>
        <Text  onScroll={handleScroll}>

        <Hone>I've been a musician my whole life.</Hone>

          <Stage><Shots style={{transform: `translateY(${-1.5 * scrollState}px)`, backgroundImage: `url(${StageShot})`}} />
          </Stage>

          <ParallaxContainer>
            <Parallax style={{transform: `translateY(${0.7 * scrollState}px)`}}/>
          </ParallaxContainer>

          <About_text scrollState={scrollState}  pageHeight={pageHeight}/>

        </Text>




      </Container>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colorCream};
`;
const Container = styled.div`
  width: 98%;
  height: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
const Text = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: ${colorCream}; */
  overflow: hidden auto;
`;
const Hone = styled.h1`
  margin: 15%;
  font-size: 2.6rem;
`;
const Stage = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  z-index: 2;
  overflow: hidden;
`;
const Shots = styled.div`
  border-radius: 10px ;
  background-position: 0px -110px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ParallaxContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;
const Parallax = styled.div`
  position: relative;
  height: 180%;
  width: 100%;
  background-position: top;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(${backer});
  opacity: 0.3;
  filter:contrast(70%) brightness(300%)
`;
