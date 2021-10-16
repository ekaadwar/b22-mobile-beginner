import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(20)].map((_i, idx) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("detail")}
              style={styles.productCard}
              key={String(idx)}
            >
              <View style={styles.image}>
                <Icon name="user-circle" size={30} color="#900" />
              </View>
              <Text style={styles.productName}>Hazelnut Latte</Text>
              <Text style={styles.productPrice}>IDR 30.000</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#F2F2F2",
  },
  productCard: {
    backgroundColor: "#fff",
    height: 270,
    width: 220,
    borderRadius: 30,
    elevation: 5,
    margin: 38,
    marginTop: 98,
    alignItems: "center",
  },
  image: {
    width: 168,
    height: 180,
    backgroundColor: "silver",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 22,
  },
  productPrice: {
    fontWeight: "bold",
    color: "#6A4029",
  },
});
