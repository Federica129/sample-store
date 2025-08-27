import { InputWrapperProps } from "./input-wrapper.props";
import { cn } from "@/lib/utils";

export const InputWrapper = ({
  label,
  isRequired,
  children,
  error,
  helperText,
  className,
  ...rest
}: InputWrapperProps & { className?: string }) => {
  return (
    <div
      data-name="InputWrapper"
      className={cn("flex flex-col gap-2", className)}
      {...rest}
    >
      {label && (
        <label className="self-start text-base font-medium">
          {label}
          {isRequired && <span className="ml-1 text-red-600">*</span>}
        </label>
      )}

      {children}

      {!!error?.message && (
        <p className="self-start text-sm text-red-600">
          {error.message.toString()}
        </p>
      )}

      {!!helperText && (
        <p className="self-start text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
