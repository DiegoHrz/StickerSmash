import { View, Image } from 'react-native'
import React from 'react'

const EmojiSticker = ({imageSize, stickerSource}) => {
  return (
    <View style={{top: -350}} >
        <Image source={stickerSource} style={{width: imageSize, height: imageSize}} resizeMode="contain" />
    </View>
  )
}

export default EmojiSticker