import React, { Component, ReactNode } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../Estilo'
import MegaNumero from './MegaNumero'

interface MyState {
  qtdeNumeros: number
  numeros: Array<number>
}

interface MyProps {
  qtdeNumeros: number
}


export default class Mega extends Component<MyProps, MyState> {

  state: MyState = { 
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: []
  }

  alterarQtdeNumero = (qtde: number) => {
    this.setState({ qtdeNumeros: + qtde })
    if (qtde == null || !qtde) this.setState({qtdeNumeros: 0})
  }

  gerarNumeroNaoContido = (nums: Array<number>): number => {
    const novo = Math.floor((Math.random() * 60)) + 1
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
  }

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a:number, b:number) => a - b)
    this.setState({ numeros })
  }

  exibirNumeros = (): ReactNode => {
    const nums = this.state.numeros
    return nums.map(num => {
      return <MegaNumero key={num} num={num} />
    })
  }

  render() {
    return (
      <>
        <Text style={Estilo.textG}>
          Gerador de Mega-Sena
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtde de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={e => this.alterarQtdeNumero(parseInt(e))}
        />
        <Button
          title='Gerar'
          onPress={this.gerarNumeros}
        />
        <View style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {this.exibirNumeros()}
        </View>
      </>
    )
  }
}