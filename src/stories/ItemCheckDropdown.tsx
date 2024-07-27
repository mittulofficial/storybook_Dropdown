// src/components/ItemCheckDropdown.tsx

import React, { useState, useRef, useEffect } from 'react';
import './ItemCheckDropdown.css'; // Import the CSS file for styling

interface ItemCheckDropdownProps {
  options: { label: string; value: string }[];
  onOptionChange?: (value: string) => void; // Optional callback for actions
}

const ItemCheckDropdown: React.FC<ItemCheckDropdownProps> = ({ options, onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [position, setPosition] = useState<'bottom' | 'top' | 'right' | 'left'>('bottom');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOptions(prev => {
      const newOptions = prev.includes(value) ? prev.filter(option => option !== value) : [...prev, value];
      if (onOptionChange) onOptionChange(value); // Trigger action
      return newOptions;
    });
  };

  const calculatePosition = () => {
    const dropdownElement = dropdownRef.current;
    const buttonElement = buttonRef.current;
    
    if (dropdownElement && buttonElement) {
      const { top, left, bottom, right } = buttonElement.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const spaceBottom = viewportHeight - bottom;
      const spaceTop = top;
      const spaceRight = viewportWidth - right;
      const spaceLeft = left;

      if (spaceBottom > dropdownElement.offsetHeight) {
        setPosition('bottom');
      } else if (spaceTop > dropdownElement.offsetHeight) {
        setPosition('top');
      } else if (spaceRight > dropdownElement.offsetWidth) {
        setPosition('right');
      } else if (spaceLeft > dropdownElement.offsetWidth) {
        setPosition('left');
      } else {
        setPosition('bottom');
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
    <div className="item-check-dropdown-container">
      <button onClick={toggleDropdown} className="item-check-dropdown-button" ref={buttonRef}>
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Toggle Dropdown'}
      </button>
      {isOpen && (
        <div className={`item-check-dropdown-content ${position}`} ref={dropdownRef}>
          {options.map(option => (
            <div
              key={option.value}
              className="item-check-dropdown-option"
              onClick={() => handleOptionClick(option.value)}
            >
              <input
                type="checkbox"
                id={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleOptionClick(option.value)}
              />
              <label htmlFor={option.value} className="item-check-dropdown-label">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemCheckDropdown;
