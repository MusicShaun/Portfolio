import AnimatedBackground from './AnimatedBackground';
import styled from 'styled-components';
import Navigation from './Navigation';
import { Routes , Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import BananaShop from './iFrames/BananaShop';
import TodoList from './iFrames/TodoList';
import Contact from './Contact';
import Mastering from './iFrames/Mastering';
import Quiz from './iFrames/Quiz';
import Columns from './iFrames/Columns';
import Loader from './Loader';
import { useState , useEffect } from 'react'; 
import { device } from '../helpers/screenSizes';
import StyledBurger from './Hamburger';
import {useWindowWidth, useWindowHeight} from '@react-hook/window-size';



export default function WindowContainer() {
  const onlyHeight = useWindowHeight();
  const onlyWidth = useWindowWidth()
  const [openMobile, setOpenMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(false); 
  }
  useEffect(() => {
    window.addEventListener('load', handleLoading);
    return () => window.removeEventListener('load', handleLoading);
  }, [])

  function handleHamburger() {
    setOpenMobile(prev => prev = !prev)
  }
  function hideHamburger() {
    setOpenMobile(false)
  }


  return (<>
  
  {loading ? <Loader /> : <>

    <AnimatedBackground />

    <Wrapper>
      <Container>

        <Hamburger onClick={handleHamburger} style={{StyledBurger}}>
          <StyledBurger openMobile={openMobile}></StyledBurger>
        </Hamburger>

        {onlyWidth < 500 ? <LeftSide 
          style={{transform: openMobile ? 'translateX(0px)' : 'translateX(-100%)'}}> 
          <Navigation hideHamburger={hideHamburger}/>
        </LeftSide>
        :
        <LeftSide style={{transform: 'translateX(0px)'}}> <Navigation hideHamburger={hideHamburger}/></LeftSide>
        }

        <RightSide>
          <Routes>
            <Route path='/' element={ <Home />} />
            
            <Route path='/about' element={<About onlyWidth={onlyWidth} onlyHeight={onlyHeight}/>} />
            
            <Route path='/websites' element={ <Projects />} />
            <Route path='/websites/banana-shop' element={ <BananaShop /> } />              
            <Route path='/websites/todo-list' element={ <TodoList /> } />              
            <Route path='/websites/quiz' element={ <Quiz /> } />              
            <Route path='/websites/columns' element={ <Columns /> } />              
            <Route path='/websites/mastering' element={ <Mastering /> } />              
            <Route path='/contact' element={ <Contact /> } />              
           
          </Routes>
        </RightSide>

      </Container>
    </Wrapper></>
  }
  </>)
}

const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Container = styled.div`
  position: relative;
  width: 75%;
  height: 85%;
  display: flex;
    
  ${device.mobile} {
    height: 100%;
    width: 100%;
  }
`;
const LeftSide = styled.div`
  width: 320px;
  height: 100%;
  transition: all 1s;
    
  ${device.mobile} {
    position: absolute;
    left:0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;
const RightSide = styled.div`
  width: 100%;
  height: 100%;
`;
const Hamburger = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  width: 100px;
  height: 100px;
  display: none;
  z-index: 11;

  ${device.mobile} {
    display: flex;
  }
`;