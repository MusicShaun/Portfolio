import AnimatedBackground from './AnimatedBackground';
import AnimatedBackgroundMobile from './AnimatedBackgroundMobile';
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
import Skills from './Skills';


export default function WindowContainer() {
  const onlyHeight = useWindowHeight();
  const onlyWidth = useWindowWidth()
  const [openMobile, setOpenMobile] = useState(false);
  const [loading, setLoading] = useState(true);

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
  

    {loading && <Loader /> }

    <AnimatedBackground />
    <AnimatedBackgroundMobile />

    <Wrapper>
      <Container>

        <Hamburger onClick={handleHamburger} style={{StyledBurger}}>
          <StyledBurger openMobile={openMobile}></StyledBurger>
        </Hamburger>

        {onlyWidth < 1025 ? <LeftSide 
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
            <Route path='/projects' element={ <Projects />} />
            <Route path='/projects/banana-shop' element={ <BananaShop /> } />              
            <Route path='/projects/todo-list' element={ <TodoList /> } />              
            <Route path='/projects/quiz' element={ <Quiz /> } />              
            <Route path='/projects/columns' element={ <Columns /> } />              
            <Route path='/projects/mastering' element={ <Mastering /> } />              
            <Route path='/skills' element={ <Skills /> } />              
            <Route path='/contact' element={ <Contact  onlyWidth={onlyWidth}/> } />              
           
          </Routes>
        </RightSide>

      </Container>
    </Wrapper>
  
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
  width: 100%;
  height: 100%;
  display: flex;
    
  ${device.tablet} {
    height: 100%;
    width: 100%;
  }
`;
const LeftSide = styled.div`
  width: 320px;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.17, 0.99, 1, 1);
    
  ${device.tablet} {
    position: absolute;
    left:0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;
const RightSide = styled.div`
  position: relative;
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

  ${device.tablet} {
    display: flex;
  }
`;