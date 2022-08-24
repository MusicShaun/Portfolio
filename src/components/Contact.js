import styled from 'styled-components';
import ContactForm from './ContactForm';
import { colorCream } from '../helpers/colors';
import Loader from './Loader';
import { useEffect , useState } from 'react';
import { device } from '../helpers/screenSizes';


export default function About () {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, [])
  useEffect(() => {
    document.title = 'Contact Me';
  }, [])

  return (
    <Wrapper>
        {loading && <Loader /> }
    <BorderClose />
      <Container>
      <IFrame
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26026.225998293794!2d115.7514310219168!3d-31.892581996463765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a8d53f5f9491%3A0x7f4796ab4a848054!2sScarborough%20Beach%20Clock%20Tower!5e0!3m2!1sen!2sau!4v1661215853573!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade>' 
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
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 16px solid ${colorCream}; 
  background-color: ${colorCream};   
  ${device.mobile}{ 
    background-color: transparent;
    border: none; 
  }
`;
const Container = styled.div`
  position: absolute;
  width: 98%;
  height: 98%;
  /* border: 20px solid ${colorCream}; */
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
/* border: 10px solid ${colorCream}; */
box-sizing: content-box;
border-radius: 10px;
`;
const IFrame = styled.iframe`
  height: 100%;
  width: 60%;
  border: 0;
  border-radius: 10px;
  ${device.mobile}{
    display: none;
  }
`; 
const FormWrapper = styled.div`
  width: 40%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${device.mobile}{
    width: 100%; 
  }
`;
