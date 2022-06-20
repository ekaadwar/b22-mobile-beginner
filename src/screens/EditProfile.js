import React, { Component /*, useState*/ } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  // Button,
} from "react-native";
import RadioGroup, { Radio } from "react-native-radio-input";
// import DatePicker from "react-native-date-picker";

import CirclePicture from "../components/CirclePicture";
import CircleButton from "../components/CircleButton";
import GeneralStyle from "../components/GeneralStyle";
import MainButton from "../components/MainButton";
// import Dates from "../components/Dates";

import { connect } from "react-redux";
import { getProfile } from "../redux/actions/profile";

// const DateComponent = () => {
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button title="Open" onPress={() => setOpen(true)} />

//       <DatePicker
//         modal
//         open={open}
//         date={date}
//         onConfirm={(date) => {
//           setOpen(false);
//           setDate(date);
//         }}
//         onCancel={() => {
//           setOpen(false);
//         }}
//       />
//     </>
//   );
// };

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    // this.props.getProfile()
    this.getData();
  }

  getData = () => {
    this.props.getProfile().then(() => {
      this.setState({ data: this.props.profile.data });
    });
  };

  getChecked = (value) => {
    console.log(value);
  };

  save = (event) => {
    event.preventDefault();
    // const { token } = this.props.auth;
    const token = null;
    const prevKeys = Object.keys(this.props.profile.data);
    const prevValues = Object.values(this.props.profile.data);
    const realKeys = Object.keys(this.state.data);
    const realValues = Object.values(this.state.data);
    const length = prevKeys.length;

    let keys = "";

    // if (this.state.currentPhoto) {
    //   keys += "photo";
    //   this.props.updateProfile(token, null, null, this.state.currentPhoto);
    // }

    for (let i = 0; i < length; i++) {
      if (prevValues[i] !== realValues[i]) {
        if (keys !== "") {
          keys += ", ";
        }
        keys += `${prevKeys[i]}`;
        this.props.updateProfile(token, realKeys[i], realValues[i]).then(() => {
          this.setState({ data: this.props.profile.data });
        });
      }
    }

    // if (keys !== '') {
    //   window.alert(`${keys} have been updated`)
    //   this.redirect()
    // }
  };

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

          {/* <Dates /> */}

          {/* <View>
            <Button title="Open" onPress={() => this.setState({open:true})} />

            <DatePicker
              modal
              open={this.state.open}
              date={this.state.date}
              onConfirm={(date) => {
                this.setState({open:false})
                this.setState({date: this.state.date})
              }}
              onCancel={() => {
                this.setState({open : false})
              }}
            />
          </View> */}

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
                    email: event.target.value,
                  },
                }))
              }
            />
          </View>

          <View style={styles.section}>
            <RadioGroup
              getChecked={this.getChecked}
              RadioGroupStyle={{ flexDirection: "row" }}
            >
              <Radio iconName={"lens"} label={"Female"} value={"female"} />
              <Radio iconName={"lens"} label={"Male"} value={"male"} />
            </RadioGroup>
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Email Address :</Text>

            <TextInput
              style={styles.input}
              placeholder={this.state.data.email}
              placeholderTextColor="black"
              defaultValue={this.state.data.email}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Phone Number :</Text>

            <TextInput
              style={styles.input}
              placeholder={this.state.data.mobile_number}
              placeholderTextColor="black"
              defaultValue={this.state.data.mobile_number}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Date of Birth :</Text>

            <TextInput
              style={styles.input}
              placeholder={this.state.data.birth}
              placeholderTextColor="black"
              defaultValue={this.state.data.birth}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Address :</Text>

            <TextInput
              style={styles.input}
              placeholder={this.state.data.address}
              placeholderTextColor="black"
              defaultValue={this.state.data.address}
            />
          </View>
        </ScrollView>

        <View style={GeneralStyle.mainButtonWrapper}>
          <TouchableOpacity>
            <MainButton
              onPress={(event) => this.save(event)}
              text="Save and Update"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pictureSection: {
    // backgroundColor : "coral",
    alignItems: "center",
    marginVertical: 40,
  },
  imageWrapper: {
    // backgroundColor : "purple",
    position: "relative",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  section: {
    marginVertical: 10,
  },
  inputLabel: {
    color: "#9F9F9F",
    fontWeight: "700",
    fontSize: 13,
  },
  input: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#9F9F9F",
  },
});

const mapStateToProps = (state) => ({ profile: state.profile });

const mapDispatchToProps = { getProfile };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
