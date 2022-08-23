import styled from 'styled-components';
import { colorBlack, colorCream, colorBlue, colorWhite, colorSand, colorGrey } from '../helpers/colors';
import { device } from '../helpers/screenSizes';
import column from '../img/columnsdesign.png';
import mastering from '../img/mastering.png';
import banana from '../img/bananashop.png';
import todo from '../img/Todo.png';
import quiz from '../img/Quiz.png';

export default function Skills() {



  return (
    <Wrapper>
    <Header>Projects</Header>
    <Containers style={{backgroundColor: '#90ABD1'}}
      target='_blank' href='https://playful-pudding-43fa23.netlify.app'>
        <UL>
          <Headings>Banana Shop</Headings>
          <LI>React store with a mock product api and Stripe payment.</LI>
        </UL>
        <WebImage style={{backgroundImage: `url(${banana})`, backgroundPositionX: '-8px'}}/>
      </Containers>

      <Containers style={{backgroundColor: '#F4A86A'}}
        target='_blank' href='https://elegant-pony-0acf58.netlify.app/'>
        <UL>
          <Headings>Quiz</Headings>
          <LI>State. Many, many states. </LI>
        </UL>
        <WebImage style={{backgroundImage: `url(${quiz})`, backgroundPositionX: '-8px'}}/>
      </Containers>

      <Containers style={{backgroundColor: '#FFE07B'}}
        target='_blank' href='https://marvelous-kheer-2d615e.netlify.app/'>
        <UL>
          <Headings>Todo List</Headings>
          <LI>Simple array manipulation with local storage.</LI>
        </UL>
      <WebImage style={{backgroundImage: `url(${todo})` , backgroundPositionX: '-8px'}}/>
    </Containers>
    
    <Containers style={{backgroundColor: '#98D0DF'}}
       target='_blank' href='https://www.digital-bath-studio.com/'>
        <UL>
          <Headings>Mastering Website</Headings>
          <LI>Among the first websites I'd created, 
              this happens to be my personal business.</LI>
        </UL>
        <WebImage style={{backgroundImage: `url(${mastering})`}}/>
    </Containers>

    <Containers style={{backgroundColor: '#F2BC8D'}} 
        target='_blank' href='https://creative-cactus-5109fd.netlify.app/'>
        <UL>
          <Headings>Delicious Nav</Headings>
          <LI>This is a website template.  I really enjoy the 
          creative style of the navigation columns</LI>
        </UL>
      <WebImage style={{backgroundImage: `url(${column})`}}/>
    </Containers>

    </Wrapper>
  )
}




const Wrapper = styled.div`
  width:100%;
  height: 100%;
  background-color: ${colorCream};
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color:${colorBlack} ;
`;
const Header = styled.div`
  font-size: 3rem;
  margin-top: 1.6rem;
  padding-left: 1rem;
  line-height: 75%;
  width: 90%;
  align-self: center;
  z-index: 1;
  font-family: 'Fredericka the Great', cursive;
  ${device.mobile}{
    align-self: flex-start;
  }
`;
const Containers = styled.a`
  width:90%;
  height: 20%;
  margin: 1rem 0;
  z-index: 1;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: ${colorBlack};
  &:hover {
    background-color: ${colorBlue} !important;
  }
  ${device.mobile}{
    height: auto;
  }
`;
const WebImage = styled.div`
  width: 22%;
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  display: flex;
  align-self: flex-end;
  justify-items: flex-end;
  ${device.mobile}{
   display: none;
  }
`;
const Headings = styled.div`
  margin-left: 0.6rem;
  font-size: 2rem;
  padding: 0;
  text-decoration: underline;
  text-decoration-thickness: 4%;
  text-underline-offset: 10%;
  white-space: nowrap;
  align-self: flex-start;
  margin-left: -1rem;
  ${device.mobile}{
    margin: 0;
    margin-left: -2rem;
  }
`;
const UL = styled.ul`
  margin: 0 ;
  width: 95%;
  padding-bottom: 1rem;

`;
const LI = styled.li`
  font-size: 0.9rem;
  padding-right: 0.3rem;

`;
