import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function SeparatorVertical({
  width = 0.5,
  top = 0,
  bottom = 0,
  color = '#000',
}) {
  const styles = StyleSheet.create({
    verticalSeparator: {
      borderBottomWidth: width,
      borderBottomColor: color,
      width: '100%',
      marginTop: top,
      marginBottom: bottom,
    },
  })

  return <View style={styles.verticalSeparator} />
}
