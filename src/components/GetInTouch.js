import styled , {keyframes }from 'styled-components';
import { colorBlue, colorCream } from '../helpers/colors';
import { device } from '../helpers/screenSizes';
import { flipInX } from 'react-animations';
const animator = keyframes`${flipInX}`;


export default function GetInTouch() {



  return (
    <>
  <Button>
    Get in touch
  </Button>

    </>
  )
}

const Button = styled.button`
  position: absolute;
  width: 200px;
  height: 100px;
  bottom: -40%;
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid ${colorCream};
  transition: all 0.2s;

  font-size: 1.5rem;
  font-weight: 500;
  color: ${colorCream};
  &:hover {
    background-color: ${colorBlue};
    cursor: pointer;
    transition: all 0.2s;
  }

  animation: ${animator} 3s;

  ${device.laptopL} {
    bottom: -50%;
  }
  ${device.laptop} {
    bottom: -60%;
  }
  ${device.tablet} {
    bottom: -20%;
  }
  ${device.mobile} {
    bottom: -20%;
  }

`;