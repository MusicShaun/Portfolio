import styled from "styled-components";
import {colorCream, colorGrey } from '../helpers/colors';
import About_text from "./About_text";
import { useState, useEffect, useRef , useCallback} from 'react'; 
import StageShot from '../img/big-stage.jpeg';
import JustFriends2 from '../img/just-friends-2.jpg';
import backer from '../img/backer.jpg';

export default function About () {

  const [scrollState, setScrollState] = useState(0);
  const [pageHeight, setPageHeight] = useState(0)
  const [scrollDir, setScrollDir] = useState(true);

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollTo(0, 1000);

  const firstScrollDestination = ((pageHeight / 100) * 17)
  const secondScrollDestination = ((pageHeight / 100) * 45)
  const thirdScrollDestination = ((pageHeight / 100) * 71)
  const lastScrollDestination = (pageHeight)

  //DETERMINE SCROLL DIRECTION
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = myRef.current.scrollTop;
    let ticking = false;
    const updateScrollDir = () => {
      const scrollY = myRef.current.scrollTop;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    myRef.current.addEventListener("scroll", onScroll);
    console.log(scrollDir);
    return () => myRef.current.removeEventListener("scroll", onScroll);
  }, [scrollDir]);



  function handleScroll(e) {
    const position = e.currentTarget.scrollTop;
    const size = e.currentTarget.scrollHeight - e.target.offsetHeight;
    const window = e.currentTarget;
    setScrollState(position);
    setPageHeight(size)


    // Apply AUTO SCROLLING
    //PAGE 1
    if (Math.floor((100 /pageHeight) * scrollState) === 5 && scrollDir) {
      executeScroll();
      myRef.current.scrollTo(0, firstScrollDestination)
    } 
    if (Math.floor((100 /pageHeight) * scrollState) === 14 && !scrollDir) {
      executeScroll();
      myRef.current.scrollTo(0, 0)
    } 
    //PAGE 2
    if (Math.floor((100 /pageHeight) * scrollState) === 26 && scrollDir ) {
      executeScroll();
      myRef.current.scrollTo(0, secondScrollDestination)
    }  else if (Math.floor((100 /pageHeight) * scrollState) === 35 && !scrollDir) {
      executeScroll();
      myRef.current.scrollTo(0, firstScrollDestination)
    } 
    //PAGE 3
    if (Math.floor((100 /pageHeight) * scrollState) === 52 && scrollDir ) {
      executeScroll();
      myRef.current.scrollTo(0, thirdScrollDestination)
    }  else if (Math.floor((100 /pageHeight) * scrollState) === 66 && !scrollDir) {
      executeScroll();
      myRef.current.scrollTo(0, secondScrollDestination)
    } 
    //PAGE 4
    if (Math.floor((100 /pageHeight) * scrollState) === 82 && scrollDir ) {
      executeScroll();
      myRef.current.scrollTo(0, lastScrollDestination)
    } else if (Math.floor((100 /pageHeight) * scrollState) === 90 && !scrollDir) {
      executeScroll();
      myRef.current.scrollTo(0, thirdScrollDestination)
    } 
  };


  return (
    <Wrapper>
      <Container>
        <Text  onScroll={handleScroll} ref={myRef} >

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
  /* background-image: url(${backer}); */
  opacity: 0.3;
  filter:contrast(70%) brightness(300%)
`;
