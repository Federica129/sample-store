import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";
import { ProductsSection } from "@/components/organisms/products-section/products-section";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <ProtectedRoute>
      <ProductsSection title={t("title")} copy={t("copy")} />
    </ProtectedRoute>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("products.title"),
    description: t("products.description"),
    robots: "index, follow",
  };
}
