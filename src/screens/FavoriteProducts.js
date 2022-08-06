import React, { useEffect } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { getDetailItem, getItems } from '../redux/actions/items'

import ItemCard from '../components/ItemCard'
import IonIcon from 'react-native-vector-icons/Ionicons'

const FavoriteProducts = (props) => {
  const { prevPage, nextPage, currentPage } = props.items.pageInfo

  const getDetail = (id, navigation) => {
    props.getDetailItem(id).then(() => {
      navigation.navigate('detail')
    })
  }

  const changePage = (url) => {
    const { items } = props
    props
      .getItems(false, url, items.search, items.sort, items.sortType)
      .then(() => {
        console.log('yowess')
      })
  }

  return (
    <ScrollView style={styles.parent}>
      <Text style={styles.mainTitle}>Everyone's Favorite</Text>
      <View style={styles.itemsWrapper}>
        {props.items.data.map((item) => (
          <TouchableOpacity
            onPress={() => getDetail(item.id, props.navigation)}
          >
            <ItemCard data={item} id={item.id} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.pageButtonWrap}>
        <TouchableOpacity
          onPress={() => {
            prevPage && changePage(prevPage)
          }}
        >
          <IonIcon
            name="caret-back-outline"
            size={30}
            color={prevPage === null ? '#999' : '#6A4029'}
          />
        </TouchableOpacity>

        <View style={styles.indicatorWrap}>
          <Text style={styles.indicator}>{currentPage}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            nextPage && changePage(nextPage)
          }}
        >
          <IonIcon
            name="caret-forward-outline"
            size={30}
            color={nextPage === null ? '#999' : '#6A4029'}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = {
  getDetailItem,
  getItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteProducts)

const styles = StyleSheet.create({
  parent: {
    paddingTop: 80,
    paddingBottom: 100,
  },
  mainTitle: {
    paddingHorizontal: 40,
    marginTop: 40,
    fontWeight: '700',
    fontSize: 28,
  },
  itemsWrapper: {
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pageButtonWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  indicatorWrap: {
    width: 50,
  },
  indicator: {
    textAlign: 'center',
    fontSize: 16,
  },
})
