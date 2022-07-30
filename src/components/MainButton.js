import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RATIO = 0.8

const MainButton = ({
  text = 'Submit',
  color = '#6A4029',
  textColor = '#fff',
  borderWidth = 0,
  borderColor = 'black',
}) => {
  const mainButtonStyles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: color,
      borderColor: borderColor,
      borderRadius: 20 * RATIO,
      borderWidth: borderWidth,
      height: 70 * RATIO,
      justifyContent: 'center',
      width: '100%',
    },
    buttonText: {
      color: textColor,
      fontSize: 17,
      fontWeight: 'bold',
    },
  })

  return (
    <View style={mainButtonStyles.button}>
      <Text style={mainButtonStyles.buttonText}>{text}</Text>
    </View>
  )
}

export default MainButton
