import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ratio = 0.9

const promoPrice = (promo = 'harga promo') => {
  return (
    <View style={styles.promoCard}>
      <Text style={styles.productPrice}>IDR {promo}</Text>
    </View>
  )
}

const ItemCard = (data, index) => {
  return (
    <View key={String(index)} style={styles.itemCard}>
      <View style={styles.pictureWrapper}>
        <Image style={styles.productPicture} source={data.image} />
      </View>

      <View style={styles.textWrapper}>
        {data.promo && promoPrice(data.promo)}
        <Text style={styles.productName}>{data.name}</Text>
        <Text style={data.promo ? styles.priceCanceled : styles.productPrice}>
          IDR {data.price}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemCard: {
    width: 156 * ratio,
    height: 212 * ratio,
    backgroundColor: '#fff',
    marginTop: 75,
    borderRadius: 30 * ratio,
    alignItems: 'center',
    elevation: 2,
  },
  pictureWrapper: {
    height: 130 * ratio,
    width: 130 * ratio,
    marginTop: -50 * ratio,
    borderRadius: 9999,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  productPicture: {
    resizeMode: 'contain',
    width: '100%',
  },
  textWrapper: {
    height: 100,
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  promoCard: {
    position: 'absolute',
    height: 43 * ratio,
    width: 133 * ratio,
    backgroundColor: 'white',
    borderRadius: 20 * ratio,
    top: 43 * ratio * -1,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 17,
    fontWeight: '700',
    color: '#6A4029',
  },
  priceCanceled: {
    fontSize: 17,
    color: '#9F9F9F',
    textDecorationLine: 'line-through',
  },
})

export default ItemCard
