import charactersJson from '../data/character.json';

export const createCharacter = id => {
  let character = charactersJson.find(c => c.id === id);
  return character;
};
