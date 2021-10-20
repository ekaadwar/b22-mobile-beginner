import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import MainButton from "../components/MainButton";

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.titleWrapper}>
          <MaterialIcons name="swipe" size={16} />
          <Text style={styles.mainTitle}>swipe on an item to delete</Text>
        </View>

        <View></View>

        {MainButton("Confirm and Checkout")}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    paddingTop: 80,
    backgroundColor: "#f7f0f0",
    height: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    position: "relative",
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 10,
    marginLeft: 10,
  },
});
