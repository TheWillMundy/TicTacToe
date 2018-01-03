import React, { Component } from 'react';
// mui imports
import {GridList, GridTile} from 'material-ui/GridList'
import Button from 'material-ui/FlatButton'

const tileStyle = {
  height:"200px",
  width:"30vw",
  backgroundColor: "#e53935"
}

const Gameboard = ({changeTile, currentPlayer, gameboard}) => {
  
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
  
  return (
    <GridList cols={3} rows={3} cellHeight={200}>
      {gameboard.map((tile) => {
        console.log("Changed")
        return (
          <GridTile key={tile.key}>
            <Button style={tileStyle} onClick={() => changeTile(tile.key, currentPlayer)} disabled={tile.mark == "" ? false : true}>
              {setupTile(tile)}
            </Button>
          </GridTile>
        )
      })}
    </GridList>
  )
}


export default Gameboard
