import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const RATIO = 0.8;

const MainButton = (text = "Submit") => {
  return (
    <TouchableOpacity style={mainButtonStyles.button}>
      <Text style={mainButtonStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const mainButtonStyles = StyleSheet.create({
  button: {
    height: 70 * RATIO,
    width: "100%",
    backgroundColor: "#6A4029",
    borderRadius: 20 * RATIO,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default MainButton;
