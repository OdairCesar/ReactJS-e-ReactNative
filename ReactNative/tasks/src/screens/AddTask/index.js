import React, { Component } from 'react'
import { Modal, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import styles from './styles'
import moment from 'moment'

const initialState = { 
  desc: '', 
  date: new Date(), 
  showDatePicker: false
}

export default class AddTask extends Component {

  state = { ...initialState }


  /**
   * @description Salva uma nova tarefa
   * 
   */
  save = () => {

    const newTask = {
      desc: this.state.desc,
      date: this.state.date
    }

    this.props.onSave && this.props.onSave(newTask)
    this.setState({ ...initialState })
  }

  
  render() {
    return (
      <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='fade'>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.overlay}></View>
        </TouchableWithoutFeedback>

        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa</Text>

          <TextInput style={styles.input} placeholder='Informe a descrição' value={this.state.desc} onChangeText={desc => this.setState({ desc })} />

          {Platform.OS === 'android' 
            ? <View>
                <TouchableOpacity onPress={() => this.setState({ showDatePicker: true})}>
                  <Text style={styles.date}>
                    {moment(this.state.date).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
                  </Text>
                </TouchableOpacity>
  
                {this.state.showDatePicker 
                  && <RNDateTimePicker value={this.state.date} onChange={(_, date) => this.setState({ date, showDatePicker: false })} onC mode='date' /> }
              </View>
            : <RNDateTimePicker value={this.state.date} onChange={(_, date) => this.setState({ date, showDatePicker: false })} onC mode='date' />
          }

          <View style={styles.btns}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.btn}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.save}>
              <Text style={styles.btn}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.overlay}></View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}