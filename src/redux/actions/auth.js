import axios from 'axios'
import toastMessage from '../../utils/showMessage'
import { storeData } from '../../utils/storage'

const BACKEND_URL = 'http://localhost:8080'

export const signUpAction = (data, navigation) => (dispatch) => {
  const form = new URLSearchParams()
  form.append('email', data.email)
  form.append('password', data.password)
  form.append('mobileNumber', data.phone)

  dispatch({ type: 'SET_LOADING', payload: true })

  axios
    .post(`${BACKEND_URL}/auth/register`, form)
    .then((res) => {
      dispatch({ type: 'SET_LOADING', payload: false })
      toastMessage(res?.data?.message, 'success')
      navigation.navigate('login')
    })
    .catch((err) => {
      dispatch({ type: 'SET_LOADING', payload: false })
      toastMessage(err?.response?.data?.message)
      // toastMessage('owalah')
    })
}

export const signInAction = (data, navigation) => (dispatch) => {
  const form = new URLSearchParams()
  form.append('email', data.email)
  form.append('password', data.password)
  console.log(data)

  dispatch({ type: 'SET_LOADING', payload: true })
  axios
    .post(`${BACKEND_URL}/auth/login`, form)
    .then((res) => {
      dispatch({ type: 'SET_LOADING', payload: false })
      const token = res.data.results.token
      storeData('token', token)
      axios
        .get(`${BACKEND_URL}/users/profil`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((newData) => {
          storeData('profile', newData.data.results)
          toastMessage(token, 'success')
        })
      navigation.reset({ index: 0, routes: [{ name: 'home' }] })
    })
    .catch((err) => {
      dispatch({ type: 'SET_LOADING', payload: false })
      toastMessage(err?.response?.data?.message)
    })
}
