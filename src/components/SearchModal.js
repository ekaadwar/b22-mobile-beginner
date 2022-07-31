import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import GeneralStyle from './GeneralStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SearchModal = ({
  initialState = '',
  submit = () => {},
  cancel = () => {},
}) => {
  const [keyWord, setKeyWord] = useState(initialState)

  const handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue === 'Enter') {
      submit(keyWord)
    }
  }
  return (
    <View style={styles.canvas}>
      <View style={GeneralStyle.container}>
        <TouchableOpacity style={styles.cancelBtn} onPress={cancel}>
          <Icon name={'cancel'} color={'#FFF'} size={25} />
        </TouchableOpacity>
        <View style={styles.inputWrap}>
          <TextInput
            onKeyPress={handleKeyPress}
            value={keyWord}
            onChangeText={(e) => setKeyWord(e)}
          />

          <TouchableOpacity style={styles.cancelBtn}>
            <Icon name={'sort'} color={'#999'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
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
    width: '100%',
    paddingTop: 25,
  },
  cancelBtn: {
    alignSelf: 'flex-end',
  },
  inputWrap: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 25,
  },
})
