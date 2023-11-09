import React, { useState } from "react";

export default function TextField({
  placeholder = "textfield",
  name,
  value,
  onChange,
}) {
  const handleInputChange = (e) => {
    // Use e.target.value to get the input value
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleInputChange}
      className="w-full rounded-2xl p-2 bg-gray-200 text-black font-semibold"
    />
  );
}
