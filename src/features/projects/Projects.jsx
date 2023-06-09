import styled from 'styled-components';
import { colorBlack ,} from '../../helpers/colors';
import { device } from '../../helpers/screenSizes';
import Loader from '../../components/Loader';
import React, { useEffect , useState, useCallback } from 'react';
import imageArray from './projectArray';
import throttle from 'lodash.throttle';
import { Helmet } from "react-helmet";
import ProjectPages from './ProjectPages';

export default function Skills(props) {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0)
  let direction = 0

  useEffect(() => {
    setLoading(false)
  }, [])


  // TRANSLATEY's THE CONTENT IF NOT === TO 0
  function handlePageClicking() {
    counter >= imageArray.length - 1 ? setCounter(0) : setCounter(prev => prev + 1);
  }

  // Touch based scroll events 
  function handleTouch(e) {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0]
      const deltaY = Math.floor(touch.clientY)

      if (direction > deltaY && counter > 0) {
        throttledEventHandlerUp();
      } else if (direction < deltaY && counter < imageArray.length - 1) {
        throttledEventHandlerDown();
      }
      direction = deltaY
    }
  }

  function handleWheel(e) {
    const deltaY = Math.floor(e.deltaY) /30;
    if (deltaY < 0 && counter > 0) {
      throttledEventHandlerUp();
    } else if (deltaY > 0 && counter < imageArray.length - 1) {
      throttledEventHandlerDown();
    }
  }
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledEventHandlerUp = useCallback(
    throttle(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 250, { trailing: false }),
    []
  );
// eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledEventHandlerDown = useCallback(
    throttle(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 250, { trailing: false }),
    []
  );
  

  function handleAnchor(e) {
    e.stopPropagation();
    if (counter === 0 ) {
      alert("The first API call may take a while as the Heroku server is waking up. Thank you for being patient")
    }
    if (counter === 1 ) {
      alert("Heroku servers can take up to 20 seconds to awaken. Thank you for being patient")
    }
  }
      
  const Pages = (
    
    <Container >
      {imageArray.map((item, index) => {
        return(
          <TransPages 
            style={{transform: 
                `translateY(-${counter * props.onlyHeight}px)
                ${index !== counter ? 'scale(0.7)' : 'scale(1)'}` ,
                marginTop: `${(props.onlyHeight / 100) * 10}px`
              }}
            key={item.id} 
          >
            <ProjectPages item={item} index={index} counter={counter} handleAnchor={handleAnchor} />

          </TransPages>
          )
        })
      }
      </Container>
      
  )

  return (<>
    <Wrapper onWheel={handleWheel} onTouchStart={handleTouch} onTouchMove={handleTouch}  style={{height: `${props.onlyHeight}`}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>See Shaun's Projects </title>
        <meta name="description" content="A React component that displays a collection of project pages and allows navigation through them using touch or scroll events." />
        <link rel='canonical' href='https://www.shaunpickett.com/projects' />
      </Helmet>

      <h1 style={{ position: 'absolute', visibility: 'hidden' }}>View my recent projects</h1>
      <h2  style={{ position: 'absolute', visibility: 'hidden' }}>Each one carefully crafted from the ground up</h2>

    {loading && <Loader /> }

    {Pages}

    </Wrapper>
    </>)
}




const Wrapper = styled.div`
  position: relative;
  width:100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  color:${colorBlack} ;
  overflow-x: hidden;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const TransPages = styled.div`
  position: relative;
  min-width: 90%;
  min-height: 90%;
  transition: transform 1s cubic-bezier(.23,1.15,.41,1.11);
&:first-child {
  margin-top: 5vh !important;
}
animation: onLoad 1s cubic-bezier(.23,1.15,.41,1.11);
/* animation-delay: 0.3s; */
@keyframes onLoad {
  from { transform: translateY(100%);
  } to {transform: translateY(0%);
  }}
  ${device.mobile} {
    min-width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;

