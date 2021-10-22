import { StyleSheet } from "react-native";

const GeneralStyle = StyleSheet.create({
  parent: {
    paddingTop: 80,
    backgroundColor: "#f7f0f0",
    height: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    position: "relative",
    paddingBottom: 120,
  },
  mainButtonWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  wFull: {
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 2,
  },
  verticalSeparator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    width: "100%",
    backgroundColor: "coral",
  },
});

export default GeneralStyle;
