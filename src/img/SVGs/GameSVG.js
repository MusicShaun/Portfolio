import styled from 'styled-components';


export default function GameSVG() {


  return (
    <SVG viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
</SVG>
  )
}

const SVG = styled.svg`
    width: 25px;
    height:25px;
    fill:none;
    stroke:white ;
    stroke-width:2 ;
    stroke-linecap:round ;
    stroke-linejoin:round;
`;