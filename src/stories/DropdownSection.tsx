// src/components/DropdownSection.tsx

import React, { useState } from 'react';
import './DropdownSection.css'; // Import the CSS file for styling

type DropdownType = 'SingleRadio' | 'MultiRadio';

interface DropdownSectionProps {
  type: DropdownType;
  options: { label: string; value: string }[];
  onOptionChange?: (value: string) => void; // Optional callback for actions
}

const DropdownSection: React.FC<DropdownSectionProps> = ({ type, options, onOptionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (type === 'SingleRadio') {
      setSelectedOptions([value]);
      if (onOptionChange) onOptionChange(value); // Trigger action
    } else if (type === 'MultiRadio') {
      setSelectedOptions(prev => {
        const newOptions = prev.includes(value)
          ? prev.filter(option => option !== value)
          : [...prev, value];
        if (onOptionChange) onOptionChange(value); // Trigger action
        return newOptions;
      });
    }
  };

  return (
    <div className="dropdown-section">
      {options.map(option => (
        <div key={option.value} className="dropdown-option">
          <input
            type={type === 'SingleRadio' ? 'radio' : 'checkbox'}
            id={option.value}
            name="dropdown"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={handleChange}
            className="dropdown-input"
          />
          <label htmlFor={option.value} className="dropdown-label">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default DropdownSection;
