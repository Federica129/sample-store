import type { SectionProps } from "./section.props";
import { cn } from "@/lib/utils";

export const sectionStyles = (
  config: SectionProps["config"],
  className: string
) => {
  return cn(
    `mt-[${(config?.marginTop ?? 0) / 10}rem]`,
    `mb-[${(config?.marginBottom ?? 0) / 10}rem]`,

    `pt-[${(config?.paddingTopMobile ?? 40) / 10}rem]`,
    `pb-[${(config?.paddingBottomMobile ?? 40) / 10}rem]`,

    `lg:pt-[${(config?.paddingTopDesktop ?? 80) / 10}rem]`,
    `lg:pb-[${(config?.paddingBottomDesktop ?? 80) / 10}rem]`,

    className
  );
};
