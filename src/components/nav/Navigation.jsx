import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import { colorSand } from '../../helpers/colors';
import {device} from '../../helpers/screenSizes';
import { headShake } from 'react-animations';
import React, { useState } from 'react'; 
import IconHovers from '../IconHovers';
import HomeICON from '@images/Home_ICON.png';
import AboutICON from '@images/About2_ICON.png';
import ProjectsICON from '@images/Project_ICON.png';
import SkillsICON from '@images/Skills_ICON.png';
import ContactICON from '@images/Contact_ICON.png';
import Footer from '@components/nav/NavFooter';
import HeroImage from './HeroImage';

const bounceAnimation = keyframes`${headShake}`;

export default function Navigation(props) {
  
  const {hideHamburger} = props;
  const [ bubble ,setBubble ] = useState(false); 
  const [ bubble2 ,setBubble2 ] = useState(false); 
  const [ bubble3 ,setBubble3 ] = useState(false); 



  function handleIconHover(num) {
    if (num === 3 ){
      setBubble3(true)}
    else if (num === 2 ){
      setBubble2(true)}
    else{
      setBubble(true)}
  }
  function deleteIconHover(num) {
    if (num === 3 ){
      setBubble3(false)}
    else if (num === 2 ){
      setBubble2(false)}
    else{
      setBubble(false)}
  }

  const navigationMenuArray = [
    { name: 'Home', link: '/', image: HomeICON, alt: 'Navigate to Home', delay: '5s'},
    { name: 'About', link: '/about', image: AboutICON, alt: 'Navigate to About', delay: '6s' },
    { name: 'Projects', link: '/projects', image: ProjectsICON, alt: 'Navigate to Projects', delay: '7s' },
    { name: 'Skills', link: '/skills', image: SkillsICON, alt: 'Navigate to Skills' , delay: '8s'},
    { name: 'Contact', link: '/contact', image: ContactICON , alt: 'Navigate to Contact', delay: '10s'}
  ]

  const NavigationMenu =
    <UnorderedList>
    {navigationMenuArray.map((item, index) => {
      return (
        <Link to={item.link} style={{ textDecoration: 'none' }} onClick={hideHamburger} key={index}>
          <ListItem>
            <Icons><img src={item.image} alt={item.alt} /></Icons>
            {item.name === 'Contact'
              ? <Contact>Contact</Contact>
              : <AnimationHolder style={{ animationDelay: item.delay }}>
                {item.name}
              </AnimationHolder>
            }
          </ListItem>
        </Link>
      )
    })
  }
  </UnorderedList>

  return (
    <Wrapper>

      <HeroImage />

      <NavigationPane>{NavigationMenu}</NavigationPane>

      {bubble && <IconHovers text={'View my LinkedIn'} textD='left' />}
      {bubble2 && <IconHovers text={'View my Github'} />}
      {bubble3 && <IconHovers text={'Connect with me on Instagram'} textD='right' />}

      <Footer handleIconHover={handleIconHover} deleteIconHover={deleteIconHover} />

    </Wrapper>
  )

}


const Wrapper = styled.nav`
  height: 100%;
  background-color: hsl(40, 3%, 17%);
  display: flex;
  flex-direction: column;

  & h3 {
    font-weight: 500;
    text-align: center;
    user-select: none;
  }
`;


const NavigationPane = styled.div`
  width: 100%;
  height: 50%;
  max-height: 450px;
  padding-top: 1rem;

  ${device.tablet} {
    padding-top: 0;
  }
`;
const UnorderedList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 3rem 0 6rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
  ${device.tablet} {
    margin-top: 5rem;
  }
  ${device.mobile} {
    padding-top: 5rem;
    margin-top: 1rem;
  }
`;


const ListItem = styled.li`
  height: 50px;
  width: 100%;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  gap: 1rem;
  text-decoration: none;
  transition: all 0.1s ease-out;
  &:hover {
    background-color: ${colorSand};
    color: hsl(40, 3%, 17%);
    transition: all 0.1s ease-out;
    }
  ${device.laptop} {
    font-size: 1.1rem;
    }
  ${device.tablet} {
      text-align: center;
      justify-content: center;
      padding-left: 0;
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }
  ${device.mobile} {
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
  }
  & h3 {
    margin: 0px;
    padding: 0px;
    line-height: 1;
    margin-top: 6px;
  }
`;
const Icons = styled.div`
position: relative;
  width: 32px;
  height: 32px;

  ${device.laptop} {
      width: 25px;
      height: 25px;
    }
  ${device.mobile} {
    display: none;
  }
& img {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  filter: invert(100%);
}
`

// ANIMATIONS THAT TAKE UP TOO MUCH ROOM AND ARE JUST CANDY 
const AnimationHolder = styled.h3`
animation: ${bounceAnimation} 2s  ;`

const Contact = styled.h3`
vertical-align: middle;
  animation: wiggle linear 10s 2;
  animation-delay: 9s;

  @keyframes wiggle {
    0%{ transform: scale(1) rotate(0);
    } 5% {transform: scale(1.3) rotate(0);
    } 7.5% {transform: scale(1.3) rotate(0);
    }8.5% {transform: scale(1.3)  rotate(-10deg)
    }9.5% { transform: scale(1.3)  rotate(10deg)
    }10.5% {transform: scale(1.3) rotate(-10deg);
    }11.5% { transform: scale(1.3) rotate(10deg);
    }14% {transform: scale(1.3) rotate(0deg);
    }15.5% { transform: scale(1) rotate(0);
    }100% {transform: scale(1) rotate(0);}
}`;