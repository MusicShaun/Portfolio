import styled from 'styled-components';


export default function Instagram() {


  return (
    <a href="https://www.instagram.com/monsoonn.moonn/" target="_blank">
    <SVG  xmlns="http://www.w3.org/2000/svg"  viewBox = "0 0 24 24" className="feather feather-instagram">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5">
      </path>
    </SVG>
</a>
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