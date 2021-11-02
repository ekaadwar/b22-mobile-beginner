import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import MainButton from "../components/MainButton";
import CirclePicture from "../components/CirclePicture";

import dataCart from "../data/dataCart";

import GeneralStyle from "../components/GeneralStyle";

export default class Cart extends Component {
  render() {
    return (
      <View style={[GeneralStyle.parent, GeneralStyle.container]}>
        <View style={styles.titleWrapper}>
          <MaterialIcons name="swipe" size={16} />
          <Text style={styles.mainTitle}>swipe on an item to delete</Text>
        </View>

        <FlatList
          style={styles.cardWrapper}
          data={dataCart}
          renderItem={({ item, idx }) => (
            <TouchableOpacity style={styles.card} key={String(idx)}>
              {CirclePicture(item.image, 70)}

              <View style={styles.textWrapper}>
                <Text style={styles.productName}>{item.name}</Text>

                <View style={styles.priceWrapper}>
                  <Text style={styles.productPrice}>IDR {item.price}</Text>

                  <View style={styles.amountWrapper}>
                    <TouchableOpacity>
                      <Text style={styles.amountText}>-</Text>
                    </TouchableOpacity>

                    <View style={styles.amountValue}>
                      <Text style={styles.amountText}>{item.amount}</Text>
                    </View>

                    <TouchableOpacity>
                      <Text style={styles.amountText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(_i, idx) => String(idx)}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("checkout")}
          style={GeneralStyle.mainButtonWrapper}
        >
          <MainButton text="Confirm and Checkout" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 10,
    marginLeft: 10,
  },
  cardWrapper: {
    width: "100%",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    elevation: 2,
    padding: 20,
    marginVertical: 7,
  },
  textWrapper: {
    marginLeft: 20,
    flex: 1,
    justifyContent: "space-around",
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
  },
  priceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productPrice: {
    color: "#895537",
  },
  amountWrapper: {
    flexDirection: "row",
    backgroundColor: "#6A4029",
    height: 20,
    width: 70,
    borderRadius: 9999,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
