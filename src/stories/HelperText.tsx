import React from 'react';

interface HelperTextProps {
  message: string;
}

const HelperText: React.FC<HelperTextProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default HelperText;
