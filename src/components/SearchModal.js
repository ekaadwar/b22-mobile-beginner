import React, { useState } from 'react'
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import GeneralStyle from './GeneralStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SearchModal = ({
  initialState = '',
  submit = () => {},
  cancel = () => {},
  callback = () => {},
}) => {
  const [keyWord, setKeyWord] = useState(initialState)
  const [modalVisibility2, setModalVisibility2] = useState(false)
  const sortMenu = [
    {
      name: 'Product',
      column: 'name',
      sort: 'ASC',
    },
    {
      name: 'Product',
      column: 'name',
      sort: 'DESC',
    },
    {
      name: 'Price',
      column: 'price',
      sort: 'ASC',
    },
    {
      name: 'Price',
      column: 'price',
      sort: 'DESC',
    },
    {
      name: 'Created at',
      column: 'id',
      sort: 'ASC',
    },
    {
      name: 'Created at',
      column: 'id',
      sort: 'DESC',
    },
  ]

  const handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue === 'Enter') {
      submit(keyWord)
    }
  }

  const submitSortData = (data) => {
    callback(data)
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
            placeholder={'search'}
            style={styles.input}
          />

          <View style={styles.sortButtonWrap}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setModalVisibility2(!modalVisibility2)}
            >
              <FontAwesome5 name={'sort'} color={'#999'} size={20} />
            </TouchableOpacity>
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisibility2}
            style={styles.modal2}
          >
            <View style={[styles.sortContainer, GeneralStyle.container]}>
              <TouchableOpacity
                onPress={() => setModalVisibility2(!modalVisibility2)}
                style={styles.outsideArea}
              />
              <View style={styles.sortArea}>
                {sortMenu.map((item, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => submitSortData(item)}
                  >
                    <View style={styles.sortItem}>
                      <View style={styles.sortIcon}>
                        <FontAwesome5
                          name={
                            item.sort === 'DESC'
                              ? 'sort-alpha-down-alt'
                              : 'sort-alpha-up-alt'
                          }
                        />
                      </View>
                      <Text>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 30,
  },
  sortButtonWrap: {
    width: 30,
    height: 30,
    borderLeftWidth: 2,
    borderLeftColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortContainer: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    alignItems: 'flex-end',
  },
  outsideArea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  sortArea: {
    position: 'absolute',
    backgroundColor: '#FFF',
    padding: 5,
    top: 110,
  },
  sortItem: {
    height: 50,
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortIcon: {
    width: 30,
    marginRight: 10,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
})
