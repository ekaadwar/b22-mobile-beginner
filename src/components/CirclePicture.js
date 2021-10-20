import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { defaultPicture } from "../assets/image";

const RATIO = 0.8;

const CirclePicture = (picture = defaultPicture, size = 150) => {
  const styles = StyleSheet.create({
    pictureCircle: {
      width: size * RATIO,
      height: size * RATIO,
      borderRadius: (size * RATIO) / 2,
      backgroundColor: "silver",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    picture: {
      resizeMode: "contain",
      width: "100%",
    },
  });

  return (
    <View style={styles.pictureCircle}>
      <Image style={styles.picture} source={picture} />
    </View>
  );
};

export default CirclePicture;
