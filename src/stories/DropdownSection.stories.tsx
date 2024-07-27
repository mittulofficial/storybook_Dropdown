// src/stories/DropdownSection.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DropdownSection from '../stories/DropdownSection';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/DropdownSection',
  component: DropdownSection,
  tags:['autodocs'],
  argTypes: {
    onOptionChange: { action: 'optionChanged' } // Register the action
  }
} as Meta;

const Template: StoryFn<{ type: 'SingleRadio' | 'MultiRadio', options: { label: string; value: string }[], onOptionChange?: (value: string) => void }> = (args) => <DropdownSection {...args} />;

export const SingleRadio = Template.bind({});
SingleRadio.args = {
  type: 'SingleRadio',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }, // Added third option
  ],
  onOptionChange: action('SingleRadio option changed'), // Log action
};

export const MultiRadio = Template.bind({});
MultiRadio.args = {
  type: 'MultiRadio',
  options: [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' }, // Added third option
  ],
  onOptionChange: action('MultiRadio option changed'), // Log action
};
