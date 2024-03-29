import styled from 'styled-components';
import {colorSand, colorWhite } from '../../helpers/colors';
import React from 'react'
import {device} from '../../helpers/screenSizes';

import LinkedInIcon from '@images/LinkedIn_ICON.png'
import InstagramIcon from '@images/Instagram_ICON.png'
import GithubIcon from '@images/Github_ICON.png'

function NavFooter({handleIconHover, deleteIconHover}) {


  return (
    <Footer>
      <FootList onMouseEnter={handleIconHover} onMouseLeave={deleteIconHover} 
      href='https://www.linkedin.com/in/shaun-pickett/' target='_blank' aria-label="Go to Shaun's Linked In">
        <img src={LinkedInIcon} alt='Connect with me on Linked In' /></FootList>
      <FootList onMouseEnter={() => handleIconHover(2)} onMouseLeave={() => deleteIconHover(2)}
        href='https://github.com/MusicShaun' target='_blank' aria-label="Go to Shaun's GitHub">
        <img src={GithubIcon} alt='View my Github' />  </FootList>
      <FootList onMouseEnter={() => handleIconHover(3)} onMouseLeave={() => deleteIconHover(3)}
      href='https://www.instagram.com/shaun.picketty/' target='_blank' aria-label="Go to Shaun's Instagram">
        <img src={InstagramIcon} alt='Visit me on Instagram' /> </FootList>
  </Footer>
  )
}

export default NavFooter



const Footer = styled.div`
  width: 100%;
  min-height: 12%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;

  ${device.tablet} {
    gap: 3rem;
  }
`;
const FootList = styled.a`
  position: relative;
  margin-bottom: 1rem;
  padding-top: 0.7rem;
  display: flex ;
  justify-content: center;
  height: 60px;
  width: 60px;
  line-height: 60px;
  border-radius: 50%;
  color: ${colorWhite};
  cursor: pointer; 
  transition: all .2s ease-in-out;

  &:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px ${colorWhite};
  transition: all .2s ease-in-out;
  }
  & img {
    width: 32px;
    height: 32px;
    filter: invert(100%);
  }
  &:hover {
    background-color: ${colorSand}; 
  }
  &:hover:after {
    opacity: 1;  
    transform: scale(1.12);

    transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
  }
  &:hover img {
    filter: invert(20%);
  }
`;
