import styled from 'styled-components';
import { colorWhite } from '../helpers/colors';

export default function Loader() {

  return (<>
    <Background />
    <Loading />
    </>)
}
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colorWhite};
  z-index: 3;
 `;
const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6em;
  height: 6em;
  border: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  border-radius: 50%;
  animation: load8 1.1s infinite linear;
  transition: opacity 0.3s;
  z-index: 4;
  @keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;



