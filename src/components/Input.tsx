import React from "react";
import type { ChangeEvent, FormEvent, FocusEvent, ReactNode } from "react";

type TextInputProps = {
  id: string;
  label?: string;
  value: string;
  hint?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  optional?: boolean;
  required?: boolean;
  invalidMessage?: string;
  validMessage?: string;
  type?: string;
  placeholder?: string;
  displayLabel?: boolean;
  inputClassName?: string;
  suffix?: ReactNode;
};

export const Input: React.FC<TextInputProps> = ({
  id,
  label,
  value,
  onChange,
  onInput,
  onBlur,
  hint,
  optional = false,
  required = false,
  invalidMessage,
  validMessage,
  type = "text",
  placeholder = "",
  displayLabel = true,
  inputClassName = "",
  suffix,
}) => {
  const describedBy = hint ? `${id}-hint` : undefined;

  const inputControl = (
    <input
      id={id}
      className={`form-control ${inputClassName}`.trim()}
      type={type}
      placeholder={placeholder}
      required={required}
      aria-describedby={describedBy}
      value={value}
      onChange={onChange}
      onInput={onInput}
      onBlur={onBlur}
    />
  );

  return (
    <div>
      {displayLabel && label && (
        <label
          className={`qld-text-input-label ${required ? "field-required" : ""}`}
          htmlFor={id}
        >
          {label}
          {optional && <span className="label-text-optional">(optional)</span>}
        </label>
      )}

      {hint && (
        <span className="qld-hint-text" id={describedBy}>
          {hint}
        </span>
      )}

      {suffix ? (
        <div className="input-group">
          {inputControl}
          <span className="input-group-text">{suffix}</span>
          {validMessage && <div className="valid-feedback">{validMessage}</div>}
          {invalidMessage && (
            <div className="invalid-feedback">{invalidMessage}</div>
          )}
        </div>
      ) : (
        <>
          {inputControl}
          {validMessage && <div className="valid-feedback">{validMessage}</div>}
          {invalidMessage && (
            <div className="invalid-feedback">{invalidMessage}</div>
          )}
        </>
      )}
    </div>
  );
};
