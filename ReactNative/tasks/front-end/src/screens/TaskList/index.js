import React, { Component } from 'react'
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

import todayImage from '../../../assets/imgs/today.jpg'
import tomorrowImage from '../../../assets/imgs/tomorrow.jpg'
import weekImage from '../../../assets/imgs/week.jpg'
import monthImage from '../../../assets/imgs/month.jpg'
import commonStyles from '../../commonStyles'
import { server, showError } from '../../common'

import Task from '../../components/Task'
import AddTask from '../AddTask'
import styles from './styles'

const initialState = { 
  showDoneTasks: true,
  showAddTask: false,
  visibleTasks: [],
  tasks: []
}

export default class TaskList extends Component {

  state = { ...initialState  }

  componentDidMount = async () => {

    const savedState = JSON.parse(await AsyncStorage.getItem('tasksState')) || initialState

    this.setState({ showDoneTasks: savedState.showDoneTasks }, this.filterTasks)

    this.loadTasks()

  }


  /**
   * @description Adiciona uma nova tarefa na listagem
   * @param {object} newTask A tarefa que será adicionada
   * 
   */
  addTask = async newTask => {

    if (!newTask.desc && !newTask.desc.trim()) {
      Alert.alert('Dados Inválidos', 'Descrição não informada!')
      return
    }

    try{
      await axios.post(`${server}/tasks`, {
        desc: newTask.desc,
        estimateAt: newTask.date
      })

      this.setState({ showAddTask: false }, this.loadTasks)
    } catch (err) {
      showError(err)
    }

  }


  /**
   * @description Busca listas de tasks
   * 
   */
  loadTasks = async () => {
    try {
      const maxDate = moment().add({ days: this.props.daysAhead}).format('YYYY-MM-DD 23:59:59')
      const res = await axios.get(`${server}/tasks?date=${maxDate}`)

      this.setState({ tasks: res.data }, this.filterTasks)

    } catch(e) {
      showError(e)
    }
  }
  

  /**
   * @description Filtra a lista com as tarefas não feitas 
   * 
   */
  filterTasks = () => {

    let visibleTasks = null

    if(this.state.showDoneTasks)
      visibleTasks = [...this.state.tasks]
    else
      visibleTasks = this.state.tasks.filter(task => task.doneAt === null)

    this.setState({ visibleTasks })

    AsyncStorage.setItem('tasksState', JSON.stringify({
      showDoneTasks: this.state.showDoneTasks
    }))

  }
  

  /**
   * @description Ativa ou desativa o filtro da lista 
   * 
   */
  toggleFilter = () => {

    this.setState({ showDoneTasks: !this.state.showDoneTasks}, this.filterTasks)

  }
  

  /**
   * @description Marca ou Desmarca tarefa como feita
   * @param {string} taskId Id da task que será marcada ou desmarcada como feita
   * 
   */
  toggleTask = async taskId => {

    try {
      await axios.put(`${server}/tasks/${taskId}/toggle`)
      this.loadTasks()
    } catch(e) {
      showError(e)
    }

  }


  /**
   * @description Marca ou Desmarca tarefa como feita
   * @param {string} id Id da task que será deletada
   * 
   */
  deleteTask = async id => {

    try {
      await axios.delete(`${server}/tasks/${id}`)
      this.loadTasks()
    } catch(e) {
        showError(e)
    }

  }

  getImage = () => {
    switch(this.props.daysAhead){
      case 0: return todayImage
      case 1: return tomorrowImage
      case 7: return weekImage
      default: return monthImage
    }
  }
  
  getColor = () => {
    switch(this.props.daysAhead){
      case 0: return commonStyles.colors.today
      case 1: return commonStyles.colors.tomorrow
      case 7: return commonStyles.colors.week
      default: return commonStyles.colors.month
    }
  }

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
      <View style={styles.container}>
        <AddTask 
          isVisible={this.state.showAddTask} 
          onCancel={() => this.setState({ showAddTask: false })} 
          onSave={this.addTask}/>

        <ImageBackground style={styles.background} source={this.getImage()}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Icon 
                  name='bars'
                  size={20} color={commonStyles.colors.secondary} />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon 
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} 
                size={20} 
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.titleBar}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
      
        <View style={styles.taskList}>
          <FlatList data={this.state.visibleTasks} keyExtractor={item => `${item.id}`} 
            renderItem={({ item }) => (
              <Task 
                id={item.id} 
                estimateAt={item.estimateAt} 
                doneAt={item.doneAt} 
                desc={item.desc} 
                onToggleTask={this.toggleTask}
                onDelete={this.deleteTask}/> 
            )}
          />
        </View>

        <TouchableOpacity activeOpacity={0.7} style={[styles.addBtn, { backgroundColor: this.getColor() }]} onPress={() => this.setState({ showAddTask: true })}>
          <Icon name="plus" size={20} color={commonStyles.colors.secondary}/>
        </TouchableOpacity>
      </View>
    )
  }
}