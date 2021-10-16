import "react-native-gesture-handler";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetail from "./src/screens/ProductDetail";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import Cart from "./src/screens/Cart";

const Stack = createStackNavigator();

const Header = ({ navigation, scene }) => {
  const titleName = scene.route.name;
  console.log(titleName);

  return (
    <View style={headerStyles.parent}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome
          name="chevron-left"
          size={20}
          color={titleName === "detail" ? "white" : "black"}
        />
      </TouchableOpacity>
      {titleName === "detail" && (
        <TouchableOpacity onPress={() => navigation.navigate("cart")}>
          <AntDesign name="shoppingcart" size={20} color="silver" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const headerStyles = StyleSheet.create({
  parent: {
    // backgroundColor: "#362115",
    height: 80,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 30,
    flexDirection: "row",
  },
});

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={HomeScreen}
            name="home"
            options={{ title: "Dashboard" }}
          />
          <Stack.Screen
            component={ProductDetail}
            options={{
              header: Header,
              cardStyle: { backgroundColor: "transparent" },
              headerTransparent: true,
            }}
            name="detail"
          />
          <Stack.Screen
            component={Cart}
            options={{
              header: Header,
              cardStyle: { backgroundColor: "transparent" },
              headerTransparent: true,
            }}
            name="cart"
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
