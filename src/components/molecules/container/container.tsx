import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Container({ className, ...rest }: ComponentProps<"div">) {
  const styles = cn(
    "w-full mx-auto px-[1.5rem] max-w-none lg:px-[2.5rem] lg:max-w-[1440px]",
    className
  );

  return <div data-name="container" className={styles} {...rest} />;
}
