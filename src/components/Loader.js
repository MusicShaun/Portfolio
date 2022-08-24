import styled from 'styled-components';
import { colorWhite } from '../helpers/colors';

export default function Loader() {

  return (<>
    <Background />
    <Wrapper>
    <Loading />

    </Wrapper>
    </>)
}
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colorWhite};
  z-index: 3;
 `;
 const Wrapper = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 `;
const Loading = styled.div`

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



