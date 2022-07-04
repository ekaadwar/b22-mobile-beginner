import axios from 'axios'
import http from '../../helpers/http'
import toastMessage from '../../utils/showMessage'
// import { BACKEND_URL } from "@env";

const BACKEND_URL = 'http://localhost:8080'

export const getProfiles = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${BACKEND_URL}/users/profil`)
      dispatch({
        type: 'PROFILE_GET_LIST',
        payload: data.results,
      })
    } catch (e) {
      dispatch({
        type: 'PROFILE_GET_LIST',
        payload: {
          display_name: 'Error',
        },
      })
    }
  }
}

export const getProfile = (token) => (dispatch) => {
  axios
    .get(`${BACKEND_URL}/users/profil`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: 'SET_PROFILE', payload: res.data.results })
    })
}

export const editProfile = (key, value, token, navigation) => {
  return async (dispatch) => {
    const form = new FormData()
    form.append(key, value)

    axios
      .patch(`${BACKEND_URL}/users`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        toastMessage(res?.data?.message, 'success')
        navigation.reset({ index: 0, routes: [{ name: 'profile' }] })
        // console.log(res?.data?.message, "success")
      })
      .catch((err) => {
        // toastMessage(err?.response?.data?.message);
        console.log(err?.response?.data?.message)
      })
  }
}
