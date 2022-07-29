import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { addCart } from '../redux/actions/cart'
import { coldBrew } from '../assets/image'

import MainButton from '../components/MainButton'
import CirclePicture from '../components/CirclePicture'
import GeneralStyle from '../components/GeneralStyle'
import items from '../redux/reducers/items'

const PICTURE_SIZE = 240
const RATIO = 0.8
const CIRCLE_SIZE_1 = 8

class ProductDetail2 extends Component {
  componentDidMount() {
    console.log('ProductDetail Screen')
    console.log(this.props.items.detail)
  }

  addToCart = (id, name, picture, price) => {
    const detail = {
      items_id: id,
      items_amount: 1,
      name,
      picture,
      price,
    }
    this.props.addCart(detail)
  }

  render() {
    const detail = this.props.items.detail
    return (
      <View style={[GeneralStyle.parent, GeneralStyle.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.pictureSection, GeneralStyle.alignCenter]}>
            <CirclePicture picture={coldBrew} size={240} />
          </View>

          <View style={[styles.circleWrapper, GeneralStyle.justifyCenter]}>
            {[...Array(4)].map((_i, index) => (
              <View
                key={String(index)}
                style={[
                  styles.circle,
                  index === 0 ? styles.bgBrown : styles.bgGrey,
                ]}
              />
            ))}
          </View>

          <Text style={styles.productName}>{detail.name}</Text>
          <Text style={styles.productPrice}>IDR {detail.price}</Text>

          <View style={styles.textWrapper}>
            <Text style={styles.sectionTitle}>Delivery Info</Text>
            <Text style={styles.sectionContent}>
              Delivered only on monday until friday from 1 pm to 7 pm
            </Text>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.sectionContent}>
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              flavor. It is brewed in small batches and steeped for as long as
              48 hours.
            </Text>
          </View>
        </ScrollView>

        <View style={[GeneralStyle.mainButtonWrapper, GeneralStyle.container]}>
          <TouchableOpacity
            onPress={() =>
              this.addToCart(
                detail.id,
                detail.name,
                detail.picture,
                detail.price
              )
            }
          >
            <MainButton text="Add to cart" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = {
  addCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail2)

const styles = StyleSheet.create({
  parent: {
    paddingTop: 80,
    backgroundColor: '#f7f0f0',
    height: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
    position: 'relative',
  },
  pictureSection: {
    marginTop: 16,
    marginBottom: 18 * RATIO,
  },
  pictureCircle: {
    width: PICTURE_SIZE * RATIO,
    height: PICTURE_SIZE * RATIO,
    borderRadius: (PICTURE_SIZE * RATIO) / 2,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  picture: {
    resizeMode: 'contain',
    width: '100%',
  },
  circleWrapper: {
    flexDirection: 'row',
  },
  circle: {
    width: CIRCLE_SIZE_1,
    height: CIRCLE_SIZE_1,
    borderRadius: CIRCLE_SIZE_1 / 2,
    margin: 5,
  },
  bgBrown: {
    backgroundColor: '#6A4029',
  },
  bgGrey: {
    backgroundColor: '#C4C4C4',
  },
  textWrapper: {
    marginTop: 41 * RATIO,
    width: '100%',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 18 * RATIO,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 22,
    color: '#6A4029',
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  sectionContent: {
    fontSize: 15,
    marginBottom: 20,
  },
})
