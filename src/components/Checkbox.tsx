import React from "react";
import "./Checkbox.css";

type CheckboxProps = {
  id: string;
  label: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  hint?: React.ReactNode;
  size?: "small" | "medium" | "large";
  isInvalid?: boolean;
  isValid?: boolean;
  invalidMessage?: React.ReactNode;
  validMessage?: React.ReactNode;
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  value,
  checked,
  defaultChecked,
  disabled = false,
  required = false,
  hint,
  size = "medium",
  isInvalid = false,
  isValid = false,
  invalidMessage = "Error message",
  validMessage,
  onChange,
}) => {
  const inputClassName = [
    "form-check-input",
    isInvalid ? "is-invalid" : "",
    isValid ? "is-valid" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const containerClassName = ["form-check", `checkbox--${size}`].join(" ");

  return (
    <>
      {hint && <small className="qld-hint-text">{hint}</small>}
    <div className={containerClassName}>

      <input
        className={inputClassName}
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={(event) => onChange?.(event.target.checked, event)}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      {isValid && validMessage && (
        <div className="valid-feedback">{validMessage}</div>
      )}
      {isInvalid && <div className="invalid-feedback">{invalidMessage}</div>}
    </div>
    </>
  );
};
