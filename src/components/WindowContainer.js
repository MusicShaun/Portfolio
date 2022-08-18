import AnimatedBackground from './AnimatedBackground';
import styled from 'styled-components';
import Navigation from './Navigation';
import { Routes , Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Websites from './Websites';
import BananaShop from './iFrames/BananaShop';
import TodoList from './iFrames/TodoList';
import Contact from './Contact';
import Mastering from './iFrames/Mastering';
import Quiz from './iFrames/Quiz';
import Columns from './iFrames/Columns';

export default function WindowContainer() {


  return (<>
    <AnimatedBackground />
    
    <Wrapper>
      <Container>

        <LeftSide>
          <Navigation />
        </LeftSide>

        <RightSide>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={ <About />} />
            <Route path='/websites' element={ <Websites />} />
            <Route path='/websites/banana-shop' element={ <BananaShop /> } />              
            <Route path='/websites/todo-list' element={ <TodoList /> } />              
            <Route path='/websites/quiz' element={ <Quiz /> } />              
            <Route path='/websites/columns' element={ <Columns /> } />              
            <Route path='/websites/mastering' element={ <Mastering /> } />              
            <Route path='/contact' element={ <Contact /> } />              
           
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
`;

const Container = styled.div`
  width: 75%;
  height: 85%;
  display: flex;
`;
const LeftSide = styled.div`
  width: 320px;
  height: 100%;
`;
const RightSide = styled.div`
  width: 100%;
  height: 100%;
`;