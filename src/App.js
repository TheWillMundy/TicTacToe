import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// component imports
import TicTacToe from './containers/tictactoe'

const App = ({}) => (
  <MuiThemeProvider>
    <TicTacToe />
  </MuiThemeProvider>
)

export default App;
