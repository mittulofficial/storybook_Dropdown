import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface LabelIconProps {
  visibility: 'visible' | 'hidden';
}

const LabelIcon: React.FC<LabelIconProps> = ({ visibility }) => {
  return (
    <div style={{ visibility }}>
      <FontAwesomeIcon icon={faInfoCircle} size="lg" />
    </div>
  );
};

export default LabelIcon;
