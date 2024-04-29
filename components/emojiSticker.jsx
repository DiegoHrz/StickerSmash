import { View, Image } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const EmojiSticker = ({imageSize, stickerSource}) => {
    const scaleImage = useSharedValue(imageSize);

  return (
    <View style={{top: -350}} >
        <Animated.Image source={stickerSource} style={{width: imageSize, height: imageSize}} resizeMode="contain" />
    </View>
  )
}

export default EmojiSticker