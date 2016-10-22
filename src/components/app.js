import React, { Component } from 'react';
import GameBoard from '../containers/GameBoard';
import Controls from '../containers/Control';
import Counter from '../containers/Counter';

export default () => (
  <div className="container">
    <h1><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a></h1>
    <GameBoard />
    <Controls />
    <Counter />
  </div>
)
