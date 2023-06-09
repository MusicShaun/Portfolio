import styled from 'styled-components';
import React from 'react'
import { colorCream} from '../../helpers/colors';
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
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
  ${device.mobile}{
    border: 10px solid ${colorCream};
    border-radius: 30px;
  }
`;
const Showcase = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 20px;

  & img {
    border-radius: 20px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-width: 80vw;
    
  ${device.mobile} {
    height: 40%;
    border-radius: 20px 20px 0 0 ;
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
  ${device.mobile} {
    position: relative;
    height: 60%;
    transform: translateX(0%);
  }
  `;