// src/stories/status.tsx
import React from 'react';

type StatusProps = {
  status: 'unfilled' | 'filled' | 'disabled' | 'error';
};

const Status: React.FC<StatusProps> = ({ status }) => {
  const statusStyles = {
    unfilled: { backgroundColor: 'gray', color: 'white' },
    filled: { backgroundColor: 'green', color: 'white' },
    disabled: { backgroundColor: 'lightgray', color: 'darkgray' },
    error: { backgroundColor: 'red', color: 'white' },
  };

  return (
    <div style={{ padding: '10px', ...statusStyles[status] }}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};

export default Status;
