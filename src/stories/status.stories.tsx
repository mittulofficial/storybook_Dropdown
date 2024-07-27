// src/stories/status.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Status from './status'; // Ensure the correct file path

const meta: Meta<typeof Status> = {
  component: Status,
  title: 'Status',
  tags:['autodocs'],
  argTypes: {
    status: {
      control: {
        type: 'radio',
        options: ['unfilled', 'filled', 'disabled', 'error'],
      },
      description: 'Controls the status of the component',
      defaultValue: 'unfilled',
    },
  },
};

export default meta;

type StatusProps = {
  status: 'unfilled' | 'filled' | 'disabled' | 'error';
};

type Story = StoryObj<typeof Status>;

export const DefaultStatus: Story = {
  args: {
    status: 'unfilled',
  },
};

export const FilledStatus: Story = {
  args: {
    status: 'filled',
  },
};

export const DisabledStatus: Story = {
  args: {
    status: 'disabled',
  },
};

export const ErrorStatus: Story = {
  args: {
    status: 'error',
  },
};
