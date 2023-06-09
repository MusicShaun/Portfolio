import styled from 'styled-components';
import React from 'react'
import { colorBlack, colorSand, colorCream} from '../../helpers/colors';
import { device } from '../../helpers/screenSizes';

function BlurbMobile({item, handleAnchor}) {
  return (
    <ULMOBILE style={{ backgroundColor: '#F2BC8D' }}>
      <Headings>{item.title}</Headings>
      <LI>{item.text}</LI>
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
    padding-right:1rem;
    padding-left: 1rem;
    transition: all 0.5s cubic-bezier(.23,1.15,.41,1.11);
    transition-delay: 1.11s;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 0 0 15px 15px;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    border-top: 10px solid ${colorCream};
  }
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
  ${device.desktop}{
    font-size: 2.4rem;
  }
  ${device.laptopL}{
    font-size: 2rem;
  }
  ${device.mobile} {
    align-self: center;
    text-align: center;
    margin: 0;
    padding-bottom: 1rem;
  }
`;
const LI = styled.li`
  font-size: 1.8rem;
  ${device.desktop}{
    font-size: 1.2rem;
  }
  ${device.mobile} {
    align-items: center;
    list-style: none;
    text-align: center;
  }
`;
const AA = styled.a`
  color:inherit;
  text-decoration: none;
`;
const Butty = styled.button`
  font-size: 1.8rem;
  border-radius: 10px;
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



