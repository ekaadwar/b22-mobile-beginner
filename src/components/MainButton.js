import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RATIO = 0.8;

const MainButton = ({
  text = "Submit",
  color = "#6A4029",
  textColor = "#fff",
  borderWidth = 0,
  borderColor = "black",
}) => {
  const mainButtonStyles = StyleSheet.create({
    button: {
      height: 70 * RATIO,
      backgroundColor: color,
      borderRadius: 20 * RATIO,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: borderWidth,
      borderColor: borderColor,
    },
    buttonText: {
      color: textColor,
      fontSize: 17,
      fontWeight: "bold",
    },
  });

  return (
    <View style={mainButtonStyles.button}>
      <Text style={mainButtonStyles.buttonText}>{text}</Text>
    </View>
  );
};

export default MainButton;
