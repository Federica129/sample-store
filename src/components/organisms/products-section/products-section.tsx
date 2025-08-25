"use client";

import { useGetProducts } from "@/api/api/hook/use-get-products";
import { Container } from "@/components/molecules/container";
import { ListProducts } from "@/components/molecules/list-products";
import { Section } from "@/components/molecules/section";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function ProductsSection() {
  const { data } = useGetProducts();
  const t = useTranslations("common");

  const [search, setSearch] = useState("");

  const filteredProducts =
    data?.filter((p) => p.title.toLowerCase().includes(search.toLowerCase())) ??
    [];

  return (
    <Section data-name="ProductsSection">
      <Container className="flex flex-col gap-8">
        <Input
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ListProducts data={filteredProducts} />
      </Container>
    </Section>
  );
}
