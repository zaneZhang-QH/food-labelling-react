import React from "react";

type Option = { value: string; label: string };

type QgdSelectProps = {
  id: string;
  label: string;
  hint?: string;
  optional?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  required?: boolean;
  invalidMessage?: string;
  validMessage?: string;
  tabIndex?: number;
};

export const Select: React.FC<QgdSelectProps> = ({
  id,
  label,
  hint,
  optional = false,
  value,
  onChange,
  options,
  required = false,
  invalidMessage = "Error",
  validMessage = "Success",
  tabIndex = 0,
}) => {
  const describedBy = hint ? `${id}-hint` : undefined;

  const toggleInvalidState = (el: HTMLSelectElement) => {
    if (el.value.trim()) {
      el.classList.remove("is-invalid");
    } else if (required) {
      el.classList.add("is-invalid");
    }
  };

  return (
    <div>
      <label className="qld-text-input-label field-required" htmlFor={id}>
        {label}
        {optional && <span className="label-text-optional">(optional)</span>}
      </label>

      {hint && (
        <span className="qld-hint-text" id={describedBy}>
          {hint}
        </span>
      )}

      <select
        id={id}
        className="form-select"
        aria-describedby={describedBy}
        tabIndex={tabIndex}
        required={required}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          toggleInvalidState(e.currentTarget);
        }}
        onBlur={(e) => toggleInvalidState(e.currentTarget)}
        onInvalid={(e) => e.currentTarget.classList.add("is-invalid")}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="valid-feedback">{validMessage}</div>
      <div className="invalid-feedback">{invalidMessage}</div>
    </div>
  );
};
