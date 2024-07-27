import React from 'react';

interface HelperNumberProps {
  message: string;
}

const HelperNumber: React.FC<HelperNumberProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default HelperNumber;
