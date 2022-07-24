import http from '../../helpers/http'

const BACKEND_URL = 'http://localhost:8080'

export const getCart = () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoidXNlcjI2QG1haWwuY29tIiwiaWF0IjoxNjU3MTcwNzEzfQ.hdnXAcUuBrZAdQtRgaqJb8U2DxZ63e_fOKXHO7QvQ1E'

  return async (dispatch) => {
    try {
      // const { data } = await http(token).get(
      //   `${BACKEND_URL}/transactions/mytransaction`
      // )
      const { data } = await http().get(`${BACKEND_URL}/items/`)
      console.log(data)
      dispatch({
        type: 'CART_GET_LIST',
        payload: data.message,
      })
    } catch (err) {
      console(err)
    }
  }
}

export const addCart = (data) => ({
  type: 'CART_ADD_ITEM',
  payload: data,
})

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

// export const createTransaction = ()

export const deleteItem = (payload) => ({
  type: 'CART_DELETE_ITEM',
  payload,
})
