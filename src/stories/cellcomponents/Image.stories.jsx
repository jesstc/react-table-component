import React from 'react';
import { CellImage } from './Image';

export default {
  title: 'Cell Conponents/Image',
  component: CellImage,
  argTypes: {
    imgSrc: {
      control: 'text',
      description: 'The source route of the image.',
    },
    altText: {
      control: 'text',
      description: 'The alternative text of the image.',
    },
    imgSize: {
      control: { type: 'number', min: 1, max: 100},
      description: 'The size of image (%).',
    },
    borderRadius: {
      control: { type: 'number', min: 1, max: 1000},
      description: 'The border radius of image (%).',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <CellImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://i.ytimg.com/vi/vUHkI2SQMas/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAemPgiogFppNDagOM-zVE3CvbPxw',
  altText: '91APP Logo',
};

export const CircleImage = Template.bind({});
CircleImage.args = {
  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEc2x2YFxfnNC3c8FQUUcgVMqYe9RS0rA75_gs5qzKng&s',
  altText: '91APP Logo',
  imgSize: 50,
  borderRadius: 50,
};
