import React, { useEffect, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { getHistory, getHistoryDetail } from '../redux/actions/history'
import { getData } from '../utils/storage'

import CircleButton from '../components/CircleButton'
import GeneralStyle from '../components/GeneralStyle'
import SwipeableSubtitles from '../components/SwipeableSubtitles'
import { SwipeListView } from 'react-native-swipe-list-view'

const HistoryFunc = ({ getHistory, getHistoryDetail, history, navigation }) => {
  const [token, setToken] = useState('')

  useEffect(() => {
    getData('token').then((res) => {
      setToken(res)
      getHistory(res)
    })
  }, [])

  const getDetail = (id, token, navigation) => {
    getHistoryDetail(id, token).then(() => {
      navigation.navigate('historyDetail')
    })
  }

  return (
    <View style={[styles.parent, GeneralStyle.container]}>
      <View style={GeneralStyle.titleMainWrapper}>
        <Text style={GeneralStyle.titleMain}>Order History</Text>
      </View>

      <SwipeableSubtitles />

      <SwipeListView
        showsVerticalScrollIndicator={false}
        data={history.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => getDetail(item.id, token, navigation)}
            style={styles.card}
            key={String(item.id)}
          >
            <View style={styles.textWrapper}>
              <View style={styles.productNameWrap}>
                <Text style={styles.productName}>{item.code}</Text>
              </View>

              <View style={styles.priceWrapper}>
                <Text style={styles.productPrice}>IDR {item.total}</Text>
              </View>

              <View style={styles.priceWrapper}>
                <Text style={styles.productPrice}>Dine in</Text>
              </View>

              <View style={styles.priceWrapper}>
                <Text style={styles.productPrice}>id : {item.id}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={GeneralStyle.backButtonWrapper}>
            <TouchableOpacity style={styles.backButton}>
              <CircleButton
                icon="delete-outline"
                color="#6A4029"
                iconColor="#FFF"
                iconSize={20}
              />
            </TouchableOpacity>
          </View>
        )}
        rightOpenValue={-50}
        keyExtractor={(_i, idx) => String(idx)}
      />
    </View>
  )
}

const mapStateToProps = (state) => ({ history: state.history })

const mapDispatchToProps = {
  getHistory,
  getHistoryDetail,
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryFunc)

const styles = StyleSheet.create({
  screenTitleWrap: {
    paddingTop: '40px',
  },
  screenTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
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
  backButton: {
    marginLeft: 5,
  },
})
