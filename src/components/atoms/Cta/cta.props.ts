import type { ReactNode } from "react";
import type { ButtonProps } from "@/components/ui/button/button.props";

export type CtaProps =
  | ({ href: string; children: ReactNode } & ButtonProps) // caso con Link
  | ({ href?: undefined; children: ReactNode } & ButtonProps); // caso senza Link
