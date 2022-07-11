import http from '../../helpers/http'
// import { BACKEND_URL } from "@env";

const BACKEND_URL = 'http://localhost:8080'

export const getItems = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${BACKEND_URL}/items`)
      // console.log(data)
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
