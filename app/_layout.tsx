import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Stack.Screen options={{ title: "(tabs)" }} />
    </Stack>
  );
}
