import { StyleSheet } from 'react-native'
import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  container: {
    backgroundColor: '#fff'
  },

  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.today,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
  },

  btns: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  btn: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.today
  },

  input: {
    fontFamily: commonStyles.fontFamily,
    height: 40,
    margin: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
  },

  date: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginLeft: 15,
  },
})

export default styles