import http from '../../helpers/http'

const BACKEND_URL = 'http://localhost:8080'

export const getItems = (url = null, search = null) => {
  let baseUrl = `${BACKEND_URL}/items/?page=1`

  return async (dispatch) => {
    try {
      // const { data } = await http().get(baseUrl)

      if (url !== null && search !== null) {
        const { data } = await http().get(`${url}&search=${search}`)
        dispatch({
          type: 'ITEM_GET_LIST',
          payload: data,
        })
      } else if (url !== null) {
        const { data } = await http().get(`${url}`)
        dispatch({
          type: 'ITEM_GET_LIST',
          payload: data,
        })
      } else if (search !== null) {
        const { data } = await http().get(`${baseUrl}&search=${search}`)
        dispatch({
          type: 'ITEM_GET_LIST',
          payload: data,
        })
      } else {
        const { data } = await http().get(baseUrl)
        dispatch({
          type: 'ITEM_GET_LIST',
          payload: data,
        })
      }
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
