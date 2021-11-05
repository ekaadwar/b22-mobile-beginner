import React, { Component } from "react";
import { Text, View } from "react-native";
import GeneralStyle from "../components/GeneralStyle";

export default class Login extends Component {
  render() {
    return (
      <View style={GeneralStyle.parent}>
        <Text>Login</Text>
      </View>
    );
  }
}
