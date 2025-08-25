import type { ComponentProps } from "react";

export type AuthProps = ComponentProps<"form"> & {
  error: string;
  isLoading?: boolean;
};
