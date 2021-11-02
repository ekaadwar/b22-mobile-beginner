import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import GeneralStyle from "../components/GeneralStyle";
import MainButton from "../components/MainButton";
import CirclePicture from "../components/CirclePicture";

export default class Profile extends Component {
  buttonHead = ["Order History", "Edit Password", "FAQ", "Help"];

  userData = {
    name: "Si Jon",
    email: "sijon@gmail.com",
    phone: "+62 81348287878",
    address:
      "Iskandar Street Block A Number 102 ular melingkar lingakr di pagar pak umar",
  };

  render() {
    return (
      <View style={[GeneralStyle.parent, GeneralStyle.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={GeneralStyle.titleMain}>My Profile</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.titleSectionWrapper}>
              <Text style={GeneralStyle.titleSection}>Your Information</Text>
              <Text>edit</Text>
            </View>

            <View style={GeneralStyle.card}>
              <View style={styles.profileInfoWrapper}>
                <View style={styles.pictureWrapper}>
                  <CirclePicture size={80} />
                </View>

                <View style={styles.userInfoWrapper}>
                  <Text style={styles.fullName}>Si Jon</Text>
                  <Text style={styles.userInfo}>sijon@mail.com</Text>
                  <Text style={styles.userInfo}>+62 81348287878</Text>
                  <Text style={styles.userInfo}>
                    Iskandar Street Block A Number 102 ular melingkar lingakr di
                    pagar pak umar
                  </Text>
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
  section: {
    marginVertical: 10,
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
