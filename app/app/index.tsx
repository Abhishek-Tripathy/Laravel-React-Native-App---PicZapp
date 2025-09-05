import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useTheme } from "@/context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";

type Feature = {
  icon: string;
  text: string;
  description: string;
};

const features: Feature[] = [
  { icon: "🎨", text: "Recolor Images", description: "Choose Arbitrary Color" },
  { icon: "📸", text: "Restore Photos", description: "In Excellent Quality" },
  { icon: "✨", text: "Generative Fill", description: "Smart Expand" },
  { icon: "🎯", text: "Remove Objects", description: "Clean Removal" },
];

export default function WelcomeScreen() {
  const colors = useThemeColors();
  const { currentTheme } = useTheme();
  return (
    <SafeAreaView
      className={`flex-1 ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={true}
      >
        <View className="items-center px-5 pt-10">
          <Image
            source={require("../assets/images/landing.png")}
            className="w-[120px] h-[120px] mb-1"
            resizeMode="contain"
          />
          <Text
            className={`text-[28px] font-bold text-center mb-3 ${currentTheme === "dark" ? "text-gray-100" : "text-gray-900"}`}
          >
            PicZapp
          </Text>

          <Text
            className={`text-base text-center leading-6 mb-10 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            To transform your images with powerful AI tools - recolor, restore,
            fill and remove objects with just a few taps.
          </Text>

          <View className="flex flex-row flex-wrap justify-between mb-[25px] px-[5px]">
            {features.map((feature, index) => (
              <View
                key={index}
                className={`w-[48%] rounded-2xl p-4 mb-4 ${currentTheme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
              >
                <Text className="text-[36px] mb-3">{feature.icon}</Text>
                <View className="w-full">
                  <Text
                    className={`text-[18px] font-semibold mb-1 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}
                  >
                    {feature.text}
                  </Text>
                  <Text
                    className={`text-sm ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {feature.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View className="p-5 w-full">
          <TouchableOpacity
            className="h-[54px] rounded-xl border-[1.5px] justify-center items-center mb-4"
            style={{ borderColor: colors.primary }}
            onPress={() => router.push("/sign-in")}
          >
            <Text
              className="text-base font-semibold"
              style={{ color: colors.primary }}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <LinearGradient
            colors={["#4F46ES", "#7c3aed"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 12, marginBottom: 16, height: 54 }}
          >
            <TouchableOpacity
              className="h-[54px] justify-center items-center"
              onPress={() => router.push("/sign-up")}
            >
              <Text className="text-base font-semibold text-white">
                Create Account
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text
            className={`text-sm text-center mt-2 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            Start Transforming Your Images Today!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
