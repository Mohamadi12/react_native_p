import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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

// SafeAreaView: Eviter que mon contenu soit caché
// GestureHandlerRootView pour les swipe
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <PaperProvider>
          <SafeAreaProvider>
            <RouteGuard>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </RouteGuard>
          </SafeAreaProvider>
        </PaperProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
