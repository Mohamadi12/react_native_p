import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuth = false; // Replace with actual authentication logic

  useEffect(() => {
    if (!isAuth) {
      setTimeout(() => { // Simulate a delay for demonstration purposes (isReady eviter)
        router.replace("/auth"); // Redirect to the auth screen after a delay
      }, 0); 
    }
  }, []);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}
