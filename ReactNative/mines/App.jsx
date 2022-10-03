import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import { createMinedBoard, cloneBoard, hadExplosion, wonGame, showMines, openField, invertFlag, flagUsed } from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)
  
    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeeeeu', 'Que buuuro!')
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu')
    }

    this.setState({ board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabéns', 'Você venceu')
    }

    this.setState({ board, won})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header flagsLeft={this.minesAmount() - flagUsed(this.state.board)} onNewGame={() => this.setState(this.createState())}/>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  title: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  }
})
