import styled from 'styled-components';
import ContactForm from './ContactForm';
import { colorCream } from '../../helpers/colors';
import Loader from '../../components/Loader';
import React,{ useEffect , useState } from 'react';
import { device } from '../../helpers/screenSizes';
import { Helmet } from "react-helmet-async";

export default function About(props) {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1400);
  return () => clearInterval(timer)
  }, [])


  const [mobileLoading, setMobile] = useState(true);
  useEffect(() => {
      setMobile(false)
  }, [])
  
  return (<>
    


    <Wrapper style={{height: `${props.onlyHeight}`}}>
        
      <Helmet>
        <meta charSet="utf-8" />
        <title>Get in touch with Shaun</title>
        <meta property='og:title' content='Get in touch with Shaun' />
        <meta property="og:image" content="https://res.cloudinary.com/dyneqi48f/image/upload/v1680078416/portfolio_mexfvi.png" />
        <meta property='og:description' content='Get in touch with Shaun by filling in the form. The map shows his location in Perth.' />
        <meta name="description" content="Get in touch with Shaun by filling in the form. The map shows his location in Perth." />
        <link rel='canonical' href='https://www.shaunpickett.com/contact' />
        <meta property='og:url' content='https://www.shaunpickett.com/contact' />
      </Helmet>
      <h1 style={{ position: 'absolute', visibility: 'hidden' }}>Get in touch with me </h1>
      <h2 style={{ position: 'absolute', visibility: 'hidden' }}>Fill out the form and I will get back to you asap!</h2>
      
      <Container>
        <IFrameContainer>
        {props.onlyWidth > 500 ? loading && <Loader /> : mobileLoading && <Loader />}
        <IFrame
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26026.225998293794!2d115.7514310219168!3d-31.892581996463765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a8d53f5f9491%3A0x7f4796ab4a848054!2sScarborough%20Beach%20Clock%20Tower!5e0!3m2!1sen!2sau!4v1661215853573!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade>' 
          allowfullscreen>
          
        </IFrame>
        </IFrameContainer>

        <FormWrapper> 
          <ContactForm />
        </FormWrapper>
      </Container>


    </Wrapper>
    </>);
};


const Wrapper = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
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
  box-sizing: content-box;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const IFrameContainer = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  border-radius: 10px;
  ${device.mobile}{
    display: none;
  }
`;
const IFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: 0;

`; 
const FormWrapper = styled.div`
  position: relative;
  top: 0;
  width: 40%; 
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${device.mobile}{
    width: 100%; 
  }
`;
