import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(20)].map((_i, idx) => (
            <View style={styles.productCard} key={String(idx)}>
              <View style={styles.image}>
                <Text>picture</Text>
              </View>
              <Text style={styles.productName}>Hazelnut Latte</Text>
              <Text style={styles.productPrice}>IDR 30.000</Text>
            </View>
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
