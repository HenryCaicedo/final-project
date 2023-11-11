import React, { useState } from "react";

export default function TextField({
  placeholder = "textfield",
  name,
  type = "text",
  value,
  onChange,
  isError = false, // New prop for indicating error
}) {
  const handleInputChange = (e) => {
    // Use e.target.value to get the input value
    onChange(e.target.value);
  };

  const inputProps = {
    type: type === "password" ? "password" : "text",
    placeholder: placeholder,
    onChange: handleInputChange,
    value: value,
    className: `w-full rounded-2xl p-2  text-black font-semibold ${
      isError ? "bg-red-500" : "bg-gray-200" // Apply red border for errors
    }`,
  };

  return <input {...inputProps} />;
}
