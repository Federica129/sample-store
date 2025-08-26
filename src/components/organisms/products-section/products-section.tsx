"use client";

import { useGetProducts } from "@/api/api/hook/use-get-products";
import { Container } from "@/components/molecules/container";
import { ListProducts } from "@/components/molecules/list-products";
import { Section } from "@/components/molecules/section";
import { TextBlock } from "@/components/molecules/text-block";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { ProductsSectionProps } from "./products-section.props";
import { SkeletonListProducts } from "@/components/molecules/skeleton-list-products/skeleton-list-products";

export function ProductsSection(props: ProductsSectionProps) {
  const { data, isLoading } = useGetProducts();
  const t = useTranslations("common");

  const [search, setSearch] = useState("");

  const filteredProducts =
    data?.filter((p) => p.title.toLowerCase().includes(search.toLowerCase())) ??
    [];

  return (
    <Section data-name="ProductsSection">
      <Container className="flex flex-col gap-8">
        <TextBlock align="left" {...props} />
        <Input
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {isLoading ? (
          <SkeletonListProducts />
        ) : filteredProducts.length > 0 ? (
          <ListProducts data={filteredProducts} />
        ) : (
          <div className="py-20 flex justify-center">
            <span className="text-orange font-bold">{t("noResult")}</span>
          </div>
        )}
      </Container>
    </Section>
  );
}
