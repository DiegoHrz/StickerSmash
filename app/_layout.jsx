import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ImageBg from "../components/image";
import Button from "../components/pressable";

const Placeholder = require("../assets/images/background-image.png");

const RootLayout = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#25292e]">
      <View className="flex-1 pt-[58]">
        <ImageBg PlaceholderImageSource={Placeholder} />
      </View>
      <View  style={{ flex: 1 / 3,  alignItems: 'center'}}> 
        <Button label="Choose a Photo"  />
        <Button label="Use this Photo"  />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default RootLayout;
