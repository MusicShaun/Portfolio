import styled from 'styled-components';
import { colorCream , colorBlack} from '../helpers/colors';
import React from 'react';

export default function StyledBurger(props) {
  const { openMobile } = props;

  return (
    <Burger> 
      <div style={{
          transform: openMobile === true ? 
          `rotate(45deg)` : `rotate(0deg)`, 
          background: openMobile === true ? 
          `${colorCream}` : `${colorBlack}`}}>
      </div>
      <div style={{
          transform: openMobile === true ? 
          'translateX(-120px)' : 'translateX(0)',
          opacity: openMobile === true ? '0' : '1',
          background: openMobile === true ? 
          `${colorCream}` : `${colorBlack}`
          }}
          ></div>
      <div style={{
          transform: openMobile === true ? 
          'rotate(-45deg)' : 'rotate(0)',
          background: openMobile === true ? 
          `${colorCream}` : `${colorBlack}`}}></div>
    </Burger>
  )
}
const Burger = styled.button`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 12;

  &:focus {
    outline: none;
  }
  div {
    width: 3rem;
    height: 0.4rem;
    background: ${colorCream};
    border-radius: 10px;
    transition: all 0.15s linear;
    position: relative;
    transform-origin: 1px;

  }
`;