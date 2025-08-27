import { Container } from "@/components/molecules/container";
import { Section } from "@/components/molecules/section";
import { TextBlock } from "@/components/molecules/text-block";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("notFound");
  return (
    <Section className="min-h-[calc(100dvh-65px)] flex items-center">
      <Container>
        <TextBlock
          title={t("title")}
          copy={t("description")}
          cta={{ href: "/", label: t("cta") }}
        />
      </Container>
    </Section>
  );
}
