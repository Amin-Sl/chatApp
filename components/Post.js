import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
const Post = () => {
  return (
    <View>
      <View className="mt-3 flex flex-row ">
        <Image source={require("../assets/icons/profile.png")} />
        <View className="mx-2">
          <View className="flex flex-row items-center">
            <Text className="font-semibold">olivia Smith</Text>
            <Text className="text-[10px] mx-1.5">2 h ago</Text>
          </View>
          <Text className="text-xs">Boston</Text>
        </View>
      </View>
      <Text className="text-gray-600 mt-2 font-light">
        Four years of hard practice is working and now I’m officially a team
        me...more
      </Text>
      <Image className="mt-1" source={require("../assets/icons/post.png")} />
      <View className="flex flex-row">
        <View className="flex flex-row ">
          <View className="flex flex-row items-center">
            <Image
              className="mt-1"
              source={require("../assets/icons/HeartR.png")}
            />
            <Text className="text-[10px]  text-gray-700">10</Text>
            <Image
              className="mt-1"
              source={require("../assets/icons/HeartE.png")}
            />
            <Text className="text-[10px]  text-gray-700">2</Text>
            <Image
              className="mt-1"
              source={require("../assets/icons/HeartE.png")}
            />
          </View>
        </View>
      </View>
      <View className="comments mt-5 border-y-[0.6px] py-4 border-gray-400 ">
        <View className="mt-3 flex flex-row justify-between ">
          <View className="flex flex-row">
            <Image source={require("../assets/icons/profile2.png")} />
            <View className="mx-2 flex flex-row">
              <View className="">
                <View className="flex flex-row items-center">
                  <Text className="font-semibold">olivia Smith</Text>
                  <Text className="text-[10px] mx-1.5">2 h ago</Text>
                </View>
                <Text className="text-xs">Boston</Text>
              </View>
            </View>
          </View>
          <View className="">
            <Pressable style={styles.button}>
              <Text style={styles.text}>+</Text>
            </Pressable>
          </View>
        </View>
        <Text className="text-sm font-extralight ml-1">
          being on a vc with my club members and practicing and learning during
          t...
        </Text>
        <View className="flex flex-row items-center justify-between mt-1">
          <View className="flex flex-row">
            <Image
              className="ml-1"
              source={require("../assets/icons/Like.png")}
            />
            <Image
              className="w-7 h-7"
              source={require("../assets/icons/HeartR.png")}
            />
            <Image
              className="w-7 h-7 ml-5"
              source={require("../assets/icons/HeartE.png")}
            />
          </View>
          <Image
              className="w-5 h-5 ml-5"
              source={require("../assets/icons/Save.png")}
            />
        </View>
        <View>
        <View className="mt-3 flex flex-row justify-between ">
          <View className="flex flex-row">
            <Image source={require("../assets/icons/profile2.png")} />
            <View className="mx-2 flex flex-row">
              <View className="">
                <View className="flex flex-row items-center">
                  <Text className="font-semibold">olivia Smith</Text>
                  <Text className="text-[10px] mx-1.5">2 h ago</Text>
                </View>
                <Text className="text-xs">Boston</Text>
              </View>
            </View>
          </View>
          <View className="">
              <Text className="text-xs font-extralight">Following</Text>
          </View>
        </View>
        
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#008855",
  },
  text: {
    color: "white",
  },
});
export default Post;
