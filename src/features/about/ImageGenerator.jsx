import {AdvancedImage, responsive, placeholder} from '@cloudinary/react';
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';



function ImageGenerator({publicId, alt}) {
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dyneqi48f'
    },
    url: {
      secure: true
    }
  }); 

  const quality = publicId.includes(
    'profile-pic')
    ? '100'
    : 'auto:good';

  const myImage = cld.image(`portfolio/${publicId}`)
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