type Option = { label: string; value: string; id?: string };

type RadioGroupProps = {
  name: string;
  options: Option[];
  value?: string | null;
  onChange?: (value: string) => void;
  inline?: boolean;
};

export const RadioGroup = ({
  name,
  options,
  value = null,
  onChange,
  inline = false,
}: RadioGroupProps) => {
  return (
    <div style={{ display: inline ? "flex" : "block", gap: inline ? "40px" : undefined }}>
      {options.map((opt) => {
        const id = opt.id ?? `${name}-${opt.value}`;
        return (
          <div className="form-check" key={opt.value} style={inline ? { marginRight: "40px" } : undefined}>
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={id}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange?.(e.target.value)}
            />
            <label className="form-check-label" htmlFor={id}>
              {opt.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};
