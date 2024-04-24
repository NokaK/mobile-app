import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  type: "primary" | "danger";
}
const Button = ({ text, onPress, type }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonWrapper,
        type === "danger"
          ? { backgroundColor: "red" }
          : { backgroundColor: "blue" },
      ]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: 10,

    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    color: "white",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default Button;
