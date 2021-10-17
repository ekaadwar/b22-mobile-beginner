import "react-native-gesture-handler";

import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./src/screens/HomeScreen";
import ProductDetail from "./src/screens/ProductDetail";
import Cart from "./src/screens/Cart";
import Header from "./src/components/Header";
import EditProfile from "./src/screens/EditProfile";
import AllMenu from "./src/screens/AllMenu";
import PrivacyPolicy from "./src/screens/PrivacyPolicy";
import Security from "./src/screens/Security";
import { TouchableOpacity } from "react-native-gesture-handler";

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

const DrawerContents = ({ descriptors, navigation }) => {
  // console.log(descriptors);

  const menuItem = Object.keys(descriptors);
  const renderMenu = menuItem.map((item) => descriptors[item].options.title);

  // console.log(`menuItem = ${menuItem}`);

  // console.log(renderMenu);

  return (
    <View style={drawerStyles.parent}>
      <View style={drawerStyles.userInfo}>
        <View style={drawerStyles.profilePicture}>
          <Text>Picture</Text>
        </View>
        <Text style={drawerStyles.nameText}>Administrator</Text>
        <Text style={drawerStyles.email}>admin@mail.com</Text>
      </View>

      <FlatList
        style={drawerStyles.menuWrapper}
        data={renderMenu}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(menuItem[index].split("-")[0])}
          >
            <Text style={drawerStyles.menuItemText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => String(index)}
        ItemSeparatorComponent={() => (
          <View style={drawerStyles.menuSeparator} />
        )}
      />

      <View style={drawerStyles.menuWrapper}>
        <TouchableOpacity>
          <Text style={drawerStyles.menuItemText}>Sigh-Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const drawerStyles = StyleSheet.create({
  parent: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: 20,
  },
  userInfo: {
    height: 288,
    backgroundColor: "#6A4029",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 9999,
    backgroundColor: "silver",
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "600",
    marginTop: 9,
  },
  email: {
    fontSize: 15,
    color: "#fff",
  },
  menuItemText: {
    color: "#6A4029",
    fontSize: 17,
    fontWeight: "600",
  },
  menuSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: "#6A4029",
    marginVertical: 20,
  },
  menuWrapper: {
    margin: 40,
  },
});

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
