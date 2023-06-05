import {AdvancedImage, responsive, placeholder} from '@cloudinary/react';
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';



function ImageGenerator({publicId, alt}) {
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dyneqi48f'
    }
  }); 

  const quality = publicId.includes(
    'big-stage') || publicId.includes('behind-booth')
    ? '100'
    : 'auto';

  const myImage = cld.image(publicId)
    .format('auto')
    .quality(quality);
  
  // lazyload ({rootMargin: '0px', threshold: 0.25}), placeholder ('blur'), 
  
  return (
    <AdvancedImage
      cldImg={myImage}
      alt={alt} 
      plugins={[ placeholder (),responsive({ steps: 100 })]}
      />
  )
}

export default ImageGenerator