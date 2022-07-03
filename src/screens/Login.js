import React, { useState } from "react";
import GeneralStyle from "../components/GeneralStyle";
import MainButton from "../components/MainButton";
import SeparatorVertical from "../components/SeparatorVertical";
// import toastMessage from "../utils/showMessage";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signInAction } from "../redux/actions/auth";
import { login } from "../assets/image";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };

  const onSubmit = () => {
    dispatch(signInAction(data, navigation));
  };

  return (
    <View style={[GeneralStyle.parent, styles.parent]}>
      <ScrollView>
        <View style={styles.pictureWrapper}>
          <Text style={[GeneralStyle.titleAuth, styles.titleSignUp]}>
            Sign Up
          </Text>

          <View style={styles.pictureArea}>
            <Image
              style={[GeneralStyle.pictureVertical, styles.picture]}
              source={login}
            />
          </View>
        </View>

        <View style={GeneralStyle.container}>
          <View style={GeneralStyle.section}>
            <TextInput
              style={GeneralStyle.inputAuth}
              placeholder="Enter your email address"
              placeholderTextColor="#9A9A9D"
              value={email}
              onChangeText={(value) => setEmail(value)}
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
            <TouchableOpacity
              onPress={() => navigation.navigate("forgotPassword")}
            >
              <Text style={styles.linkText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={GeneralStyle.mainButtonWrapper}>
        <View style={GeneralStyle.container}>
          <TouchableOpacity onPress={() => onSubmit()}>
            <MainButton text="Login" />
          </TouchableOpacity>

          <View style={styles.separatorWrapper}>
            <SeparatorVertical width={1} color="#9F9F9F" top={30} bottom={30} />
            <Text style={styles.separatorText}>or login in with</Text>
          </View>

          <TouchableOpacity>
            <MainButton
              text="Login with Google"
              color="white"
              textColor="black"
              borderWidth={1}
              borderColor="#C7C7C7"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  pictureWrapper: {
    position: "relative",
    height: 250,
  },
  picture: {
    position: "absolute",
    right: -20,
  },
  pictureArea: {
    width: "50%",
    alignItems: "flex-end",
    position: "relative",
    height: "100%",
  },
  titleSignUp: {
    width: 150,
    position: "absolute",
    left: "50%",
    top: 60,
  },
  linkText: {
    fontSize: 12,
    color: "#895537",
    textDecorationLine: "underline",
  },
  parent: {
    paddingBottom: 250,
  },
  separatorWrapper: {
    position: "relative",
  },
  separatorText: {
    position: "absolute",
    backgroundColor: "#f7f0f0",
    width: "50%",
    textAlign: "center",
    left: "25%",
    top: 20,
    height: 21,
  },
});
