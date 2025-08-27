import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";
import { ProfileSection } from "@/components/organisms/profile-section/profile-section";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileSection />
    </ProtectedRoute>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("profile.title"),
    description: t("profile.description"),
    robots: "noindex, nofollow",
  };
}
