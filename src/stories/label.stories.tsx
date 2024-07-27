import type { Meta, StoryObj } from '@storybook/react';
import Label from './label';

const meta: Meta<typeof Label> = {
  title: 'Example/Label',
  component: Label,
  tags:['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Default Label',
  },
};
