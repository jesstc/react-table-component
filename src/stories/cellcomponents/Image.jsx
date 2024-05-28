import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react'

export const CellImage = ({ imgSrc, altText = '', imgSize = 100, borderRadius = 0 }) => {
  return (
    <Image
      src={imgSrc}
      alt={altText}
      boxSize={imgSize + '%'}
      borderRadius={borderRadius + '%'}
    />
  );
};

CellImage.propTypes = {
  imgSrc: PropTypes.string.isRequired, 
  altText: PropTypes.string,
  imgSize: PropTypes.number,
  borderRadius: PropTypes.number,
};
