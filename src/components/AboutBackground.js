import { colorCream, specialAqua, specialBlue, specialMud, specialOrange, specialYellow } from "../helpers/colors";
import styled from 'styled-components';
import { device } from '../helpers/screenSizes';

export default function AboutBackground() {


  return (
    <Wrapper >
      <Circle />
      <Circle2 />
      <Circle3 />
      <Circle4 />
      <Circle5 />
      <Circle6 />
      <Circle7 />
      <Circle8 />
      <Circle9 />
      <Circle10 />
      <Circle11 />

      <Zigger style={{  top: '-6%', left: '50%', transform: 'rotateX(-220deg) rotate(45deg)'}}>
        <Zig></Zig>
        <Zig></Zig>
        <Zig></Zig>
      </Zigger>
      <Zigger style={{  top: '50%', left: '0%', transform: 'rotateX(220deg) rotate(145deg)'}}>
        <Zig2></Zig2>
        <Zig2></Zig2>
        <Zig2></Zig2>
      </Zigger>
      <Zigger style={{  top: '86%', left: '30%', transform: 'rotateX(120deg) rotate(199deg)'}}>
        <Zig3></Zig3>
        <Zig3></Zig3>
        <Zig3></Zig3>
      </Zigger>
      <Zigger style={{  top: '150%', left: '-10%', transform: 'rotateX(20deg) rotate(220deg)'}}>
        <Zig4></Zig4>
        <Zig4></Zig4>
        <Zig4></Zig4>
      </Zigger>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colorCream};
  & > div {
    position: absolute;
  }
  ${device.mobile} {
    height: 140%;
  }
`;
const Circle = styled.div`
  top: 10%;
  left: 20%;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${specialAqua};
`;
const Circle2 = styled.div`
  top: 80%;
  left: 70%;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background-color: ${specialBlue};
`;
const Circle3 = styled.div`
  top: 15%;
  left: 80%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: ${specialOrange} ;
`;
const Circle4 = styled.div`
  top: -10%;
  left: -10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: ${specialYellow} ;
`;
const Circle5 = styled.div`
  top: 90%;
  left: 3%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${specialMud} ;
`;
const Circle6 = styled.div`
  top: 150%;
  left: 50%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: ${specialAqua};
`;
const Circle7 = styled.div`
  top: 180%;
  left: 90%;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background-color: ${specialYellow};
`;
const Circle8 = styled.div`
  top: 125%;
  left: 2%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: ${specialOrange} ;
`;
const Circle9 = styled.div`
  top: 45%;
  left: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${specialBlue} ;
`;
const Circle10 = styled.div`
  top: 140%;
  left: 84%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${specialMud} ;
`;
const Circle11 = styled.div`
  top: 115%;
  left: 45%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${specialYellow};
`;

const Zigger = styled.div`
  display: flex;
  width: 400px;
  height: 150px;
  transform: rotateX(-220deg) rotate(45deg);

  & > div {
    box-sizing: border-box;
  width: 100px;
  height: 100px;
  transform: rotate(-45deg); 
  margin-right: 20px;
  border-radius: 0 10px 0 0 ;
  }
`;
const Zig = styled.div`
  border-top: 15px solid ${specialMud}; 
  border-right: 15px solid ${specialMud}; 
`;
const Zig2 = styled.div`
  border-top: 15px solid ${specialAqua}; 
  border-right: 15px solid ${specialAqua}; 
`;
const Zig3 = styled.div`
  border-top: 15px solid ${specialBlue}; 
  border-right: 15px solid ${specialBlue}; 
`;
const Zig4 = styled.div`
  border-top: 15px solid ${specialBlue}; 
  border-right: 15px solid ${specialBlue}; 
`;

