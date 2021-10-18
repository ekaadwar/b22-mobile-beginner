import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import vergiTomattoMix from "../assets/image/products/vergieTomattoMix.png";
import hazelnutLatte from "../assets/image/products/hazelnutLatte.png";
import summerFriedRice from "../assets/image/products/summerFriedRice.png";
import creamyIceLatte from "../assets/image/products/creamyIceLatte.png";
import drumStick from "../assets/image/products/drumStick.png";
import saltyRice from "../assets/image/products/saltyRice.png";

const dataFavorites = [
  {
    image: vergiTomattoMix,
    name: "Vergi Tomatto Mix",
    price: "34.000",
  },
  {
    image: hazelnutLatte,
    name: "Hazelnut Latte",
    price: "25.000",
  },
  {
    image: summerFriedRice,
    name: "Summer Fried Rice",
    price: "32.000",
  },
  {
    image: creamyIceLatte,
    name: "Creamy Ice Latte",
    price: "27.000",
  },
  {
    image: drumStick,
    name: "Drum Stick",
    price: "30.000",
  },
  {
    image: saltyRice,
    name: "Salty Rice",
    price: "20.000",
  },
];

const ItemCard = (data, index) => {
  return (
    <View key={String(index)} style={styles.itemCard}>
      <View style={styles.pictureWrapper}>
        <Image style={styles.productPicture} source={data.image} />
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.productName}>{data.name}</Text>
        <Text style={styles.productPrice}>IDR {data.price}</Text>
      </View>
    </View>
  );
};

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

const ratio = 0.9;

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
  itemCard: {
    width: 156 * ratio,
    height: 212 * ratio,
    backgroundColor: "#fff",
    marginTop: 75,
    borderRadius: 30 * ratio,
    alignItems: "center",
    elevation: 2,
  },
  pictureWrapper: {
    height: 130 * ratio,
    width: 130 * ratio,
    marginTop: -50 * ratio,
    borderRadius: 9999,
    backgroundColor: "silver",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  productPicture: {
    resizeMode: "contain",
    width: "100%",
  },
  textWrapper: {
    height: 100,
    justifyContent: "space-between",
    paddingTop: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 17,
    fontWeight: "700",
    color: "#6A4029",
  },
});
