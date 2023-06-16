import styled from 'styled-components';
import { colorGrey, colorBlack, colorCream, colorWhite, } from '../../helpers/colors';
import { device } from '../../helpers/screenSizes';
import React from 'react';

export default function ContactForm() {

  return (

      <Wrapper >
        <FormCutOut
                    action="/pages/success"
                    method="POST"
                    data-netlify="true"
                    name='contact'
                    >
          <input type="hidden" name="form-name" value="contact" />          <Header>Hire me</Header>
          <Label htmlFor='name'>Name: <br/>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder=''
            required
            aria-label="Your name"
          />
          </Label>
          <Label htmlFor='email'>Email: <br />
          <Input
            type='email'
            name='email'
            id='email'
            placeholder=''
            required
            aria-label="Your email address"
          />
          </Label>
          <Label htmlFor='message'>Message: <br />
              <Message  style={{height: '200px'}} placeholder='Ie. When are you free for a coffee? ' 
                        name='message' id='message' required />
          </Label>
        <Submit
          type='submit'
          title='This message will be sent to me and I will get back to you ASAP'
        >Send it!</Submit>

        </FormCutOut>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top:0;
  height: auto;
  min-height: 100%;
  border-radius: 10px 10px 0 0 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${device.desktop} {
    padding-top: 2rem;
  }
  ${device.desktopL} {
    padding-top: 3rem;
  }
  ${device.laptop}{
    justify-content: center;
  }
`;
const FormCutOut = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${device.mobile}{
    justify-content: center;
  }
`;
const Header = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 0;
  font-size: 2rem;
  font-weight: 600;
  color: ${colorBlack};
  ${device.mobile}{ 
    color: ${colorCream};
  }
`;
const Label = styled.label`
  width: 80%;
  color: ${colorBlack};
  text-align: left;
  ${device.tablet}{
    color: ${colorWhite};
  }

`;
const Input = styled.input` 
  width: 100%;
  padding: 0.1rem;
  border-radius: 6px;
  border: 1px solid ${colorGrey};
  font-size: 1.2rem;
  ${device.mobile}{ 
    background-color: ${colorCream};
  }
`;
const Message = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 0.3rem;
  border-radius: 6px;
  border: 1px solid ${colorGrey};
  font-size: 1rem;
  font-size: 1.2rem;
  ${device.mobile}{ 
    background-color: ${colorCream};
  }
`;
const Submit = styled.button`
  width: 140px;
  height: 50px;
  color: white;
  border-radius: 10px;
  border: 1px solid ${colorGrey};
  background-color: #98D0DF;
  font-size: 1.2rem;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: #F4A86A;
  }
`;
