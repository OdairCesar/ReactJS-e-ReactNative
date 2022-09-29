import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Primeiro from './components/Primeiro'
// import Padrao, { Comp1, Comp2 } from './components/Multi'
// import MiniMax from './components/MniMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'

export default function App() {
  return (
    <SafeAreaView style={style.App}>
      <ContadorV2></ContadorV2>
      {/*
      <Pai></Pai>
      <Contador inicial={58} passo={5}></Contador>
      <Contador></Contador>
      <Botao></Botao>
      <Titulo principal='Cadastro Produto' segundario='Tela de cadastro de produto'></Titulo>
      <MiniMax min={3} max={15}></MiniMax>
      <Aleatorio de={5} ate={18}></Aleatorio>
      <Primeiro />
      <Padrao />
      <Comp1 />
      <Comp2 />
      */}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})