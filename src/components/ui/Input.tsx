import React, { ChangeEvent, ReactElement } from "react";

interface InputProps {
  label: string;
  id: string;
  type: string;
  span?: string;
  icon?: ReactElement;
  input: string;
  setInput: (value: string) => void;
  readOnly?: boolean;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  span,
  icon,
  input,
  setInput,
  readOnly = false,
  placeholder,
  required = false,
}) => {
  return (
    <div className="3xl:space-y-2 w-full space-y-1.5">
      <label
        htmlFor={id}
        className="prevent-select flex items-center gap-2 text-sm text-gray-900"
      >
        <span>
          {label} {required && <span className="text-red-500">*</span>}
        </span>

        <span className="text-xs text-gray-600">{span}</span>
      </label>

      <p className="prevent-select relative flex gap-2">
        <input
          id={id}
          type={type}
          value={input}
          readOnly={readOnly}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder={placeholder}
          className={`w-full text-ellipsis rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm outline-none placeholder:text-gray-500 focus:border-gray-900 ${
            readOnly && "cursor-not-allowed"
          }`}
          aria-required={required}
          aria-readonly={readOnly}
        />
        {icon && React.cloneElement(icon, { "aria-hidden": true })}{" "}
      </p>
    </div>
  );
};

export default Input;
