import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PhoneEmailForm, { PhoneEmailFormProps } from './PhoneEmailForm';

export default {
  title: 'Components/PhoneEmailFormRequired',
  component: PhoneEmailForm,
  tags:['autodocs'],
} as Meta;

const Template: StoryFn<PhoneEmailFormProps> = (args) => <PhoneEmailForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  phoneLabel: 'Phone Number',
  addressLabel: 'Address',
  onSubmit: action('Form Submitted'), // Log the form submission action
};
