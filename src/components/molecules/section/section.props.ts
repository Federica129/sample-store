import type { ComponentProps } from "react";

export type SectionProps = ComponentProps<"section"> & {
  config?: {
    marginTop?: number;
    marginBottom?: number;
    paddingTopMobile?: number;
    paddingTopDesktop?: number;
    paddingBottomMobile?: number;
    paddingBottomDesktop?: number;
  };
};
