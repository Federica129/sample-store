import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";
import { WelcomeSection } from "@/components/organisms/welcome-section/welcome-section";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export default function Home() {
  return (
    <ProtectedRoute>
      <WelcomeSection />
    </ProtectedRoute>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("home.title"),
    description: t("home.description"),
    robots: "index, follow",
  };
}
