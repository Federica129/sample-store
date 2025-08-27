"use client";

import { Container } from "@/components/molecules/container";
import { Section } from "@/components/molecules/section";
import { TextBlock } from "@/components/molecules/text-block";
import { useTranslations } from "next-intl";
import Image from "next/image";
import illustration from "@/assets/welcome.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function WelcomeSection() {
  const t = useTranslations("welcome");
  const user = useSelector((state: RootState) => state.auth.user);

  const textBlockProps = {
    title: `${t("title")} ${user?.firstName ?? ""}!`,
    copy: t("copy"),
    cta: { label: t("cta"), href: "/products" },
  };

  return (
    <Section data-name="WelcomeSection" className="md:h-[calc(100dvh-65px)]">
      <Container className="h-full grid gap-[1rem] grid-cols-1 md:grid-cols-2 items-center">
        <TextBlock {...textBlockProps} align="left" />
        <Image src={illustration} alt="" priority />
      </Container>
    </Section>
  );
}
