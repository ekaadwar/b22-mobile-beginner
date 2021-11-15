import React from "react";
import { StyleSheet, View } from "react-native";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const RATIO = 0.8;

const CircleButton = ({
  icon = "check",
  size = 50,
  color = "silver",
  iconSize = 15,
  iconColor = "black",
}) => {
  const styles = StyleSheet.create({
    parent: {
      backgroundColor: color,
      width: size * RATIO,
      height: size * RATIO,
      borderRadius: 9999,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.parent}>
      <MaterialIcon name={icon} size={iconSize} color={iconColor} />
    </View>
  );
};

export default CircleButton;

// love, delete
