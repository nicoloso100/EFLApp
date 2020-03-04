var Sound = require('react-native-sound');

export const step1List = [
  {
    audio: new Sound('activity7_1_1.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_2.ogg', Sound.MAIN_BUNDLE),
    text: 'Où se trouve le cinéma',
    answerText: 'Le cinéma est devant le restaurant',
  },
  {
    audio: new Sound('activity7_1_3.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_4.ogg', Sound.MAIN_BUNDLE),
    text: 'Où se trouve le magasin',
    answerText: 'Le magasin est à côté du café',
  },
  {
    audio: new Sound('activity7_1_5.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_6.ogg', Sound.MAIN_BUNDLE),
    text: 'Où se trouve la banque',
    answerText: 'la banque est loin du restaurant, derrière le supermarché',
  },
  {
    audio: new Sound('activity7_1_7.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_8.ogg', Sound.MAIN_BUNDLE),
    text: 'Où se trouve le hôpital',
    answerText: `l'hôpital est à côté de l'église, en face de l'usine`,
  },
  {
    audio: new Sound('activity7_1_9.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_10.ogg', Sound.MAIN_BUNDLE),
    text: 'Où se trouve la boulangerie',
    answerText: `la boulangerie est sur l'avenue principale, à côté du magasin`,
  },
  {
    audio: new Sound('activity7_1_11.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_12.ogg', Sound.MAIN_BUNDLE),
    text: 'Où se trouve la pâtisserie',
    answerText: 'la pâtisserie est devant le marché',
  },
  {
    audio: new Sound('activity7_1_13.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_14.ogg', Sound.MAIN_BUNDLE),
    text: `Où se trouve l'école1`,
    answerText: `l'école est à gauche de la station de service`,
  },
  {
    audio: new Sound('activity7_1_15.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_16.ogg', Sound.MAIN_BUNDLE),
    text: 'Où se trouve le parc',
    answerText: 'le parc est à côté de la bibliothèque',
  },
  {
    audio: new Sound('activity7_1_17.ogg', Sound.MAIN_BUNDLE),
    answer: new Sound('activity7_1_18.ogg', Sound.MAIN_BUNDLE),
    text: 'Où se trouve la gare',
    answerText: 'La gare est loin du centre-ville',
  },
];

export const step2list = [
  {...step1List[0], correctText: 'devant'},
  {...step1List[1], correctText: 'à côté'},
  {...step1List[2], correctText: 'loin'},
  {...step1List[3], correctText: 'à côté'},
  {...step1List[4], correctText: 'sur'},
  {...step1List[5], correctText: 'devant'},
  {...step1List[6], correctText: 'à gauche'},
  {...step1List[7], correctText: 'à côté'},
  {...step1List[8], correctText: 'loin'},
];

export const step3list = [
  {...step1List[0], correctText: 'le restaurant'},
  {...step1List[1], correctText: 'du café'},
  {...step1List[2], correctText: 'du restaurant'},
  {...step1List[3], correctText: `l'usine`},
  {...step1List[4], correctText: 'du magasin'},
  {...step1List[5], correctText: 'le marché'},
  {...step1List[6], correctText: 'la station de service'},
  {...step1List[7], correctText: 'la bibliothèque'},
  {...step1List[8], correctText: 'du centre-ville'},
];
