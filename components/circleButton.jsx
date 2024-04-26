import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const CircleButton = ({onPress}) => {
  return (
    <View
      className="w-[84px] h-[84px] p-1"
      style={{ marginHorizontal: 60, borderWidth: 4, borderColor: "#ffd33d", borderRadius: 42 }}
    >
      <Pressable className="flex-1 justify-center items-center bg-[#fff]" style={{borderRadius: 42}} onPress={onPress} >
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
};

export default CircleButton;
