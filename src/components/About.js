import styled from "styled-components";
import StageShot from '../img/big-stage.jpeg';
import { colorBlack, colorCream, colorGrey } from '../helpers/colors';


export default function About () {

  return (
    <Wrapper>
      <Container>
        <Stage>
          <Shots style={{ backgroundImage: `url(${StageShot})`}} />
        </Stage>

        <Header>I've been a musician my whole life.
        <br />Specialising in audio engineering and audio production.
          <br /><span style={{ borderBottom: `1px solid ${colorGrey}`}}>Until COVID.</span>
        </Header>

        <Paragraphs>
          <Words>
            The world shuts down and along with it, music, theatre, touring etc. 
          <br />In less than a week, all my income streams had vanished and in case you're wondering, musicians aren't cashing in redundancy payouts. 
          <br />However, this exposes a new opportunity. 
            To find something just as challenging and exciting.
            As it turns out, coding is very challenging, creative and incredibly satisfying.
            <br />Now I am but a novice, with much to learn and much to create.
          </Words>
          <Words>
          I hope to find myself as a humble intern, side by side with the pro's in this field, building apps, 
            games, solving problems, you name it.
            <br />I didn't study coding at Uni or a bootcamp. I didn't study because a lecturer required me to complete an assignment or because 
            I needed to pass.

            <br />I studied because I wanted to.
            I studied because I see coding as my long term future and because I'm a ridiculously passionate person.
          </Words>
        </Paragraphs>

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
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid ${colorBlack};
`;
const Stage = styled.div`
  width: 100%;
  height: 200px;
  left: 0;
  top: 0;
  min-height: 200px;
  display: flex;
  flex-direction: row;
`;
const Shots = styled.div`
  background-position: 0px -85px;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
const Header = styled.div`
  margin-top: 2rem;
  width: 80%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  white-space: nowrap;
`;
const Paragraphs = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 4rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  font-size: 0.9rem;
`;
const Words = styled.p`
  width: 40%;
  line-height: 1.4rem;
  white-space: pre-wrap;
`;
