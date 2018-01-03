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