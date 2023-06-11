import {AdvancedImage, responsive, placeholder, lazyload} from '@cloudinary/react';
import React, {useState, useEffect} from 'react'
import { Cloudinary } from '@cloudinary/url-gen';



function ImageGenerator({publicId, alt}) {
  
  const [imagePath, setImagePath] = useState('');


  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dyneqi48f'
    },
    url: {
      secure: true
    }
  }); 

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const path = isMobile ? 'portfolio-mobile' : 'portfolio';
    setImagePath(path);
  }, []);


  const myImage = cld.image(`${imagePath}/${publicId}`)
    .format('webp')
    .quality('auto:good')
    
  console.log(imagePath)

  return (
    <AdvancedImage
      cldImg={myImage}
      alt={alt} 
      plugins={imagePath === 'portfolio' ? [ responsive({ steps: [1200, 1600] })] : [ responsive({ steps: [600, 800, 1000] })]}
      />
  )
}

export default ImageGenerator