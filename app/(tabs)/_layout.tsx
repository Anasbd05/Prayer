import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#001529ff",
          height: 65,
          marginBottom: 40,
          borderColor: "#001529ff",
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
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Fontisto name="history" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Guide"
        options={{
          title: "Guide",
          tabBarIcon: ({ color }) => (
            <Entypo name="layers" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
