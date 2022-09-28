import React, { useState } from 'react';
import { Text } from 'react-native';
import Filho from './Filho';

export default () => {

  const [ num, setNum ] = useState(0)
  const [ txt, setTxt ] = useState('')

  function exibirValor (numero: number, texto: string): void {
    setNum(numero)
    setTxt(texto)
  }
  
  return (
    <>
      <Text>{txt && num ? txt+': '+num : ''}</Text>
      <Filho minimo={1} maximo={60} callback={exibirValor}></Filho>
    </>
  )
}