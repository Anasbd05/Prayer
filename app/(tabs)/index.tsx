import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
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

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <View style={tw`p-2 bg-[#001529ff] rounded-md items-center`}>
    <Text style={tw`font-mono text-4xl text-white font-bold`}>
      {value.toString().padStart(2, "0")}
    </Text>
    <Text style={tw`text-white text-sm mt-1`}>{label}</Text>
  </View>
);

export default function Index() {
  const [isRunning, setIsRunning] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [badgeImage, setBadgeImage] = useState<any>(null);
  const [badgeTitle, setBadgeTitle] = useState("");

  // تحميل البيانات
  useEffect(() => {
    const loadData = async () => {
      const startTime = await AsyncStorage.getItem("qiyamStartTime");
      const running = await AsyncStorage.getItem("qiyamIsRunning");
      const savedSeconds = await AsyncStorage.getItem("qiyamTotalSeconds");

      if (running === "true" && startTime) {
        const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
        setTotalSeconds(elapsed);
        setIsRunning(true);
      } else if (savedSeconds) {
        setTotalSeconds(parseInt(savedSeconds));
      }
    };
    loadData();
  }, []);

  // تشغيل العداد
  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // حفظ البيانات
  useEffect(() => {
    if (isRunning) {
      AsyncStorage.setItem("qiyamStartTime", Date.now().toString());
      AsyncStorage.setItem("qiyamIsRunning", "true");
    } else {
      AsyncStorage.setItem("qiyamTotalSeconds", totalSeconds.toString());
      AsyncStorage.setItem("qiyamIsRunning", "false");
    }
  }, [isRunning, totalSeconds]);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // تحديد الوسام
  useEffect(() => {
    if (days >= 30) {
      setBadgeImage(CQbadge);
      setBadgeTitle("رفيقُ القيام");
    } else if (days >= 20) {
      setBadgeImage(LNbadge);
      setBadgeTitle("نورٌ في الظلام");
    } else if (days >= 15) {
      setBadgeImage(Gbadge);
      setBadgeTitle("حارسُ الليل");
    } else if (days >= 10) {
      setBadgeImage(CWbadge);
      setBadgeTitle("مواظبٌ على العبادة");
    } else if (days >= 7) {
      setBadgeImage(NSbadge);
      setBadgeTitle("طالبُ الليل");
    } else if (days >= 5) {
      setBadgeImage(SHbadge);
      setBadgeTitle("قلبٌ ثابت");
    } else if (days >= 3) {
      setBadgeImage(RSbadge);
      setBadgeTitle("روحٌ ناهضة");
    } else if (days <= 1) {
      setBadgeImage(FNbadge);
      setBadgeTitle("الليلة الأولى");
    }
  }, [days]);

  const handleReset = async () => {
    setIsRunning(false);
    setTotalSeconds(0);
    await AsyncStorage.multiRemove([
      "qiyamStartTime",
      "qiyamTotalSeconds",
      "qiyamIsRunning",
    ]);
  };

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
        <ScrollView contentContainerStyle={tw`items-center mt-10`}>
          {badgeImage && (
            <View style={tw`flex flex-col mt-10 items-center`}>
              <Image source={badgeImage} style={tw`h-54 z-50 w-54`} />
              <View
                style={tw`bg-white h-38 absolute top-30 w-80 justify-center flex flex-col gap-1 items-center rounded-2xl`}
              >
                <Text style={tw`text-black text-xl mt-10 font-semibold`}>
                  {badgeTitle}
                </Text>
                <Text style={tw`text-black font-medium text-neutral-800`}>
                  الوسام الحالي
                </Text>
              </View>
            </View>
          )}

          {(isRunning || totalSeconds > 0) && (
            <View style={tw`flex-row gap-3 mt-30`}>
              <CountdownBox value={days} label="أيام" />
              <CountdownBox value={hours} label="ساعات" />
              <CountdownBox value={minutes} label="دقائق" />
              <CountdownBox value={seconds} label="ثوانٍ" />
            </View>
          )}

          <View style={tw`flex-row gap-4 mt-10`}>
            {!isRunning ? (
              <Pressable
                onPress={() => setIsRunning(true)}
                style={tw`bg-green-600 px-8 py-3 rounded-lg`}
              >
                <Text style={tw`text-white text-xl`}>بدء</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={handleReset}
                style={tw`bg-red-600 px-8 py-3 rounded-lg`}
              >
                <Text style={tw`text-white text-xl`}>إعادة ضبط</Text>
              </Pressable>
            )}
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
