import { Level } from '../types/level';

// Placeholder image if a specific letter image is missing.
const placeholderImage = require('../assets/images/Asteroid01.png');

// Letter images A–Z
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const letterImages: Record<string, any> = {
  A: require('../assets/images/LetterA.png'),
  B: require('../assets/images/LetterB.png'),
  C: require('../assets/images/LetterC.png'),
  D: require('../assets/images/LetterD.png'),
  E: require('../assets/images/LetterE.png'),
  F: require('../assets/images/LetterF.png'),
  G: require('../assets/images/LetterG.png'),
  H: require('../assets/images/LetterH.png'),
  I: require('../assets/images/LetterI.png'),
  J: require('../assets/images/LetterJ.png'),
  K: require('../assets/images/LetterK.png'),
  L: require('../assets/images/LetterL.png'),
  M: require('../assets/images/LetterM.png'),
  N: require('../assets/images/LetterN.png'),
  O: require('../assets/images/LetterO.png'),
  P: require('../assets/images/LetterP.png'),
  Q: require('../assets/images/LetterQ.png'),
  R: require('../assets/images/LetterR.png'),
  S: require('../assets/images/LetterS.png'),
  T: require('../assets/images/LetterT.png'),
  U: require('../assets/images/LetterU.png'),
  V: require('../assets/images/LetterV.png'),
  W: require('../assets/images/LetterW.png'),
  X: require('../assets/images/LetterX.png'),
  Y: require('../assets/images/LetterY.png'),
  Z: require('../assets/images/LetterZ.png'),
};

export const levels: Level[] = Array.from({ length: 26 }, (_, index) => {
  const id = index + 1;
  const letter = LETTERS[index] ?? `L${id}`;

  return {
    id,
    letter,
    instructions: `Show the sign for the letter "${letter}".`,
    imageSource: letterImages[letter] ?? placeholderImage,
  };
});

