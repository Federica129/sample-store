import type { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
  name: string;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  isRequired?: boolean;
}
