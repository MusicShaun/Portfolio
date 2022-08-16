import styled from "styled-components";

export default function TodoList() {

  return (
    <Wrapper>
        <IFRAME src='https://elegant-pony-0acf58.netlify.app'></IFRAME>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 7px solid hsl(60, 28%, 95%);
`;

const IFRAME = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
`;