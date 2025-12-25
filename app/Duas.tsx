import Entypo from "@expo/vector-icons/Entypo";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import {
  forgiveness,
  guide,
  mariage,
  others,
  parents,
  peace,
  rizq,
  tayssir,
} from "../assets/assets";
export default function Duas() {
  const [duaaList, setDuaaList] = useState([]);

  const duaa = useLocalSearchParams();

  useEffect(() => {
    if (duaa.name === "الزواج الصالح") {
      setDuaaList(mariage as any);
    }

    if (duaa.name === "سعة الرزق") {
      setDuaaList(rizq as any);
    }

    if (duaa.name === "طلب المغفرة") {
      setDuaaList(forgiveness as any);
    }

    if (duaa.name === "تيسير الأمور") {
      setDuaaList(tayssir as any);
    }

    if (duaa.name === "نور الهداية") {
      setDuaaList(guide as any);
    }

    if (duaa.name === "الدعاء للغير") {
      setDuaaList(others as any);
    }

    if (duaa.name === "بر الوالدين") {
      setDuaaList(parents as any);
    }

    if (duaa.name === "راحة القلب") {
      setDuaaList(peace as any);
    }
  }, [duaa]);

  const router = useRouter();

  return (
    <View style={tw`bg-black flex-1`}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View
        style={tw`p-5 mt-5 bg-[#001529ff] flex flex-row justify-between items-center `}
      >
        <Text style={tw`text-white font-bold text-2xl text-right`}>
          {duaa.name}
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={tw`py-1 px-3 bg-yellow-500 rounded-tl-2xl `}
        >
          <Entypo name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={tw`flex-1`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`py-6`}
      >
        {duaaList.map((duaa, index) => (
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
                  {duaa}
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
