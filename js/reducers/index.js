import * as actions from '../actions/index';

const initialGameState = {
    randomNumber: 50,
    playerGuess: 0,
    guessCount: 0,
    guessHistory: [],
    currentStatus: "Make your Guess",
    whatPage: false
}

// Hot, Cold, Kinda Hot

function setStatus(guess, randomNumber) {
   if(guess === randomNumber) {
      return "You are Correct"
   }
   else if((guess >= randomNumber +1 && guess <= randomNumber + 10)
   || (guess <= randomNumber -1 && guess >= randomNumber - 10)){
      return "You are Hot"
}
   else if((guess >= randomNumber + 1 && guess <= randomNumber + 25)
   || (guess <= randomNumber -1 && guess >= randomNumber - 25)){
      return "Kinda Hot"
    }
   else return "Cold"
};

export const gameReducer = (state=initialGameState, action) => {
    if (action.type === actions.NEW_GAME) {
        return Object.assign({}, state, {randomNumber: action.randomNumber})
  } else if (action.type === actions.PLAYER_GUESS) {
        console.log(action.playerGuess)
        return Object.assign({}, state, {playerGuess: action.playerGuess,
           guessCount: state.guessCount + 1,
           guessHistory:[...state.guessHistory,action.playerGuess],
           currentStatus: setStatus(action.playerGuess,state.randomNumber),
       });
    }
    else if(action.type === actions.WHAT) {
        return Object.assign({}, state, {whatPage: true});
    }
    else if(action.type === actions.GOT_IT) {
        return Object.assign({}, state, {whatPage: false});
    }
    return state;
};
