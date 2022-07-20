import http from '../../helpers/http'
// import { BACKEND_URL } from "@env";

const BACKEND_URL = 'http://localhost:8080'

export const getItems = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${BACKEND_URL}/items`)
      dispatch({
        type: 'ITEM_GET_LIST',
        payload: data.results,
      })
    } catch (e) {
      console.log(e)
      console.log('okeeee')
    }
  }
}

export const getDetailItem = (id) => {
  console.log('getDetailItem action')
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${BACKEND_URL}/items/${id}`)
      console.log('async')
      console.log(data)
      dispatch({
        type: 'ITEM_GET_DETAIL',
        payload: data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
