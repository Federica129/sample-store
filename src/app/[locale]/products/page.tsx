import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";
import { ProductsSection } from "@/components/organisms/products-section/products-section";
import { useTranslations } from "next-intl";

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <ProtectedRoute>
      <ProductsSection title={t("title")} copy={t("copy")} />
    </ProtectedRoute>
  );
}
