import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import GeneralStyle from '../components/GeneralStyle'

import { welcome } from '../assets/image'
import MainButton from '../components/MainButton'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Welcome extends Component {
  render() {
    return (
      <View style={GeneralStyle.parent}>
        <View style={GeneralStyle.container}>
          <Text style={GeneralStyle.titleAuth}>Coffee for Everyone</Text>
        </View>

        <View>
          <Image style={GeneralStyle.picture} source={welcome} />
        </View>

        <View style={GeneralStyle.mainButtonWrapper}>
          <View style={GeneralStyle.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signUpAndLogin')}
            >
              <MainButton text="Get Started" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
