import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex flex-row mt-32 justify-center"
      style={{ backgroundColor: themeColors.bg }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className=" text-black text-2xl font-semibold"> Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
