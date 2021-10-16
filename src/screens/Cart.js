import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Cart() {
  return (
    <View style={styles.parent}>
      <Text>Cart Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    marginTop: 80,
  },
});
