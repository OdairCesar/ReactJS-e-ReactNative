import React from 'react'
import { View, Text,  TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'

import styles from './styles'

const Task = ({id, desc, estimateAt, doneAt, toggleTask }) => {

  const doneOrNotStyle = doneAt != null ? { textDecorationLine: 'line-through' } : {}

  const formattedDate = (date) => {
    return moment(date).locale('pt-br').format('ddd, D [de] MMMM')
  }

  const getRightContent = () => {
    return(
      <TouchableOpacity style={styles.right}>
        <Icon name="trash" size={30} color='#fff'/>
      </TouchableOpacity>
    )
  }

  return(
    <GestureHandlerRootView>
      <Swipeable renderRightActions={getRightContent}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => toggleTask(id)}>
            <View style={styles.checkContainer}>
              {doneAt != null
                ? <View style={styles.done}>
                    <Icon name="check" size={20} color='#fff'/>
                  </View>
                : <View style={styles.pending}>
                  </View>
              }
            </View>
          </TouchableWithoutFeedback>

          <View>
            <Text style={[styles.desc, doneOrNotStyle]}>{desc}</Text>
            <Text>{doneAt ? formattedDate(doneAt) : formattedDate(estimateAt)}</Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

export default Task