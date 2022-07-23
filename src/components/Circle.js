import React from 'react'
import { View, StyleSheet } from 'react-native'

const Circle = ({ content = () => {}, color = '#ccc', size = 10 }) => {
  const diameter = 10

  const styles = StyleSheet.create({
    circle: {
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  return <View style={styles.circle}>{content}</View>
}

export default Circle
