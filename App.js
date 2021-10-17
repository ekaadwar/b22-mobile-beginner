import "react-native-gesture-handler";

import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./src/screens/HomeScreen";
import ProductDetail from "./src/screens/ProductDetail";
import Cart from "./src/screens/Cart";
import EditProfile from "./src/screens/EditProfile";
import AllMenu from "./src/screens/AllMenu";
import PrivacyPolicy from "./src/screens/PrivacyPolicy";
import Security from "./src/screens/Security";
import { TouchableOpacity } from "react-native-gesture-handler";

import Header from "./src/components/Header";
import DrawerContents from "./src/components/DrawerContents";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class MainStack extends Component {
  render() {
    return (
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
    );
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={drawer.container}
        drawerContent={DrawerContents}
      >
        <Drawer.Screen
          options={{ title: "Main" }}
          name="root"
          component={MainStack}
        />
        <Drawer.Screen
          options={{ title: "Edit Profile" }}
          name="editProfile"
          component={EditProfile}
        />
        <Drawer.Screen
          options={{ title: "Orders" }}
          name="cart"
          component={Cart}
        />
        <Drawer.Screen
          options={{ title: "All Menu" }}
          name="allMenu"
          component={AllMenu}
        />
        <Drawer.Screen
          options={{ title: "Privacy & Policy" }}
          name="privacyPolicy"
          component={PrivacyPolicy}
        />
        <Drawer.Screen
          options={{ title: "Security" }}
          name="security"
          component={Security}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const drawer = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: 324,
  },
});

export default App;
