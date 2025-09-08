import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    playerStrength: 1,
    playerHealth: 10,
    playerMagic: 1,
    points: 15,
    monsterStrength: 1,
    monsterHealth: 10,
    monsterMagic: 1
};

function gameReducer(state, action) {
  switch(action.statToChange) {
        case 'playerStrength':
            if (state.points - action.amount < 0 || state.playerStrength + action.amount < 1) {
                return state;
            }
            return {
                ...state,
                playerStrength: state.playerStrength + action.amount, 
                points: state.points - action.amount};
        case 'playerHealth':
            if (state.points - action.amount < 0 || state.playerHealth + action.amount < 1) {
                return state;
            }
            return {
                ...state, 
                playerHealth: state.playerHealth + action.amount,
                points: state.points - action.amount};
        case 'playerMagic':
            if (state.points - action.amount < 0 || state.playerMagic + action.amount < 1) {
                return state;
            }
            return {
                ...state, 
                playerMagic: state.playerMagic + action.amount,
                points: state.points - action.amount};
        default:
            return state;
  }
}

const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
