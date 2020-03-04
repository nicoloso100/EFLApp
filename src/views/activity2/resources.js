var Sound = require('react-native-sound');

export const steps = [
  {
    title: 'Le matin',
    image: require('../../assets/img/activity2/sunset.png'),
    sound: new Sound('activity2_1_1.ogg', Sound.MAIN_BUNDLE),
  },
  {
    title: `L'après-midi`,
    image: require('../../assets/img/activity2/sun.png'),
    sound: new Sound('activity2_1_2.ogg', Sound.MAIN_BUNDLE),
  },
  {
    title: 'Le soir',
    image: require('../../assets/img/activity2/moon.png'),
    sound: new Sound('activity2_1_3.ogg', Sound.MAIN_BUNDLE),
  },
  {
    title: 'La nuit',
    image: require('../../assets/img/activity2/sleeping.png'),
    sound: new Sound('activity2_1_4.ogg', Sound.MAIN_BUNDLE),
  },
];

export const scenes = [
  {
    ...steps[0],
    dialog1: {
      avatar: require('../../assets/img/activity2/boy.png'),
      sound: new Sound('activity2_3_1.ogg', Sound.MAIN_BUNDLE),
      text: 'Bonjour mademoiselle',
    },
    dialog2: {
      avatar: require('../../assets/img/activity2/girl.png'),
      sound: new Sound('activity2_3_2.ogg', Sound.MAIN_BUNDLE),
      text: 'Bonjour monsieur',
    },
  },
  {
    ...steps[2],
    dialog1: {
      avatar: require('../../assets/img/activity2/boy.png'),
      sound: new Sound('activity2_3_3.ogg', Sound.MAIN_BUNDLE),
      text: 'Bonsoir madame',
    },
    dialog2: {
      avatar: require('../../assets/img/activity2/Mgirl.png'),
      sound: new Sound('activity2_3_4.ogg', Sound.MAIN_BUNDLE),
      text: 'Bonsoir, bonne nuit',
    },
  },
];

export const steps4 = [
  {
    title: 'Monsieur',
    image: require('../../assets/img/activity2/boy.png'),
    sound: new Sound('activity2_4_2.ogg', Sound.MAIN_BUNDLE),
  },
  {
    title: `Madame`,
    image: require('../../assets/img/activity2/girl.png'),
    sound: new Sound('activity2_4_3.ogg', Sound.MAIN_BUNDLE),
  },
  {
    title: 'Mademoiselle',
    image: require('../../assets/img/activity2/Mgirl.png'),
    sound: new Sound('activity2_4_1.ogg', Sound.MAIN_BUNDLE),
  },
];

export const steps6 = [
  {
    title: 'Good morning miss',
    text: 'Bonjour mademoiselle',
    sound: new Sound('activity2_3_1.ogg', Sound.MAIN_BUNDLE),
  },
  {
    title: 'Good evening madam',
    text: 'Bonsoir madame',
    sound: new Sound('activity2_3_3.ogg', Sound.MAIN_BUNDLE),
  },
  {
    title: 'Good morning mister',
    text: 'Bonjour monsieur',
    sound: new Sound('activity2_3_2.ogg', Sound.MAIN_BUNDLE),
  },
  {
    title: 'Good evening, bye',
    text: 'Bonsoir, bonne nuit',
    sound: new Sound('activity2_3_4.ogg', Sound.MAIN_BUNDLE),
  },
];
