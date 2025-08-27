"use client";

import { textBlockStyles } from "./text-block.styles";
import type { TextBlockProps } from "./text-block.props";
import { Cta } from "@/components/atoms/Cta";

export function TextBlock({
  as: TagTitle = "h1",
  title,
  copy,
  cta,
  size = "large",
  align = "center",
}: TextBlockProps) {
  const styles = textBlockStyles({ size, align });
  return (
    <div className={styles.root}>
      <TagTitle className={styles.title}>{title}</TagTitle>
      {!!copy && <p dangerouslySetInnerHTML={{ __html: copy }} />}
      {!!cta?.label && (
        <Cta className={styles.cta} variant="tertiary" {...cta}>
          {cta.label}
        </Cta>
      )}
    </div>
  );
}
