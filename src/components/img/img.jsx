import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Img({ src, alt, ...otherProps }) {
    return (
        <LazyLoadImage
            {...otherProps}
            src={src}
            effect="blur"
            alt={alt}
        />
    );
}

export default Img;