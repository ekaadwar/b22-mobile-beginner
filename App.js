import "react-native-gesture-handler";

import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Provider, useSelector } from "react-redux";

import FlashMessage from "react-native-flash-message";
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetail2 from "./src/screens/ProductDetail2";
import Cart from "./src/screens/Cart";
import EditProfile from "./src/screens/EditProfile";
import AllMenu from "./src/screens/AllMenu";
import PrivacyPolicy from "./src/screens/PrivacyPolicy";
import Security from "./src/screens/Security";
import FavoriteProducts from "./src/screens/FavoriteProducts";
import PromoProducts from "./src/screens/PromoProducts";
import Checkout from "./src/screens/Checkout";
import Header from "./src/components/Header";
import HomeHeader from "./src/components/HomeHeader";
import DrawerContents from "./src/components/DrawerContents";
import Payment from "./src/screens/Payment";
import Profile from "./src/screens/Profile";
import History from "./src/screens/History";
import Welcome from "./src/screens/Welcome";
import SignUpAndLogin from "./src/screens/SignUpAndLogin";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";
import ForgotPassword from "./src/screens/ForgotPAssword";
import Loading from "./src/components/Loading";
import store from "./src/redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class MainStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={HomeScreen}
          name="home"
          options={{
            header: HomeHeader,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={SignUpAndLogin}
          options={{
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
            headerShown: false,
          }}
          name="signUpAndLogin"
        />
        <Stack.Screen
          component={SignUp}
          options={{
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
            headerShown: false,
          }}
          name="signUp"
        />
        <Stack.Screen
          component={Login}
          options={{
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
            headerShown: false,
          }}
          name="login"
        />
        <Stack.Screen
          component={ForgotPassword}
          options={{
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
            headerShown: false,
          }}
          name="forgotPassword"
        />
        <Stack.Screen
          component={Welcome}
          options={{
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
            headerShown: false,
          }}
          name="welcome"
        />
        <Stack.Screen
          component={History}
          options={{
            header: Header,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
          name="history"
        />
        <Stack.Screen
          component={EditProfile}
          options={{
            header: Header,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
          name="editProfile"
        />
        <Stack.Screen
          component={Profile}
          options={{
            header: Header,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
          name="profile"
        />
        <Stack.Screen
          component={Payment}
          options={{
            header: Header,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
          name="payment"
        />
        <Stack.Screen
          component={Checkout}
          name="checkout"
          options={{
            header: Header,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
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
        <Stack.Screen
          component={ProductDetail2}
          options={{
            header: Header,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
          name="detail"
        />
        <Stack.Screen
          component={FavoriteProducts}
          options={{
            header: Header,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
          name="favorites"
        />
        <Stack.Screen
          component={PromoProducts}
          options={{
            header: Header,
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
          }}
          name="promo"
        />
      </Stack.Navigator>
    );
  }
}

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{
          header: Header,
          cardStyle: { backgroundColor: "transparent" },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  const { isLoading } = useSelector((state) => state.globalReducer);
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
          options={{
            title: "Orders",
          }}
          name="orderstack"
          component={OrderStack}
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

      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

const drawer = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: 324,
  },
});

export default App;
