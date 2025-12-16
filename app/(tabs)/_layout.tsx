import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#001529ff",
          height: 70,
          marginBottom: 20,
          borderColor: "#001529ff",
          marginLeft: 10,
          marginRight: 10,
          // Optional: position as absolute for a floating look
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
