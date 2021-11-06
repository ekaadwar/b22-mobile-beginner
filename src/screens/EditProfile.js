import React, { Component, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import RadioGroup, { Radio } from "react-native-radio-input";
import DatePicker from "react-native-date-picker";

import CirclePicture from "../components/CirclePicture";
import CircleButton from "../components/CircleButton";
import GeneralStyle from "../components/GeneralStyle";
import MainButton from "../components/MainButton";
import Dates from "../components/Dates";

const DateComponent = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      birth: "",
      address: "",
      // date : new Date(),
      // open : false
    };
  }

  getChecked = (value) => {
    console.log(value);
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
              placeholder="Si Jon"
              placeholderTextColor="black"
              defaultValue={this.state.name}
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
              placeholder="sijon@kopi.com"
              placeholderTextColor="black"
              defaultValue={this.state.email}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Phone Number :</Text>

            <TextInput
              style={styles.input}
              placeholder="+62 82136784231"
              placeholderTextColor="black"
              defaultValue={this.state.phone}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Date of Birth :</Text>

            <TextInput
              style={styles.input}
              placeholder="December 21th 1996"
              placeholderTextColor="black"
              defaultValue={this.state.birth}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Address :</Text>

            <TextInput
              style={styles.input}
              placeholder="Delivery Address"
              placeholderTextColor="black"
              defaultValue={this.state.address}
            />
          </View>
        </ScrollView>

        <View style={GeneralStyle.mainButtonWrapper}>
          <TouchableOpacity>
            <MainButton text="Save and Update" />
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
