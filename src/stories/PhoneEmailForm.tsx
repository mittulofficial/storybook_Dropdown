import React, { useState } from 'react';
import './PhoneEmailForm.css'; // Add a CSS file for styling

interface PhoneEmailFormProps {
  phoneLabel: string;
  addressLabel: string;
  onSubmit: (data: { phone: string; address: string }) => void; // New prop for handling form submission
}

const PhoneEmailForm: React.FC<PhoneEmailFormProps> = ({ phoneLabel, addressLabel, onSubmit }) => {
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!phone) {
      setError('Phone number is required!');
    } else {
      setError('');
      onSubmit({ phone, address }); // Call onSubmit prop with form data
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          {phoneLabel} <span className="required">*</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/, ''))} // Allow only numbers
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          {addressLabel}
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-input"
          />
        </label>
      </div>
      {error && <p className="error-text">{error}</p>}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default PhoneEmailForm;
