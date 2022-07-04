import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import GeneralStyle from '../components/GeneralStyle'
import MainButton from '../components/MainButton'
import SeparatorVertical from '../components/SeparatorVertical'

import { dataPayment, dataCards } from '../data'

export default class Payment extends Component {
  paymentMethods = [
    {
      method: 'Card',
      icon: 'credit-card',
      color: '#F47B0A',
      iconColor: '#fff',
    },

    {
      method: 'Bank account',
      icon: 'bank',
      color: '#895537',
      iconColor: '#fff',
    },
    {
      method: 'Cash on delivery',
      icon: 'truck-delivery',
      color: '#FFBA33',
      iconColor: '#000',
    },
  ]

  render() {
    return (
      <View style={[GeneralStyle.parent]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={GeneralStyle.wFull}
        >
          <View style={[GeneralStyle.wFull, GeneralStyle.container]}>
            <Text style={styles.sectionTitle}>Products</Text>

            <View style={GeneralStyle.card}>
              {dataPayment.map((item, index) => (
                <View
                  style={[styles.cardSection, GeneralStyle.justifyBetween]}
                  key={String(index)}
                >
                  <View style={styles.imageWrapper}>
                    <Image style={GeneralStyle.picture} source={item.image} />
                  </View>

                  <View style={styles.productAmount}>
                    <Text>{item.name}</Text>
                    <Text>x {item.amount}</Text>
                    <Text>{item.size}</Text>
                  </View>

                  <View style={styles.priceWrapper}>
                    <Text style={styles.price}>IDR {item.price}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={[GeneralStyle.wFull, GeneralStyle.container]}>
            <Text style={styles.sectionTitle}>Payment method</Text>

            <View style={GeneralStyle.card}>
              {this.paymentMethods.map((item, index) => (
                <View key={String(index)}>
                  <View
                    style={[styles.cardSection, GeneralStyle.alignCenter]}
                    key={String(index)}
                  >
                    <View
                      style={[
                        styles.iconWrapper,
                        { backgroundColor: item.color },
                      ]}
                    >
                      <MaterialCommunityIcons
                        name={item.icon}
                        color={item.iconColor}
                        size={20}
                      />
                    </View>

                    <View>
                      <Text>{item.method}</Text>
                    </View>
                  </View>

                  {index + 1 < this.paymentMethods.length && (
                    <SeparatorVertical top={5} bottom={5} />
                  )}
                </View>
              ))}
            </View>
          </View>

          <View style={[GeneralStyle.wFull, GeneralStyle.container]}>
            <Text style={styles.sectionTitle}>My Card</Text>
          </View>

          <ScrollView horizontal style={styles.cardPaySection}>
            {dataCards.map((item, index) => (
              <View
                key={String(index)}
                style={[
                  styles.cardWrapper,
                  index === 0 && { marginLeft: 30 },
                  index + 1 === dataCards.length && { marginRight: 30 },
                ]}
              >
                <Image source={item} style={GeneralStyle.picture} />
              </View>
            ))}
          </ScrollView>

          <View
            style={[
              GeneralStyle.wFull,
              styles.cardSection,
              GeneralStyle.justifyBetween,
              GeneralStyle.container,
            ]}
          >
            <Text>Total</Text>
            <Text style={styles.totalPrice}>IDR 84.000</Text>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={[GeneralStyle.mainButtonWrapper, GeneralStyle.container]}
        >
          <MainButton text="Proceed payment" />
        </TouchableOpacity>
      </View>
    )
  }
}

const RATIO = 0.9

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: '700',
    fontSize: 17,
    marginTop: 33,
    marginBottom: 12,
  },
  cardSection: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  imageWrapper: {
    height: 64,
    width: 54,
    backgroundColor: 'silver',
    marginRight: 10,
    borderRadius: 20 * RATIO,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  productAmount: {
    flex: 1,
  },
  priceWrapper: {
    alignSelf: 'center',
  },
  price: {
    fontSize: 17,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "coral",
    borderRadius: 10 * RATIO,
    marginRight: 10,
  },
  cardPaySection: {
    marginTop: -12,
  },
  cardWrapper: {
    width: 248,
    height: 150,
    marginVertical: 10,
    marginRight: 10,
    backgroundColor: 'silver',
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})
