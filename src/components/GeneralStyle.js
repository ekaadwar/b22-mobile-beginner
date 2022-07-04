import { StyleSheet } from 'react-native'

const GeneralStyle = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  backButtonWrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 2,
  },
  container: {
    paddingHorizontal: 30,
  },
  inputAuth: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#9A9A9D',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  mainButtonWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  mb10: {
    marginBottom: 10,
  },
  parent: {
    paddingTop: 80,
    backgroundColor: '#f7f0f0',
    height: '100%',
    alignItems: 'stretch',
    position: 'relative',
    paddingBottom: 120,
  },
  parentAuth: {
    paddingTop: 80,
    backgroundColor: '#f7f0f0',
    height: '100%',
    alignItems: 'stretch',
    position: 'relative',
  },
  picture: {
    resizeMode: 'contain',
    width: '100%',
  },
  pictureVertical: {
    resizeMode: 'contain',
    height: '100%',
  },
  section: {
    marginVertical: 10,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 17,
  },
  textCenter: {
    textAlign: 'center',
  },
  titleAuth: {
    fontSize: 50,
    fontWeight: '700',
  },
  titleMain: {
    fontWeight: 'bold',
    fontSize: 34,
    marginTop: 30,
  },
  titleSection: {
    fontSize: 17,
    fontWeight: '700',
  },
  wFull: {
    width: '100%',
  },
})

export default GeneralStyle
