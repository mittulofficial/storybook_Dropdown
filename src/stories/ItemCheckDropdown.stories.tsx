// src/stories/ItemCheckDropdown.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ItemCheckDropdown from '../stories/ItemCheckDropdown';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/ItemCheckDropdown',
  component: ItemCheckDropdown,
  argTypes: {
    onOptionChange: { action: 'optionChanged' } // Register the action
  }
} as Meta;

const Template: StoryFn<{ options: { label: string; value: string }[], onOptionChange: (value: string) => void }> = (args) => <ItemCheckDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  onOptionChange: action('optionChanged'), // Log action
};
