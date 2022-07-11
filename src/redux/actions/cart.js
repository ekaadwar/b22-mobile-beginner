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

export const deleteItem = (payload) => ({
  type: 'CART_DELETE_ITEM',
  payload,
})
