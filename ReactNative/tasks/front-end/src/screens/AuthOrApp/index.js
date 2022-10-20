import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { CommonActions } from '@react-navigation/native';

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

class AuthOrApp extends Component {

  componentDidMount = async () => {
    const userDataJson = await AsyncStorage.getItem('userData')
    let userData = null

    try {
      userData = JSON.parse(userDataJson)
    } catch (e) {
      // userData está inválido
    }

    if (userData && userData.token) {
      axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`

      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{
            name: 'Home',
            params: userData,
          }],
        })
      );
    } else {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{
            name: 'Auth',
          }],
        })
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}

export default AuthOrApp