import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#001529ff",
          height: 65,
          marginBottom: 35,
          borderColor: "#001529ff",
        },

        headerStyle: {
          backgroundColor: "#000",
          borderBottomWidth: 2,
          borderBottomColor: "#000f29ff",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "800",
          fontSize: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginBottom: Platform.OS === "ios" ? 4 : -18,
        },
        tabBarIconStyle: {},
        tabBarActiveTintColor: "#FFD93D",
        tabBarInactiveTintColor: "#E6E6E6",
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
