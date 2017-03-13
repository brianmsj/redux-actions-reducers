require('babel-polyfill');

import {createStore} from 'redux';
import {gameReducer} from './reducers/index';
import * as actions from './actions/index';

const store = createStore(gameReducer);

store.dispatch(actions.newGame());
store.dispatch(actions.playerGuess(50));
store.dispatch(actions.what());
store.dispatch(actions.gotIt());

console.log(store.getState());

// export default .. import Whatever
// export const, export const
//     import * as reducers.. recuders.Whatever
//    import {whatever}.. whatever
