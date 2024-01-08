import React from 'react';

const ImgComponent = ({src, alt, myClass}) => {
    return <img src= {src} alt={alt} className={myClass}/>
}

export default ImgComponent;