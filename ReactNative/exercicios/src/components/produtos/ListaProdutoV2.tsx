import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../Estilo'

import produtos from './produtos'

interface typeProduto {
  item: {
    id: number,
    nome: string,
    preco: number
  }
}

export default () => {
  const produtoRender: React.FC<typeProduto> = ({ item: p }) => {
    return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
  }

  return (
    <>
      <Text style={Estilo.textG}>
        Lista de Produtos V2
      </Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  )
}