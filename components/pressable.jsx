import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Button = ({ label, theme, onPress }) => {
  if (theme === "primary") {
    return (
      <View
        className="w-80 h-[68px]  items-center justify-center p-1"
        style={{
          marginHorizontal: 20,
          borderWidth: 4,
          borderColor: "#ffd33d",
          borderRadius: 18,
        }}
      >
        <Pressable
          onPress={onPress}
          className="flex-row rounded-[10px] w-full h-full items-center justify-center bg-[#fff] "
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={{ paddingRight: 8 }}
          />
          <Text style={{ fontSize: 16, color: "#25292e" }}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View
      className="w-80 h-[68]  items-center justify-center p-3"
      style={{ marginHorizontal: 20 }}
    >
      <Pressable
        onPress={() => {
          alert("Alerta Baby");
        }}
        className="flex rounded-[10] w-full h-full items-center justify-center "
      >
        <Text className="text-[#fff]" style={{ fontSize: 16 }}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
