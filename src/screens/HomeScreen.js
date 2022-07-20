import React, { Component } from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import hazelnutLatte from '../assets/image/products/hazelnutLatte.png'
import cappuccino from '../assets/image/products/cappuccino.png'

import { connect } from 'react-redux'
import { getItems, getDetailItem } from '../redux/actions/items'

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getItems()
  }

  getDetail = (id) => {
    getDetailItem(id).then(() => {
      console.log('getDetailOke')
    })
  }

  render() {
    return (
      <ScrollView style={styles.parent}>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>A good coffee is a good day</Text>
          <Text style={styles.sectionTitle}>Favorite Products</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('favorites')}
            style={styles.linkWrapper}
          >
            <Text style={styles.linkText}>See more</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={this.props.items.data}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                // onPress={() => this.props.navigation.navigate('detail')}
                onPress={() => this.getDetail(item.id)}
                style={styles.productCard}
              >
                <View style={styles.image}>
                  <Image
                    source={{
                      uri: 'http://localhost:8080/uploads/1651623998957.jpg',
                    }}
                    style={styles.img}
                  />
                </View>

                <View style={styles.textWrapper}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>IDR {item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => String(item.id)}
          />
        </ScrollView>

        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Promo for you</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('promo')}
            style={styles.linkWrapper}
          >
            <Text style={styles.linkText}>See more</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(20)].map((_i, idx) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('detail')}
              style={styles.productCard}
              key={String(idx)}
            >
              <View style={styles.image}>
                <Image source={cappuccino} style={styles.img} />
              </View>

              <View style={styles.textWrapper}>
                <Text style={styles.productName}>Cappuccino</Text>

                <Text style={styles.productPrice}>IDR 24.000</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    )
  }
}

const ratio = 0.8

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F2F2F2',
    paddingTop: 100,
  },
  container: {
    paddingHorizontal: 34,
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#6A4029',
    fontWeight: '700',
    fontSize: 17,
  },
  linkWrapper: {
    width: 80,
    alignSelf: 'flex-end',
  },
  linkText: {
    color: '#6A4029',
    fontSize: 17,
    textAlign: 'right',
  },
  productCard: {
    backgroundColor: '#fff',
    height: 270 * ratio,
    width: 220 * ratio,
    borderRadius: 30,
    elevation: 5,
    margin: 38,
    marginTop: 98,
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
  },
  image: {
    width: 168 * ratio,
    height: 189 * ratio,
    backgroundColor: 'silver',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
    overflow: 'hidden',
  },
  textWrapper: {
    marginTop: 10,
    justifyContent: 'space-around',
    height: 100,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#6A4029',
    textAlign: 'center',
  },
})

const mapStateToProps = (state) => ({ items: state.items })

const mapDispatchToProps = { getItems, getDetailItem }

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
