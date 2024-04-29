import { View, Image } from 'react-native'
import Animated  from 'react-native-reanimated'

const EmojiSticker = ({imageSize, stickerSource}) => {
  return (
    <View style={{top: -350}} >
        <Animated.Image source={stickerSource} style={{width: imageSize, height: imageSize}} resizeMode="contain" />
    </View>
  )
}

export default EmojiSticker