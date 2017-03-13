// randomly select a number between 1 and 100
// player inputs a number
// compare player selection to the random number
// change state based upon how close player is to the number
// increase guess count
// log previous guesses

// state = {
//   randomNumber: 0,
//   playerGuess: 0,
//   guessCount: 0,
//   guessHistory: [],
//   currentStatus: "Make your Guess"
//   whatPage: false
//
// }


export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    randomNumber: Math.floor(Math.random() * 100) + 1
});

export const PLAYER_GUESS = 'PLAYER_GUESS';
export const playerGuess = playerGuess => ({
    type: PLAYER_GUESS,
    playerGuess

});

export const WHAT = 'WHAT';
export const what = () => ({
    type: WHAT,
    whatPage: true

});

export const GOT_IT = 'GOT_IT';
export const gotIt = () => ({
    type: PLAYER_GUESS,
    whatPage: false

});
