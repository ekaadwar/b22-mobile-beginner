import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GeneralStyle from "../components/GeneralStyle";

import { signUpOrLogin } from "../assets/image";
import MainButton from "../components/MainButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SignUpAndLogin extends Component {
  render() {
    return (
      <View style={GeneralStyle.parent}>
        <View style={GeneralStyle.container}>
          <Text style={GeneralStyle.titleAuth}>Welcome!</Text>
        </View>

        <View>
          <Image style={GeneralStyle.picture} source={signUpOrLogin} />
        </View>

        <View style={GeneralStyle.mainButtonWrapper}>
          <View style={GeneralStyle.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signUpAndLogin")}
            >
              <MainButton text="Get Started" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
