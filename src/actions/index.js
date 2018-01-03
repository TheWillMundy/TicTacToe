
// Actions 
export const createGameboard = (gameboard) => {
    return (dispatch) => {
            return dispatch({
                type: "CREATE_GAMEBOARD",
                gameboard
            })
    }
}

export const changeTile = (key, currentPlayer) => {
    return (dispatch) => {
        dispatch(changePlayer(currentPlayer));
        return dispatch({
            type: "CHANGE_TILE",
            key,
            currentPlayer
        })
    }
}

export const changePlayer = (currentPlayer) => {
    return (dispatch) => {
        if (currentPlayer == 'X') {
          currentPlayer = 'O'
        }
        else {
          currentPlayer = 'X'
        }
        return dispatch({
            type: "CHANGE_PLAYER",
            currentPlayer
        })
    }
}

