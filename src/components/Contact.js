import styled from 'styled-components';
import ContactForm from './ContactForm';
import { colorCream } from '../helpers/colors';
import Loader from './Loader';
import { useEffect , useState } from 'react';


export default function About () {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <Wrapper>
        {loading && <Loader /> }
    <BorderClose />
      <Container>
      <IFrame
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.456704366744!2d115.75547606894557!3d-31.894250621683256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a8d53f5f9491%3A0x7f4796ab4a848054!2sScarborough%20Beach%20Clock%20Tower!5e0!3m2!1sen!2sau!4v1661126277571!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">' 
       allowfullscreen/>

      <FormWrapper> 
        <ContactForm />
      </FormWrapper>
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
  background-color: ${colorCream};   
`;
const Container = styled.div`
  position: absolute;
  width: 98%;
  height: 98%;
  border: 20px solid ${colorCream};
  box-sizing: content-box;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const BorderClose  = styled.div`
position: absolute;
width: 99%;
height: 99%;
border: 10px solid ${colorCream};
box-sizing: content-box;
border-radius: 10px;
`;
const IFrame = styled.iframe`
  height: 100%;
  width: 60%;
  border: 0;
  border-radius: 10px;
`; 
const FormWrapper = styled.div`
  width: 40%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
