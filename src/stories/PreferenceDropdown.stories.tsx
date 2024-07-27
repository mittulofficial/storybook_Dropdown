// src/stories/PreferenceDropdown.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import PreferenceDropdown from '../stories/PreferenceDropdown';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/PreferenceDropdown',
  component: PreferenceDropdown,
  argTypes: {
    onOptionChange: { action: 'optionChanged' } // Register the action
  }
} as Meta;

const Template: Story<{ options: { label: string; value: string }[], onOptionChange: (value: string) => void }> = (args) => <PreferenceDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  onOptionChange: action('optionChanged'), // Log action
};
