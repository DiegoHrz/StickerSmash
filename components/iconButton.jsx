import { Pressable, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


const IconButton = ({label, icon, onPress }) => {
  return (
    <Pressable className='flex justify-center, items-center' onPress={onPress} >
        <MaterialIcons name={icon} size={38} color="#fff" />
      <Text className='text-white mt-3' >{label}</Text>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({})