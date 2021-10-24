import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RATIO = 0.8;

const MainButton = ({ text = "Submit" }) => {
  return (
    <View style={mainButtonStyles.button}>
      <Text style={mainButtonStyles.buttonText}>{text}</Text>
    </View>
  );
};

const mainButtonStyles = StyleSheet.create({
  button: {
    height: 70 * RATIO,
    backgroundColor: "#6A4029",
    borderRadius: 20 * RATIO,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default MainButton;
