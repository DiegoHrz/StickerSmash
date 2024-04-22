import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const ImageBg = ({PlaceholderImageSource}) => {
  return (
    <View>    
        <View>    
            <Image source={PlaceholderImageSource} className='w-80 h-[440px] rounded-[18px] ' />
        </View>
    </View>
  )
}

export default ImageBg

