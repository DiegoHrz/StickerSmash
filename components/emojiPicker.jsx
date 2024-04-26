import { View, Text, Modal, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const EmojiPicker = ({ isVisible, children, onClose }) => {
  return (
    <Modal animationType="slide" visible={isVisible} transparent={true} >
      <View
        className="h-1/4 w-full bg-[#25292e] absolute bottom-0 "
        style={{ borderTopRightRadius: 18, borderTopLeftRadius: 18 }}
      >
        <View
          className=" flex-row justify-between items-center bg-[#464C55] "
          style={{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 20,
            height:'16%',
          }}
        >
          <Text className="text-white text-base">Choose a Sticker</Text>
          <Pressable onPress={onClose} >
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default EmojiPicker;
