/* eslint-disable @typescript-eslint/no-unused-vars */
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import tw from "twrnc";
import { badges } from "../../assets/assets";

const CQbadge = require("../../assets/images/CQbadge.png");
const CWbadge = require("../../assets/images/CWbadge.png");
const FNbadge = require("../../assets/images/FNbadge.png");
const Gbadge = require("../../assets/images/Gbadge.png");
const LNbadge = require("../../assets/images/LNbadge.png");
const NSbadge = require("../../assets/images/NSbadge.png");
const RSbadge = require("../../assets/images/RSbadge.png");
const SHbadge = require("../../assets/images/SHbadge.png");

export default function Index() {
  const [showMenu, setShowMenu] = useState(false);

  const Nights = [
    { night: "1" },
    { night: "2" },
    { night: "3" },
    { night: "4" },
    { night: "5" },
    { night: "6" },
    { night: "7" },
    { night: "8" },
    { night: "9" },
    { night: "10" },
    { night: "11" },
    { night: "12" },
    { night: "13" },
    { night: "14" },
    { night: "15" },
    { night: "16" },
    { night: "17" },
    { night: "18" },
    { night: "19" },
    { night: "20" },
    { night: "21" },
    { night: "22" },
    { night: "23" },
    { night: "24" },
    { night: "25" },
    { night: "26" },
    { night: "27" },
    { night: "28" },
    { night: "29" },
    { night: "30" },
  ];

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`flex-1`}>
        {/* HEADER */}
        <View
          style={tw`flex-row justify-between items-center bg-[#001529ff] p-5`}
        >
          <Pressable onPress={() => setShowMenu(true)}>
            <AntDesign name="menu" size={22} color="white" />
          </Pressable>
          <Text style={tw`text-white text-2xl font-bold`}>قيام الليل</Text>
        </View>

        {/* MAIN */}
        <ScrollView contentContainerStyle={tw` mt-10`}>
          <View style={tw`flex flex-col mt-10 items-center`}>
            <Image source={NSbadge} style={tw`h-54 z-50 w-54`} />
            <View
              style={tw`bg-white h-38 absolute top-30 w-80 justify-center flex flex-col gap-1 items-center rounded-2xl`}
            >
              <Text style={tw`text-black text-xl mt-10 font-semibold`}>
                Night seeker
              </Text>
              <Text style={tw`text-black font-medium text-neutral-800`}>
                الوسام الحالي
              </Text>
            </View>
          </View>
          <View style={tw`my-24 mt-28`}>
            <Text style={tw`text-xl p-5 font-semibold text-white`}>
              Nights:
            </Text>
            <View
              style={tw`flex flex-row flex-wrap  w-full items-center justify-center gap-x-3 gap-y-6`}
            >
              {Nights.map((night, key) => (
                <Pressable
                  style={tw`w-15 h-24 rounded-xl bg-slate-900  border border-slate-700 flex flex-col items-center justify-center`}
                  key={key}
                >
                  <MaterialCommunityIcons
                    name="torch"
                    size={26}
                    style={{ transform: [{ rotate: "-90deg" }] }}
                    color="#FF8100"
                  />
                  <Text
                    style={tw`text-slate-100 text-xl text-center mt-2 font-semibold`}
                  >
                    {night.night}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* SIDEBAR */}
        {showMenu && (
          <ScrollView style={tw`absolute bg-[#001F3D] h-full w-full z-50`}>
            <View style={tw`flex-row justify-between p-5`}>
              <Pressable onPress={() => setShowMenu(false)}>
                <AntDesign name="close" size={22} color="white" />
              </Pressable>
              <Text style={tw`text-white text-2xl font-bold`}>الأوسمة</Text>
            </View>

            <View style={tw`p-5 gap-4`}>
              {badges.map((badge, i) => (
                <View key={i} style={tw`flex-row items-center gap-3`}>
                  <Image source={badge.BadgeImage} style={tw`w-16 h-16`} />
                  <View>
                    <Text style={tw`text-white font-bold text-lg`}>
                      {badge.title}
                    </Text>
                    <Text style={tw`text-gray-300`}>{badge.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
