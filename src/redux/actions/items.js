import http from '../../helpers/http'

const BACKEND_URL = 'http://localhost:8080'

const dispatchData = (dispatch, type, data) => {
  dispatch({
    type: 'ITEM_GET_LIST',
    payload: data,
  })
}

export const getItems = (url = null, search = null) => {
  let baseUrl = `${BACKEND_URL}/items/?page=1`

  return async (dispatch) => {
    try {
      // const { data } = await http().get(baseUrl)

      if (url !== null && search !== null) {
        const { data } = await http().get(`${url}&search=${search}`)
        dispatchData(dispatch, 'ITEM_GET_LIST', data)
      } else if (url !== null) {
        const { data } = await http().get(`${url}`)
        dispatchData(dispatch, 'ITEM_GET_LIST', data)
      } else if (search !== null) {
        const { data } = await http().get(`${baseUrl}&search=${search}`)
        dispatchData(dispatch, 'ITEM_GET_LIST', data)
      } else {
        const { data } = await http().get(baseUrl)
        dispatchData(dispatch, 'ITEM_GET_LIST', data)
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
