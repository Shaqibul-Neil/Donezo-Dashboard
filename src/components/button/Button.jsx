import React from "react";

const Button = ({ text, onClick, variant = "primary", icon: Icon }) => {
  const baseStyles =
    "flex items-center gap-2 h-10 rounded-full font-bold text-[14px] transition-all duration-300 active:scale-95 shadow-sm cursor-pointer justify-center";

  const variants = {
    primary:
      "bg-gradient-to-br from-[#006442] via-[#006442] to-[#0D442A] text-white hover:opacity-90 w-40",
    secondary:
      "bg-white border border-[#0D442A] hover:bg-gray-50 text-[#0D442A] w-30",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {Icon && <Icon size={18} />}
      {text}
    </button>
  );
};

export default Button;
