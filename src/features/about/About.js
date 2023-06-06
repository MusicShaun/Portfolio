import styled from "styled-components";
import {colorCream } from '../../helpers/colors';
import AboutText from "./AboutText";
import AboutTextMobile from "./AboutTextMobile";
import { useState, useEffect, useRef} from 'react'; 
import Loader from '../../components/Loader';
import AboutBackground from './AboutBackground';
import arrow from '../../img/arrow.png';
import { Helmet } from "react-helmet";

export default function About (props) {
  const [ pageSize , setPageSize ] = useState(0);
  useEffect(() => {
    document.title = 'About Shaun';
    setPageSize(pageRef.current.offsetHeight)
  }, [])
  const {onlyWidth} = props; 
  
  //AUTOMATIC SCROLLING 
  const [scrollState, setScrollState] = useState(0);
  const [pageHeight, setPageHeight] = useState(0)
  const [scrollDir, setScrollDir] = useState(true);
  const myRef = useRef(null);
  const pageRef = useRef(null)
  const [ scrollPos, setScrollPos ] = useState(0);

  function executeScroll(direction) {
    if (direction === 'down'){
      if (scrollPos < pageSize * 0.55){
        setScrollPos(prev => prev + (pageSize * 0.55))
      } else if (scrollPos > (pageSize * 2.55)) {
        setScrollPos(pageSize * 3.55)
      } else {
        setScrollPos(prev => prev + pageSize)
      }
    } else {
      if (scrollPos < (pageSize * 1.55)){
        setScrollPos(0)
      } else {
        setScrollPos(prev => prev - pageSize)
      }
    } 
  }
  useEffect(() => {
    myRef.current.scrollTo(0, scrollPos);
  }, [scrollPos])
  

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
  };

// LOADING 
const [loading, setLoading] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 500);
return () => clearInterval(timer)
}, [])

  return (
    <Wrapper ref={pageRef}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Shaun Pickett</title>
        <meta name="About Shaun Pickett" content="A brief biography of how Shaun left the music industry and became a developer" />
        <link rel='canonical' href='https://www.shaunpickett.com/about' />
      </Helmet>

    <BareBack />
        {loading && <Loader /> }

      <ParallaxContainer  style={{transform: `translateY(${-0.1 * scrollState}px)`}}>
      <AboutBackground />
      </ParallaxContainer>
  

        <Text  onScroll={handleScroll} ref={myRef}  style={{overflowY: onlyWidth > 600 ? 'hidden' : 'hidden auto'}}>
          {onlyWidth > 500 ? 
          <AboutText scrollState={scrollState}  pageHeight={pageHeight} />
          : 
          <AboutTextMobile scrollState={scrollState}  pageHeight={pageHeight} />
          }
        </Text>

      {onlyWidth > 600 && scrollPos > pageSize * 0.5 && 
        <FixedUpBtn onClick={() => executeScroll('up')}>
          <div style={{backgroundImage: `url(${arrow})`}}></div>
        </FixedUpBtn>
        }
      {onlyWidth > 600 && scrollPos < pageSize * 3 && 
      <FixedDownBtn onClick={() => executeScroll('down')}>
                  <div style={{backgroundImage: `url(${arrow})`}}></div>
      </FixedDownBtn>
      }
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
  left: 0;
  height: 100%;
  width: 100%;
`;
const FixedUpBtn = styled.button`
  position: fixed;
  top: 1%;
  width: 150px;
  height: 50px; 
  z-index: 100;
  transition: all 0.2s;
  transition: box-shadow 0s 0.2s;
  border: 2px solid lightblue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255, 0.5);
  & div {
    display: flex;
    width: 33%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(-90deg);
    &:hover {
      transform: rotate(-90deg) scale(1.1);
      transition: all 0.2s;
    }
  }
  &:hover {
    transform: scale(1.05);
    border: 2px solid orange;
    transition: all 0.2s;
    /* background-color: lightblue; */
  }
  &:active {
    transform: scale(0.95);
    box-shadow: inset 0px -4px 4px grey;
    transition: all 0.1s;
  }

`
const FixedDownBtn = styled.button`
  position: fixed;
  top: 94%;
  width: 150px;
  height: 50px; 
  z-index: 100;
  transition: all 0.2s;
  transition: box-shadow 0s 0.2s;
  border: 2px solid lightblue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255, 0.5);
  & div {
    display: flex;
    width: 33%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(90deg);
    &:hover {
      transform: rotate(90deg) scale(1.1);
      transition: all 0.2s;
    }
  }
  &:hover {
    transform: scale(1.05);
    border: 2px solid orange;
    transition: all 0.2s;
    /* background-color: lightblue; */
  }
  &:active {
    transform: scale(0.95);
    box-shadow: inset 0px 4px 4px grey;
    transition: all 0.1s;
  }

`
