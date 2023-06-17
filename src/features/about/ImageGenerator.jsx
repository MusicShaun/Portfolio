import {AdvancedImage, responsive, lazyload } from '@cloudinary/react';
import React, {useState, useEffect} from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { fill, scale } from '@cloudinary/url-gen/actions/resize';



function ImageGenerator({publicId, alt}) {
  
  const [imagePath, setImagePath] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (imagePath !== '') {
      setIsLoading(false);
    }
  }, [imagePath]);

  const resizeAction = imagePath === 'portfolio'
  ? scale().width(0.99)
  : fill().height(0.99).gravity('north');

  const myImage = cld.image(`${imagePath}/${publicId}`)
    .format('webp')
    .quality('auto:good')    
    .resize(resizeAction)
  

  return (<>
    {!isLoading && (
      <AdvancedImage
        cldImg={myImage}
        alt={alt} 
        plugins={imagePath === 'portfolio' ?
          publicId.includes('CLOTHING') || publicId.includes('big-stage') ?  [responsive({ steps: [1200, 1600] }), lazyload] : [responsive({ steps: [1200, 1600] })] 
          : [responsive({ steps: [600, 800, 1000] })]}
        />
      )}
  </>)
}

export default ImageGenerator