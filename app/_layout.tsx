import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#001529ff",
        },
      }}
    >
      <Stack.Screen options={{ title: "(tabs)" }} />
    </Stack>
  );
}
