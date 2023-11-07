import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

const Footer = () => {
  return (
    <View className="fixed bottom-14 z-10 ">
      <View className="flex flex-row items-center justify-center p-1 mt-0 bg-white text-gray-700 rounded-2xl">
        <View className="mx-3.5">
          <Image
            className=" ml-1 w-6 h-6"
            source={require("../assets/icons/Event.png")}
          />
          <Text className="text-xs">Event</Text>
        </View>
        <View className="mx-3.5">
          <Image
            className=" ml-1 w-6 h-6"
            source={require("../assets/icons/Search.png")}
          />
          <Text className="text-xs">Search</Text>
        </View>
        <View className="mx-3.5">
          <View className="flex flex-row justify-center">
            <Image
              className=" ml-1 w-6 h-6"
              source={require("../assets/icons/Community.png")}
            />
            </View>
            <Text className="text-xs text-green-600">Community</Text>
          </View>
        <View className="mx-3.5">
          <Image
            className=" ml-1 w-6 h-6"
            source={require("../assets/icons/message-2.png")}
          />
          <Text className="text-xs">chats</Text>
        </View>
        <View className="mx-3.5">
          <Image
            className=" ml-1 w-6 h-6"
            source={require("../assets/icons/profile-IC.png")}
          />
          <Text className="text-xs">profile</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
