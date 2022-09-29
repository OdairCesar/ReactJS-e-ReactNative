import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Mega from './components/mega/Mega'
// import FlexboxV4 from './components/layout/FlexboxV4'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutoV2 from './components/produtos/ListaProdutoV2'
// import ListaProduto from './components/produtos/ListaProduto'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import Parimpar from './components/Parimpar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
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
      <Mega qtdeNumeros={8}/>
      {/*
      <FlexboxV4 />
      <FlexboxV3 />
      <FlexboxV2 />
      <FlexboxV1 />
      <DigiteSeuNome />
      <ListaProdutoV2 />
      <ListaProduto />
      <UsuarioLogado usuario={{nome: 'Paulo', email: 'odairferreira97@gmail.com'}}/>
      <Familia nome="Arruda">
        <Membro nome="Bia" sobrenome='Arruda' />
        <Membro nome="Carlos" sobrenome='Arruda' />
      </Familia>
      <Familia nome="Silva">
        <Membro nome="Ana" sobrenome='Silva' />
        <Membro nome="Julia" sobrenome='Silva' />
      </Familia>
      <Parimpar num={7}/>
      <Diferenciar />
      <ContadorV2 />
      <Pai />
      <Contador inicial={58} passo={5} />
      <Contador />
      <Botao />
      <Titulo principal='Cadastro Produto' segundario='Tela de cadastro de produto' />
      <MiniMax min={3} max={15} />
      <Aleatorio de={5} ate={18} />
      <Primeiro />
      <Padrao />
      <Comp1 />
      <Comp2 />
      */}
    </SafeAreaView >
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