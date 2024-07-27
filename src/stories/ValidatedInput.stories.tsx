import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ValidatedInput from './ValidatedInput';

export default {
  title: 'ValidatedInput',
  component: ValidatedInput,
  tags:['autodocs'],
} as Meta;

const Template: StoryFn<{ type: 'text' | 'number' | 'email' }> = (args) => <ValidatedInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
};
