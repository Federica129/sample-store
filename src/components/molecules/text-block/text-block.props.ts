import type { ButtonProps } from "@/components/ui/button/button.props";
import { textBlock } from "./text-block.styles";

export type TextBlockProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  title: string;
  copy?: string;
  cta?: ButtonProps & { label: string; href: string };
  className?: string;
  size?: keyof typeof textBlock.title.size;
  align?: keyof typeof textBlock.root.align;
};
