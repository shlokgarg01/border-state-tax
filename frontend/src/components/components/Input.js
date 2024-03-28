import React from "react";

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  required,
  icon,
}) {
  return (
    <div className="form-floating">
      <div className="input-group mb-3">
        {icon && (
          <span className="input-group-text" id={`basic-addon${placeholder}`}>
            {icon}
          </span>
        )}
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-describedby={`basic-addon${placeholder}`}
          required={required}
        />
      </div>
    </div>
  );
}
