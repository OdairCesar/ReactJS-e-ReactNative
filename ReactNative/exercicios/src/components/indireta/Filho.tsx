import React from 'react'
import { Button } from 'react-native'

interface typeProps {
  minimo?: number,
  maximo?: number,
  callback: Function,
}

const Filho: React.FC<typeProps> = ({minimo = 0, maximo = 1, callback}) => {

  function gerarNumero(max: number , min: number): number {
    const fator = max - min + 1
    return Math.floor(Math.random() * fator + min)
  }

  return(
    <>
      <Button title="Executar" onPress={() => {
          callback(gerarNumero(minimo, maximo), 'Resultado')
        }} 
      />
    </>
  )
}

export default Filho