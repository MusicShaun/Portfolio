import styled from 'styled-components';


export default function HomeSVG(props) {


  return (
    <SVG   style={{width: `${props.IconSize}`, height: `${props.IconSize}`}}
    viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
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
`;