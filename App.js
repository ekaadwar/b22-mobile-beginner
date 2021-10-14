import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.content}>
          <View style={styles.price}>
            <Text style={styles.priceText}>Hello</Text>
          </View>

          <View style={styles.pictureWrapper}>
            <View style={styles.picture}>
              <Text>picture</Text>
            </View>
          </View>

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Cold Brew</Text>
          </View>

          <View style={styles.contentContext}>
            <View style={styles.deliveryText}>
              <Text style={styles.text}>
                Delivery only on <Text style={styles.bold}>Monday to friday</Text> at <Text style={styles.bold}>1 - 7 pm</Text>
              </Text>
            </View>

            <View style={styles.description}>
              <Text style={[styles.text, styles.bold]}>
                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
              </Text>
            </View>
          </View>

          <View></View>
        </View>
      </View>
    );
  }
}

const PICTURE_SIZE = 180;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "#362115",
  },
  content: {
    backgroundColor: "#fff",
    marginTop: 268,
    flex: 1,
    borderTopRightRadius: 60,
  },
  price: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBA33",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -40,
    marginLeft: 20,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pictureWrapper: {
    flexDirection: "row-reverse",
    paddingLeft: 20,
    marginTop: (PICTURE_SIZE / 2) * -1,
  },
  picture: {
    width: PICTURE_SIZE,
    height: PICTURE_SIZE,
    borderRadius: PICTURE_SIZE / 2,
    backgroundColor: "silver",
    justifyContent: "center",
    alignItems: "center",
  },
  titleWrapper: {
    flexDirection: "row-reverse",
    paddingLeft: 20,
    marginTop: 10,
  },
  title: {
    width: PICTURE_SIZE,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  contentContext: {
    paddingHorizontal: 40,
    flex: 1,
  },
  deliveryText: {
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: "#6A4029",
  },
  bold: {
    fontWeight: "bold",
  },
});
