import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import './password-input.css'; 

interface PasswordInputProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({
  placeholder,
  value,
  onChange,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input-container">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        className="password-input"
      />
      <button
        type="button"
        className="password-toggle"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};
