import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AuthSection } from "@/components/organisms/auth-section/auth-section";
import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";

export default function Login({ params }: { params: { locale: string } }) {
  if (!hasLocale(routing.locales, params.locale)) {
    notFound();
  }

  return (
    <ProtectedRoute isLoginPage>
      <AuthSection />
    </ProtectedRoute>
  );
}
