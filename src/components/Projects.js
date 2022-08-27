import styled from 'styled-components';
import { colorBlack, colorCream , colorSand, specialYellow} from '../helpers/colors';
import { device } from '../helpers/screenSizes';
import Loader from './Loader';
import { useEffect , useState } from 'react';
import { imageArray } from './imageArray';

export default function Skills(props) {
  const [loading, setLoading] = useState(true);
  const [counter , setCounter ] = useState(0)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setLoading(false)
  }, [])
  useEffect(() => {
    document.title = 'Shaun\'s Projects';
  }, [])

// TRANSLATEY's THE CONTENT IF NOT === TO 0
  function handleClick2() {
    counter !== 4 ? setCounter(prev => prev + 1) : setCounter(0)
    position !== 400 ? setPosition(prev => prev + 100) : setPosition(0);
  }
  // SWITCH PAGES VIA WHEEL TURN   
  function handleUpWheel() {
    counter !== 0 ? setCounter(prev => prev - 1) : setCounter(0)
    position !== 0 ? setPosition(prev => prev - 100) : setPosition(0);
  }
  // WHEEL CHANGER
  function handleWheel(e) {
    return (e.deltaY / 20 < 0 )
    ? counter > 0 ? handleUpWheel() : null
    : counter < 4 ? handleClick2() : null
  }

  function handleAnchor(e) {
    e.stopPropagation();
  }
  return (<>
    <Wrapper onWheel={(e) => handleWheel(e)} style={{height: `${props.onlyHeight}`}}>

        {loading && <Loader /> }

      <Container >
      {imageArray.map((item, index) => {
        return <TransPages 
                  onClick={handleClick2}
                  style={{transform: 
                     `translateY(-${counter * props.onlyHeight}px)
                     ${index !== counter ? 'scale(0.7)' : 'scale(1)'}` ,
                     marginTop: `${(props.onlyHeight / 100) * 10}px`
                    }}
                  key={item.id} 
                  >
                  <Pages   
                      key={item.id} 
                      style={{zIndex: `${index}`,
                      transform: counter > index 
                        ? `scale(${0.8}) translateY(-${10}%) `
                        : `scale(1)`,
                        }}
                      >
                      <Showcase 
                        style={{backgroundImage: `url(${item.img})`, }}
                      ></Showcase>
                      <Blurb>

                        <UL style={{backgroundColor: item.color, 
                                    transform:
                                    `${index !== counter ? 'translateX(150%)' : 'translateX(0%)'}`
                                    }}>
                          <Headings>{item.title}</Headings>
                          <LI>{item.text}</LI>
                          <LI><AA target='_blank' href={item.url} onClick={handleAnchor}>
                            <Butty>Enter Website</Butty></AA></LI>
                        </UL>

                        <ULMOBILE style={{backgroundColor: specialYellow}}>
                          <Headings>{item.title}</Headings>
                          <LI>{item.text}</LI>
                          <LI>
                            <AA target='_blank' href={item.url} onClick={handleAnchor}><Butty>Enter Website</Butty></AA>
                          </LI>
                        </ULMOBILE>

                      </Blurb>
                  </Pages>
        </TransPages>
      })
      }
    </Container>
    </Wrapper>
    </>)
}




const Wrapper = styled.div`
  position: relative;
  width:100%;
  height: 100%;
  background-image: ${colorCream};
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  color:${colorBlack} ;

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
const Pages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
`;
const Showcase = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 20px;
  ${device.mobile} {
    height: 40%;
    border-radius: 20px 20px 0 0 ;
  }
`;
const Blurb = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateX(72%);
  ${device.mobile} {
    position: relative;
    height: 60%;
    transform: translateX(0%);
  }
  `;
const UL = styled.ul`
  width: 34%;
  height: 50%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  padding-left: 3rem;
  transition: all 0.5s cubic-bezier(.23,1.15,.41,1.11);
  transition-delay: 1.11s;
  animation: onLoadX 1.4s cubic-bezier(.23,1.15,.41,1.11);
  @keyframes onLoadX {
  0% { transform: translateX(200%);
  } 65% { transform: translateX(200%);
  }100% {transform: translateX(0%);
  }}
  ${device.mobile} {
    display: none;
  }
`;
const ULMOBILE = styled.ul`
  display: none;
  background-color: white;
  flex-direction: column;
  padding-right:1rem;
  padding-left: 1rem;
  transition: all 0.5s cubic-bezier(.23,1.15,.41,1.11);
  transition-delay: 1.11s;
  ${device.mobile} {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 0 0 15px 15px;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
  }
`;
const Headings = styled.div`
  margin-left: 0.6rem;
  font-size: 2.4rem;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
  align-self: flex-start;
  margin-left: -1rem;
  font-weight: 500;
  line-height: 3rem;
  padding-bottom: 2rem;
  ${device.mobile} {
    align-self: center;
    text-align: center;
    margin: 0;
    padding-bottom: 1rem;
  }
`;
const LI = styled.li`
  font-size: 1.2rem;
  ${device.mobile} {
    align-items: center;
    list-style: none;
    text-align: center;
  }
`;
const AA = styled.a`
  color:inherit;
  text-decoration: none;
`;
const Butty = styled.button`
  font-size: 1.2rem;
  border-radius: 10px;
  border: solid 2.2px ${colorBlack};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.1;
  z-index: 100;
  &:hover {
    background-color: ${colorSand};
  }
  ${device.mobile}{
    padding: 2rem;
    margin-top: 2rem;
  }
`;





