import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { duas } from "../../assets/assets";

export default function Guide() {
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
        {duas.map((duaa, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            style={tw`rounded-3xl p-5 mx-4 mb-4 border border-[#001529ff] shadow-lg`}
          >
            <View style={tw`flex flex-row justify-between items-start`}>
              <View style={tw`flex-1 mr-4`}>
                <Text
                  style={tw`text-[#FFD93D] text-xs font-bold mb-3 tracking-widest`}
                >
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Text
                  style={tw`text-white text-xl font-bold leading-9 text-right mb-5 tracking-tight`}
                >
                  {duaa.text}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={tw`h-4`} />
      </ScrollView>
    </View>
  );
}
