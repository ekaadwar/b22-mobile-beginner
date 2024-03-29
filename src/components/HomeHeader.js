import React, { useEffect, useState } from 'react'
import { Alert, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { connect, useDispatch } from 'react-redux'

import IonIcons from 'react-native-vector-icons/Ionicons'
import SearchModal from './SearchModal'
import { getItems } from '../redux/actions/items'
import { getData } from '../utils/storage'
import { getProfile } from '../redux/actions/profile'

const HomeHeader = ({ navigation }) => {
  const dispatch = useDispatch()
  const [modalVisibility, setModalVisibility] = useState(false)
  const [token, setToken] = useState('')

  useEffect(() => {
    getData('token').then((res) => {
      dispatch(getProfile(res))
    })
  }, [])

  const searchData = (keyWord, navigation) => {
    dispatch(getItems(false, null, keyWord, null, null))
    navigation.navigate('favorites')
    setModalVisibility(!modalVisibility)
  }

  const sortItems = (sortData, navigation) => {
    dispatch(getItems(false, null, null, sortData.column, sortData.sort))
    navigation.navigate('favorites')
    setModalVisibility(!modalVisibility)
  }

  const showDrawer = (navigation) => {
    navigation.toggleDrawer()
  }

  return (
    <View style={styles.parent}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity onPress={() => showDrawer(navigation)}>
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
        <SearchModal
          cancel={() => setModalVisibility(!modalVisibility)}
          submit={(key) => searchData(key, navigation)}
          callback={(sort) => sortItems(sort, navigation)}
        />
      </Modal>
    </View>
  )
}

// const mapDispatchToProps = {
//   getItems,
// }

// export default connect()(HomeHeader)
export default HomeHeader

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
})
