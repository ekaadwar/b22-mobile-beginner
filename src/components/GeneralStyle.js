import { StyleSheet } from "react-native";

const GeneralStyle = StyleSheet.create({
  parent: {
    paddingTop: 80,
    backgroundColor: "#f7f0f0",
    height: "100%",
    alignItems: "center",
    position: "relative",
    paddingBottom: 120,
  },
  container: {
    paddingHorizontal: 30,
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
  picture: {
    resizeMode: "contain",
    width: "100%",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  alignCenter: {
    alignItems: "center",
  },
});

export default GeneralStyle;
