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
  const [completeNights, setCompleteNights] = useState<string[]>([]);

  const Nights = [
    { id: 1, night: "1" },
    { id: 2, night: "2" },
    { id: 3, night: "3" },
    { id: 4, night: "4" },
    { id: 5, night: "5" },
    { id: 6, night: "6" },
    { id: 7, night: "7" },
    { id: 8, night: "8" },
    { id: 9, night: "9" },
    { id: 10, night: "10" },
    { id: 11, night: "11" },
    { id: 12, night: "12" },
    { id: 13, night: "13" },
    { id: 14, night: "14" },
    { id: 15, night: "15" },
    { id: 16, night: "16" },
    { id: 17, night: "17" },
    { id: 18, night: "18" },
    { id: 19, night: "19" },
    { id: 20, night: "20" },
    { id: 21, night: "21" },
    { id: 22, night: "22" },
    { id: 23, night: "23" },
    { id: 24, night: "24" },
    { id: 25, night: "25" },
    { id: 26, night: "26" },
    { id: 27, night: "27" },
    { id: 28, night: "28" },
    { id: 29, night: "29" },
    { id: 30, night: "30" },
  ];

  const CompleteNight = (night: string) => {
    setCompleteNights((prevNights) => {
      if (prevNights.includes(night)) {
        // remove night
        return prevNights.filter((n) => n !== night);
      }
      // add night
      return [...prevNights, night];
    });
  };
  console.log(completeNights);

  const Restart = () => {
    setCompleteNights([]);
  };

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`flex-1`}>
        {/* العنوان */}
        <View
          style={tw`flex-row justify-between items-center bg-[#001529ff] p-5`}
        >
          <Pressable onPress={() => setShowMenu(true)}>
            <AntDesign name="menu" size={22} color="white" />
          </Pressable>
          <Text style={tw`text-white text-2xl font-bold`}>قيام الليل</Text>
        </View>

        {/* المحتوى الرئيسي */}
        <ScrollView contentContainerStyle={tw` mt-10`}>
          <View style={tw`flex flex-col mt-10 items-center`}>
            <Image source={NSbadge} style={tw`h-54 z-50 w-54`} />
            <View
              style={tw`bg-white h-38 absolute top-30 w-80 justify-center flex flex-col gap-1 items-center rounded-2xl`}
            >
              <Text style={tw`text-black text-xl mt-10 font-semibold`}>
                طالب الليل
              </Text>
              <Text style={tw`text-black font-medium text-neutral-800`}>
                الوسام الحالي
              </Text>
            </View>
          </View>
          <View style={tw`my-24 mt-28`}>
            <Text style={tw`text-xl p-5 text-right font-semibold text-white`}>
              ليالي قيام الليل:
            </Text>
            <View
              style={tw`flex mb-8 p-5 flex-row w-full justify-between items-center`}
            >
              <Text style={tw` font-semibold text-center text-lg text-white `}>
                {completeNights.length}/{Nights.length} Nights
              </Text>
              <Pressable
                onPress={Restart}
                style={tw` py-2 bg-[#001529ff] border-2 border-slate-700 w-36 rounded-lg `}
              >
                <Text
                  style={tw` font-semibold text-center text-lg text-white `}
                >
                  إعادة البدء
                </Text>
              </Pressable>
            </View>
            <View
              style={tw`flex flex-row flex-wrap  w-full items-center justify-center gap-x-3 gap-y-6`}
            >
              {Nights.map((night, key) =>
                completeNights.includes(night.night) ? (
                  <Pressable
                    style={tw`w-15 h-24 rounded-xl bg-emerald-600  border border-emerald-300 flex flex-col items-center justify-center
                  `}
                    key={key}
                    onPress={() => CompleteNight(night.night)}
                  >
                    <MaterialCommunityIcons
                      name="check"
                      size={26}
                      color="#fff"
                    />
                    <Text
                      style={tw`text-slate-100 text-xl text-center mt-2 font-semibold`}
                    >
                      {night.night}
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    style={tw`w-15 h-24 rounded-xl bg-slate-900  border border-slate-700 flex flex-col items-center justify-center 
                      : "bg-slate-900 border-slate-700"
                  `}
                    key={key}
                    onPress={() => CompleteNight(night.night)}
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
                )
              )}
            </View>
          </View>
        </ScrollView>

        {/* الشريط الجانبي */}
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
