import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'submit' | 'button'
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button className={`md:py-4 md:px-8 py-[14px] px-7 transition-all duration-300 rounded-full font-semibold min-w-[50px] shadow-normal-shadow hover:shadow-hover-shadow capitalize ${className} `}>
      {children}
    </button>
  );
}
