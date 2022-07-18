import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import GeneralStyle from '../components/GeneralStyle'

import { connect } from 'react-redux'
import CirclePicture from '../components/CirclePicture'

const DetailHistory = ({ history }) => {
  useEffect(() => {
    console.log('HistoryDetail Screen')
    console.log(history)
  })
  return (
    <View style={[GeneralStyle.parent, GeneralStyle.container]}>
      <View style={GeneralStyle.titleMainWrapper}>
        <Text style={GeneralStyle.titleMain}>Detail History</Text>
      </View>

      <View style={styles.generalInfoWrap}>
        <View>
          <Text style={styles.generalInfoHead}>Code</Text>
        </View>
        <View>
          <Text>: {history.detail[0].code}</Text>
        </View>
        <View>
          <Text style={styles.generalInfoHead}>Created at</Text>
        </View>
        <View>
          <Text>: {history.detail[0].created_at}</Text>
        </View>
        <View>
          <Text style={styles.generalInfoHead}>Status</Text>
        </View>
        <View>
          <Text>: Dine in</Text>
        </View>
      </View>

      <View style={[GeneralStyle.card, styles.card]}>
        {history.detail.map((detail) => (
          <View key={String(detail.id)} style={styles.itemWrapper}>
            <View style={styles.itemPictureWrap}>
              <CirclePicture size={50} />
            </View>
            <View style={styles.itemNameWrap}>
              <Text style={styles.itemName}>{detail.name}</Text>
              <Text>x {detail.amount}</Text>
            </View>
            <View style={styles.itemPriceWrap}>
              <Text>IDR {detail.price}</Text>
            </View>
          </View>
        ))}
      </View>

      <View>
        <View style={styles.rowPrice}>
          <Text>Sub Total</Text>
          <Text>IDR {history.detail[0].subtotal}</Text>
        </View>

        <View style={styles.rowPrice}>
          <Text>Tax & Fees</Text>
          <Text>IDR {history.detail[0].tax}</Text>
        </View>

        <View style={styles.rowPrice}>
          <Text>Shipping</Text>
          <Text>IDR 0</Text>
        </View>

        <View style={styles.rowPrice}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>
            IDR {history.detail[0].subtotal + history.detail[0].tax}
          </Text>
        </View>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  history: state.history,
})

export default connect(mapStateToProps)(DetailHistory)

const styles = StyleSheet.create({
  itemWrapper: {
    display: 'grid',
    gridTemplateColumns: '20% 50% 30%',
    marginBottom: 10,
  },
  itemName: {
    textTransform: 'capitalize',
  },
  generalInfoWrap: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridRowGap: '10px',
  },
  generalInfoHead: {
    fontWeight: 'bold',
  },
  card: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  rowPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  total: {
    fontWeight: 'bold',
  },
})
