import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const EmptyContent = ({
  icon = 'hourglass-empty',
  title = 'Screen Title',
  description = 'Screen Description',
}) => {
  return (
    <View style={styles.emptyParent}>
      <MaterialIcon name={icon} color="#C7C7C7" size={150} />

      <Text style={styles.emptyTitle}>{title}</Text>

      <Text style={styles.emptyDescription}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  emptyParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 10,
  },
  emptyDescription: {
    fontSize: 17,
    textAlign: 'center',
    width: 200,
  },
})

export default EmptyContent
