import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ label }) => {
  return (
    <View className="w-80 h-[68]  items-center justify-center p-3" style={{marginHorizontal: 20}} >
      <Pressable
        onPress={() => {
          alert("Alerta Baby");
        }}
        className="flex rounded-[10] w-full h-full items-center justify-center "
      >
        <Text className="text-[#fff]" style={{fontSize:16}} >{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
