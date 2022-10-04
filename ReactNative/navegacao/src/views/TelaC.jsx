import React from 'react'
import PassoStack from '../components/PassoStack'
import TextoCentral from '../components/TextoCentral'

const TelaC = (props) => {
  const numero = props.route && props.route.params && props.route.params.numero ? props.route.params.numero : 0
  
  return (
    <PassoStack navigation={props.navigation} voltar avancar="TelaC">
      <TextoCentral corfundo="#9333ea">Tela C - {numero}</TextoCentral>
    </PassoStack>
  )
}

export default TelaC
