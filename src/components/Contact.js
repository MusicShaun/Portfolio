import styled from 'styled-components';
import face from '../img/eyes.jpeg';
import tomato from '../img/tomatoes.jpeg';
import dog from '../img/Dog-Banner.jpeg';
import ContactForm from './ContactForm';
import { colorWhite } from '../helpers/colors';


export default function About () {

  return (
    <Wrapper>
      <Container>


      <FormWrapper> 
        <ContactForm />
      </FormWrapper>

      <Stage>
        <Shots style={{ backgroundImage: `url(${tomato})`, width: '37.5%', backgroundPosition: '0px -30px'}} />
          <Shots style={{ backgroundImage: `url(${face})`, width: '25%'}} />
          <Shots style={{ backgroundImage: `url(${dog})`, width: '37.5%'}} />
      </Stage>


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
  background: ${colorWhite};
`;
const Container = styled.div`
  width: 98%;
  height: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Stage = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`;
const Shots = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
`;
const FormWrapper = styled.div`
  width: 100%; 
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;