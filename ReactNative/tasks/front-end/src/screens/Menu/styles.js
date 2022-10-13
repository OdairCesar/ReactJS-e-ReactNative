import { Platform, StyleSheet } from 'react-native'
import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
  header: {
      borderBottomWidth: 1,
      borderColor: '#DDD'
  },
  title: {
      color: '#000',
      fontFamily: commonStyles.fontFamily,
      fontSize: 30,
      paddingTop: Platform.OS === 'ios' ? 70 : 30,
      padding: 10
  },
  avatar: {
      width: 60,
      height: 60,
      borderWidth: 3,
      borderRadius: 30,
      margin: 10,
      backgroundColor: '#222'
  },
  userInfo: {
      marginLeft: 10,
  },
  name: {
      fontFamily: commonStyles.fontFamily,
      fontSize: 20,
      color: commonStyles.colors.mainText,
      marginBottom: 5,
  },
  email: {
      fontFamily: commonStyles.fontFamily,
      fontSize: 15,
      color: commonStyles.colors.subText,
      marginBottom: 10,
  },
  logoutIcon: {
      marginLeft: 10,
      marginBottom: 10
  }
})

export default styles