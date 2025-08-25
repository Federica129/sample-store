import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { CtaProps } from "./cta.props";

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Cta({ href = "", children, ...rest }: CtaProps) {
  const content = (
    <span className="inline-flex items-center gap-2">{children}</span>
  );

  if (href && isExternalLink(href)) {
    return (
      <Button data-name="Cta" asChild {...rest}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </Button>
    );
  }

  if (href) {
    return (
      <Button data-name="Cta" asChild {...rest}>
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button data-name="Cta" {...rest}>
      {content}
    </Button>
  );
}
