import React from 'react';
import { CellText } from './Text';

export default {
  title: 'Cell Conponents/Text',
  component: CellText,
  parameters: {
    docs: {
      description: {
        component: '文字。可支援一般文字、超連結、長字串等。\n',
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'The text content of the string.',
    },
    hyperLink: {
      control: 'text',
      description: 'The url of hyper link. The text will become hyper link only if the `hyperLink` is not empty string.',
    },
    longTextLines: {
      control: { type: 'number', min: 0, max: 30, step: 1 },
      description: 'The number of ellipsis lines when the text is too long to display. The text value will be completely displayed when `longTextLines` is equal to 0.',
    },
    isHeader: {
      control: 'boolean',
      description: 'Check if this is the header text. The header text will be `bold` and can choose if need to sort using `isSorting`.',
    },
    isSorting: {
      control: 'boolean',
      if: { arg: 'isHeader' },
      description: 'Check if this header cell need to sort. The column can be sorted only if the type of column cell is `CellText`.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <CellText {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'text',
};

export const HyperLink = Template.bind({});
HyperLink.args = {
  content: '91APP Official Website',
  hyperLink: 'https://www.91app.com/showcases/?campaignid=21225946208&adgroupid=161046725026&adid=697531942213&gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNlcfFjzxwV66SQnSRG6rkD_7JV4tYAx7JbN4MDdHZvw6Al0AIjdXZ0aAnkcEALw_wcB',
};

export const LongText = Template.bind({});
LongText.args = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.`,
  longTextLines: 4,
};

export const HeaderColumn = Template.bind({});
HeaderColumn.args = {
  content: '商品名稱',
  isHeader: true,
  isSorting: true,
};