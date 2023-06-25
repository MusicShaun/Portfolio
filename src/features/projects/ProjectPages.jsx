import styled from 'styled-components';
import React from 'react'
import { device } from '../../helpers/screenSizes';
import ImageGenerator from '@features/about/ImageGenerator';
import BlurbDesktop from './BlurbDesktop';
import BlurbMobile from './BlurbMobile';


function ProjectPages({ item, counter, handleAnchor, index }) {
  

  return (
    <Pages
      key={item.id}
      style={{
        zIndex: `${index}`,
        transform:
          counter > index ? `scale(${0.8}) translateY(-${10}%) ` : `scale(1)`,
      }}
    >
      <Showcase>
        <ImageGenerator publicId={item.img} alt={item.alt} />
      </Showcase>

      <Blurb>
        <BlurbDesktop
          item={item}
          counter={counter}
          index={index}
          handleAnchor={handleAnchor}
        />
        <BlurbMobile item={item} handleAnchor={handleAnchor} />
      </Blurb>
    </Pages>
  );
}

export default ProjectPages



const Pages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 100%;
  transition: transform 0.3s ease-out;
  
  ${device.tablet }{
    border-radius: 10px;
  }
`;
const Showcase = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-radius: 0px;


  ${device.tablet} {
    border-radius: 10px ;
    max-width: 100%;
    height: 100%;
  }

  & img {
    top: 0;

    border-radius: 10px;
    height: 100%;
    width: auto;
    object-fit: cover;
    max-width: 80vw;
    user-select: none;

    ${device.tablet} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: none;
    border-radius: 10px ;
    top: 0;
    background-position: 0%;

  }
  
}
`;
const Blurb = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateX(72%);
  margin-top: 32px;

  ${device.tablet} {
    border-radius: 10px;
    height: 34%;
    transform: translateX(0%);
    bottom: 0;
  }
  `;
