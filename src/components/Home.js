import styled from 'styled-components';
import pizza from '../img/pizza.jpeg';
import { colorCream } from '../helpers/colors';

export default function Home () {
  return (
    <Wrapper>
      <Container>
        <Text>
          <Header>Hello! It's good to see you</Header>
          <SubHeader>My name is Shaun.</SubHeader>
          <SubHeader>Please take a look around.</SubHeader>
        </Text>
        <BackIMG />
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
  background: ${colorCream};
`;
const Container = styled.div`
  width: 98%;
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
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
const BackIMG = styled.img`
  position: absolute;
  width: 98%;
  height: 98%;
  background-image: url(${pizza});
  background-size: cover;
  filter: contrast(50%);
`;
const Header = styled.h1`
  margin: 1rem;
  color: ${colorCream};
  font-size: 3rem;
`;
const SubHeader = styled.p`
  margin: 0;
  line-height: 1.8rem;
  font-size: 2rem;
  font-weight: 500;
  color: ${colorCream};
`;