import React from "react";
import { StyleSheet } from "react-native";

const GeneralStyle = StyleSheet.create({
  parent: {
    paddingTop: 80,
    backgroundColor: "#f7f0f0",
    height: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    position: "relative",
    paddingBottom: 120,
  },
  mainButtonWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  wFull: {
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default GeneralStyle;
