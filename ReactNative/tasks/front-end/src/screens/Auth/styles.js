import { StyleSheet, Platform } from "react-native"
import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 70,
    marginBottom: 10
  },

  subtitle: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },

  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    width: '90%',
  },

  input: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: Platform.OS == 'ios' ? 15 : 10,
  },

  btn: {
    backgroundColor: '#080',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },

  btnText: {
    fontFamily: commonStyles.fontFamily,
    color: '#fff',
    fontSize: 20,
  },
})

export default styles