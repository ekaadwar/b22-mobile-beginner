import http from '../../helpers/http'

const BACKEND_URL = 'http://localhost:8080'

const dispatchData = (dispatch, type, data) => {
  dispatch({
    type,
    payload: data,
  })
}

export const getItems = (
  home = false,
  url = null,
  search = null,
  sort = 'id',
  sortType = 'ASC'
) => {
  let baseUrl = `${BACKEND_URL}/items/?page=1`

  return async (dispatch) => {
    try {
      if (url !== null && search !== null) {
        const { data } = await http().get(`${url}&search=${search}`)
        dispatchData(dispatch, 'ITEM_GET_LIST', data)
      } else if (url !== null) {
        console.log(
          `url = ${url}, search = ${search}, sort = ${sort}, sortType = ${sortType}`
        )
        const { data } = await http().get(`${url}&sort[${sort}]=${sortType}`)
        const payloadData = { data, sort, sortType }
        dispatchData(dispatch, 'ITEM_GET_LIST', payloadData)
      } else if (search !== null) {
        const { data } = await http().get(`${baseUrl}&search=${search}`)
        const payloadData = { data, search }
        dispatchData(dispatch, 'ITEM_SEARCH_LIST', payloadData)
      } else {
        const { data } = await http().get(
          `${baseUrl}&sort[${sort}]=${sortType}`
        )
        const payloadData = { data, sort, sortType }
        console.log(payloadData)
        if (home === true) {
          console.log(home)
          dispatchData(dispatch, 'ITEM_INITIAL_LIST', data)
        } else {
          dispatchData(dispatch, 'ITEM_GET_LIST', payloadData)
        }
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
