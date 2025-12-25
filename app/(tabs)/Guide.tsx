import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { DuasLists } from "../../assets/assets";

export default function Guide() {
  const router = useRouter();
  return (
    <View style={tw`bg-black flex-1`}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={tw`p-5 mt-5 bg-[#001529ff]`}>
        <Text style={tw`text-white font-bold text-2xl text-right`}>
          الأدعية
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        style={tw`flex-1`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`py-6`}
      >
        <View style={tw`flex flex-row justify-center w-full gap-5 flex-wrap `}>
          {DuasLists.map((duaa, index) => (
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/Duas", params: duaa })}
              key={index}
              activeOpacity={0.8}
              style={tw`rounded-xl px-4 py-5 bg-[#001529ff] border border-[#001529ff]`}
            >
              <View style={tw`flex flex-col items-center gap-2`}>
                <Image
                  source={duaa.image}
                  style={{ width: 140, height: 140 }}
                />
                <Text style={tw`text-white text-lg font-bold tracking-tight`}>
                  {duaa.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={tw`h-4`} />
      </ScrollView>
    </View>
  );
}
