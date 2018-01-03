import React, { Component } from 'react';
import {connect} from 'react-redux'
// mui imports
import {GridList} from 'material-ui/GridList'
// component imports
import Gameboard from '../components/gameboard.js'
// action imports 
import {changeTile, checkVictory} from '../actions'

// {victory ? <h1>Victory!</h1> : <Gameboard gameboard={gameboard} currentPlayer={currentPlayer} changeTile={changeTile} victory={victory} />}
const TicTacToe = ({changeTile, currentPlayer, gameboard, checkVictory, victory}) => {
  checkVictory()
  return (
    <div style={{'padding': '5vh', 'paddingTop': '0'}}>
      <h1 style={{'textAlign': 'center'}}>Current Player: {currentPlayer}</h1>
      <Gameboard gameboard={gameboard} currentPlayer={currentPlayer} changeTile={changeTile} victory={victory} />
    </div>
  )
}

export default connect (
    (state) => {
        return {
            currentPlayer: state.playerReducer.currentPlayer,
            gameboard: state.gameboardReducer.gameboard,
            victory: state.gameboardReducer.victory
        }
    },
    (dispatch) => {
        return {
            changeTile: (key, player) => dispatch(changeTile(key, player)),
            checkVictory: () => dispatch(checkVictory())
        }
    }
)(TicTacToe)