import React from 'react'
import { View, Text,  TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'

import styles from './styles'

const Task = ({id, desc, estimateAt, doneAt, onToggleTask, onDelete }) => {

  const doneOrNotStyle = doneAt != null ? { textDecorationLine: 'line-through' } : {}


  /**
   * @description Formata data para o padrão especifico
   * @param {Date} date Data que deverá ser formatada
   * @return {string} Data formatada no padrao 'ter, 01 de Maio'
   * 
   */
  const formattedDate = (date) => {
    return moment(date).locale('pt-br').format('ddd, D [de] MMMM')
  }

  
  return(
    <GestureHandlerRootView>
      <Swipeable 
        renderRightActions={() =>
          <TouchableOpacity style={styles.right} onPress={() => onDelete && onDelete(id)}>
            <Icon name="trash" size={30} color='#fff'/>
          </TouchableOpacity>
        } 
        renderLeftActions={() =>
          <View style={styles.left}>
            <Icon style={styles.excludeIcon} name="trash" size={30} color='#fff'/>
            <Text style={styles.excludeText}>Excluir</Text>
          </View>
        } 
        onSwipeableOpen={() => onDelete && onDelete(id)}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => onToggleTask(id)}>
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