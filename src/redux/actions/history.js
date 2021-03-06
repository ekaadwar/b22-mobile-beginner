import axios from 'axios'
import http from '../../helpers/http'
import toastMessage from '../../utils/showMessage'
import { storeData } from '../../utils/storage'

const BACKEND_URL = 'http://localhost:8080'

// export const getHistory = (token) => (dispatch) => {
//   axios
//     .get(`${BACKEND_URL}/transactions/mytransaction`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       console.log(res.data.message)
//       dispatch({ type: 'SET_MYTRANSACTION', payload: res.data.message })
//     })
// }

export const getHistory = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(
        `${BACKEND_URL}/transactions/mytransaction`
      )
      console.log('getHistory')
      console.log(data)
      dispatch({
        type: 'SET_MYTRANSACTION',
        payload: data.message,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getHistoryDetail = (id, token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(
        `${BACKEND_URL}/transactions/mytransaction/${id}`
      )
      dispatch({
        type: 'SET_MYTRANSACTION_DETAIL',
        payload: data.message,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const createHistory = (data, token, navigation) => (dispatch) => {
  const form = new URLSearchParams()
  data.data.forEach((item) => {
    form.append('items_id', item.items_id)
    form.append('items_amount', item.items_amount)
  })
  form.append('payment_method', data.payment_method)

  dispatch({ type: 'SET_LOADING', payload: true })

  axios
    .post(`${BACKEND_URL}/transactions`, form, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((res) => {
      dispatch({ type: 'SET_LOADING', payload: false })
      dispatch({ type: 'CART_CLEAR' })
      toastMessage(res?.data?.message, 'success')
      navigation.reset({ index: 0, routes: [{ name: 'home' }] })
    })
    .catch((err) => {
      dispatch({ type: 'SET_LOADING', payload: false })
      console.log(err)
    })
}
