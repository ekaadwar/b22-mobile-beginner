import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import ItemCard from "../components/ItemCard";

import dataFavorites from "../data/dataFavorites";

export default function FavoriteProducts() {
  return (
    <ScrollView style={styles.parent}>
      <Text style={styles.mainTitle}>Everyone's Favorite</Text>
      <View style={styles.itemsWrapper}>
        {dataFavorites.map((item, index) => ItemCard(item, index))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    paddingTop: 80,
    paddingBottom: 100,
  },
  mainTitle: {
    paddingHorizontal: 40,
    marginTop: 40,
    // marginBottom: 20,
    fontWeight: "700",
    fontSize: 28,
  },
  itemsWrapper: {
    width: 300,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
