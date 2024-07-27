import { Meta } from '@storybook/react';
import React from 'react';
import LabelIcon from './LabelIcon';
import LeftIcon from './LeftIcon';

const meta: Meta = {
  title: 'IconToggle',
};

export default meta;

export const IconToggleStory = () => {
  const [labelVisibility, setLabelVisibility] = React.useState<'visible' | 'hidden'>('visible');
  const [leftIconVisibility, setLeftIconVisibility] = React.useState<'visible' | 'hidden'>('visible');

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Label Icon</h3>
        <LabelIcon visibility={labelVisibility} />
        <button onClick={() => setLabelVisibility(labelVisibility === 'visible' ? 'hidden' : 'visible')}>
          Toggle Label Icon
        </button>
      </div>
      <div>
        <h3>Left Icon</h3>
        <LeftIcon visibility={leftIconVisibility} />
        <button onClick={() => setLeftIconVisibility(leftIconVisibility === 'visible' ? 'hidden' : 'visible')}>
          Toggle Left Icon
        </button>
      </div>
    </div>
  );
};
