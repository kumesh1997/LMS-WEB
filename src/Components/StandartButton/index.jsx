import React from "react";

function StandartButton({ children, styles, extraTailwindClasses = "", clickHandler}) {
  return (
    <button
      type="button"
      className={`become-provider h-10 w-auto  font-bold whitespace-nowrap border-2 p-1 ${extraTailwindClasses}`}
      style={{ ...styles }}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default StandartButton;
