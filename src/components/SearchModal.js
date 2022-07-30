import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchModal = () => {
  return (
    <View style={styles.canvas}>
      <TextInput />
    </View>
  )
}

export default SearchModal

const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
    height: '100vh',
  },
})
