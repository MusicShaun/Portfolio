import React from 'react'
import { useEffect, useRef } from 'react'; 
import Typed from 'typed.js';
import styled from 'styled-components';

export default function IconHovers(props) {
  const myRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(myRef.current, {
      strings: [props.text],
      startDelay: 600,
      typeSpeed: 55, 
      backSpeed: 20, 
      backDelay:0
    }); 
    return () => {
      typed.destroy();
    };
  }, [props.text]); 


  return (
    <Bubble ref={myRef} style={{textAlign: `${props.textD}`}}></Bubble>
  )

}


const Bubble = styled.div`
  position: absolute;
  bottom: 8%;
  left: 6%;
  width: 225px;
  height: 50px;
  color: white;
  font-size: 0.9rem;
  text-align: center;
  transition: all 1s;
  white-space: nowrap;
`;

