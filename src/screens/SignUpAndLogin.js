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
          <Text style={[GeneralStyle.titleAuth, GeneralStyle.textCenter]}>
            Welcome!
          </Text>
          <Text style={GeneralStyle.subTitle}>
            Get a cup of coffee for free only for new user
          </Text>
        </View>

        <View>
          <Image style={GeneralStyle.picture} source={signUpOrLogin} />
        </View>

        <View style={GeneralStyle.mainButtonWrapper}>
          <View style={GeneralStyle.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signUp")}
              style={styles.mb10}
            >
              <MainButton text="Create New Account" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
            >
              <MainButton text="Login" color="#FFBA33" textColor="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mb10: {
    marginBottom: 10,
  },
});
