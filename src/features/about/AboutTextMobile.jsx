import styled, {keyframes} from "styled-components";
import { flipInX} from 'react-animations';
import { colorWhite } from "../../helpers/colors";
import { device } from '../../helpers/screenSizes';
import { aboutTextArray } from "./AboutTextArray";
import ImageGenerator from "./ImageGenerator";
import React from 'react';

export default function AboutText (props) {




  return (<>
  <Wrapper>
    <Stage>
      <Hone>{aboutTextArray[0]}</Hone>
        <Shots >
          <ImageGenerator publicId='big-stage_emwqm8' alt='Shaun Pickett on stage' />
        </Shots>
    </Stage>

    <Paragraphs >


{/* 1st  */}
    <Partition>
      <Text>{aboutTextArray[1]}</Text>

      <ContainerRect>
        <Flip >
              <ImageGenerator publicId='belvoire' alt='Command q performing in perth' />
            </Flip>
      </ContainerRect>      <Cleaner /></Partition>


{/* 2nd */}
    <Partition>
      <Text>{aboutTextArray[2]}
        <br />{aboutTextArray[3]}</Text>
      <ContainerSquare>
        <Flip>
              <ImageGenerator publicId='studio_r6hmkd' alt='mastering studio' />
            </Flip>
      </ContainerSquare>      <Cleaner />
      </Partition>


{/* 3rd  */}
    <Partition>
      <Text>{aboutTextArray[4]}</Text>
      <ContainerSquare >
            <Flip >
              <ImageGenerator publicId='corona_k34bil' alt='covid in cartoon' />
            </Flip>
      </ContainerSquare>      <Cleaner /></Partition>


{/* 4th */}
    <Partition>
      <Text >{aboutTextArray[5]}</Text>  
      <ContainerRect >
        <Flip >
          <ImageGenerator publicId='decks_aiguch' alt='no drinks on the fucking decks' />
          </Flip>
      </ContainerRect>      <Cleaner />
      </Partition>


{/* 5th */}
    <Partition>
      <Text>{aboutTextArray[6]}</Text>

      <ContainerSquare>
        <Flip>
              <ImageGenerator publicId='party_zeaz8u' alt='command q party in queensland'  />
            </Flip>
      </ContainerSquare>      <Cleaner /></Partition>


{/* 6th */}
    <Partition>
      <Text>{aboutTextArray[7]}<br /></Text>
        <ContainerSquare>
        <Flip >
              <ImageGenerator publicId='vscode_hmnal5' alt='vscode' />
            </Flip>
      </ContainerSquare>      <Cleaner />
      </Partition>

{/* 7th  */}
    <Partition>
      <Text>{aboutTextArray[8]}</Text>
      
      <ContainerSquare>
            <Flip style={{ filter: 'brightness(1.2) contrast(1.2)' }}>
              <ImageGenerator publicId='onTheCar2_rwrwu5' alt='monsoon moon doing yoga' />
              </Flip>
      </ContainerSquare>      <Cleaner /></Partition>


{/*  8th  */}
    <Partition>
      <Text>{aboutTextArray[9]}</Text>
        <ContainerSquare>
        <Flip >
        <ImageGenerator publicId='eyes_tbgcjy' alt='monsoon moon album artwork' />
        </Flip>
      </ContainerSquare>      <Cleaner /></Partition>

{/*  9th  */}
    <Partition>
      <Text>{aboutTextArray[10]}</Text>

      <ContainerSquare>   
        <Flip >
        <ImageGenerator publicId='sarcastic_uapm6i' alt='command q album cover' />
        </Flip>
      </ContainerSquare>      <Cleaner /></Partition>

{/*  10  */}
    <Stage2><Cleaner style={{width: '100%', borderRadius: '20px'}} />
      <Text style={{ height: '30%', marginTop: '10%', backgroundColor: 'hsla(60, 28%, 95%, 0.92)',
      borderRadius: '15px', display: 'flex', alignItems: 'center'}}>  
      {aboutTextArray[11]}
      <br />{aboutTextArray[12]} <br /> 
      {aboutTextArray[13]}     
          </Text>
      <Shot>
      <ImageGenerator publicId='behind-booth_jsjn9q' alt='command q in perth bunbury' />
      </Shot>

    </Stage2>


    </Paragraphs>

  </Wrapper>
  </>)
}

const Wrapper = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const Cleaner = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: -1;
  opacity: 0.8;
  /* background-color: ${colorWhite}; */
`;
const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Hone = styled.h1`
  margin: 0;
  height: 40%;
  width: 90%;
  font-size: 2rem;
  display: flex;
  padding-top: 30%;
  /* align-items: center; */
  text-align: center;
`;
const Shots = styled.div`
  position: relative;
  width: 150%;
  height: 60%;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px ;
    background-position: 0px -150px;
    overflow: hidden;
    background-position: top;
    background-repeat: no-repeat;
  }
`;
const Paragraphs = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin:  0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;
const Partition = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  z-index: 2;
  flex-direction: column;
  background-color: ${colorWhite};
  border-radius: 15px;
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
`;
const ContainerSquare = styled.div`
    display: flex;
    min-width: 150px;
    min-height: 300px;
    height: 250px;
    width: 100%;
    
`;
const ContainerRect = styled.div`
    display: flex;
    min-width: 200px;
    min-height: 113px;
    height: 250px;
    width: 100%;
`;
const leftFlip =  keyframes`${flipInX}`;
const Flip = styled.div`
  animation: ${leftFlip} 0.8s;
  border-radius: 10px;
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
  }
`;
const Text = styled.div`
  max-width: 95%;
  min-height: 80px;
  text-align: center;
  margin: 2rem 0rem 0.8rem;
  font-size: 1.1rem;
`;
const Stage2 = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Shot = styled.div`
  border-radius: 10px ;
  width: 100%;
  height: 70vh;
  position: relative;

  & img {
    position: absolute;
    height: 100%;
    object-fit: cover;
    background-position: -300px 0px;
    transform: translateX(-150px);
    ${device.mobile} {
    background-position: -130px 0px;
    bottom: 0px;
  }
  }

`;
