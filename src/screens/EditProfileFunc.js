import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import CirclePicture from "../components/CirclePicture";
import CircleButton from "../components/CircleButton";
import GeneralStyle from "../components/GeneralStyle";
import MainButton from "../components/MainButton";

import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getProfile, editProfile } from "../redux/actions/profile";

const EditProfile = ({ getProfile, profile }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");

  const formData = {
    name,
    email,
    phone,
    birth,
    address,
  };

  useEffect(() => {
    getProfile();
  }, []);

  const prevKey = Object.values(formData);
  const prevValue = Object.values(formData);
  const realKey = Object.values(formData);
  const realValue = Object.values(formData);

  const onSubmit = () => {
    dispatch(editProfile(formData));
  };

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
            placeholder={profile.display_name}
            placeholderTextColor="black"
            value={profile.display_name}
            onChangeText={(event) => setName(event)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Email Address :</Text>
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(event) => setEmail(event)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Phone Number :</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(event) => setPhone(event)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Date of Birth :</Text>
          <TextInput
            style={styles.input}
            value={birth}
            onChangeText={(event) => setBirth(event)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Delivery Address :</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(event) => setSetAddress(event)}
          />
        </View>
      </ScrollView>

      <View style={GeneralStyle.mainButtonWrapper}>
        <TouchableOpacity onPress={onSubmit}>
          <MainButton text="Save and Update" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pictureSection: {
    alignItems: "center",
    marginVertical: 40,
  },
  imageWrapper: {
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
    borderWidth: 0,
  },
});

const mapStateToProps = (state) => ({ profile: state.profile });

const mapDispatchToProps = { getProfile };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
