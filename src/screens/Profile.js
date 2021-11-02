import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import GeneralStyle from "../components/GeneralStyle";
import MainButton from "../components/MainButton";
import CirclePicture from "../components/CirclePicture";
import SeparatorVertical from "../components/SeparatorVertical";

export default class Profile extends Component {
  buttonHead = ["Order History", "Edit Password", "FAQ", "Help"];

  userData = {
    name: "Si Jon",
    email: "sijon@gmail.com",
    phone: "+62 81348287878",
    address:
      "Iskandar Street Block A Number 102 ular melingkar lingakr di pagar pak umar",
  };

  data = [ this.userData.name, this.userData.email, this.userData.phone, this.userData.address ]

  render() {
    return (
      <View style={[GeneralStyle.parent, GeneralStyle.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={GeneralStyle.titleMain}>My Profile</Text>
          </View>

          <View style={styles.section}>
            <View style={[styles.titleSectionWrapper, styles.spaceBottom]}>
              <Text style={GeneralStyle.titleSection}>Your Information</Text>
              <TouchableOpacity>
                <Text style={styles.linkText}>edit</Text>
              </TouchableOpacity>
            </View>

            <View style={GeneralStyle.card}>
              <View style={styles.profileInfoWrapper}>
                <View style={styles.pictureWrapper}>
                  <CirclePicture size={80} />
                </View>

                <View style={styles.userInfoWrapper}>
                  {this.data.map((item, index)=>(
                    <View key={String(index)}>
                      <Text style={
                        index === 0 ? styles.fullName : styles.userInfo
                      }>
                        {item}
                      </Text>

                      {index + 1 < this.data.length && (
                        <SeparatorVertical top={2} bottom={5}/>
                      ) }
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {this.buttonHead.map((item, index) => (
            <TouchableOpacity
              key={String(index)}
              style={[
                GeneralStyle.card,
                styles.section,
                styles.titleSectionWrapper,
              ]}
            >
              <Text style={GeneralStyle.titleSection}>{item}</Text>
              <FontAwesome name="chevron-right" size={16} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={GeneralStyle.mainButtonWrapper}>
          <MainButton text="Save change" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleSectionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linkText:{
    color : "#6A4029"
  },
  section: {
    marginVertical: 10,
  },
  spaceBottom:{
    marginBottom : 10
  },
  pictureWrapper: {
    marginRight: 10,
  },
  profileInfoWrapper: {
    flexDirection: "row",
  },
  userInfoWrapper: {
    flex: 1,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  userInfo: {
    color: "#6A4029",
  },
});
