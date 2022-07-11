import axios from 'axios'

const BACKEND_URL = 'http://localhost:8080'

export const getHistory = (token) => (dispatch) => {
  axios
    .get(`${BACKEND_URL}/transactions/mytransaction`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data)
      dispatch({ type: 'SET_MYTRANSACTION', payload: res.data.message })
    })
}
