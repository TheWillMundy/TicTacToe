import React, { Component } from 'react';
import {connect} from 'react-redux'
// mui imports
import {GridList} from 'material-ui/GridList'
// component imports
import Gameboard from '../components/gameboard.js'
// action imports 
import {changeTile} from '../actions'


const TicTacToe = ({changeTile, currentPlayer, gameboard}) => {
  return (
    <div style={{'padding': '5vh', 'paddingTop': '0'}}>
      <h1 style={{'textAlign': 'center'}}>Current Player: {currentPlayer}</h1>
      <Gameboard gameboard={gameboard} currentPlayer={currentPlayer} changeTile={changeTile} />
    </div>
  )
}

export default connect (
    (state) => {
        return {
            currentPlayer: state.playerReducer.currentPlayer,
            gameboard: state.gameboardReducer.gameboard
        }
    },
    (dispatch) => {
        return {
            changeTile: (key, player) => dispatch(changeTile(key, player))
        }
    }
)(TicTacToe)