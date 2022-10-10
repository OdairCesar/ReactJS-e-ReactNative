import React, { Component } from 'react'
import { SafeAreaView, View, Text, ImageBackground, StyleSheet } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'

import todayImage from '../../assets/imgs/today.jpg'

import Task from '../components/Task'
import commonStyles from '../commonStyles'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  background: {
    flex: 3
  },

  taskList: {
    flex: 7
  },

  titleBar: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },

  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
  }
})

class TaskList extends Component {
  
  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.background} source={todayImage}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
      
        <View style={styles.taskList}>
          <Task desc='Tarefa #01' estimateAt={new Date} doneAt={new Date}/>
          <Task desc='Tarefa #02' estimateAt={new Date} doneAt={new Date}/>
          <Task desc='Tarefa #03' estimateAt={new Date} />
        </View>
      </SafeAreaView>
    )
  }
}

export default TaskList