import styled from 'styled-components';
import { colorGrey, colorBlack, colorCream, colorWhite, } from '../helpers/colors';
import dog from '../img/Dog-Banner.jpeg';
import { device } from '../helpers/screenSizes';

export default function ContactForm() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Wrapper onSubmit={handleSubmit} netlify>
      <FormCutOut>
        <Header>Hire me</Header>
        <Label>Name: <br/>
          <Input type='text' name='name' placeholder='' required/>
        </Label>
        <Label>Email: <br />
          <Input type='email' name='email' placeholder='' required/>
        </Label>
        <Label>Message: <br />
            <Message  style={{height: '200px'}} placeholder='Ie. When are you free for a coffee? ' name='message' required />
        </Label>
        <Submit type='submit' value='submit'>Send it!</Submit>

      </FormCutOut>
      <Dog />
    </Wrapper>
  )
}
const Dog = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0;
  height: 36%; 
  width: 100%;
  border-radius: 0 0 10px;
  background-image: url(${dog});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-position: bottom;
  ${device.mobile}{
    display: none;
  }
`;
const Wrapper = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormCutOut = styled.div`
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
  text-align: left;
  color: ${colorGrey};
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
