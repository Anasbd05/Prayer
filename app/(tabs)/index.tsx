import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
const badge = require("../../assets/images/badge.png");

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

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View
        style={tw` flex gap-10 mt-8 bg-[#001529ff] p-5 items-center flex-row `}
      >
        <AntDesign name="menu" size={22} color="white" />
        <Text style={tw` text-white font-bold text-2xl `}>Pray</Text>
      </View>

      <View style={tw` flex flex-col mt-10 items-center`}>
        <Image
          source={badge}
          style={tw`h-44 z-50 w-44 bg-gray-100 border-2 border-black rounded-full`}
        />
        <View
          style={tw`bg-white h-38 absolute top-30 w-80 justify-center flex flex-col gap-1 items-center rounded-2xl `}
        >
          <Text style={tw` text-black text-xl mt-10 font-semibold `}>Good</Text>
          <Text style={tw` text-black font-medium text-neutral-800 `}>
            Current Badge
          </Text>
        </View>
        {isRunning ? (
          <View style={tw`flex flex-col mt-45 items-center px-4`}>
            <View style={tw`flex flex-row gap-3 justify-center`}>
              <CountdownBox value={time.days} label="days" />
              <CountdownBox value={time.hours} label="hours" />
              <CountdownBox value={time.minutes} label="min" />
              <CountdownBox value={time.secs} label="sec" />
            </View>
            <Pressable
              onPress={() => setIsRunning(false)}
              style={tw`bg-red-600 mt-6 py-3 px-10 rounded-lg `}
            >
              <Text style={tw`text-xl font-medium text-center text-white`}>
                Stop
              </Text>
            </Pressable>
          </View>
        ) : (
          <View style={tw`flex flex-col mt-45 items-center px-4`}>
            {totalSeconds > 0 && (
              <View style={tw`flex flex-row gap-3 justify-center mb-6`}>
                <CountdownBox value={time.days} label="days" />
                <CountdownBox value={time.hours} label="hours" />
                <CountdownBox value={time.minutes} label="min" />
                <CountdownBox value={time.secs} label="sec" />
              </View>
            )}
            <View style={tw`flex flex-row gap-4 items-center px-4`}>
              <Pressable
                onPress={() => setIsRunning(true)}
                style={tw`bg-green-600 py-3 px-8 rounded-lg `}
              >
                <Text style={tw`text-xl font-medium text-center text-white`}>
                  {totalSeconds > 0 ? "Resume" : "Start"}
                </Text>
              </Pressable>
              {totalSeconds > 0 && (
                <Pressable
                  onPress={handleReset}
                  style={tw`bg-red-600 py-3 px-8 rounded-lg `}
                >
                  <Text style={tw`text-xl font-medium text-center text-white`}>
                    Reset
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
