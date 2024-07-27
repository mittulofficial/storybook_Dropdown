import React from 'react';

interface HelperEmailProps {
  message: string;
}

const HelperEmail: React.FC<HelperEmailProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default HelperEmail;
