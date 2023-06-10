import styled from 'styled-components';
import React from 'react'
import { colorBlack, colorSand, colorCream} from '../../helpers/colors';
import { device } from '../../helpers/screenSizes';

function BlurbMobile({item, handleAnchor}) {
  return (
    <ULMOBILE style={{ backgroundColor: '#F2BC8D' }}>
      <Headings>{item.title}</Headings>
      <LI style={{userSelect: 'none'}}>{item.text}</LI>
      <LI>
        <AA
          
          target="_blank"
          href={item.url}
          onClick={handleAnchor}
          style={{ marginRight: '16px' }}
        >
          <Butty> Website</Butty>
        </AA>
        {item.sandbox ? (
          <AA target="_blank" href={item.sandbox}>
            <Butty> Sandbox</Butty>
          </AA>
        ) : (
          false
        )}
      </LI>
    </ULMOBILE>
  );
}

export default BlurbMobile


const ULMOBILE = styled.ul`
  display: none;
  ${device.mobile} {
    background-color: white;
    flex-direction: column;
    transition: all 0.5s cubic-bezier(.23,1.15,.41,1.11);
    transition-delay: 1.11s;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 0 0 15px 15px;
    align-items: center;
    padding: 0rem 1rem;
    border-top: 10px solid ${colorCream};
  }
`;
const Headings = styled.div`
  margin-left: 0.6rem;
  padding: 0.5rem 0;
  font-size: 2rem;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
  align-self: flex-start;
  margin-left: -1rem;
  font-weight: 500;
  line-height: 3rem;
  user-select: none;
  align-self: center;
  text-align: center;
  margin: 0;


`;
const LI = styled.div`
display: flex;
flex-direction: row;
  font-size: 1.1rem;
  height: 48px;  
  gap: 1rem;

    align-items: center;
    list-style: none;
    text-align: center;

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
  border: solid 2.2px ${colorBlack};
  width: 100%;
  height: 100%;
  min-width: 88px;
  min-height: 48px;
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
    margin-top: 2rem;
  }
`;



