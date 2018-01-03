import { combineReducers } from 'redux'

const gameboardReducer = (state={gameboard: [], victory: false}, action) => {
    switch(action.type) {
        case "CREATE_GAMEBOARD":
            let newGameboard = []
            let defaultTile = {
              mark: "",
            }
            let counter = 0
            for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                let gameTile = {...defaultTile, key: counter, row: i, col: j}
                newGameboard.push(gameTile)
                counter++
              }
            }
            console.log(newGameboard)
            return {...state, gameboard:newGameboard}
        case "CHANGE_TILE":
            let changeGameboard = {...state}
            changeGameboard = changeGameboard.gameboard
            let tile = changeGameboard[action.key]
            tile = {...tile, mark: action.currentPlayer}
            changeGameboard[action.key] = tile
            console.log(changeGameboard)
            return {...state, gameboard:changeGameboard}
        case "CHECK_VICTORY":
            let gameboard = state.gameboard
            let victory = true
            let rightDiagFilter = gameboard.filter(tile => (tile.row == tile.col))
            let leftDiagFilter = gameboard.filter(tile => (tile.row == (2 - tile.col)))
            console.log(leftDiagFilter)
            for (let i = 0; i < 3; i++) {
              let rowFilter = gameboard.filter(tile => (tile.row == i))
              let colFilter = gameboard.filter(tile => (tile.col == i))
              for (tile in rowFilter) {
                if (rowFilter[tile].mark == "" || (rowFilter[tile].mark != rowFilter[0].mark)) {
                  victory = false
                }
              }
              if (victory) return {...state, victory: victory}
              victory = true
              for (tile in colFilter) {
                if (colFilter[tile].mark == "" || (colFilter[tile].mark != colFilter[0].mark)) {
                  victory = false
                }
              }
              if (victory) return {...state, victory: victory}
              victory = true
            }
            for (tile in rightDiagFilter) {
              if (rightDiagFilter[tile].mark == "" || (rightDiagFilter[tile].mark != rightDiagFilter[0].mark)) {
                victory = false
              }
            }
            if (victory) return {...state, victory: victory}
            victory = true
            for (tile in leftDiagFilter) {
              if (leftDiagFilter[tile].mark == "" || (leftDiagFilter[tile].mark != leftDiagFilter[0].mark)) {
                victory = false
              }
            }
            return {...state, victory: victory}
        default:
            return state
    }
}

const playerReducer = (state={currentPlayer: 'X'}, action) => {
    switch(action.type) {
      case "CHANGE_PLAYER":
        console.log("New Player: " + action.currentPlayer)
        return {...state, currentPlayer: action.currentPlayer}
      default:
        return state
    }
}


const Reducer = combineReducers({
    gameboardReducer, playerReducer
})


export default Reducer