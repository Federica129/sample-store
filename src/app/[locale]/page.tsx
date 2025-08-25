import { ProtectedRoute } from "@/components/molecules/protect-routes/protect-routes";
export default function Home() {
  return (
    <div className="">
      <main>
        <ProtectedRoute>Home</ProtectedRoute>
      </main>
    </div>
  );
}
