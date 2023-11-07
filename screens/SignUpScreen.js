import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import Post from "../components/Post";
import Footer from "../components/Footer";
export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View>
    <View
      className="flex flex-row bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 justify-center bg-white px-8 pt-8"
      >
        <SearchBar />
        <Post />
      </View>
    </View>
    <Footer/>
    </View>
  );
}
