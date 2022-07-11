import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { connect } from 'react-redux'
import { deleteItem, getCart } from '../redux/actions/cart'

import MainButton from '../components/MainButton'
import CirclePicture from '../components/CirclePicture'
import CircleButton from '../components/CircleButton'

import GeneralStyle from '../components/GeneralStyle'
import SwipeableSubtitles from '../components/SwipeableSubtitles'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import EmptyContent from '../components/EmptyContent'

class Cart extends Component {
  componentDidMount() {
    this.props.getCart()
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
                    onPress={() => this.props.deleteCartItem(data.index)}
                  >
                    <CircleButton
                      icon="delete-outline"
                      color="#FFBA33"
                      iconSize={20}
                    />
                  </TouchableOpacity>
                </View>
              )}
              rightOpenValue={-95}
              keyExtractor={(_i, idx) => String(idx)}
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('checkout')}
              style={GeneralStyle.mainButtonWrapper}
            >
              <MainButton text="Confirm and Checkout" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <EmptyContent
              icon="shopping-cart"
              title="No orders yet"
              description="Hit the orange button down below to Create an order"
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('home')}
              style={GeneralStyle.mainButtonWrapper}
            >
              <MainButton text="Start ordering" />
            </TouchableOpacity>
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

const mapDispatchToProps = { deleteCartItem: deleteItem, getCart }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
