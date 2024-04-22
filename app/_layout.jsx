import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ImageBg from "../components/image";

const Placeholder = require("../assets/images/background-image.png");

const RootLayout = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#25292e]">
      <View className='flex-1 pt-[58]' >
        <ImageBg PlaceholderImageSource={Placeholder} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default RootLayout;
