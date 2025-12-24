import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
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
  const [showModal, setShowModal] = useState(false);
  const [currentBadge, setCurrentBadge] = useState(FNbadge);
  const [currentBadgeTitle, setCurrentBadgeTitle] = useState("");

  const [completedNights, setCompletedNights] = useState<string[]>([]);
  const [selectedNight, setSelectedNight] = useState<string | null>(null);
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

  useEffect(() => {
    const loadData = async () => {
      const saved = await AsyncStorage.getItem("nightStatus");
      const savedCompleted = await AsyncStorage.getItem("completedNights");
      if (saved) setNightStatus(JSON.parse(saved));
      if (savedCompleted) setCompletedNights(JSON.parse(savedCompleted));
    };
    loadData();
  }, []);

  useEffect(() => {
    if (completedNights.length <= 1) {
      setCurrentBadge(FNbadge);
      setCurrentBadgeTitle("بداية الطريق");
    }
    if (completedNights.length >= 3) {
      setCurrentBadge(RSbadge);
      setCurrentBadgeTitle("روحٌ ناهضة");
    }
    if (completedNights.length >= 5) {
      setCurrentBadge(SHbadge);
      setCurrentBadgeTitle("قلبٌ ثابت");
    }
    if (completedNights.length >= 7) {
      setCurrentBadge(NSbadge);
      setCurrentBadgeTitle("طالبُ الليل");
    }
    if (completedNights.length >= 10) {
      setCurrentBadge(CWbadge);
      setCurrentBadgeTitle("مواظبٌ على العبادة");
    }
    if (completedNights.length >= 15) {
      setCurrentBadge(Gbadge);
      setCurrentBadgeTitle("حارسُ الليل");
    }
    if (completedNights.length >= 20) {
      setCurrentBadge(LNbadge);
      setCurrentBadgeTitle("نورٌ في الظلام");
    }
    if (completedNights.length >= 30) {
      setCurrentBadge(CQbadge);
      setCurrentBadgeTitle("رفيقُ القيام");
    }
  }, [completedNights]);

  const restart = () => {
    try {
      setCompletedNights([]);
      setCurrentBadge(FNbadge);
      setCurrentBadgeTitle("بداية الطريق");
      nightStatus && setNightStatus({});
      AsyncStorage.removeItem("completedNights");
      AsyncStorage.removeItem("nightStatus");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`flex-1`}>
        {/* Header */}
        <View
          style={tw`flex-row justify-between items-center bg-[#001529ff] p-5`}
        >
          <TouchableOpacity onPress={() => setShowMenu(true)}>
            <AntDesign name="menu" size={22} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-2xl font-bold`}>قيام الليل</Text>
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={tw`mt-10`}>
          <View style={tw`flex flex-col mt-10 items-center`}>
            <Image source={currentBadge} style={tw`h-54 z-50 w-54`} />
            <View
              style={tw`bg-white h-38 absolute top-30 w-80 justify-center items-center rounded-2xl`}
            >
              <Text style={tw`text-black text-xl mt-10 font-semibold`}>
                {currentBadgeTitle}
              </Text>
              <Text style={tw`text-neutral-800`}>الوسام الحالي</Text>
            </View>
          </View>
          <View style={tw`mb-16 mt-28`}>
            <View
              style={tw`flex flex-row-reverse justify-between items-center`}
            >
              <Text style={tw`text-xl p-5 text-right font-semibold text-white`}>
                ليالي قيام الليل:
              </Text>
              <Text style={tw`text-xl p-5 text-right font-semibold text-white`}>
                {completedNights.length}/{Nights.length}
              </Text>
            </View>

            {/* Nights Grid */}
            <View
              style={tw`flex flex-row flex-wrap w-full items-center justify-center gap-x-3 gap-y-6`}
            >
              {Nights.map((night) => (
                <TouchableOpacity
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
                </TouchableOpacity>
              ))}
            </View>
            {completedNights.length !== 0 && (
              <TouchableOpacity
                onPress={restart}
                style={tw`bg-red-600 p-4 mt-6 mx-5 rounded-lg`}
              >
                <Text style={tw`text-white text-lg font-bold text-center`}>
                  البدء من جديد
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>

        {/* Side Menu */}
        {showMenu && (
          <ScrollView style={tw`absolute bg-[#001F3D] h-full w-full z-50`}>
            <View style={tw`flex-row justify-between p-5`}>
              <TouchableOpacity onPress={() => setShowMenu(false)}>
                <AntDesign name="close" size={22} color="white" />
              </TouchableOpacity>
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

                <TouchableOpacity
                  onPress={() => setShowModal(false)}
                  style={tw`w-9 h-9 rounded-full bg-slate-800 items-center justify-center`}
                >
                  <AntDesign name="close" size={18} color="#cbd5e1" />
                </TouchableOpacity>
              </View>

              <Text style={tw`text-slate-300 text-right mb-6 leading-6`}>
                هل قمتَ بقيام الليل في هذه الليلة؟
              </Text>

              <View>
                <View style={tw`flex-row justify-between gap-3`}>
                  {/* NO */}
                  <TouchableOpacity
                    onPress={async () => {
                      const newStatus: Record<string, "yes" | "no" | "remove"> =
                        {
                          ...nightStatus,
                          [selectedNight]: "no",
                        };
                      setNightStatus(newStatus);
                      await AsyncStorage.setItem(
                        "nightStatus",
                        JSON.stringify(newStatus)
                      );
                      setShowModal(false);
                    }}
                    style={tw`w-2/4 py-2 rounded-lg bg-red-500`}
                  >
                    <Text
                      style={tw`text-slate-300 text-lg text-center font-bold`}
                    >
                      لا
                    </Text>
                  </TouchableOpacity>

                  {/* YES */}
                  <TouchableOpacity
                    onPress={async () => {
                      const newStatus: Record<string, "yes" | "no" | "remove"> =
                        {
                          ...nightStatus,
                          [selectedNight]: "yes",
                        };
                      setNightStatus(newStatus);
                      await AsyncStorage.setItem(
                        "nightStatus",
                        JSON.stringify(newStatus)
                      );

                      const updatedNights = completedNights.includes(
                        selectedNight
                      )
                        ? completedNights
                        : [...completedNights, selectedNight];
                      setCompletedNights(updatedNights);
                      await AsyncStorage.setItem(
                        "completedNights",
                        JSON.stringify(updatedNights)
                      );
                      setShowModal(false);
                    }}
                    style={tw`w-2/4 py-2 rounded-lg bg-green-600`}
                  >
                    <Text
                      style={tw`text-slate-300 text-lg text-center font-bold`}
                    >
                      نعم
                    </Text>
                  </TouchableOpacity>
                </View>
                {(nightStatus[selectedNight] === "yes" ||
                  nightStatus[selectedNight] === "no") && (
                  <TouchableOpacity
                    onPress={async () => {
                      const newStatus: Record<string, "yes" | "no" | "remove"> =
                        {
                          ...nightStatus,
                          [selectedNight]: "remove",
                        };
                      setNightStatus(newStatus);
                      await AsyncStorage.setItem(
                        "nightStatus",
                        JSON.stringify(newStatus)
                      );

                      const updatedNights = completedNights.filter(
                        (night) => night !== selectedNight
                      );
                      setCompletedNights(updatedNights);
                      await AsyncStorage.setItem(
                        "completedNights",
                        JSON.stringify(updatedNights)
                      );
                      setShowModal(false);
                    }}
                    style={tw`w-full py-2 mt-8 rounded-lg bg-black border border-slate-700`}
                  >
                    <Text style={tw`text-white text-lg font-bold text-center`}>
                      حذف الحالة
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
