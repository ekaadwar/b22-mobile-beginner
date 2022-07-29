import http from '../../helpers/http'
import toastMessage from '../../utils/showMessage'

const BACKEND_URL = 'http://localhost:8080'

export const addCart = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: data,
    })
    toastMessage(`${data.name} has been added to cart`, 'success')
  }
}

export const createTotal = (total) => {
  return (dispatch) => {
    dispatch({
      type: 'CART_CREATE_TOTAL',
      payload: total,
    })
  }
}

export const addPaymentMethod = (data) => {
  return (dispatch) => {
    console.log(data)
    dispatch({
      type: 'CART_ADD_PAYMENT_METHOD',
      payload: data,
    })
  }
}

export const deleteItem = (payload) => ({
  type: 'CART_DELETE_ITEM',
  payload,
})
