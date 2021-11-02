import { StyleSheet } from "react-native";

const GeneralStyle = StyleSheet.create({
  alignCenter: {
    alignItems: "center",
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
  container: {
    paddingHorizontal: 30,
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  mainButtonWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  parent: {
    paddingTop: 80,
    backgroundColor: "#f7f0f0",
    height: "100%",
    alignItems: "stretch",
    position: "relative",
    paddingBottom: 120,
  },
  picture: {
    resizeMode: "contain",
    width: "100%",
  },
  titleMain: {
    fontWeight: "bold",
    fontSize: 34,
    marginTop: 30,
  },
  titleSection: {
    fontSize: 17,
    fontWeight: "700",
  },
  wFull: {
    width: "100%",
  },
});

export default GeneralStyle;
