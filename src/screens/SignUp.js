import React, { Component } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import GeneralStyle from "../components/GeneralStyle";

import { signUp } from "../assets/image";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../components/MainButton";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone: "",
    };
  }

  render() {
    return (
      <View style={GeneralStyle.parent}>
        <ScrollView>
          <View style={styles.pictureWrapper}>
            <Text style={[GeneralStyle.titleAuth, styles.titleSignUp]}>
              Sign Up
            </Text>

            <Image style={GeneralStyle.picture} source={signUp} />
          </View>

          <View style={GeneralStyle.container}>
            <View style={GeneralStyle.section}>
              <TextInput
                style={GeneralStyle.inputAuth}
                placeholder="Enter your email address"
                placeholderTextColor="#9A9A9D"
                defaultValue={this.state.email}
              />
            </View>

            <View style={GeneralStyle.section}>
              <TextInput
                secureTextEntry={true}
                style={GeneralStyle.inputAuth}
                placeholder="Enter your password"
                placeholderTextColor="#9A9A9D"
                defaultValue={this.state.password}
              />
            </View>

            <View style={GeneralStyle.section}>
              <TextInput
                style={GeneralStyle.inputAuth}
                placeholder="Enter your phone number"
                placeholderTextColor="#9A9A9D"
                defaultValue={this.state.phone}
                keyboardType="numeric"
              />
            </View>
          </View>
        </ScrollView>

        <View style={GeneralStyle.mainButtonWrapper}>
          <View style={GeneralStyle.container}>
            <MainButton text="Create Account" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pictureWrapper: {
    position: "relative",
    marginBottom: 20,
  },
  titleSignUp: {
    width: 150,
    position: "absolute",
    right: 0,
    top: 30,
  },
});
