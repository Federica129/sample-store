import type { ComponentProps } from "react";

export type ProfileFormProps = ComponentProps<"form"> & {
  disabled?: boolean;
};
