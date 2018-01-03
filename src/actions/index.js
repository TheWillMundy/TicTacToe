
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
        dispatch(previousPlayer(currentPlayer));
        dispatch(changePlayer(currentPlayer));
        return dispatch({
            type: "CHANGE_TILE",
            key,
            currentPlayer
        })
    }
}

export const checkVictory = () => {
    return (dispatch) => {
        return dispatch({
            type: "CHECK_VICTORY",
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

export const previousPlayer = (player) => {
    return (dispatch) => {
        return dispatch({
            type: "PREVIOUS_PLAYER",
            player
        })
    }
}

