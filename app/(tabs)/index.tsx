// النسخة المحسّنة مع إصلاحات وتحسينات

import AntDesign from "@expo/vector-icons/AntDesign";
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
const badgeImg = require("../../assets/images/NSbadge.png");

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <View
    style={tw`flex flex-col p-2 bg-[#001529ff] rounded-md justify-center items-center`}
  >
    <Text
      style={tw`font-mono text-5xl text-white font-bold text-neutral-content`}
    >
      {value.toString().padStart(2, "0")}
    </Text>
    <Text style={tw`text-neutral-content text-sm text-white mt-1`}>
      {label}
    </Text>
  </View>
);

export default function Index() {
  const [isRunning, setIsRunning] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const calculateTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return { days, hours, minutes, secs };
  };

  const time = calculateTime(totalSeconds);

  const handleReset = () => {
    setIsRunning(false);
    setTotalSeconds(0);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`flex flex-row h-full relative`}>
        {/* المحتوى الرئيسي */}
        <View style={tw`w-full`}>
          {/* العنوان */}
          <View
            style={tw`flex gap-10 justify-between mt-5 bg-[#001529ff] p-5 items-center flex-row`}
          >
            <Pressable onPress={() => setShowMenu(true)}>
              <AntDesign name="menu" size={22} color="white" />
            </Pressable>
            <Text style={tw`text-white font-bold text-2xl`}>قيام الليل</Text>
          </View>

          {/* قسم الوسام */}
          <View style={tw`flex flex-col mt-10 items-center`}>
            <Image source={badgeImg} style={tw`h-54 z-50 w-54`} />
            <View
              style={tw`bg-white h-38 absolute top-30 w-80 justify-center flex flex-col gap-1 items-center rounded-2xl`}
            >
              <Text style={tw`text-black text-xl mt-10 font-semibold`}>
                الليلة الأولى
              </Text>
              <Text style={tw`text-black font-medium text-neutral-800`}>
                الوسام الحالي
              </Text>
            </View>

            {/* عرض المؤقت */}
            <View style={tw`flex flex-col mt-45 items-center px-4`}>
              {(isRunning || totalSeconds > 0) && (
                <View style={tw`flex flex-row gap-3 justify-center mb-6`}>
                  <CountdownBox value={time.days} label="أيام" />
                  <CountdownBox value={time.hours} label="ساعات" />
                  <CountdownBox value={time.minutes} label="دقائق" />
                  <CountdownBox value={time.secs} label="ثوانٍ" />
                </View>
              )}

              {/* أزرار التحكم */}
              <View style={tw`flex flex-row gap-4 items-center px-4`}>
                <Pressable
                  onPress={() => setIsRunning(!isRunning)}
                  style={tw`${
                    isRunning ? "bg-red-600" : "bg-green-600"
                  } py-3 px-8 rounded-lg`}
                >
                  <Text style={tw`text-xl font-medium text-center text-white`}>
                    {isRunning
                      ? "إيقاف مؤقت"
                      : totalSeconds > 0
                      ? "متابعة"
                      : "بدء"}
                  </Text>
                </Pressable>

                {totalSeconds > 0 && (
                  <Pressable
                    onPress={handleReset}
                    style={tw`bg-red-600 py-3 px-8 rounded-lg`}
                  >
                    <Text
                      style={tw`text-xl font-medium text-center text-white`}
                    >
                      إعادة ضبط
                    </Text>
                  </Pressable>
                )}
              </View>
            </View>
          </View>
        </View>

        {/* القائمة الجانبية */}
        {showMenu && (
          <ScrollView style={tw`bg-[#001F3D] absolute z-50 h-full w-full`}>
            <View
              style={tw`flex justify-between mt-5 bg-[#001F3D] p-5 items-center flex-row`}
            >
              <Pressable onPress={handleMenuClose}>
                <AntDesign name="close" size={22} color="white" />
              </Pressable>
              <Text style={tw`text-white font-bold text-2xl`}>الأوسمة</Text>
            </View>

            {/* الأوسمة */}
            <View style={tw`flex p-5 flex-col gap-4`}>
              {badges.map((badge, key) => (
                <View key={key} style={tw`flex flex-row items-center gap-2`}>
                  <Image
                    source={badge.BadgeImage}
                    style={tw`h-20 z-50 w-20 mt-1.5`}
                  />
                  <View>
                    <Text style={tw`text-white text-lg font-bold`}>
                      {badge.title}
                    </Text>
                    <Text style={tw`text-white mt-1 text-gray-200`}>
                      {badge.description}
                    </Text>
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
