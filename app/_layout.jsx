import * as ImagePicker from "expo-image-picker";

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import ImageViewer from "../components/image";
import Button from "../components/pressable";
import CircleButton from "../components/circleButton";
import IconButton from "../components/iconButton";

const Placeholder = require("../assets/images/background-image.png");

const RootLayout = () => {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(selectedImage);

      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {};

  const onSaveImageAsync = async () => {};

  return (
    <View className="flex-1 justify-center items-center bg-[#25292e]">
      <View className="flex-1 pt-[58]">
        <ImageViewer
          placeholderImageSource={Placeholder}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View className="absolute bottom-[140]">
          <View className="flex-row items-center">
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 / 3, alignItems: "center" }}>
          <Button
            theme="primary"
            label="Choose a Photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this Photo"
            onPress={() => {
              setShowAppOptions(true);
            }}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

export default RootLayout;
