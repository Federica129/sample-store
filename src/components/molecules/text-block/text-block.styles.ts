import { cn } from "@/lib/utils";

export const textBlock = {
  root: {
    base: "w-full flex flex-col gap-[1rem]",
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    },
  },
  title: {
    base: "font-bold",
    size: {
      xLarge: "text-4xl",
      large: "text-3xl",
      medium: "text-2xl",
      small: "text-xl",
    },
  },
  cta: {
    base: "mt-[0.5rem]",
  },
};

export function textBlockStyles(options?: {
  size?: keyof typeof textBlock.title.size;
  align?: keyof typeof textBlock.root.align;
}) {
  return {
    root: cn(
      textBlock.root.base,
      options?.align ? textBlock.root.align[options.align] : ""
    ),
    title: cn(
      textBlock.title.base,
      options?.size ? textBlock.title.size[options.size] : ""
    ),
    cta: cn(textBlock.cta.base),
  };
}
