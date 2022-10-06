import React, { useState, useContext } from 'react'
import { Button } from '@rneui/base'
import UsersContext from '../hooks/UsersContext'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  }
})

const UserForm = ({route, navigation}) => {

  const [ user, setUser ] = useState(route.params ? route.params : {})

  const { dispatch } = useContext(UsersContext)

  return (
    <View style={styles.form}>
      <Text>Nome</Text>
      <TextInput style={styles.input} onChangeText={name => setUser({...user, name})} placeholder="Informe o nome" value={user.name} />

      <Text>Email</Text>
      <TextInput style={styles.input} onChangeText={email => setUser({...user, email})} placeholder="Informe o email" value={user.email} />

      <Text>URL de Avatar</Text>
      <TextInput style={styles.input} onChangeText={avatarUrl => setUser({...user, avatarUrl})} placeholder="Informe o caminho da imagem" value={user.avatarUrl} />

      <Button title="Salvar" onPress={() => {
        if (route && route.params && route.params.id)
          dispatch({ type: 'editUser', payload: user })
        else
          dispatch({ type: 'createUser', payload: user })

        navigation.goBack()
      }}/>
    </View>
  )
}

export default UserForm