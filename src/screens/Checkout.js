import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import MainButton from "../components/MainButton";

import GeneralStyle from "../components/GeneralStyle";

export default class Checkout extends Component {
  render() {
    return (
      <View style={GeneralStyle.parent}>
        <View style={styles.mainTitleWrapper}>
          <Text style={styles.mainTitle}>Delivery</Text>
        </View>

        <View>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Address details</Text>

            <TouchableOpacity>
              <Text style={styles.changeButton}>change</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={GeneralStyle.bold}>Iskandar Street</Text>
            <Text>
              Km 5 refinery road oppsite re public road, effurun, Jakarta
            </Text>
            <Text>+62 81348287878</Text>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.sectionTitle}>Delivery Meethods</Text>
          </View>

          {["Door delivery", "Pick up at the store", "Dine in"].map(
            (item, index) => (
              <Text key={String(index)}>{item}</Text>
            )
          )}

          <View style={styles.sectionTitleWrapper}>
            <Text>Total</Text>
            <Text style={styles.totalPrice}>IDR 123.000</Text>
          </View>
        </View>

        <TouchableOpacity style={GeneralStyle.mainButtonWrapper}>
          {MainButton("Proceed to payment")}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
