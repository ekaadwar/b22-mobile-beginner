import "react-native-gesture-handler";

import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetail from "./src/screens/ProductDetail";

const Stack = createStackNavigator();

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
          <Stack.Screen component={ProductDetail} name="detail" />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
