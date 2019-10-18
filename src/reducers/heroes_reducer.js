import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

const heroes = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_CHARACTER:
      let hes = state.filter(item => item.id !== action.id);
      return hes;
    default:
      return state;
  }
};

export default heroes;
