import React, { Component, useEffect } from 'react'
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { useDispatch, useSelector, connect } from 'react-redux'
import { getHistory } from '../redux/actions/history'
import { getData } from '../utils/storage'

import CirclePicture from '../components/CirclePicture'
import GeneralStyle from '../components/GeneralStyle'
import SwipeableSubtitles from '../components/SwipeableSubtitles'
import dataCart from '../data/dataCart'

const HistoryFunc = (props) => {
  // const dispatch = useDispatch()

  // const { history } = useSelector((state) => state.history)

  useEffect(() => {
    getData('token').then((res) => {
      props.getHistory(res).then(() => {
        console.log(props.history.data)
      })
    })
  }, [])

  return (
    <View style={[styles.parent, GeneralStyle.container]}>
      <SwipeableSubtitles />

      <FlatList
        style={styles.cardWrapper}
        data={props.history.data}
        renderItem={({ item, idx }) => (
          <TouchableOpacity style={styles.card} key={String(idx)}>
            {/* <CirclePicture picture={item.image} size={70} /> */}

            <View style={styles.textWrapper}>
              <Text style={styles.productName}>{item.code}</Text>

              <View style={styles.priceWrapper}>
                <Text style={styles.productPrice}>IDR {item.total}</Text>

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
          </TouchableOpacity>
        )}
        keyExtractor={(_i, idx) => String(idx)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const mapStateToProps = (state) => ({ history: state.history })

const mapDispatchToProps = {
  getHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryFunc)

const styles = StyleSheet.create({
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
  parent: {
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: '#f7f0f0',
    height: '100%',
    alignItems: 'stretch',
    position: 'relative',
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
