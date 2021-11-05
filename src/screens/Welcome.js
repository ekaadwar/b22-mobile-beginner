import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GeneralStyle from "../components/GeneralStyle";

import { welcome } from "../assets/image";
import MainButton from "../components/MainButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={GeneralStyle.container}>
          <Text style={GeneralStyle.titleAuth}>Coffee for Everyone</Text>
        </View>

        <View>
          <Image style={styles.picture} source={welcome} />
        </View>

        <View style={GeneralStyle.mainButtonWrapper}>
          <View style={GeneralStyle.container}>
            <TouchableOpacity>
              <MainButton text="Get Started" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    paddingTop: 80,
    backgroundColor: "#f7f0f0",
    height: "100%",
    alignItems: "stretch",
    position: "relative",
  },
  picture: {
    resizeMode: "contain",
    width: "100%",
  },
});
