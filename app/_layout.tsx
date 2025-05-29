import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth(); // Replace with actual authentication logic
  const segments = useSegments();

  useEffect(() => {
    const isAuthGroup = segments[0] === "auth";

    if (!user && !isAuthGroup && !isLoadingUser) {
      setTimeout(() => {
        // Simulate a delay for demonstration purposes (isReady eviter)
        router.replace("/auth"); // Redirect to the auth screen after a delay
      }, 0);
    } else if (user && isAuthGroup && isLoadingUser) {
      setTimeout(() => {
        // Simulate a delay for demonstration purposes (isReady eviter)
        router.replace("/"); // Redirect to the auth screen after a delay
      }, 0);
    }
  }, [user, segments]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RouteGuard>
    </AuthProvider>
  );
}
