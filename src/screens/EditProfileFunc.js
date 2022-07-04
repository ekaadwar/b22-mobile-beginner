import React, { useEffect, useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { getData } from '../utils/storage'

import CirclePicture from '../components/CirclePicture'
import CircleButton from '../components/CircleButton'
import GeneralStyle from '../components/GeneralStyle'
import MainButton from '../components/MainButton'

// import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/actions/profile'
import { editProfile } from '../redux/actions/profile'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'

const EditProfileFunc = ({ navigation }) => {
  const dispatch = useDispatch()

  const { profile } = useSelector((state) => state.profileReducer)
  // const profile = [
  //   {
  //     email: "test@mail.com",
  //   },
  // ];

  // const [profile, setProfile] = useState({});
  const [name, setName] = useState(profile?.display_name)
  const [email, setEmail] = useState(profile?.email)
  const [phone, setPhone] = useState(profile?.mobile_number)
  const [birth, setBirth] = useState(profile?.birth)
  const [address, setAddress] = useState(profile?.address)
  const [token, setToken] = useState('')

  const prevData = {
    display_name: profile?.display_name,
    email: profile?.email,
    mobile_number: profile?.mobile_number,
    birth: profile?.birth,
    address: profile?.address,
  }

  const realData = {
    display_name: name,
    email,
    mobile_number: phone,
    birth,
    address,
  }

  useEffect(() => {
    getData('token').then((res) => {
      setToken(res)
      dispatch(getProfile(res))
    })
  }, [])

  const getProfileData = (token) => {
    dispatch(getProfile(token))
  }

  const getToken = () => {
    getData('token').then((res) => {
      setToken(res)
    })
  }

  const onSubmit = () => {
    const realKeys = Object.keys(realData)
    const realValues = Object.values(realData)
    const prevKeys = Object.keys(prevData)
    const prevValues = Object.values(prevData)
    const length = realKeys.length

    let report = ''

    for (let i = 0; i < length; i++) {
      if (realValues[i] !== prevValues[i]) {
        if (report !== '') {
          report += ', '
        }
        report += `${realKeys[i]}`
        dispatch(editProfile(realKeys[i], realValues[i], token, navigation))
      }
    }

    console.log(report)
    toastMessage(report, 'success')
    navigation.reset({ index: 0, routes: [{ name: 'profile' }] })
  }

  return (
    <View style={[GeneralStyle.parent, GeneralStyle.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pictureSection}>
          <View style={styles.imageWrapper}>
            <CirclePicture size={130} />

            <View style={styles.buttonWrapper}>
              <TouchableOpacity>
                <CircleButton
                  color="#6A4029"
                  iconColor="white"
                  size={40}
                  icon="edit"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text>Token : {token}</Text>
          <Text style={styles.inputLabel}>Name :</Text>
          <TextInput
            style={styles.input}
            placeholder="Your fullname"
            value={name}
            onChangeText={(event) => setName(event)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Email Address :</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(event) => setEmail(event)}
            placeholder="Your email"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Phone Number :</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={phone}
            onChangeText={(event) => setPhone(event)}
            placeholder="Your phone number"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Date of Birth :</Text>
          <TextInput
            style={styles.input}
            value={birth}
            onChangeText={(event) => setBirth(event)}
            placeholder="Your birthday"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Delivery Address :</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(event) => setAddress(event)}
            placeholder="Your address"
          />
        </View>
      </ScrollView>

      <View style={GeneralStyle.mainButtonWrapper}>
        <TouchableOpacity onPress={onSubmit}>
          <MainButton text="Save and Update" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pictureSection: {
    alignItems: 'center',
    marginVertical: 40,
  },
  imageWrapper: {
    position: 'relative',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  section: {
    marginVertical: 10,
  },
  inputLabel: {
    color: '#9F9F9F',
    fontWeight: '700',
    fontSize: 13,
  },
  input: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#9F9F9F',
    borderWidth: 0,
  },
})

// const mapStateToProps = (state) => ({ profile: state.profile });

// const mapDispatchToProps = { getProfile };

export default EditProfileFunc
