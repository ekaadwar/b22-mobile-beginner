import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SwipeableSubtitles = () => {
  return (
    <View style={styles.titleWrapper}>
      <MaterialIcons name="swipe" size={16} />
      <Text style={styles.mainTitle}>swipe on an item to delete</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 10,
    marginLeft: 10,
  },
})

export default SwipeableSubtitles
