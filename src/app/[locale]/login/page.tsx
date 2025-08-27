import { AuthSection } from "@/components/organisms/auth-section/auth-section";
import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export default function LoginPage() {
  return (
    <ProtectedRoute isLoginPage>
      <AuthSection />
    </ProtectedRoute>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("login.title"),
    description: t("login.description"),
    robots: "index, follow",
  };
}
