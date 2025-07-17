import React from "react";

interface NumberCircleProps {
  number: string | number;
  size?: number; // px
  className?: string;
}

const NumberCircle: React.FC<NumberCircleProps> = ({ number, size = 48, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-white border border-gray-900/10 shadow-md font-bold text-gray-900 select-none ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.45, boxShadow: "0 2px 8px 0 rgba(30,41,59,0.06)" }}
    >
      {typeof number === "number" ? String(number).padStart(2, "0") : number}
    </span>
  );
};

export default NumberCircle; 