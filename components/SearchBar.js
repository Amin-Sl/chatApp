import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

const SearchBar = () => {
  return (
      <View>
        <View className="flex flex-row items-center justify-between p-1 mt-0 bg-gray-100 text-gray-700 rounded-2xl">
          <View className="flex flex-row items-center">
            <Image
              className=" ml-1 w-7 h-7"
              source={require("../assets/icons/Search.png")}
            />
            <TextInput
              secureTextEntry
              className="w-32 p-3"
              placeholder="Search in posts"
            />
          </View>
          <View className="flex flex-row items-center">
            <Image
              className=" ml-1 w-6 h-6"
              source={require("../assets/icons/location.png")}
            />
            <View className="">
              <Text className="text-green-600 text-xs font-semibold">
                Seattle
              </Text>
              <Text className="text-green-600 text-xs font-semibold">25mi</Text>
            </View>
          </View>
        </View>
      </View>
  );
};

export default SearchBar;
