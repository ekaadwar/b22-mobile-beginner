import React, { Component } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getProfile, editProfile } from "../redux/actions/profile";

const EditProfile = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(profile[0]?.name);

  const formData = {
    name: name,
  };

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
            value={name}
            onChangeText={(event) => (setName = event)}
          />
        </View>
      </ScrollView>

      <View style={GeneralStyle.mainButtonWrapper}>
        <TouchableOpacity onPress={onSubmit}>
          <MainButton
            onPress={(event) => this.save(event)}
            text="Save and Update"
          />
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
  },
});

const mapStateToProps = (state) => ({ profile: state.profile });

const mapDispatchToProps = { getProfile };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
