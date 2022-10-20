import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: '#EEE',
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: '#333',
    marginLeft: 20,
    width: 20,
  },
  input: {
    width: '70%',
    padding: Platform.OS == 'ios' ? 15 : 10,
  }
})

export default styles