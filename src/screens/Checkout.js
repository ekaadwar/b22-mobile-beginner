import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'

import MainButton from '../components/MainButton'
import GeneralStyle from '../components/GeneralStyle'
import SeparatorVertical from '../components/SeparatorVertical'
import Circle from '../components/Circle'

const deliveryMethod = ['Door delivery', 'Pick up at the store', 'Dine in']

const SmallCircle = () => {
  return <Circle size={10} color={'#6A4029'} />
}

const ChosenCircle = () => {
  return (
    <Circle
      content={<SmallCircle />}
      size={18}
      color={'#FFF'}
      border={1}
      borderColor={'#6A4029'}
    />
  )
}

class Checkout extends Component {
  componentDidMount() {
    console.log('Cheackout screen')
    console.log(this.props.cart)
    console.log(this.props.profile)
    console.log(this.props.profile.email)
  }

  render() {
    return (
      <View style={[GeneralStyle.parent, GeneralStyle.container]}>
        <View style={GeneralStyle.wFull}>
          <Text style={styles.mainTitle}>Delivery</Text>
        </View>

        <View style={[GeneralStyle.wFull, styles.section]}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Address details</Text>

            <TouchableOpacity>
              <Text style={styles.changeButton}>change</Text>
            </TouchableOpacity>
          </View>

          <View style={GeneralStyle.card}>
            <Text style={GeneralStyle.bold}></Text>

            <SeparatorVertical top={20} bottom={20} color={'#ccc'} />

            <Text>{this.props.profile?.address}</Text>

            <SeparatorVertical top={20} bottom={20} color={'#ccc'} />

            <Text>{this.props.profile.photo}</Text>
          </View>
        </View>

        <View style={[GeneralStyle.wFull, styles.section]}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Delivery Meethods</Text>
          </View>

          <View style={GeneralStyle.card}>
            {deliveryMethod.map((item, index) => (
              <View key={String(index)} style={styles.deliveryItem}>
                <View style={styles.optionButtonWrap}>
                  {item === 'Dine in' ? (
                    <ChosenCircle />
                  ) : (
                    <Circle
                      size={15}
                      color={'#fff'}
                      border={1}
                      borderColor={'#ccc'}
                    />
                  )}
                </View>

                <View style={styles.deliveryItemWrap}>
                  <Text
                    style={
                      item === 'Dine in' ? styles.selected : styles.unselected
                    }
                  >
                    {item}
                  </Text>
                  {index + 1 < deliveryMethod.length && (
                    <SeparatorVertical top={20} bottom={20} color={'#ccc'} />
                  )}
                </View>
              </View>
            ))}
          </View>

          <View
            style={[
              GeneralStyle.wFull,
              styles.sectionTitleWrapper,
              styles.section,
            ]}
          >
            <Text>Total</Text>
            <Text style={styles.totalPrice}>IDR {this.props.cart.total}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('payment')}
          style={GeneralStyle.mainButtonWrapper}
        >
          <MainButton text="Proceed to payment" />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
  cart: state.cart,
})

export default connect(mapStateToProps)(Checkout)

const styles = StyleSheet.create({
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 34,
    marginTop: 30,
  },
  section: {
    marginTop: 30,
  },
  sectionTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  deliveryItem: {
    flexDirection: 'row',
  },
  changeButton: {
    color: '#6A4029',
  },
  optionButtonWrap: {
    width: 25,
  },
  deliveryItemWrap: {
    flex: 1,
  },
  selected: {
    color: '#000',
  },
  unselected: {
    color: '#ccc',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: '700',
  },
})
