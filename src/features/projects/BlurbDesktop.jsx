import styled from 'styled-components';
import React from 'react'
import { colorBlack, colorSand,} from '../../helpers/colors';
import { device } from '../../helpers/screenSizes';

function BlurbDesktop({item, counter, index, handleAnchor}) {
  return (
    <UL
      style={{
        backgroundColor: item.color,
        transform: `${
          index !== counter ? 'translateX(150%)' : 'translateX(0%)'
        }`,
      }}
    >
      <Headings>{item.title}</Headings>

      <LI>{item.text}</LI>

      <LI style={{ display: 'flex', gap: '20px' }}>
        <AA target="_blank" href={item.url} onClick={handleAnchor}>
          <Butty> Website</Butty>
        </AA>
        {item.sandbox
          ? <AA target="_blank" href={item.sandbox}>
            <Butty> Sandbox</Butty>
          </AA>
        : false
        }
      </LI>
    </UL>
  );
}

export default BlurbDesktop


const UL = styled.ul`
  ${device.mobile}{
    display: none;
  }
  width: 34%;
  height: fit-content;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 3rem 3rem;

  transition: all 0.5s cubic-bezier(.23,1.15,.41,1.11);
  transition-delay: 1.11s;
  animation: onLoadX 1.4s cubic-bezier(.23,1.15,.41,1.11);

  @keyframes onLoadX {
  0% { transform: translateX(200%);
  } 65% { transform: translateX(200%);
  }100% {transform: translateX(0%);
  }}

`;

const Headings = styled.div`
  margin-left: 0.6rem;
  font-size: 3.4rem;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
  align-self: flex-start;
  margin-left: -1rem;
  font-weight: 500;
  line-height: 3rem;
  padding-bottom: 2rem;
  padding-top: 2rem;

  ${device.desktop}{
    font-size: 2.4rem;
  }
  ${device.laptopL}{
    font-size: 2rem;
  }

`;
const LI = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  height: 48px;  
  gap: 1rem;
  align-items: center;
  list-style: none;

  &:last-child {
    margin-top: 2rem;
  }
`;
const AA = styled.a`
  color:inherit;
  text-decoration: none;
  min-height: 48px;
  min-width: 76px;
`;
const Butty = styled.button`
  font-size: 1.8rem;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  min-width: 88px;
  min-height: 48px;
  border: solid 2.2px ${colorBlack};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.1;
  z-index: 100;
  &:hover {
    background-color: ${colorSand};
  }
  ${device.desktop}{
    font-size: 1.2rem;
  }
  ${device.mobile}{
    padding: 1rem;
    margin-top: 2rem;
  }
`;
