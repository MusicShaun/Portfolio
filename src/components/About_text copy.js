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


  // FUNCTIONS THAT SLIDE THE IMAGES IN AND OUT OF VIEW 
  const {scrollState, pageHeight} = props;
  console.log(`scrollState ${scrollState}`)

  let containerScroll = 
    scrollState > 50 ? Math.pow(scrollState, 1.26) - 1000 > 450 ?
      450 : Math.pow(scrollState, 1.26) - 1000  : 0;
    
  function ImageSliderRight(start, distance, speed) {
    return scrollState > start ? 
      distance - Math.pow(scrollState, speed) < 0 ? 0 : 
      distance - Math.pow(scrollState, speed) : 
      -1000;
  }    
  function ImageSliderLeft(start, distance, speed) {
    return scrollState > start ? 
      Math.pow(scrollState, speed) - distance >= 0 ? 0 : 
      Math.pow(scrollState, speed) - distance : 
      -1000;
  }    


  return (<>

    <Paragraphs style={{transform: `translateY(-450px)`}}>
    
{/* 1st 1st 1st 1st  */}
    <Partition style={{justifyContent: 'flex-end', marginBottom: '50px'}}>
      <RightText>
        And lucky enough to travel and collaborate with people all over the world.
      </RightText>
      <RightImage style={{backgroundImage: `url(${Belvoire})`, 
                          minWidth: '400px', minHeight: '220px',
                          transform: `translateX(${ImageSliderRight(200, 1800, 1.29)}px)`
                          }}/>
    </Partition>

{/* 2nd 2nd 2nd 2nd */}
    <Partition style={{ marginBottom: '80px'}}>
      <LeftImage style={{backgroundImage: `url(${Party})`, 
                          minWidth: '270px', minHeight: '270px',
                          transform: `translateX(${ImageSliderLeft(100, 1300 , 1.18)}px)`
                          }}/>
      <LeftText>
        My specialty was audio engineering and audio production, namely, Mastering.
      </LeftText>
    </Partition>

{/* 3rd 3rd 3rd 3rd */}
    <Partition style={{transform: 'translateY(-40px)', justifyContent: 'center',  marginBottom: '100px'}}>
      <RightText>
        Then COVID happens.
      </RightText>
      <RightImage style={{backgroundImage: `url(${corona})`, 
                          minWidth: '220px', minHeight: '220px',
                          transform: `translateX(${ImageSliderRight(300, 1100, 1.11)}px)`
                          }}/>
    </Partition>

{/* 4th 4th 4th 4th 4th */}
    <Partition style={{marginBottom: '100px' }}>
      <LeftImage style={{backgroundImage: `url(${decks})`, backgroundPosition: 'top',
                          minWidth: '400px', minHeight: '220px',
                          transform: `translateX(${ImageSliderLeft(400, 1900, 1.1)}px)`
                        }}/>
      <LeftText style={{}}>
        4th The world shuts down and along with it, music, theatre, touring, festivals, clubs etc.        
      </LeftText>
    </Partition>


{/* 5th 5th 5th 5th 5th */}
<Partition style={{justifyContent: 'flex-end',  marginBottom: '120px'}}>
      <RightText style={{maxWidth: '100%'}}>
      5555 In less than a week, all my income streams had vanished and in case you're wondering, 
        musicians aren't cashing in redundancy payouts.   
      </RightText>
      <RightImage style={{backgroundImage: `url(${HeadShot})`, 
                          minWidth: '200px', minHeight: '200px',
                          transform: `translateX(${ImageSliderRight(600, 2700, 1.11)}px)`
                          }}/>
    </Partition>


{/* 6th 6th 6th 6th 6th */}
    <Partition style={{marginBottom: ' 50px'}}>
      <LeftImage style={{backgroundImage: `url(${couch2})`, 
                          minWidth: '220px', minHeight: '220px',
                          transform: `translateX(${ImageSliderLeft(700, 3300, 1.1)}px`
                          }}/>
      <LeftText style={{maxWidth: '80%'}}>
      6th However, this exposes a new opportunity. To find something just as challenging and exciting.
        As it turns out, coding is very challenging, creative and incredibly satisfying.
        <br />
      </LeftText>
    </Partition>

{/* 7th 7th 7th 7th  */}
    <Partition style={{justifyContent: 'flex-end',marginBottom: ' 120px' }}>
      <RightText style={{maxWidth: '80%'}}>
      7th Now I am but a novice, with much to learn and much to create.

      </RightText>
      <RightImage style={{backgroundImage: `url(${JustFriends})`, 
                          minWidth: '220px', minHeight: '220px',
                          transform: `translateX(${ImageSliderRight(800, 3900, 1.1)}px`
                          }}/>
    </Partition>


{/*  8th 8th 8th  */}
    <Partition style={{marginBottom: ' 50px'}}>
      <LeftImage style={{backgroundImage: `url(${LouAndMe})`, 
                          minWidth: '220px', minHeight: '220px',
                          transform: `translateX(${ImageSliderLeft(900, 4750, 1.1)}px`
                          }}/>
      <LeftText style={{maxWidth: '80%'}}>
        888 I hope to find myself as a humble intern, side by side with the pro's in this field, building apps, 
        games, solving problems, you name it.
      </LeftText>
    </Partition>

{/*  9th 9th 9th  */}
    <Partition style={{justifyContent: 'flex-end', marginBottom: ' 220px'}}>
      <RightText style={{maxWidth: '100%'}}>
        9 I didn't study coding at Uni or a bootcamp. I didn't study because a 
        lecturer required me to complete an assignment or because I needed to pass.

          </RightText>
      <RightImage style={{backgroundImage: `url(${sarcastic})`, 
                          minWidth: '300px', minHeight: '220px',
                          transform: `translateX(${ImageSliderRight(1000, 5450, 1.1)}px`
                          }}/>
    </Partition>

{/*  10 10 10 10 */}
    <Partition style={{width: '100%', marginBottom: ' 80px'}}>
      <LeftText style={{maxWidth: '100%', textAlign: 'center'}}>
        10 I studied because I wanted to. I studied because I see coding as my long term 
        future and because I'm a ridiculously passionate person.
      </LeftText>
    </Partition>


    <ClosingImg>
      <Shot style={{transform: `translateY(${scrollState - pageHeight}px)`}}/>
    </ClosingImg>

    </Paragraphs>
  </>)
}


const Paragraphs = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  margin: 6rem 0 0 0;
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
  max-width: 50%;
`;
const RightImage = styled.div`
  background-size: cover;
  border-radius: 10px;
`;
const RightText = styled.div`
  margin-right: 1rem;
  margin-left: 3rem;
  max-width: 50%;
`;

const ClosingImg = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  z-index: 2;
  overflow: hidden;
`;
const Shot = styled.div`
  background-image: url(${OnStage});
  border-radius: 10px ;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: 0px 10px; */
`;
