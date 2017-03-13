import * as actions from '../actions/index';

const initialGameState = {
    randomNumber: 50,
    playerGuess: 0,
    guessCount: 0,
    guessHistory: [],
    currentStatus: "Make your Guess",
    whatPage: false
}

// const rndNum = function rndNum();
//
// function rndNum(){
//     return Math.floor(Math.random() * 100) + 1;
// }

export const gameReducer = (state=initialGameState, action) => {
    if (action.type === actions.NEW_GAME) {
        return Object.assign({}, state, {randomNumber: action.randomNumber})
    } else if (action.type === actions.PLAYER_GUESS) {
        return Object.assign({}, state, {playerGuess: action.playerGuess})
    }

    return state;
};
