import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import ItemCard from '../components/ItemCard'

import dataPromo from '../data/dataPromo'

export default function PromoProducts() {
  return (
    <ScrollView style={styles.parent}>
      <Text style={styles.mainTitle}>Stay Hungry!</Text>
      <Text style={styles.subTitle}>Good deals update every wednesday</Text>
      <View style={styles.itemsWrapper}>
        {dataPromo.map((item, index) => ItemCard(item, index))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  parent: {
    paddingTop: 80,
    paddingBottom: 100,
  },
  mainTitle: {
    paddingHorizontal: 40,
    marginTop: 40,
    fontWeight: '700',
    fontSize: 28,
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
  },
  itemsWrapper: {
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})
