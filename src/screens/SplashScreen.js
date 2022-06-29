import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { BGSplashScreen, welcome } from "../assets/image";
import { getData } from "../utils/storage";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      getData("token").then((res) => {
        if (res) {
          navigation.reset({ index: 0, routes: [{ name: "Main" }] });
        } else {
          navigation.replace("welcome");
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground style={styles.picture} source={welcome}>
          <Text style={styles.text}>Coffee For Everyone</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    backgroundColor: "#000000a0",
    flex: 1,
    color: "#fff",
    fontSize: 65,
    fontWeight: "bold",
    paddingTop: 209,
    textAlign: "center",
  },
});
