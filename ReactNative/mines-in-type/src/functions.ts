interface Board {
  row: number,
  column: number,
  opened: boolean,
  flagged: boolean,
  mined: boolean,
  exploded: boolean,
  nearMines: number,
}

const createBoard = (rows: number, columns: number ) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      let resul: Board = {
        row: row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0,
      }

      return resul
    })
  })
}

const spreadMines = (board: Array<Array<Board>>, minesAmount: number): void => {
  const rows = board.length
  const columns = board[0].length
  let minesPlanted = 0

  while (minesPlanted < minesAmount) {
    const rowSel = parseInt((Math.random() * rows).toString(), 10)
    const columnSel = parseInt((Math.random() * columns).toString(), 10)

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true
      minesPlanted ++
    }
  }
}

const createMinedBoard = (rows: number, columns: number, minesAmount: number): Array<Array<Board>> => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)
  return board
}

const cloneBoard = (board: Array<Array<Board>>) => {
  return board.map(rows => {
      return rows.map(field => {
          return { ...field }
      })
  })
}

const getNeighbors = (board: Array<Array<Board>>, row: number, column: number): any => {
  const neighbors: Array<Board> = []
  const rows = [row-1, row, row+1]
  const columns = [column-1, column, column+1]

  rows.forEach( r => {
    columns.forEach( c => {
      const diferent = r !== row || c !== column
      const validRow = r >= 0 && r < board.length
      const validColumn = c >= 0 && c < board[0].length
      if (diferent && validRow && validColumn) {
        neighbors.push(board[r][c])
      }
    })
  })

  return neighbors
}

const safeNeighborhood = (board: Array<Array<Board>>, row: number, column: number): boolean => {
  const safes = (result: Board, neighbor: Board) => result && !neighbor.mined
  return getNeighbors(board, row, column).reduce(safes, true)
}

const openField = (board: Array<Array<Board>>, row: number, column: number) => {
  const field = board[row][column]

  if (!field.opened) {
    field.opened = true

    if (field.mined) {
      field.exploded = true

    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach((n: Board) => {
        openField(board, n.row, n.column)
      })

    } else {
      const neighbors = getNeighbors(board, row, column)
      field.nearMines = neighbors.filter((n: Board) => n.mined).length

    }
  }
}

const fields = (board: Array<Array<Board>>) => {
  let arr: Array<Board> = []
  return arr.concat(...board)
}

const invertFlag = (board: Array<Array<Board>>, row: number, column: number) => {
  const field = board[row][column]
  field.flagged = !field.flagged
}

const hadExplosion = (board: Array<Array<Board>>) => fields(board).filter((field: Board) => field.exploded).length > 0

const pendding = (field: Board) => (field.mined && !field.flagged) || (!field.mined && !field.opened)

const wonGame = (board: Array<Array<Board>>) => fields(board).filter(pendding).length === 0

const showMines = (board: Array<Array<Board>>) => fields(board).filter((field: Board) => field.mined).forEach((field: Board) => field.opened = true)

const flagUsed = (board: Array<Array<Board>>) => fields(board).filter((field: Board) => field.flagged).length

export { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, flagUsed }

export type { Board }