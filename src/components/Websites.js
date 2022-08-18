import styled from "styled-components";
import { Link } from 'react-router-dom';
import { colorBlack, colorBlue, colorWhite,colorSoftYellow, colorSand } from '../helpers/colors';
import face from '../img/Belvoire.jpg'
import column from '../img/columnsdesign.png';
import mastering from '../img/mastering.png';
import banana from '../img/bananashop.png';


export default function Websites() {



  return (
    <Wrapper>
    <BigBorder>
      <H1>Projects</H1>
      <UnorderedList>

        <ListItem style={{justifyContent: 'flex-start'}}
          target='_blank' href='https://playful-pudding-43fa23.netlify.app'>
          <WebImage style={{backgroundImage: `url(${banana})`}}/>
          <Text>
            <H3>
              Banana Shop
            </H3>
            <Para>i wrote hi for etc etc etc </Para>
          </Text>
        </ListItem>

        <ListItem style={{justifyContent: 'flex-end'}}
           target='_blank' href='https://playful-pudding-43fa23.netlify.app'>
          <Text>
            <H3>
              Todo List
            </H3>
            <Para>i wrote hi for etc etc etc </Para>
          </Text>
          <WebImage style={{backgroundImage: `url(${banana})`}}/>
        </ListItem>

        <ListItem style={{justifyContent: 'flex-start'}}
           target='_blank' href='https://elegant-pony-0acf58.netlify.app'>
          <WebImage style={{backgroundImage: `url(${banana})`}}/>
          <Text>
            <H3>
            Quiz
            </H3>
            <Para>i wrote hi for etc etc etc </Para>
          </Text>
        </ListItem>

        <ListItem style={{justifyContent: 'flex-end'}}
          target='_blank' href='https://www.digital-bath-studio.com/'>
          <Text>
            <H3>
              Mastering Website
            </H3>
            <Para>My personal </Para>
          </Text>
          <WebImage style={{backgroundImage: `url(${mastering})`}}/>
        </ListItem>

        <ListItem style={{justifyContent: 'flex-start'}}
           target='_blank' href='https://creative-cactus-5109fd.netlify.app/'>
          <WebImage style={{backgroundImage: `url(${column})`}}/>
          <Text>
            <H3>
               Delicious Navigation Style
            </H3>
            <Para>i wrote hi for etc etc etc </Para>
          </Text>
        </ListItem>



      </UnorderedList>
      </BigBorder>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorSoftYellow};
`;
const BigBorder = styled.div`
  width: 92%;
  height: 92%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background-color: ${colorWhite}; 
`;
const UnorderedList = styled.ul`
  width: 90%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const H1 = styled.h1`
  margin: 0 ;
  padding: 0;
  font-size: 3rem;
  text-decoration: underline;
  color: ${colorBlack};
`;
const ListItem = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  color: ${colorBlack};
  text-decoration: none;
  border-bottom: 3px solid ${colorSoftYellow};
  &:hover {
    color: ${colorBlue};
    background-color: ${colorSand};
    cursor: pointer;
  }
`;
const Text = styled.div`
  padding: 0 1rem;
`;
const H3 = styled.li`


`;
const Para = styled.p`
  font-size: 1rem;
  color: ${colorBlack};
`;
const WebImage = styled.div`
  width: 178px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
`;

