import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import GeneralStyle from "../components/GeneralStyle";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { signUpAction } from "../redux/actions/auth";
import { signUp } from "../assets/image";
import MainButton from "../components/MainButton";
import toastMessage from "../utils/showMessage";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const formData = {
    email,
    password,
    phone,
  };

  const onSubmit = () => {
    if (email === "" || password === "" || phone === "") {
      toastMessage("form cannot be empty!");
    } else {
      email.includes("@")
        ? dispatch(signUpAction(formData, navigation))
        : // ? toastMessage(phone, "success")
          toastMessage("wrong email");
    }
  };

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
              value={email}
              onChangeText={(value) => setEmail(value)}
              keyboardType="email-address"
            />
          </View>

          <View style={GeneralStyle.section}>
            <TextInput
              secureTextEntry={true}
              style={GeneralStyle.inputAuth}
              placeholder="Enter your password"
              placeholderTextColor="#9A9A9D"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <View style={GeneralStyle.section}>
            <TextInput
              style={GeneralStyle.inputAuth}
              placeholder="Enter your phone number"
              placeholderTextColor="#9A9A9D"
              value={phone}
              keyboardType="numeric"
              onChangeText={(value) => setPhone(value)}
            />
          </View>
        </View>
      </ScrollView>

      <View style={GeneralStyle.mainButtonWrapper}>
        <View style={GeneralStyle.container}>
          <TouchableOpacity onPress={onSubmit}>
            <MainButton text="Create Account" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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

export default SignUp;
