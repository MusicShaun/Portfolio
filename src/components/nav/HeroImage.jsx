import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react'
import ImageGenerator from '../../features/about/ImageGenerator';
import { colorWhite } from '../../helpers/colors';
import { device } from '../../helpers/screenSizes';
import { useMemo } from 'react';

function HeroImage() {

  const DontWantTheProfilePictureToRefetchWhenNavigating = useMemo(() => (
    <ImageGenerator publicId='profile-pic_sbcjkf' alt='Shaun Pickett' />
  ), [])

  return (
    <Hero> 
    <Link to='/' style={{textDecoration: 'none'}}>
      <Profile>
        {DontWantTheProfilePictureToRefetchWhenNavigating }
      </Profile>
    </Link> 
    <Name>Shaun Pickett</Name>
    <h3>Front End Developer <br />
    0412 220 332</h3>
  </Hero>  )
}

export default HeroImage

const Hero = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;


  & h3 {
    font-size: 0.8rem;
  }
  ${device.mobile}{
    padding-top: 2rem;

    & h2 {
      font-size: 1.5rem;
    }
    & h3 {
    font-size: 16px;
    }
  }
`;
const Profile = styled.div`
  width: 11em; 
  height: 11em; 
  border-radius: 50%;
  border: 2px solid ${colorWhite};
  overflow: hidden;

  ${device.tablet} {
      width: 11em; 
      height: 11em; 
    }
    ${device.mobile} {
      width: 8rem; 
      height: 8rem; 
    }

  & img {
    width: 120%;
    height: 120%;
    transform: translate(-14px, 0px);

    ${device.laptopL} {
      width: 13rem; 
      height: 13rem; 
      transform: translate(-16px, 0px);
    }

    ${device.tablet} {
      width: 16em; 
      height: 16em; 
    }
    ${device.mobile} {
      width: 11rem; 
      height: 11rem; 
    }
  }
`;
const Name = styled.h2`
  margin: 2rem 0 0 0 ;
  padding: 0;
  line-height: 0rem;
  font-size: 1.3rem;
`;