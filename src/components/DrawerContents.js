import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GeneralStyle from "./GeneralStyle";

const DrawerContents = ({ descriptors, navigation }) => {
  const menuItem = Object.keys(descriptors);
  const renderMenu = menuItem.map((item) => descriptors[item].options.title);

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

export default DrawerContents;
