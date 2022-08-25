import styled, {keyframes} from 'styled-components';
import { colorCream } from '../helpers/colors';
import { useState, useEffect } from 'react';
import { flipInX } from 'react-animations';
import { device } from '../helpers/screenSizes';
const animator = keyframes`${flipInX}`;


export default function Home (props) {
  useEffect(() => {
    document.title = 'Shaun\'s Portfolio';
  }, [])

  const [showHeader, setShowHeader] = useState(false);
  const [showSubHeader, setShowSubHeader] = useState(false);
  const [showSubHeader2, setShowSubHeader2] = useState(false);
  const [showSubHeader3, setShowSubHeader3] = useState(false);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setShowHeader(true)
    }, 1500);
    const intervalID2 = setInterval(() => {
      setShowSubHeader(true)
    }, 2300);
    const intervalID3 = setInterval(() => {
      setShowSubHeader2(true)
    }, 3100);
  //   const intervalID4 = setInterval(() => {
  //     setShowSubHeader3(true)
  //   }, 7000);
  //   return (() => clearInterval(intervalID),   
  //           () => clearInterval(intervalID2),  
  //           () => clearInterval(intervalID3),
  //           () => clearInterval(intervalID4))
  // }, [])

  return (<>

    <Wrapper>
    <BorderClose/>
      <Container>
        <Text>

          { showHeader && <Header>Hello! It's good to see you</Header> }
          { showSubHeader && <SubHeader>My name is Shaun.</SubHeader> }
          { showSubHeader2 && <SubHeader >Please take a look around.</SubHeader>}

        </Text>
      </Container>

      {/* { showSubHeader3 && } */}

    </Wrapper>

    </>)
}


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 16px solid ${colorCream}; 
    
  ${device.tablet} {
    border: none;
  }
`;
const Container = styled.div`
  position: relative;
  width: 98%;
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 20px solid ${colorCream};
  border-radius: 40px;
  box-sizing: content-box;
  ${device.tablet} {
    border: none;
  } 
`;
const BorderClose  = styled.div`
  position: absolute;
  width: 99%;
  height: 99%;
  border: 10px solid ${colorCream};
  box-sizing: content-box;
  border-radius: 10px;
  ${device.tablet} {
    display: none;
  }
`;
const Text = styled.div`
  width: 90%;
  height: 25%;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${device.laptop} {
    height: 50%;
  }
`;
const Header = styled.h1`
  animation: 1.5s ${animator};
  margin: 1rem;
  color: ${colorCream};
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  ${device.mobile} {
    font-size: 2.5rem;
  }
`;
const SubHeader = styled.p`
  animation: 1s ${animator};
  margin: 0;
  text-align: center;
  line-height: 2.2rem;
  font-size: 2.4rem;
  font-weight: 600;
  color: ${colorCream};
  &:last-child {
    animation: 2s ${animator};}
  ${device.mobile} {
    font-size: 1.5rem;
  }
`;
