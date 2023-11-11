import React from "react";

export default function TextField({
  placeholder = "textfield",
  name,
  type = "text",
  value,
  onChange,
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
    className: "w-full rounded-2xl p-2 bg-gray-200 text-black font-semibold",
  };

  return <input {...inputProps} />;
}
