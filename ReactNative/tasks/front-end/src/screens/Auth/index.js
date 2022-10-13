import React, { Component } from 'react'
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import AuthInput from '../../components/AuthInput'
import backgroundImage from '../../../assets/imgs/login.jpg'
import styles from './styles'

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  stageNew: false,
}

class Auth extends Component {

  state = { ...initialState }

  signinOrSignup = () => {
    if (this.state.stageNew) {
      this.signup()
    } else {
      this.signin()
    }
  }


  signup = async () => {
    try {
      await axios.post(`${server}/signup`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      })

      showSuccess('Usuário cadastro!')
      this.setState({ ...initialState })
    } catch (e) {
        showError(e)
    }
  }

  signin = async () => {
    try {
      const res = await axios.post(`${server}/signin`, {
        email: this.state.email,
        password: this.state.password
      })

      AsyncStorage.setItem('userData', JSON.stringify(res.data))
      axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`

      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{
            name: 'Home',
            params: res.data,
          }],
        })
      )
    } catch (e) {
        showError(e)
    }
  }


  render() {
    return(
      <ImageBackground style={styles.background} source={backgroundImage}>
        <Text style={styles.title}>Tasks</Text>

        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>
            {this.state.stageNew ? 'Crie a sua contas' : 'Informe seus dados'}
          </Text>

          {this.state.stageNew &&
            <AuthInput 
              icon='user' 
              placeholder='Nome'
              value={this.state.name}
              style={styles.input}
              onChangeText={name => this.setState({ name })} />
          }
          <AuthInput 
            icon='at' 
            placeholder='E-mail'
            value={this.state.email}
            style={styles.input}
            onChangeText={email => this.setState({ email })} />

          <AuthInput 
            icon='lock' 
            placeholder='Senha'
            value={this.state.password}
            style={styles.input} secureTextEntry={true}
            onChangeText={password => this.setState({ password })} />

          {this.state.stageNew &&
            <AuthInput 
              icon='asterisk'
              placeholder='Confirmação de Senha'
              value={this.state.confirmPassword}
              style={styles.input} secureTextEntry={true}
              onChangeText={confirmPassword => this.setState({ confirmPassword })} />
          }

          <TouchableOpacity onPress={this.signinOrSignup}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>{ this.state.stageNew ? 'Registrar' : 'Entrar' }</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
          <Text style={styles.btnText}>{ this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta' }</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

export default Auth