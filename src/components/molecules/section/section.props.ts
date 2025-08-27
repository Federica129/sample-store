import type { ComponentProps } from "react";

export type SectionProps = ComponentProps<"section"> & {
  config?: {
    marginTop?: number;
    marginBottom?: number;
    paddingTop?: number;
    paddingBottom?: number;
  };
};
