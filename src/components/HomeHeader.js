import React, { useState } from 'react'

import IonIcons from 'react-native-vector-icons/Ionicons'

import { Alert, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import SearchModal from './SearchModal'

const HomeHeader = ({ navigation }) => {
  const [modalVisibility, setModalVisibility] = useState(false)
  return (
    <View style={styles.parent}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <IonIcons name="menu" color="grey" size={24} />
        </TouchableOpacity>
        <View style={[styles.buttonWrapper, styles.contentWrapper]}>
          <TouchableOpacity>
            <IonIcons
              name="chatbubble-ellipses-outline"
              color="grey"
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisibility(!modalVisibility)}
          >
            <IonIcons name="search" color="grey" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('cart')}>
            <IonIcons name="cart-outline" color="grey" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisibility(!modalVisibility)
        }}
      >
        <SearchModal cancel={() => setModalVisibility(!modalVisibility)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    height: 80,
    justifyContent: 'flex-end',
    paddingHorizontal: 34,
    paddingBottom: 10,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    width: 100,
  },
  profile: {
    height: 24,
    width: 24,
    borderRadius: 9999,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeHeader
