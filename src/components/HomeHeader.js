import React from 'react'

import IonIcons from 'react-native-vector-icons/Ionicons'

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const HomeHeader = ({ navigation }) => {
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
          <TouchableOpacity>
            <IonIcons name="search" color="grey" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('cart')}>
            <IonIcons name="cart-outline" color="grey" size={24} />
          </TouchableOpacity>
        </View>
      </View>
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
