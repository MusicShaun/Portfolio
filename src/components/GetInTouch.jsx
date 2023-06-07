import styled , {keyframes }from 'styled-components';
import { colorBlue, colorCream } from '../helpers/colors';
import { device } from '../helpers/screenSizes';
import { Link } from 'react-router-dom';
import { flipInX } from 'react-animations';
import React from 'react';

const animator = keyframes`${flipInX}`;


export default function GetInTouch() {



  return (
    <>          

    <Button>
    <Link to='/contact' style={{textDecoration: 'none', color: 'inherit'}}>
    Get in touch
    </Link>
  </Button>


    </>
  )
}

const Button = styled.button`
  position: relative;
  width: 200px;
  min-height: 100px;
  border-radius: 10px;
  margin-top: 4rem;
  background-color: transparent;
  border: 2.5px solid ${colorCream};
  transition: all 0.1s;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${colorCream};
  &:hover {
    background-color: ${colorBlue};
    cursor: pointer;
    transition: all 0.2s;
  }

  animation: ${animator} 3s;

  ${device.laptopL} {
    margin-top:3rem;
  }
  ${device.laptop} {
    margin-top: 2rem;
  }


`;