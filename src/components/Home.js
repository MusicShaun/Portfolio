import styled from 'styled-components';
import { colorBlack, colorCream } from '../helpers/colors';

export default function Home () {
  return (
    <Wrapper>
      <Container>
        <Text>
          <Header>Hello! It's good to see you</Header>
          <SubHeader>My name is Shaun.</SubHeader>
          <SubHeader>Please take a look around.</SubHeader>
        </Text>
      </Container>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 16px solid ${colorCream}; 
`;
const Container = styled.div`
  position: absolute;
  width: 99%;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 20px solid ${colorCream};
  border-radius: 40px;
  box-sizing: content-box;
`;
const Text = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.h1`
  margin: 1rem;
  color: ${colorCream};
  font-size: 4rem;  
`;
const SubHeader = styled.p`
  margin: 0;
  line-height: 1.8rem;
  font-size: 2.4rem;
  font-weight: 500;
  color: ${colorCream};
`;