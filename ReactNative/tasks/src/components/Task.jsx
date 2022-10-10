import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: '#AAA',
    borderBottomWidth: 1,
  },

  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555'
  },

  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4d7031',
    alignItems: 'center',
    justifyContent: 'center'
  },

  desc : {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15
  },

  data: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
  }
})

const Task = (props) => {
  const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : {}

  function formattedDate(date) {
    return moment(date).locale('pt-br').format('ddd, D [de] MMMM')
  } 

  function getCheckView(doneAt) {
    if (doneAt != null){
      return (
        <View style={styles.done}>
          <Icon name="check" size={20} color='#fff'/>
        </View>
      )
    } else {
      return (
        <View style={styles.pending}>
        </View>
      )
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.checkContainer}>
        {getCheckView(props.doneAt)}
      </View>

      <View>
        <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
        <Text>{props.doneAt ? formattedDate(props.doneAt) : formattedDate(props.estimateAt)}</Text>
      </View>
    </View>
  )
}

export default Task