import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { createTotal, deleteItem, getCart } from '../redux/actions/cart'

import CircleButton from '../components/CircleButton'
import CirclePicture from '../components/CirclePicture'
import EmptyContent from '../components/EmptyContent'
import GeneralStyle from '../components/GeneralStyle'
import MainButton from '../components/MainButton'
import SwipeableSubtitles from '../components/SwipeableSubtitles'
import ConfirmCard from '../components/ConfirmCard'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  goToCheckOut = (navigation) => {
    let total = 0
    this.props.cart.data.map((data) => {
      total += data.price
    })
    this.props.createTotal(total)
    navigation.navigate('checkout')
  }

  deleteConfirm = (id) => {
    console.log(id)
    this.setState({ modalVisible: true })
  }

  render() {
    return (
      <View style={[GeneralStyle.parent, GeneralStyle.container]}>
        {this.props.cart.data.length >= 1 ? (
          <>
            <SwipeableSubtitles />

            <SwipeListView
              showsVerticalScrollIndicator={false}
              data={this.props.cart.data}
              renderItem={({ item, idx }) => (
                <View style={styles.card} key={String(idx)}>
                  <CirclePicture picture={item.image} size={70} />

                  <View style={styles.textWrapper}>
                    <Text style={styles.productName}>{item.name}</Text>

                    <View style={styles.priceWrapper}>
                      <Text style={styles.productPrice}>IDR {item.price}</Text>

                      <View style={styles.amountWrapper}>
                        <TouchableOpacity>
                          <Text style={styles.amountText}>-</Text>
                        </TouchableOpacity>

                        <View style={styles.amountValue}>
                          <Text style={styles.amountText}>{item.amount}</Text>
                        </View>

                        <TouchableOpacity>
                          <Text style={styles.amountText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              renderHiddenItem={(data, rowMap) => (
                <View style={GeneralStyle.backButtonWrapper}>
                  <TouchableOpacity style={styles.backButton}>
                    <CircleButton
                      icon="favorite-outline"
                      color="#FFBA33"
                      iconSize={20}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.backButton}
                    // onPress={() => this.props.deleteCartItem(data.index)}
                    onPress={() => this.deleteConfirm(data.index)}
                  >
                    <CircleButton
                      icon="delete-outline"
                      color="#FFBA33"
                      iconSize={20}
                    />

                    <Modal
                      animationType="fade"
                      transparent={true}
                      visible={this.state.modalVisible}
                      onRequestClose={() => {
                        Alert.alert('Modal has been closed')
                        this.setState({ modalVisible: !modalVisible })
                      }}
                    >
                      <ConfirmCard />
                    </Modal>
                  </TouchableOpacity>
                </View>
              )}
              rightOpenValue={-95}
              keyExtractor={(_i, idx) => String(idx)}
            />

            <View style={GeneralStyle.container}>
              <TouchableOpacity
                onPress={() => this.goToCheckOut(this.props.navigation)}
                style={GeneralStyle.mainButtonWrapper}
              >
                <MainButton text="Confirm and Checkout" />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <EmptyContent
              icon="shopping-cart"
              title="No orders yet"
              description="Hit the button down below to Create an order"
            />

            <View style={GeneralStyle.container}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('home')}
                style={GeneralStyle.mainButtonWrapper}
              >
                <MainButton text="Start ordering" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 10,
    marginLeft: 10,
  },
  backButton: {
    marginLeft: 5,
  },
  cardWrapper: {
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    width: '100%',
    elevation: 2,
    padding: 20,
    marginVertical: 7,
  },
  textWrapper: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
  productName: {
    fontSize: 17,
    fontWeight: '700',
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPrice: {
    color: '#895537',
  },
  amountWrapper: {
    flexDirection: 'row',
    backgroundColor: '#6A4029',
    height: 20,
    width: 70,
    borderRadius: 9999,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
})

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const mapDispatchToProps = { deleteCartItem: deleteItem, getCart, createTotal }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
