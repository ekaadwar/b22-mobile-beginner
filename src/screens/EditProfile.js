import React, { Component /*, useState*/ } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import RadioGroup, { Radio } from 'react-native-radio-input'

import CirclePicture from '../components/CirclePicture'
import CircleButton from '../components/CircleButton'
import GeneralStyle from '../components/GeneralStyle'
import MainButton from '../components/MainButton'

import { connect } from 'react-redux'
import { getProfile, editProfile } from '../redux/actions/profile'

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    this.props.getProfile().then(() => {
      this.setState({ data: this.props.profile.data })
    })
  }

  onSubmit = () => {
    const prevKeys = Object.keys(this.props.profile.data)
    const prevValues = Object.values(this.props.profile.data)
    const realKeys = Object.keys(this.state.data)
    const realValues = Object.values(this.state.data)
    const dataLength = prevKeys.length

    let keys = ''

    // console.log("realValues");
    // console.log(realValues);
    // console.log("prevValues");
    // console.log(prevValues);

    for (let i = 0; i < dataLength; i++) {
      if (prevValues[i] !== realValues[i]) {
        if (keys !== '') {
          keys += ', '
        }

        keys += prevKeys[i]
        this.props.editProfile(realKeys[i], realValues[i])
      }
    }

    console.log(keys)
  }

  render() {
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
            <Text style={styles.inputLabel}>Name :</Text>

            <TextInput
              style={styles.input}
              placeholder={this.state.data.display_name}
              placeholderTextColor="black"
              defaultValue={this.state.data.display_name}
              onChange={(event) =>
                this.setState((prevState) => ({
                  data: {
                    ...prevState.data,
                    display_name: event.target.value,
                  },
                }))
              }
            />
          </View>

          <View style={styles.section}>
            <RadioGroup
              getChecked={this.getChecked}
              RadioGroupStyle={{ flexDirection: 'row' }}
            >
              <Radio iconName={'lens'} label={'Female'} value={'female'} />
              <Radio iconName={'lens'} label={'Male'} value={'male'} />
            </RadioGroup>
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Email Address :</Text>
            <TextInput
              style={styles.input}
              defaultValue={this.state.data.email}
              onChange={(event) =>
                this.setState((prevState) => ({
                  data: {
                    ...prevState.data,
                    email: event.target.value,
                  },
                }))
              }
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Phone Number :</Text>

            <TextInput
              style={styles.input}
              defaultValue={this.state.data.mobile_number}
              onChange={(event) =>
                this.setState((prevState) => ({
                  data: {
                    ...prevState.data,
                    mobile_number: event.target.value,
                  },
                }))
              }
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Date of Birth :</Text>

            <TextInput
              style={styles.input}
              defaultValue={this.state.data.birth}
              onChange={(event) =>
                this.setState((prevState) => ({
                  data: {
                    ...prevState.data,
                    birth: event.target.value,
                  },
                }))
              }
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Address :</Text>

            <TextInput
              style={styles.input}
              defaultValue={this.state.data.address}
              onChange={(event) =>
                this.setState((prevState) => ({
                  data: {
                    ...prevState.data,
                    address: event.target.value,
                  },
                }))
              }
            />
          </View>
        </ScrollView>

        <View style={GeneralStyle.mainButtonWrapper}>
          <TouchableOpacity onPress={this.onSubmit}>
            <MainButton text="Save and Update" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
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
  },
})

const mapStateToProps = (state) => ({ profile: state.profile })

const mapDispatchToProps = { getProfile, editProfile }

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
