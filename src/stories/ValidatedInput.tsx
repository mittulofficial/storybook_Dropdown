import React, { useState } from 'react';
import HelperText from './HelperText';
import HelperNumber from './HelperNumber';
import HelperEmail from './HelperEmail';
import './ValidatedInput.css'; // Import a CSS file for styling

interface ValidatedInputProps {
  type: 'text' | 'number' | 'email';
}

const ValidatedInput: React.FC<ValidatedInputProps> = ({ type }) => {
  const [value, setValue] = useState('');
  const [helperText, setHelperText] = useState<string>('');

  const validateInput = (val: string) => {
    if (type === 'email') {
      // Email validation regex
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(val)) {
        setHelperText('Please enter a valid email address.');
      } else {
        setHelperText('');
      }
    } else if (type === 'number') {
      // Number validation
      if (isNaN(Number(val))) {
        setHelperText('Please enter a valid number.');
      } else {
        setHelperText('');
      }
    } else if (type === 'text') {
      // Text validation: only alphabetic characters and spaces
      if (/[^a-zA-Z\s]/.test(val)) {
        setHelperText('Please enter only letters.');
      } else if (val.trim() === '') {
        setHelperText('Please enter some text.');
      } else {
        setHelperText('');
      }
    }
  };

  return (
    <div className="validated-input-container">
      <input
        className={`validated-input ${helperText ? 'error' : ''}`}
        type={type === 'number' ? 'text' : type} // Use 'text' for number inputs to handle all number input cases
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          validateInput(e.target.value);
        }}
        placeholder={`Enter ${type}`}
      />
      {type === 'text' && helperText && <HelperText message={helperText} />}
      {type === 'number' && helperText && <HelperNumber message={helperText} />}
      {type === 'email' && helperText && <HelperEmail message={helperText} />}
    </div>
  );
};

export default ValidatedInput;
