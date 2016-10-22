import { combineReducers } from 'redux';

import board from './reducer-board';
import Status from './status';
import generation from './generation';

const rootReducer = combineReducers({
  board: board,
  playState: Status,
  counter: generation,
});

export default rootReducer;
