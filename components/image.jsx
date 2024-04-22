import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {

  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  return (
    <View>
      <View>
        <Image
          source={imageSource}
          className="w-80 h-[440] rounded-[18px] "
        />
      </View>
    </View>
  );
};

export default ImageViewer;
