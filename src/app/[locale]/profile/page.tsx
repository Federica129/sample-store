import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";
import { ProfileSection } from "@/components/organisms/profile-section/profile-section";

export default function ProductsPage() {
  return (
    <ProtectedRoute>
      <ProfileSection />
    </ProtectedRoute>
  );
}
