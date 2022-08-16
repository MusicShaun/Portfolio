import styled from "styled-components";
import { Link } from 'react-router-dom';
import { colorBlack, colorBlue, colorWhite,colorSoftYellow } from '../helpers/colors';

export default function Websites() {



  return (
    <Wrapper>
    <BigBorder>
      <H1>Apps</H1>
      <UnorderedList>

      <Link to='/websites/banana-shop' style={{textDecoration: 'none'}}>
        <Headings>Banana Shop - react</Headings>
      </Link>
      <NewTab><AA target='_blank' href='https://playful-pudding-43fa23.netlify.app'>Open in new tab</AA></NewTab>

      <Link to='/websites/todo-list' style={{textDecoration: 'none'}}>
        <Headings>Todo List - react</Headings>
      </Link>
      <NewTab><AA target='_blank' href='https://playful-pudding-43fa23.netlify.app'>Open in new tab</AA></NewTab>

      <Link to='/websites/quiz' style={{textDecoration: 'none'}}>
        <Headings>Quiz - react</Headings>
      </Link>
      <NewTab><AA target='_blank' href='https://elegant-pony-0acf58.netlify.app'>Open in new tab</AA></NewTab>

      <Link to='/websites/mastering' style={{textDecoration: 'none'}}>
        <Headings>My Mastering Website</Headings>
      </Link>
      <NewTab><AA target='_blank' href='https://www.digital-bath-studio.com/'>Open in new tab</AA></NewTab>

      <Link to='/websites/columns' style={{textDecoration: 'none'}}>
        <Headings>Delicious Website template</Headings>
      </Link>
      <NewTab><AA target='_blank' href='https://creative-cactus-5109fd.netlify.app/'>Open in new tab</AA></NewTab>

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
  text-decoration:none;
`;
const H1 = styled.h1`
  margin: 0 ;
  padding: 0;
  font-size: 3rem;
  text-decoration: underline;
`;
const Headings = styled.li`
  font-size: 2rem;
  padding: 1.5rem;
  margin: 0;
  line-height: 0rem;
  border-radius: 10px;
  text-decoration:none;
  color: black;
  &:hover {
    color: ${colorSoftYellow};
    background-color: ${colorBlue};
  }
`;
const NewTab = styled.div`
  text-decoration:none;
  color: ${colorBlack};
  margin-bottom: 1rem;
`;

const AA = styled.a`
  text-decoration:none;
  padding: 0.3rem 2rem;
  line-height: 0rem;
  margin: 0;
  border-radius: 10px;
  color: black;
  &:hover {
    color: ${colorSoftYellow};
    background-color: ${colorBlue};
  }
`;

