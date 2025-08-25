import type { InputProps } from "./input.props";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { InputWrapper } from "../InputWrapper";

export function Input(props: InputProps) {
  const {
    label,
    name,
    disabled,
    isRequired,
    placeholder,
    helperText,
    type = "text",
    ...rest
  } = props;

  return (
    <Controller
      data-name="Input"
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <InputWrapper
          isRequired={isRequired}
          label={label}
          error={error}
          helperText={helperText}
        >
          <ShadcnInput
            type={type}
            ref={ref}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={!!error}
            {...rest}
          />
        </InputWrapper>
      )}
    />
  );
}
