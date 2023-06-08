import styled from 'styled-components';
import {device} from '../../helpers/screenSizes';
import React from 'react';

export default function AboutSVG(props) {
  return (

<SVG  
 version="1.1" viewBox="100 25 510 510" xmlns="http://www.w3.org/2000/svg">
 <path d="m350 26.25c-124.68 0-226.12 113.84-226.12 253.75s101.44 253.75 226.12 253.75 226.12-113.84 226.12-253.75-101.44-253.75-226.12-253.75zm0 35c105.39 0 191.12 98.129 191.12 218.75 0.10156 37.727-8.6328 74.949-25.5 108.7-6.793-24.426-23.602-44.84-46.266-56.195-22.371-10.977-46.23-18.617-70.816-22.68 29.387-14.688 50.543-41.891 57.539-73.988 6.9961-32.098-0.91406-65.637-21.523-91.223-20.605-25.586-51.688-40.465-84.539-40.465-32.852-0.003906-63.938 14.867-84.551 40.449-20.609 25.582-28.531 59.121-21.539 91.219 6.9922 32.102 28.145 59.309 57.527 74-24.637 4.0625-48.547 11.707-70.973 22.688-22.586 11.414-39.32 31.812-46.094 56.195-16.867-33.746-25.598-70.969-25.5-108.7 0-120.62 85.73-218.75 191.12-218.75zm-73.562 151.61c-0.003906-19.512 7.7461-38.223 21.539-52.023 13.797-13.797 32.508-21.547 52.02-21.551 19.508 0 38.223 7.75 52.02 21.543 13.797 13.797 21.547 32.508 21.547 52.02 0 19.508-7.75 38.223-21.543 52.02-13.797 13.793-32.508 21.547-52.02 21.547-19.5-0.023437-38.199-7.7812-51.988-21.57-13.793-13.789-21.551-32.484-21.574-51.984zm-42.629 240.43c-13.367-12.148-19.875-30.113-17.387-48.008 2.4844-17.891 13.641-33.402 29.812-41.449 32.383-15.551 67.848-23.625 103.77-23.625 35.926 0 71.391 8.0742 103.78 23.625 16.172 8.0469 27.328 23.559 29.812 41.449 2.4844 17.895-4.0234 35.859-17.391 48.008-31.84 28.906-73.203 45.09-116.21 45.469-42.996-0.38281-84.352-16.566-116.19-45.469z"/>


</SVG>
  )
}

const SVG = styled.svg`

    fill:white;
    stroke:white ;
    stroke-width:4 ;
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