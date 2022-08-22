import styled from 'styled-components';
import {device} from '../../helpers/screenSizes';

export default function MailSVG(props) {


  return (
    <SVG
     viewBox="0 0 24 24">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </SVG>
  )
}

const SVG = styled.svg`
    fill:none;
    stroke:white ;
    stroke-width:2 ;
    stroke-linecap:round ;
    stroke-linejoin:round;
    margin-right: 0.8rem;
    width: 32px;
    height: 32px;
    ${device.laptop} {
      width: 25px;
      height: 25px;
    }
    ${device.mobile} {
      display: none;
    }
`;