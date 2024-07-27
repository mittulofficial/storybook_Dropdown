import React from 'react';
import { UserCircle } from 'phosphor-react';

interface LeftIconProps {
  visibility: 'visible' | 'hidden';
}

const LeftIcon: React.FC<LeftIconProps> = ({ visibility }) => {
  return (
    <div style={{ visibility }}>
      <UserCircle size={32} />
    </div>
  );
};

export default LeftIcon;
