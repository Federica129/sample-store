import { forwardRef } from "react";

import type { SectionProps } from "./section.props";

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  function Section({ children, config, className, ...rest }, ref) {
    return (
      <section
        ref={ref}
        data-name="section"
        className={className}
        style={{
          marginTop: `${(config?.marginTop ?? 0) / 10}rem`,
          marginBottom: `${(config?.marginBottom ?? 0) / 10}rem`,
          paddingTop: `${(config?.paddingTop ?? 30) / 10}rem`,
          paddingBottom: `${(config?.paddingBottom ?? 30) / 10}rem`,
        }}
        {...rest}
      >
        {children}
      </section>
    );
  }
);
