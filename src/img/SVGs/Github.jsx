import styled from 'styled-components';
import {device} from '../../helpers/screenSizes';
import React from 'react';

export default function Github(props) {


  return (
    <AA href="https://github.com/MusicShaun" target="_blank">
    <SVG 
    xmlns="http://www.w3.org/2000/svg"  viewBox = "0 0 24 24" className="feather feather-github">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </SVG>
</AA>
  )
}
const AA = styled.a`
  z-index: 1;
`;
const SVG = styled.svg`
    fill:none;
    stroke:white ;
    stroke-width:2 ;
    stroke-linecap:round ;
    stroke-linejoin:round;
    width: 32px;
    height: 32px;
    ${device.laptop} {
      width: 25px;
      height: 25px;
    }

`;