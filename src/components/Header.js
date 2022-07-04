import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = ({ navigation, scene }) => {
  const titleName = scene.route.name

  return (
    <View style={headerStyles.parent}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      {titleName === 'detail' && (
        <TouchableOpacity onPress={() => navigation.navigate('cart')}>
          <AntDesign name="shoppingcart" size={20} color="black" />
        </TouchableOpacity>
      )}
    </View>
  )
}

const headerStyles = StyleSheet.create({
  parent: {
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
})

export default Header
