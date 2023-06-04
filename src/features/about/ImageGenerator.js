import {AdvancedImage, responsive, lazyload, placeholder} from '@cloudinary/react';
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';



function ImageGenerator({publicId, alt}) {
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dyneqi48f'
    }
  }); 
  const myImage = cld.image(publicId)
    .format('auto')
    .quality('auto');


  return (
    <AdvancedImage
      cldImg={myImage}
      alt={alt} 
      plugins={[ lazyload ('0', 1), placeholder ('blur'), responsive({ steps: 100 })]}
      />
  )
}

export default ImageGenerator