import React, { Component } from 'react';
// mui imports
import {GridList, GridTile} from 'material-ui/GridList'
import Button from 'material-ui/FlatButton'

const tileStyle = {
  height:"200px",
  width:"30vw",
  backgroundColor: "#e53935"
}

const Gameboard = ({changeTile, currentPlayer, gameboard, victory}) => {
  
  const setupTile = (tile) => {
    if (tile.mark != "") {
      if (tile.mark == "X") {
        return (<i class="fas fa-7x fa-times"></i>)
      }
      else {
        return (<i class="fas fa-7x fa-dot-circle"></i>)
      }
    }
  }
  
  const isDisabled = (tile) => {
    if (victory) {
      return true
    }
    else if (tile.mark == "") {
      return false
    }
    else {
      return true
    }
  }
  
  return (
    <GridList cols={3} rows={3} cellHeight={200}>
      {gameboard.map((tile) => {
        console.log("Changed")
        return (
          <GridTile key={tile.key}>
            <Button style={tileStyle} onClick={() => changeTile(tile.key, currentPlayer)} disabled={isDisabled(tile)}>
              {setupTile(tile)}
            </Button>
          </GridTile>
        )
      })}
    </GridList>
  )
}


export default Gameboard
