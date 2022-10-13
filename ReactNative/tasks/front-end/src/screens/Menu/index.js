import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { CommonActions } from '@react-navigation/native';
import { Gravatar } from 'react-native-gravatar'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const Menu = props => {

  const logout = () => {
    delete axios.defaults.headers.common['Authorization']
    
    AsyncStorage.removeItem('userData')

    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{
          name: 'Auth',
        }],
      })
    )
  }

  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
          
        <Gravatar style={styles.avatar} options={{ email: props.email, secure: true }} />

        <View style={styles.userInfo}>
          <Text style={styles.name}>{ props.name }</Text>   
          <Text style={styles.email}>{ props.email }</Text>
        </View>

        <TouchableOpacity onPress={logout}>
          <View style={styles.logoutIcon}>
            <Icon name='sign-out' size={30} color='#800' />
          </View>
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default Menu