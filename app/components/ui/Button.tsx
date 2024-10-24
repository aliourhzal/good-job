import React, { MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disable?: boolean
}

export default function Button({ className, children, onClick, disable }: ButtonProps) {
  return (
    <button disabled={disable} onClick={onClick} className={`md:py-4 md:px-8 py-[14px] px-7 transition-all duration-300 rounded-full font-semibold min-w-[50px] shadow-normal-shadow hover:shadow-hover-shadow capitalize ${className} `}>
      {children}
    </button>
  );
}
