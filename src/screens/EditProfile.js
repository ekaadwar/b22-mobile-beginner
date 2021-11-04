import React, {Component} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import RadioGroup,{Radio} from "react-native-radio-input";

import CirclePicture from "../components/CirclePicture";
import CircleButton from "../components/CircleButton"
import GeneralStyle from "../components/GeneralStyle";
import MainButton from "../components/MainButton";
import { ScrollView } from "react-native-gesture-handler";

export default class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : "",
      email : "",
      phone : "",
      birth : "",
      address : ""
    }
  }

  getChecked = (value) => {
    console.log(value)
  }
  
  render(){
    return (
      <View style={ [GeneralStyle.parent, GeneralStyle.container] }>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.pictureSection}>
            <View style={styles.imageWrapper}>
              <CirclePicture size={130} />
              
              <View style={styles.buttonWrapper}>
                <TouchableOpacity>
                  <CircleButton 
                    color = "#6A4029"
                    iconColor = "white"
                    size = {40}
                    icon = "edit"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Name :</Text>

            <TextInput 
              style = {styles.input}
              placeholder = "Si Jon"
              placeholderTextColor = "black"
              defaultValue = {this.state.name}
            />
          </View>

          <ScrollView horizontal>
            <RadioGroup getChecked={this.getChecked} RadioGroupStyle={{flexDirection: "row" }}>
              <Radio iconName={"lens"} label={"Female"} value={"female"} />
              <Radio iconName={"lens"} label={"Male"} value={"male"}/>
            </RadioGroup>
          </ScrollView>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Email Address :</Text>

            <TextInput 
              style = {styles.input}
              placeholder = "sijon@kopi.com"
              placeholderTextColor = "black"
              defaultValue = {this.state.email}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Phone Number :</Text>

            <TextInput 
              style = {styles.input}
              placeholder = "+62 82136784231"
              placeholderTextColor = "black"
              defaultValue = {this.state.phone}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Date of Birth :</Text>

            <TextInput 
              style = {styles.input}
              placeholder = "December 21th 1996"
              placeholderTextColor = "black"
              defaultValue = {this.state.birth}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.inputLabel}>Address :</Text>

            <TextInput 
              style = {styles.input}
              placeholder = "Delivery Address"
              placeholderTextColor = "black"
              defaultValue = {this.state.address}
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
  pictureSection : {
    // backgroundColor : "coral",
    alignItems : "center",
    marginVertical : 40
  },
  imageWrapper:{
    // backgroundColor : "purple",
    position : "relative"
  },
  buttonWrapper:{
    position : "absolute",
    bottom : 0,
    right : 0
  },
  section:{
    marginVertical : 10
  },
  inputLabel : {
    color : "#9F9F9F",
    fontWeight : "700",
    fontSize : 13
  },
  input : {
    paddingVertical : 10,
    borderBottomWidth : 1,
    borderBottomColor : "#9F9F9F"
  }
})
