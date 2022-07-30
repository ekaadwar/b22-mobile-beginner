import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GeneralStyle from './GeneralStyle'

const ConfirmCard = ({
  text = 'Type your text here',
  cancel = () => {},
  submit = () => {},
}) => {
  return (
    <View style={styles.parent}>
      <View style={[GeneralStyle.card, styles.card]}>
        <Text style={styles.textContent}>{text}</Text>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={cancel}>
            <View style={[styles.button, styles.cancel]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={submit}>
            <View style={[styles.button, styles.submit]}>
              <Text style={styles.buttonText}>Yes</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ConfirmCard

const styles = StyleSheet.create({
  parent: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    top: 0,
    zIndex: 2147483638,
    alignItems: 'center',
    paddingTop: 100,
  },
  card: {
    width: '100%',
    maxWidth: 300,
  },
  textContent: {
    textAlign: 'center',
  },
  buttonWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  submit: {
    backgroundColor: '#6A4029',
  },
  cancel: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: '#FFF',
  },
})
