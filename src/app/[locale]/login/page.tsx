import { AuthSection } from "@/components/organisms/auth-section/auth-section";
import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";

export default function LoginPage() {
  return (
    <ProtectedRoute isLoginPage>
      <AuthSection />
    </ProtectedRoute>
  );
}
