import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MainButton from "../components/MainButton";
import CirclePicture from "../components/CirclePicture";

import { coldBrew } from "../assets/image";

const PICTURE_SIZE = 240;
const RATIO = 0.8;
const CIRCLE_SIZE_1 = 8;

export default class ProdutDetail2 extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.pictureSection}>
          {CirclePicture(coldBrew, PICTURE_SIZE)}
        </View>

        <View style={styles.circleWrapper}>
          {[...Array(4)].map((_i, index) => (
            <View
              key={String(index)}
              style={[
                styles.circle,
                index === 0 ? styles.bgBrown : styles.bgGrey,
              ]}
            />
          ))}
        </View>

        <Text style={styles.productName}>Cold Brew</Text>
        <Text style={styles.productPrice}>IDR 30.000</Text>

        <View style={styles.textWrapper}>
          <Text style={styles.sectionTitle}>Delivery Info</Text>
          <Text style={styles.sectionContent}>
            Delivered only on monday until friday from 1 pm to 7 pm
          </Text>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.sectionContent}>
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </Text>
        </View>
        {MainButton("Add to Cart")}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    paddingTop: 80,
    backgroundColor: "#f7f0f0",
    height: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    position: "relative",
  },
  pictureSection: {
    marginTop: 16,
    marginBottom: 18 * RATIO,
  },
  pictureCircle: {
    width: PICTURE_SIZE * RATIO,
    height: PICTURE_SIZE * RATIO,
    borderRadius: (PICTURE_SIZE * RATIO) / 2,
    backgroundColor: "silver",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  picture: {
    resizeMode: "contain",
    width: "100%",
  },
  circleWrapper: {
    flexDirection: "row",
  },
  circle: {
    width: CIRCLE_SIZE_1,
    height: CIRCLE_SIZE_1,
    borderRadius: CIRCLE_SIZE_1 / 2,
    margin: 5,
  },
  bgBrown: {
    backgroundColor: "#6A4029",
  },
  bgGrey: {
    backgroundColor: "#C4C4C4",
  },
  textWrapper: {
    marginTop: 41 * RATIO,
    width: "100%",
  },
  productName: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 18 * RATIO,
  },
  productPrice: {
    fontSize: 22,
    color: "#6A4029",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  sectionContent: {
    fontSize: 15,
    marginBottom: 20,
  },
});
