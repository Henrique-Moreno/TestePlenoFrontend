import React from "react";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  type = "button", 
  variant = "primary",
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={`button ${variant} ${props.disabled ? "disabled" : ""}`}
      type={type} 
      {...props} 
    >
      {children}
    </button>
  );
};
