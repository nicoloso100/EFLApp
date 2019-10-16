var Sound = require('react-native-sound');

export const step1List = [
  {
    audio: new Sound('', Sound.MAIN_BUNDLE),
    text: 'Où se trouve le stade',
    answerText: 'Le stade est derrière le parking',
  },
  {
    audio: new Sound('', Sound.MAIN_BUNDLE),
    text: 'Où se trouve la grande piscine',
    answerText: 'La grande piscine est à gauche le métro',
  },
  {
    audio: new Sound('', Sound.MAIN_BUNDLE),
    text: 'Où se trouve la voiture beige',
    answerText: 'La voiture beige est dans le parking',
  },
  {
    audio: new Sound('', Sound.MAIN_BUNDLE),
    text: 'Où se trouve la fontaine',
    answerText: 'La fontaine est à droite le parking',
  },
  {
    audio: new Sound('', Sound.MAIN_BUNDLE),
    text: 'Où se trouve le métro',
    answerText: 'Le métro est loin du stade',
  },
  {
    audio: new Sound('', Sound.MAIN_BUNDLE),
    text: 'Où se trouve les palmiers',
    answerText: 'Les palmiers sont près de la grande piscine',
  },
  {
    audio: new Sound('', Sound.MAIN_BUNDLE),
    text: 'Où se trouve la piscine ronde',
    answerText: 'La piscine ronde est devant une maison',
  },
  {
    audio: new Sound('', Sound.MAIN_BUNDLE),
    text: 'Où se trouve le truk vert',
    answerText: 'le truk vert est sur la route',
  },
];

export const step2list = [
  {...step1List[0], correctText: 'derrière'},
  {...step1List[1], correctText: 'à gauche'},
  {...step1List[2], correctText: 'dans'},
  {...step1List[3], correctText: 'à droite'},
  {...step1List[4], correctText: 'loin'},
  {...step1List[5], correctText: 'près de'},
  {...step1List[6], correctText: 'devant'},
  {...step1List[7], correctText: 'sur'},
];

export const step3list = [
  {...step1List[0], correctText: 'le parking'},
  {...step1List[1], correctText: 'le métro'},
  {...step1List[2], correctText: 'le parking'},
  {...step1List[3], correctText: 'le parking'},
  {...step1List[4], correctText: 'le stade'},
  {...step1List[5], correctText: 'la grande piscine'},
  {...step1List[6], correctText: 'maison'},
  {...step1List[7], correctText: 'la route'},
];
