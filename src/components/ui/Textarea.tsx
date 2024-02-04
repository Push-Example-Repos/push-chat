import React, { ChangeEvent } from "react";

interface TextareaProps {
  id: string;
  span?: string;
  rows?: number;
  label: string;
  placeholder: string;
  required?: boolean;
  input: string;
  setInput: (value: string) => void;
  readOnly?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  span,
  rows = 5,
  input,
  label,
  setInput,
  placeholder,
  required = false,
  readOnly = false,
}) => {
  return (
    <div className="3xl:space-y-2 w-full space-y-1">
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
        <textarea
          id={id}
          rows={rows}
          value={input}
          readOnly={readOnly}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setInput(e.target.value)
          }
          placeholder={placeholder}
          className="w-full text-ellipsis rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm outline-none placeholder:text-gray-600 focus:border-gray-900"
          aria-required={required}
          aria-readonly={readOnly}
          aria-describedby={span ? `${id}-description` : undefined}
        />
        {span && (
          <span id={`${id}-description`} className="text-xs text-gray-600">
            {span}
          </span>
        )}
      </p>
    </div>
  );
};

export default Textarea;
