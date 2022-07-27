import React, { useEffect } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { getDetailItem } from '../redux/actions/items'

import ItemCard from '../components/ItemCard'

const FavoriteProducts = (props) => {
  // useEffect(() => {
  //   console.log(props.items)
  // }, [])

  getDetail = (id, navigation) => {
    props.getDetailItem(id).then(() => {
      navigation.navigate('detail')
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
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = {
  getDetailItem,
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
})
