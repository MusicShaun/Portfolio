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

  useEffect(() => {
    setLoading(false)
  }, [])


  // TRANSLATEY's THE CONTENT IF NOT === TO 0
  function handlePageClicking() {
    counter >= imageArray.length - 1 ? setCounter(0) : setCounter(prev => prev + 1);
  }


  //  THIS HANDLES THE SCROLLING OR LAPTOP SLIDING 
  function handleWheel(e) {
    const deltaY = Math.floor(e.deltaY) / 30;
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
      
  const Pages = (<Container>
          {imageArray.map((item, index) => {
        return(
          <TransPages 
            onClick={handleAnchor}
            style={{transform: 
                `translateY(-${counter * props.onlyHeight}px)
                ${index !== counter ? 'scale(0.7)' : 'scale(1)'}` ,
                marginTop: `${(props.onlyHeight / 100) * 10}px`
              }}
            key={item.id} 
          >
            <ProjectPages item={item} index={index} counter={counter} handlePageClicking={handlePageClicking} />

          </TransPages>
          )
        })
      }
    </Container>
  )

  return (<>
    <Wrapper onWheel={handleWheel} style={{height: `${props.onlyHeight}`}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>See Shaun's Projects </title>
        <meta name="Take a look at Shaun's projects" content="Each project is made from the ground up, starting from the most recent" />
        <link rel='canonical' href='https://www.shaunpickett.com/projects' />
      </Helmet>

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

