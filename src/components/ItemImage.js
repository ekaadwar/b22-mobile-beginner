import React, { useEffect, useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { addOn, coffee, food, nonCoffee, beefSpaghetti } from '../assets/image'

const ItemImage = ({ category = '' }) => {
  const [picture, setPicture] = useState()
  useEffect(() => {
    switch (category) {
      case 'coffee':
        setPicture(coffee)
        break
      case 'non coffee':
        setPicture(nonCoffee)
        break
      case 'foods':
        setPicture(food)
        break
      default:
        setPicture(addOn)
    }
  }, [])
  return <Image style={styles.img} source={picture} resizeMethod={'contain'} />
}

export default ItemImage

const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    width: '100%',
  },
})
