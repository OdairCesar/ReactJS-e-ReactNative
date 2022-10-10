import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'

import todayImage from '../../../assets/imgs/today.jpg'
import commonStyles from '../../commonStyles'

import Task from '../../components/Task'
import AddTask from '../AddTask'
import styles from './styles'


export default class TaskList extends Component {

  state = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: [{
        id: Math.random(),
        desc: 'Comprar Livro de React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      }, {
        id: Math.random(),
        desc: 'Ler Livro de React Native',
        estimateAt: new Date(),
        doneAt: null,
      }, {
        id: Math.random(),
        desc: 'Iniciar Curso de React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      }, {
        id: Math.random(),
        desc: 'Terminar Curso de React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
    ]
  }

  componentDidMount = () => {
    this.filterTasks()
  }


  /**
   * @description Adiciona uma nova tarefa na listagem
   * @param {object} newTask A tarefa que será adicionada
   * 
   */
  addTask = newTask => {

    if (!newTask.desc && !newTask.desc.trim()) {
      Alert.alert('Dados Inválidos', 'Descrição não informada!')
      return
    }

    const tasks = [...this.state.tasks]

    tasks.push({
      id: Math.random(),
      desc: newTask.desc,
      estimateAt: newTask.estimateAt,
      doneAt: null
    })

    this.setState({ tasks, showAddTask: false }, this.filterTasks)
  }
  

  /**
   * @description Filtra a lista com as tarefas não feitas 
   * 
   */
  filterTasks = () => {

    let visibleTasks = null

    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks] 
    } else {
      visibleTasks = this.state.tasks.filter(task => task.doneAt === null)
    }

    this.setState({ visibleTasks })

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
   * @param {string} taskId 
   * 
   */
  toggleTask = taskId => {

    const tasks = [...this.state.tasks]

    tasks.forEach(task => {
      if(task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date()
      }
    })

    this.setState({ tasks }, this.filterTasks)

  }

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
      <View style={styles.container}>
        <AddTask 
          isVisible={this.state.showAddTask} 
          onCancel={() => this.setState({ showAddTask: false })} 
          onSave={this.addTask}/>

        <ImageBackground style={styles.background} source={todayImage}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon 
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} 
                size={20} 
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
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
                toggleTask={this.toggleTask}/> 
            )}
          />
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.addBtn} onPress={() => this.setState({ showAddTask: true })}>
          <Icon name="plus" size={20} color={commonStyles.colors.secondary}/>
        </TouchableOpacity>
      </View>
    )
  }
}