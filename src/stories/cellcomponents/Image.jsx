import React from 'react';
import { Image } from '@chakra-ui/react'

export const CellImage = ({ imgSrc, altText, imgSize, borderRadius }) => {
  return (
    <Image
      src={imgSrc}
      alt={altText}
      boxSize={imgSize + '%'}
      borderRadius={borderRadius + '%'}
    />
  );
};

CellImage.defaultProps = {
  imgSrc: '',
  altText: '',
  imgSize: 100,
  borderRadius: 0,
};
  
