import styled from 'styled-components';
import { colorGrey, colorSand, colorCream, } from '../helpers/colors';


export default function ContactForm() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormCutOut>
        <Header>Contact Form</Header>
        <Label>Name: <br/>
          <Input type='text' name='name' placeholder='Your name. . ' required/>
        </Label>
        <Label>Email: <br />
          <Input type='email' name='email' placeholder='Your email. . ' required/>
        </Label>
        <Label>Message: <br />
            <Message placeholder='Write something.' name='message' required />
        </Label>
        <Submit type='submit' value='submit'>Submit</Submit>
      </FormCutOut>
    </Wrapper>
  )
}
const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${colorSand};
  border-radius: 10px 10px 0 0 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormCutOut = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${colorCream};
  border-radius: 20px;
`;
const Header = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
`;
const Label = styled.label`
  width: 80%;
  text-align: center;
  color: ${colorGrey};
`;
const Input = styled.input` 
  width: 100%;
  padding: 0.1rem;
  border-radius: 6px;
  border: 1px solid ${colorGrey};
  font-size: 1.2rem;
`;
const Message = styled.textarea`
  width: 100%;
  padding: 0.3rem;
  border-radius: 6px;
  border: 1px solid ${colorGrey};
  font-size: 1.2rem;
`;
const Submit = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 1rem;
  color: white;
  border-radius: 10px;
  border: 1px solid ${colorGrey};
  background-color: #04AA6D;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: hsl(158, 100%, 50%);
  }
`;