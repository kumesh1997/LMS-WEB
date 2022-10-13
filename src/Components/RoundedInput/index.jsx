/* eslint-disable max-len */
import React from "react";

function RoundedInput({
  type = "text",
  placeholder = "sample placeholder",
  onChange,
  extraTailwindClasses = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      className={`rounded-input ml-2 md:ml-0 flex-1 border-2 border-black p-2 md:p-4 text-base md:text-base mr-2 ${extraTailwindClasses}`}
    />
  );
}

export default RoundedInput;
