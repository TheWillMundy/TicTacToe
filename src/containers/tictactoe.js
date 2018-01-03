import React, { Component } from 'react';
import {connect} from 'react-redux'
// mui imports
import {GridList} from 'material-ui/GridList'
// component imports
import Gameboard from '../components/gameboard.js'
// action imports 
import {changeTile, checkVictory, changePlayer} from '../actions'

// {victory ? <h1>Victory!</h1> : <Gameboard gameboard={gameboard} currentPlayer={currentPlayer} changeTile={changeTile} victory={victory} />}
const TicTacToe = ({changeTile, currentPlayer, gameboard, checkVictory, victory, previousPlayer}) => {
  
  checkVictory()
  
  return (
    <div style={{'padding': '5vh', 'paddingTop': '0'}}>
      <h1 style={{'textAlign': 'center'}}>{victory ? <span>Victory: {previousPlayer}</span> : <span>Current Player: {currentPlayer}</span>}</h1>
      <Gameboard gameboard={gameboard} currentPlayer={currentPlayer} changeTile={changeTile} victory={victory} />
    </div>
  )
}

export default connect (
    (state) => {
        return {
            currentPlayer: state.playerReducer.currentPlayer,
            gameboard: state.gameboardReducer.gameboard,
            victory: state.gameboardReducer.victory,
            previousPlayer: state.playerReducer.previousPlayer
        }
    },
    (dispatch) => {
        return {
            changeTile: (key, player) => dispatch(changeTile(key, player)),
            checkVictory: () => dispatch(checkVictory())
        }
    }
)(TicTacToe)