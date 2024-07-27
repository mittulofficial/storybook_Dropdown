// src/components/PreferenceDropdown.tsx

import React, { useState, useRef, useEffect } from 'react';
import './PreferenceDropdown.css'; // Import the CSS file for styling

interface PreferenceDropdownProps {
  options: { label: string; value: string }[];
  onOptionChange?: (value: string) => void; // Optional callback for actions
}

const PreferenceDropdown: React.FC<PreferenceDropdownProps> = ({ options, onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [position, setPosition] = useState<'bottom' | 'top' | 'right' | 'left'>('bottom');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    if (onOptionChange) onOptionChange(value); // Trigger action
  };

  const calculatePosition = () => {
    const dropdownElement = dropdownRef.current;
    const buttonElement = buttonRef.current;
    
    if (dropdownElement && buttonElement) {
      const { top, left, bottom, right } = buttonElement.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Check available space around the button
      const spaceBottom = viewportHeight - bottom;
      const spaceTop = top;
      const spaceRight = viewportWidth - right;
      const spaceLeft = left;

      // Determine the best position for the dropdown
      if (spaceBottom > dropdownElement.offsetHeight) {
        setPosition('bottom');
      } else if (spaceTop > dropdownElement.offsetHeight) {
        setPosition('top');
      } else if (spaceRight > dropdownElement.offsetWidth) {
        setPosition('right');
      } else if (spaceLeft > dropdownElement.offsetWidth) {
        setPosition('left');
      } else {
        setPosition('bottom'); // Default to bottom if no space available
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="preference-dropdown-container">
      <button onClick={toggleDropdown} className="preference-dropdown-button" ref={buttonRef}>
        {selectedOption ? options.find(option => option.value === selectedOption)?.label : 'Toggle Dropdown'}
      </button>
      {isOpen && (
        <div className={`preference-dropdown-content ${position}`} ref={dropdownRef}>
          {options.map(option => (
            <div
              key={option.value}
              className="preference-dropdown-option"
              onClick={() => handleOptionClick(option.value)}
            >
              <label htmlFor={option.value} className="preference-dropdown-label">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreferenceDropdown;
