import React from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'

import produtos from './produtos'

export default () => {
  function obterLista() {
    return produtos.map(p => {
      return (
        <Text key={p.id}>
          {p.id}) {p.nome} tem preço R$ {p.preco}
        </Text>
      )
    })
  }

  return (
    <>
      <Text style={Estilo.textG}>
        Lista de Produtos
      </Text>
      {obterLista()}
    </>
  )
}