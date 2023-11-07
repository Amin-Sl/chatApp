import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex "></SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <Text className="text-lg mb-[40px] font-bold text-center mt-10 text-gray-600">
            Log in to TennisLand
          </Text>
          <View className="flex flex-row justify-center items-center mb-5 bg-gray-100 p-1 rounded-2xl">
            <Text className=" py-2 w-1/2 text-center rounded-xl font-medium bg-white">
              Email
            </Text>
            <Text className="px-7 text-sm text-gray-400">PhoneNumber</Text>
          </View>
          <Text className="text-gray-400 bg-white w-14 text-center mb-[-20px] z-10 ml-4">
            Email
          </Text>
          <TextInput
            className="p-4 border  border-gray-400 bg-white text-gray-700 rounded-2xl mb-3"
            // placeholder="email"
          />
          <Text className="text-gray-400 bg-white w-16 text-center mb-[-20px] text-xs z-10 ml-4">
            Password
          </Text>
          <TextInput
            className="p-4 border border-gray-400 bg-white text-gray-700 rounded-2xl"
            secureTextEntry
          />
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-700 mb-5">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 bg-green-700 rounded-xl">
            <Text className="text-base font-bold text-center text-white">
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row my-10 ">
          <View className="border-b border-gray-300 mt-3  w-1/3 h-1" />
          <Text className="text-base  text-gray-500 px-1 font-medium text-center pt-1">
            Or continue with
          </Text>
          <View className="border-b border-gray-300 mt-3  w-1/3 h-1" />
        </View>

        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            New to TennisLand?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="font-semibold text-green-700"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  horizontalLine: {},
});
