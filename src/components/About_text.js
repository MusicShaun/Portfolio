import styled from "styled-components";
import {colorCream, colorGrey } from '../helpers/colors';
import HeadShot from '../img/headshot.jpg';
import Couch from '../img/couch-shot.jpg';
import CLG from '../img/cant-let-go.jpg';
import Animals from '../img/we-are-animals.jpg';
import Pride from '../img/pride-pic.jpg';
import Profile from '../img/profile-pic.jpeg';
import Smokey from '../img/smoky-head-shot.jpg';
import LouAndMe from '../img/lou-and-i.jpg';
import JustFriends from '../img/just-friends.jpg';
import JustFriends2 from '../img/just-friends-2.jpg';
import OnStage from '../img/behind-booth.jpeg';
import Party from '../img/party.jpg';
import Belvoire from '../img/Belvoire.jpg';
import corona from '../img/corona.webp';
import decks from '../img/decks.jpg';
import StageShot from '../img/big-stage.jpeg';
import sarcastic from '../img/sarcastic.jpg';
import couch2 from '../img/couch2.jpg';
import jump from '../img/jump.jpg';
// SET  MAX WIDTH ON THE ABOUT CONTENT OTHERWISE THE SCREEN WILL LOOK DISJOINTED ON BIG MONITORS


export default function About_text (props) {

  const {scrollState} = props;
  console.log(scrollState)

  let picture2 = 
    scrollState > 100 ? 
    Math.pow(scrollState, 1.11) - 600 >= 0 ?
    0 : 
    Math.pow(scrollState, 1.11) - 600 : 
    -1000;

  let picture3 = 
  scrollState > 300 ? 
    900 - Math.pow(scrollState, 1.11) < 0 ?
    0 : 
    900 - Math.pow(scrollState, 1.11) : 
    1000;

  let picture4 = scrollState > 400 ? Math.pow(scrollState, 1.11) - 1500 >= 0 ?
    0 : Math.pow(scrollState, 1.11) - 1500 : -1000;
  let picture5 = scrollState > 600 ? 2000 - Math.pow(scrollState, 1.11) < 0 ? 0 : 
      2000 - Math.pow(scrollState, 1.11) : 1000;
  let picture6 = scrollState > 950 ? Math.pow(scrollState, 1.11) - 2500 >= 0 ?
      0 : Math.pow(scrollState, 1.11) - 2500 : -1000;
     


  return (<>




    <Paragraphs>


    
{/* 1st 1st 1st 1st  */}
    <Partition style={{justifyContent: 'flex-end'}}>
      <RightText>
        And lucky enough to travel and collaborate with people all over the world.
      </RightText>
      <RightImage style={{backgroundImage: `url(${Belvoire})`, 
                          minWidth: '400px', minHeight: '220px',}}/>
    </Partition>

{/* 2nd 2nd 2nd 2nd */}
    <Partition style={{}}>
      <LeftImage style={{backgroundImage: `url(${Party})`, 
                          minWidth: '270px', minHeight: '270px',
                          transform: `translateX(${picture2}px)`
                          }}/>
      <LeftText>
        My specialty was audio engineering and audio production, namely, Mastering.
      </LeftText>
    </Partition>

{/* 3rd 3rd 3rd 3rd */}
    <Partition style={{transform: 'translateY(-40px)', justifyContent: 'flex-end'}}>
      <RightText>
        Then COVID happens.
      </RightText>
      <RightImage style={{backgroundImage: `url(${corona})`, 
                          minWidth: '220px', minHeight: '220px',
                          transform: `translateX(${picture3}px)`
                          }}/>
    </Partition>

{/* 4th 4th 4th 4th 4th */}
    <Partition style={{}}>
      <LeftImage style={{backgroundImage: `url(${decks})`, backgroundPosition: 'top',
                          minWidth: '400px', minHeight: '220px',
                          transform: `translateX(${picture4}px)`
                        }}/>
      <LeftText>
        The world shuts down and along with it, music, theatre, touring etc. 
        In less than a week, all my income streams had vanished and in case you're wondering, 
        musicians aren't cashing in redundancy payouts.       
      </LeftText>
    </Partition>


{/* 5th 5th 5th 5th 5th */}


    <Partition style={{justifyContent: 'flex-end',}}>
      <RightText>

        However, this exposes a new opportunity. To find something just as challenging and exciting.
      </RightText>
      <RightImage style={{backgroundImage: `url(${couch2})`, 
                          minWidth: '300px', minHeight: '300px',
                          transform: `translateX(${picture5}px`
                          }}/>
    </Partition>

{/* 6th 6th 6th 6th 6th */}
    <Partition style={{}}>
      <LeftImage style={{backgroundImage: `url(${jump})`, 
                          minWidth: '220px', minHeight: '220px',
                          transform: `translateX(${picture6}px`
                          }}/>
      <LeftText>
        As it turns out, coding is very challenging, creative and incredibly satisfying.
        <br />Now I am but a novice, with much to learn and much to create.
      </LeftText>
    </Partition>

    <Partition style={{justifyContent: 'flex-end', }}>
      <RightText>
        I hope to find myself as a humble intern, side by side with the pro's in this field, building apps, 
        games, solving problems, you name it.
      </RightText>
      <RightImage style={{backgroundImage: `url(${JustFriends})`, 
                          minWidth: '220px', minHeight: '220px',}}/>
    </Partition>

    <Partition style={{transform: 'translateY(-140px)'}}>
      <LeftImage style={{backgroundImage: `url(${LouAndMe})`, 
                          minWidth: '220px', minHeight: '220px',}}/>
      <LeftText>
        I didn't study coding at Uni or a bootcamp. I didn't study because a 
        lecturer required me to complete an assignment or because I needed to pass.
      </LeftText>
    </Partition>

    <Partition style={{justifyContent: 'flex-end', transform: 'translateY(-120px)'}}>
      <RightText>
        I studied because I wanted to. I studied because I see coding as my long term 
        future and because I'm a ridiculously passionate person.
          </RightText>
      <RightImage style={{backgroundImage: `url(${Animals})`, 
                          minWidth: '300px', minHeight: '220px',}}/>
    </Partition>
    </Paragraphs>
  </>)
}


const Paragraphs = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;
const Partition = styled.div`
  width: 80%;
  height: 250px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  z-index: 2;
`;
const LeftImage = styled.div`
  background-size: cover;
  border-radius: 10px;
`;
const LeftText = styled.div`
  margin-left: 1rem;
  margin-right: 4rem;
`;
const RightImage = styled.div`
  background-size: cover;
  border-radius: 10px;
`;
const RightText = styled.div`
  margin-right: 1rem;
  margin-left: 3rem;
`;
