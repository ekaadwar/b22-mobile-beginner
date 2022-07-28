import http from '../../helpers/http'
// import { BACKEND_URL } from "@env";

const BACKEND_URL = 'http://localhost:8080'

export const getItems = (url = null) => {
  const baseUrl = `${BACKEND_URL}/items`
  return async (dispatch) => {
    try {
      const { data } = await http().get(url !== null ? url : baseUrl)
      dispatch({
        type: 'ITEM_GET_LIST',
        payload: data,
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
