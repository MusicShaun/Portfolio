import styled from "styled-components";
import {colorCream } from '../helpers/colors';
import AboutText from "./AboutText";
import AboutTextMobile from "./AboutTextMobile";
import { useState, useEffect, useRef} from 'react'; 
import backer from '../img/backer.jpg';
import Loader from './Loader';


export default function About (props) {

  const {windowWidth} = props; 
  
  //AUTOMATIC SCROLLING 
  const [scrollState, setScrollState] = useState(0);
  const [pageHeight, setPageHeight] = useState(0)
  const [scrollDir, setScrollDir] = useState(true);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollTo(0, 1000);

  // HANDLE WHERE THE PAGE AUTO SCROLLS TOO
  const firstScrollDestination = ((pageHeight / 100) * 14.2);
  const secondScrollDestination = ((pageHeight / 100) * 42.8);
  const thirdScrollDestination = ((pageHeight / 100) * 71.4);
  const lastScrollDestination = (pageHeight);

  //DETERMINE SCROLL DIRECTION
  useEffect(() => {
    const threshold = 0;
    const aboutElement = myRef.current;
    let lastScrollY = aboutElement.scrollTop;
    let ticking = false;
    const updateScrollDir = () => {
      const scrollY = aboutElement.scrollTop;
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
    aboutElement.addEventListener("scroll", onScroll);
    return () => {
      aboutElement.removeEventListener("scroll", onScroll)};
  }, [scrollDir]);
 

  function handleScroll(e) {
    const position = e.currentTarget.scrollTop;
    const size = e.currentTarget.scrollHeight - e.target.offsetHeight;
    setScrollState(position);
    setPageHeight(size)


    // Apply AUTO SCROLLING
    //PAGE 1
    if (windowWidth > 500 )
    {if (Math.floor((100 /pageHeight) * scrollState) === 4 && scrollDir) {
      executeScroll();
      myRef.current.scrollTo({top: firstScrollDestination})
    } 
    if (Math.floor((100 /pageHeight) * scrollState) === 10 && !scrollDir) {
      executeScroll();
      myRef.current.scrollTo({top: 0})
    } 
    //PAGE 2
    if (Math.floor((100 /pageHeight) * scrollState) === 18 && scrollDir ) {
      executeScroll();
      myRef.current.scrollTo(0, secondScrollDestination)
    } if (Math.floor((100 /pageHeight) * scrollState) === 39 && !scrollDir) {
      executeScroll();
      myRef.current.scrollTo(0, firstScrollDestination)
    } 
    //PAGE 3
    if (Math.floor((100 /pageHeight) * scrollState) === 47 && scrollDir ) {
      executeScroll();
      myRef.current.scrollTo(0, thirdScrollDestination)
    }  if (Math.floor((100 /pageHeight) * scrollState) === 67 && !scrollDir) {
      executeScroll();
      myRef.current.scrollTo(0, secondScrollDestination)
    } 
    //PAGE 4
    if (Math.floor((100 /pageHeight) * scrollState) === 75 && scrollDir ) {
      executeScroll();
      myRef.current.scrollTo(0, lastScrollDestination)
    } if (Math.floor((100 /pageHeight) * scrollState) === 95 && !scrollDir) {
      executeScroll();
      myRef.current.scrollTo(0, thirdScrollDestination)
    } 
    }
  };



// LOADING 
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);
  return () => clearTimeout(timer);
}, [])

  return (
    <Wrapper>

    <BareBack />
        {loading && <Loader /> }


      <ParallaxContainer>
        <Parallax style={{transform: `translateY(${-0.3 * scrollState}px)`}}></Parallax>
      </ParallaxContainer>

        <Text  onScroll={handleScroll} ref={myRef} >

          {windowWidth > 500 ? <AboutText scrollState={scrollState}  pageHeight={pageHeight}/>
          : <AboutTextMobile scrollState={scrollState}  pageHeight={pageHeight}></AboutTextMobile>
          }
        </Text>


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
  overflow: hidden;
`;
const BareBack = styled.div`
  position: absolute  ;
  width: 100%;
  height: 100%;
  background-color: ${colorCream};
  z-index: -2;
  transition: all 1s;
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

const ParallaxContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;
const Parallax = styled.div`
  position: relative;
  height: 350%;
  width: 100%;
  background-position: top;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(${backer});
  opacity: 0.6;
  filter:contrast(70%) brightness(240%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;
