import charactersJson from '../data/character.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers.js';

const characters = (state = charactersJson, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      let char = [...state, createCharacter(action.id)];
      return char;
    default:
      return state;
  }
};

export default characters;
