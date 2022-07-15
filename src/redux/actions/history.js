import axios from 'axios'
import http from '../../helpers/http'

const BACKEND_URL = 'http://localhost:8080'

export const getHistory = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(
        `${BACKEND_URL}/transactions/mytransaction`
      )
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
