import React from "react"
import { Button } from "react-native"

export default () => {

  function executar(): void {
    console.warn('Botão apertado')
  }

  return (
    <>
      <Button title="Executar #01" onPress={executar} />
      <Button title="Executar #02" onPress={() => console.warn('Exec #02')} />
      <Button 
        title="Executar #03" 
        onPress={function () { 
            console.warn('Exec #03')
        }} 
      />
    </>
  )
}