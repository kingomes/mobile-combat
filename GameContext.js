import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  playerStrength: 1,
  playerHealth: 10,
  playerMagic: 1,
  points: 15,
  lastAction: null,
  currentMonster: 1,
  monster1: {
    monsterStrength: 2,
    monsterHealth: 10,
    monsterMagic: 5
  },
  monster2: {
    strength: 2,
    health: 20,
    defense: 5
  }
};

function gameReducer(state, action) {
  switch(action.type) {
    case 'changeStat': {
      switch(action.statToChange) {
        case 'playerStrength':
          if (state.points - action.amount < 0 || state.playerStrength + action.amount < 1) {
            return state;
          }
          return {
            ...state,
            playerStrength: state.playerStrength + action.amount,
            points: state.points - action.amount
          };
        case 'playerHealth':
          if (state.points - action.amount < 0 || state.playerHealth + action.amount < 1) {
            return state;
          }
          return {
            ...state,
            playerHealth: state.playerHealth + action.amount,
            points: state.points - action.amount
          };
        case 'playerMagic':
          if (state.points - action.amount < 0 || state.playerMagic + action.amount < 1) {
            return state;
          }
          return {
            ...state,
            playerMagic: state.playerMagic + action.amount,
            points: state.points - action.amount
          };
        default:
          return state;
      }
    }
    case 'attack': {
        const monsterKey = state.currentMonster === 1 ? 'monster1' : 'monster2';
        const m = state[monsterKey];

        const monsterHealth = monsterKey === 'monster1' ? m.monsterHealth : m.health;
        const monsterStrength = monsterKey === 'monster1' ? m.monsterStrength : m.strength;
        const monsterDefense = monsterKey === 'monster1' ? 0 : m.defense;

        const damage = Math.max(0, state.playerStrength - monsterDefense);
        if (state.playerHealth <= 0 || monsterHealth <= 0) {
            return state;
        }

        if (state.playerHealth - monsterStrength < 0) {
            return {
              ...state,
              [monsterKey]: {
                ...m,
                ...(monsterKey === 'monster1' ? { monsterHealth: monsterHealth - damage } : { health: monsterHealth - damage })
              },
              playerHealth: 0,
              lastAction: 'attack'
            };
        }

        if (monsterHealth - damage <= 0) {
            return {
              ...state,
              [monsterKey]: {
                ...m,
                ...(monsterKey === 'monster1' ? { monsterHealth: 0 } : { health: 0 })
              },
              playerHealth: state.playerHealth - monsterStrength,
              lastAction: 'attack',
              points: state.points + 5
            };
        }

        return {
            ...state,
            [monsterKey]: {
              ...m,
              ...(monsterKey === 'monster1' ? { monsterHealth: monsterHealth - damage } : { health: monsterHealth - damage })
            },
            playerHealth: state.playerHealth - monsterStrength,
            lastAction: 'attack'
        };
    }
    case 'fire': {
        const monsterKey = state.currentMonster === 1 ? 'monster1' : 'monster2';
        const m = state[monsterKey];
        const monsterHealth = monsterKey === 'monster1' ? m.monsterHealth : m.health;
        const monsterStrength = monsterKey === 'monster1' ? m.monsterStrength : m.strength;

        if (state.playerMagic - 3 < 0 || monsterHealth <= 0 || state.playerHealth <= 0) {
            return state;
        }
        return {
            ...state,
            [monsterKey]: {
              ...m,
              ...(monsterKey === 'monster1' ? { monsterHealth: monsterHealth / 2.0 } : { health: monsterHealth / 2.0 })
            },
            playerMagic: state.playerMagic - 3,
            playerHealth: state.playerHealth - monsterStrength,
            lastAction: 'fire'
        };
    }
  case 'heal': {
    const monsterKey = state.currentMonster === 1 ? 'monster1' : 'monster2';
    const m = state[monsterKey];
    const monsterStrength = monsterKey === 'monster1' ? m.monsterStrength : m.strength;
    const monsterHealth = monsterKey === 'monster1' ? m.monsterHealth : m.health;
    if (state.playerMagic <= 0 || state.playerHealth <= 0 || monsterHealth <= 0) {
      return state;
    }
    return {
      ...state,
      playerHealth: state.playerHealth + 7,
      playerMagic: state.playerMagic - 1,
      lastAction: 'heal'
    };
  }
  
  case 'resetStats':
    return { ...initialState };
  case 'nextMonster':
    return { ...state, currentMonster: 2 };
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
