import styled from 'styled-components';
import {device} from '../../helpers/screenSizes';

export default function Facebook(props) {


  return (
  <AA href="https://www.facebook.com/Shaunovbeat" target="_blank">
    <SVG  
    xmlns="http://www.w3.org/2000/svg" viewBox = "0 0 24 24"  className="feather feather-twitter">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
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