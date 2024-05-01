import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

import React, { useRef, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import ImageViewer from "../components/image";
import Button from "../components/pressable";
import CircleButton from "../components/circleButton";
import IconButton from "../components/iconButton";
import EmojiPicker from "../components/emojiPicker";
import EmojiList from "../components/emojiList";
import EmojiSticker from "../components/emojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";

const Placeholder = require("../assets/images/background-image.png");

const RootLayout = () => {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const [status, requestPermission] = MediaLibrary.usePermissions();

  const imageRef = useRef();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log("selectedImage:", selectedImage);

      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(true);
    console.log("isModalVisible", isModalVisible);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  if (status === null) {
    requestPermission();
  }

  return (
    <GestureHandlerRootView className="flex-1 justify-center items-center bg-[#25292e]">
      <View className="flex-1 pt-[58]">
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            placeholderImageSource={Placeholder}
            selectedImage={selectedImage}
          />
          {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )}
        </View>
      </View>
      {showAppOptions ? (
        <View className="absolute bottom-[140]">
          <View className="flex-row items-center">
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
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
      {console.log(EmojiPicker)}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onCloseModal={onModalClose} onSelect={setPickedEmoji} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
