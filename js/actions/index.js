

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    randomNumber: Math.floor(Math.random() * 100) + 1
});

export const PLAYER_GUESS = 'PLAYER_GUESS';
export const playerGuess = playerGuess => ({
    type: PLAYER_GUESS,
    playerGuess: playerGuess,


});

export const WHAT = 'WHAT';
export const what = () => ({
    type: WHAT,

});

export const GOT_IT = 'GOT_IT';
export const gotIt = () => ({
    type: GOT_IT,

});
