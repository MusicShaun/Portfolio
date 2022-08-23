import styled from "styled-components";
import { colorBlack, colorBlue, colorWhite, colorSand } from '../helpers/colors';
import column from '../img/columnsdesign.png';
import mastering from '../img/mastering.png';
import banana from '../img/bananashop.png';
import paper from '../img/SVGs/old-paper.svg';
import todo from '../img/Todo.png';
import quiz from '../img/Quiz.png';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { device } from '../helpers/screenSizes';


export default function Websites() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [])

  
  return (<>   


    <Wrapper>
    {loading && <Loader /> }
    <Background />
    <BigBorder >
      <H1>Projects</H1>

      <UnorderedList>

        <ListItem style={{justifyContent: 'flex-start'}}
          target='_blank' href='https://playful-pudding-43fa23.netlify.app'>
          <WebImage style={{backgroundImage: `url(${banana})`, backgroundPositionX: '-8px'}}/>
          <Text>
            <H3>Banana Shop</H3>
            <Para>React store with a mock product api and Stripe payment.</Para>
          </Text>
        </ListItem>

        <ListItem style={{}}
           target='_blank' href='https://elegant-pony-0acf58.netlify.app/'>
          <WebImage style={{backgroundImage: `url(${quiz})`, backgroundPositionX: '-8px'}}/>
          <Text>
            <H3>Quiz</H3>
            <Para>State. Many, many states. </Para>
          </Text>
        </ListItem>

        <ListItem style={{}}
           target='_blank' href='https://marvelous-kheer-2d615e.netlify.app/'>
          <WebImage style={{backgroundImage: `url(${todo})` , backgroundPositionX: '-8px'}}/>
          <Text>
            <H3>Todo List</H3>
            <Para>Simple array manipulation with local storage.</Para>
          </Text>
        </ListItem>

        <ListItem style={{}}
          target='_blank' href='https://www.digital-bath-studio.com/'>
          <WebImage style={{backgroundImage: `url(${mastering})`}}/>
          <Text>
            <H3>Mastering Website</H3>
            <Para>Among the first websites I'd created, 
              this happens to be my personal business.</Para>
          </Text>
        </ListItem>

        <ListItem style={{}}
           target='_blank' href='https://creative-cactus-5109fd.netlify.app/'>
          <WebImage style={{backgroundImage: `url(${column})`}}/>
          <Text>
            <H3>Delicious Navigation</H3>
            <Para>This is a website template. 
              I really enjoy the creative style of the navigation columns </Para>
          </Text>
        </ListItem>



      </UnorderedList>
      </BigBorder>
  

    </Wrapper>
  </>)
}


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorWhite};
  overflow: hidden;
`;
const BigBorder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  z-index: 2;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url(${paper});
  background-size: cover;
  background-repeat: no-repeat;
  filter: contrast(2.3);
  opacity: 0.4;
  filter: saturate(0.4);
  filter: brightness(1.4);
`;
const H1 = styled.div`
  font-family: 'Fredericka the Great', cursive;
  font-size: 4rem;
  width: 300px;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  ${device.mobile}{
    position: sticky;
    padding-left: 12px;
    top: 0; 
    width: 85%;
    height: 14%;
    justify-content: flex-start;
    font-size: 3.5rem;
    text-align: left;
  }
`;
const UnorderedList = styled.ul`
  width: 70%;
  height: 80%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${device.mobile}{
    justify-content:space-evenly;
    width: 85%;
    height: 86%;
  }
`;
const ListItem = styled.a`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 2rem;
  color: ${colorBlack};
  text-decoration: none;
  &:hover {
    color: ${colorBlue};
    background-color: ${colorSand};
    cursor: pointer;
  }
  ${device.mobile}{
  line-height: 1rem;
   flex-direction : column;
   height: auto;
  }
`;
const Text = styled.div`
  padding: 0 1rem;
`;
const H3 = styled.li`
  line-height: 1rem;
  white-space: nowrap;
  ${device.mobile}{
    line-height: 2rem;
    font-size: 1.6rem;
    text-decoration: underline;
  }
`;
const Para = styled.p`
  font-size: 1rem;
  color: ${colorBlack};
`;
const WebImage = styled.div`
  width: 178px;
  min-width: 178px;
  height: 100px;
  margin-right: 4rem;
  background-size: cover;
  background-repeat: no-repeat;
  border: 0.5px solid ${colorBlue};
  border-radius: 5px;

  ${device.mobile}{
   display: none;
  }
`;

