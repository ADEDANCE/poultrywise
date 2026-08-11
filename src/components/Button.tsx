import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2.5 rounded-xl bg-green-600  hover:bg-green-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
