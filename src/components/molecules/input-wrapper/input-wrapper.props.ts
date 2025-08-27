import type { ComponentProps, ReactNode } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export interface InputWrapperProps extends ComponentProps<"div"> {
  label?: string | ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  isRequired?: boolean;
  children?: ReactNode;
  helperText?: string | ReactNode;
}
