import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GeneralStyle from "../components/GeneralStyle";

import { forgotPassword } from "../assets/image";
import MainButton from "../components/MainButton";
import { ScrollView } from "react-native-gesture-handler";

export default class SignUpAndLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  render() {
    return (
      <View style={GeneralStyle.parent}>
        <ScrollView>
          <View style={GeneralStyle.container}>
            <Text style={[GeneralStyle.titleAuth, GeneralStyle.textCenter]}>
              Don’t Worry!
            </Text>
            <Text style={[GeneralStyle.subTitle, styles.subTitle]}>
              Enter your email adress to get reset password link
            </Text>
          </View>

          <View>
            <Image style={GeneralStyle.picture} source={forgotPassword} />
          </View>

          <View style={[GeneralStyle.section, GeneralStyle.container]}>
            <TextInput
              secureTextEntry={true}
              style={GeneralStyle.inputAuth}
              placeholder="Enter your email address"
              placeholderTextColor="#9A9A9D"
              defaultValue={this.state.email}
            />
          </View>

          <View style={[GeneralStyle.section, GeneralStyle.container]}>
            <Text style={GeneralStyle.textCenter}>
              Haven’t received any link?
            </Text>
          </View>
        </ScrollView>

        <View style={GeneralStyle.mainButtonWrapper}>
          <View style={GeneralStyle.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
            >
              <MainButton text="Resend Link" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subTitle: {
    marginVertical: 10,
  },
});
