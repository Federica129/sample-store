import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";
import { WelcomeSection } from "@/components/organisms/welcome-section/welcome-section";
export default function Home() {
  return (
    <ProtectedRoute>
      <WelcomeSection />
    </ProtectedRoute>
  );
}
