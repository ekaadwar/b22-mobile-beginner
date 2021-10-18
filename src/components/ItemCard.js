import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ratio = 0.9;

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

const styles = StyleSheet.create({
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

export default ItemCard;
