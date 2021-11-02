import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import MainButton from "../components/MainButton";
import GeneralStyle from "../components/GeneralStyle";
import SeparatorVertical from "../components/SeparatorVertical";

const deliveryMethod = ["Door delivery", "Pick up at the store", "Dine in"];

export default class Checkout extends Component {
  render() {
    return (
      <View style={[GeneralStyle.parent, GeneralStyle.container]}>
        <View style={GeneralStyle.wFull}>
          <Text style={styles.mainTitle}>Delivery</Text>
        </View>

        <View style={[GeneralStyle.wFull, styles.section]}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Address details</Text>

            <TouchableOpacity>
              <Text style={styles.changeButton}>change</Text>
            </TouchableOpacity>
          </View>

          <View style={GeneralStyle.card}>
            <Text style={GeneralStyle.bold}>Iskandar Street</Text>

            <SeparatorVertical top={5} bottom={5} />

            <Text>
              Km 5 refinery road oppsite re public road, effurun, Jakarta
            </Text>

            <SeparatorVertical top={5} bottom={5} />

            <Text>+62 81348287878</Text>
          </View>
        </View>

        <View style={[GeneralStyle.wFull, styles.section]}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Delivery Meethods</Text>
          </View>

          <View style={GeneralStyle.card}>
            {deliveryMethod.map((item, index) => (
              <View key={String(index)}>
                <Text>{item}</Text>
                {index + 1 < deliveryMethod.length && (
                  <SeparatorVertical top={20} bottom={20} />
                )}
              </View>
            ))}
          </View>

          <View
            style={[
              GeneralStyle.wFull,
              styles.sectionTitleWrapper,
              styles.section,
            ]}
          >
            <Text>Total</Text>
            <Text style={styles.totalPrice}>IDR 123.000</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("payment")}
          style={GeneralStyle.mainButtonWrapper}
        >
          <MainButton text="Proceed to payment" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainTitle: {
    fontWeight: "bold",
    fontSize: 34,
    marginTop: 30,
  },
  section: {
    marginTop: 30,
  },
  sectionTitleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
  },
  changeButton: {
    color: "#6A4029",
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: "700",
  },
});
