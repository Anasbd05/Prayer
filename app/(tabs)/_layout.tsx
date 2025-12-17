import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#001529ff",
          height: 70,
          borderColor: "#001529ff",
          flexDirection: "row",
          elevation: 0,
          marginBottom: 40,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginBottom: -10,
        },
        tabBarActiveTintColor: "#FFD93D",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "العداد",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Guide"
        options={{
          title: "الأدعية",
          tabBarIcon: ({ color }) => (
            <Entypo name="layers" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "معلومات",
          tabBarIcon: ({ color }) => (
            <Entypo name="help" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
