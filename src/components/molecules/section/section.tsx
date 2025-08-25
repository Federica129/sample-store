import { forwardRef } from "react";

import type { SectionProps } from "./section.props";
import { sectionStyles } from "./section.styles";

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  function Section({ children, config, className = "", ...rest }, ref) {
    const styles = sectionStyles(config, className);

    return (
      <section ref={ref} data-name="section" className={styles} {...rest}>
        {children}
      </section>
    );
  }
);
