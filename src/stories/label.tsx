// src/stories/label.tsx
import React from 'react';

interface LabelProps {
  text: string;
  visibility: 'visible' | 'hidden';
}

const Label: React.FC<LabelProps> = ({ text, visibility }) => 
  {
  return (
    <div style={{ visibility }}>
      {text}
    </div>
  );
};

export default Label;
