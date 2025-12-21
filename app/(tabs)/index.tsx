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

const NSbadge = require("../../assets/images/NSbadge.png");

export default function Index() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedNight, setSelectedNight] = useState<string | null>(null);

  // ✅ NEW: per-night status
  const [nightStatus, setNightStatus] = useState<
    Record<string, "yes" | "no" | "remove">
  >({});

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

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`flex-1`}>
        {/* Header */}
        <View
          style={tw`flex-row justify-between items-center bg-[#001529ff] p-5`}
        >
          <Pressable onPress={() => setShowMenu(true)}>
            <AntDesign name="menu" size={22} color="white" />
          </Pressable>
          <Text style={tw`text-white text-2xl font-bold`}>قيام الليل</Text>
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={tw`mt-10`}>
          <View style={tw`flex flex-col mt-10 items-center`}>
            <Image source={NSbadge} style={tw`h-54 z-50 w-54`} />
            <View
              style={tw`bg-white h-38 absolute top-30 w-80 justify-center items-center rounded-2xl`}
            >
              <Text style={tw`text-black text-xl mt-10 font-semibold`}>
                طالب الليل
              </Text>
              <Text style={tw`text-neutral-800`}>الوسام الحالي</Text>
            </View>
          </View>
          <View style={tw`my-24 mt-28`}>
            <Text style={tw`text-xl p-5 text-right font-semibold text-white`}>
              ليالي قيام الليل:
            </Text>

            {/* Nights Grid */}
            <View
              style={tw`flex flex-row flex-wrap w-full items-center justify-center gap-x-3 gap-y-6`}
            >
              {Nights.map((night) => (
                <Pressable
                  key={night.id}
                  style={tw`w-15 h-24 rounded-xl flex items-center justify-center border
                    ${
                      nightStatus[night.night] === "yes"
                        ? "bg-green-500"
                        : nightStatus[night.night] === "no"
                        ? "bg-[#f53649]"
                        : "bg-slate-900 border-slate-700"
                    }
                  `}
                  onPress={() => {
                    setSelectedNight(night.night);
                    setShowModal(true);
                  }}
                >
                  {nightStatus[night.night] === "yes" ? (
                    <MaterialCommunityIcons
                      name="check"
                      size={26}
                      color="#fff"
                    />
                  ) : nightStatus[night.night] === "no" ? (
                    <MaterialCommunityIcons
                      name="close"
                      size={26}
                      color="#fff"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="torch"
                      size={26}
                      style={{ transform: [{ rotate: "-90deg" }] }}
                      color="#FF8100"
                    />
                  )}

                  <Text style={tw`text-xl mt-2 font-semibold text-white`}>
                    {night.night}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Side Menu */}
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

        {/* Modal */}
        {showModal && selectedNight && (
          <View
            style={tw`absolute inset-0 z-50 items-center justify-center bg-black/80`}
          >
            <View
              style={tw`w-11/12 max-w-md rounded-2xl bg-[#001529ff] border border-slate-700 p-6`}
            >
              <View
                style={tw`flex-row-reverse justify-between items-center mb-4`}
              >
                <Text style={tw`text-white text-xl font-bold`}>
                  الليلة {selectedNight}
                </Text>

                <Pressable
                  onPress={() => setShowModal(false)}
                  style={tw`w-9 h-9 rounded-full bg-slate-800 items-center justify-center`}
                >
                  <AntDesign name="close" size={18} color="#cbd5e1" />
                </Pressable>
              </View>

              <Text style={tw`text-slate-300 text-right mb-6 leading-6`}>
                هل قمتَ بقيام الليل في هذه الليلة؟
              </Text>

              <View>
                <View style={tw`flex-row justify-between gap-3`}>
                  {/* NO */}
                  <Pressable
                    onPress={() => {
                      setNightStatus((prev) => ({
                        ...prev,
                        [selectedNight]: "no",
                      }));
                      setShowModal(false);
                    }}
                    style={tw`w-2/4 py-2 rounded-lg bg-red-500`}
                  >
                    <Text
                      style={tw`text-slate-300 text-lg text-center font-bold`}
                    >
                      لا
                    </Text>
                  </Pressable>

                  {/* YES */}
                  <Pressable
                    onPress={() => {
                      setNightStatus((prev) => ({
                        ...prev,
                        [selectedNight]: "yes",
                      }));
                      setShowModal(false);
                    }}
                    style={tw`w-2/4 py-2 rounded-lg bg-green-600`}
                  >
                    <Text
                      style={tw`text-slate-300 text-lg text-center font-bold`}
                    >
                      نعم
                    </Text>
                  </Pressable>
                </View>
                <Pressable
                  onPress={() => {
                    setNightStatus((prev) => ({
                      ...prev,
                      [selectedNight]: "remove",
                    }));
                    setShowModal(false);
                  }}
                  style={tw`w-full py-2 mt-8 rounded-lg bg-black border border-slate-700`}
                >
                  <Text style={tw`text-white text-lg font-bold text-center`}>
                    Remove
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
