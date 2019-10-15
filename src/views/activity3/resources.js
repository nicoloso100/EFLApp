var Sound = require('react-native-sound');

export const itemsStep1 = [
  {
    audio: new Sound('activity3_1_1.ogg', Sound.MAIN_BUNDLE),
    text: `Comment tu t'appelles`,
  },
  {
    audio: new Sound('activity3_1_2.ogg', Sound.MAIN_BUNDLE),
    text: `Tu t'appelles comment`,
  },
  {
    audio: new Sound('activity3_1_3.ogg', Sound.MAIN_BUNDLE),
    text: `Comment vous vous appelez`,
  },
  {
    audio: new Sound('activity3_1_4.ogg', Sound.MAIN_BUNDLE),
    text: `Vous vous appelez comment`,
  },
  {
    audio: new Sound('activity3_1_5.ogg', Sound.MAIN_BUNDLE),
    text: `Comment vous appelez-vous`,
  },
  {
    audio: new Sound('activity3_1_6.ogg', Sound.MAIN_BUNDLE),
    text: `Quel est votre nom`,
  },
  {
    audio: new Sound('activity3_1_7.ogg', Sound.MAIN_BUNDLE),
    text: `Comment t'appelles-tu`,
  },
  {
    audio: new Sound('activity3_1_8.ogg', Sound.MAIN_BUNDLE),
    text: `Quel est ton nom`,
  },
];

export const scene = {
  dialog1: {
    avatar: require('../../assets/img/activity3/man.png'),
    sound: new Sound('activity3_2_1.ogg', Sound.MAIN_BUNDLE),
    text: `Comment vous vous appelez?`,
  },
  dialog2: {
    avatar: require('../../assets/img/activity3/girl.png'),
    sound: new Sound('activity3_2_2.ogg', Sound.MAIN_BUNDLE),
    text: `Je m'appelle Camila et vous?`,
  },
  dialog3: {
    avatar: require('../../assets/img/activity3/man.png'),
    sound: new Sound('activity3_2_3.ogg', Sound.MAIN_BUNDLE),
    text: `Je m'appelle Carlos, enchanté`,
  },
  dialog4: {
    avatar: require('../../assets/img/activity3/girl.png'),
    sound: new Sound('activity3_2_4.ogg', Sound.MAIN_BUNDLE),
    text: `Enchanté`,
  },
};

export const scene2 = {
  dialog1: {
    avatar: require('../../assets/img/activity3/boy2.png'),
    sound: new Sound('activity3_2_1.ogg', Sound.MAIN_BUNDLE),
    text: `Comment vous vous appelez?`,
  },
  dialog2: {
    avatar: require('../../assets/img/activity3/girl2.png'),
  },
  dialog3: {
    avatar: require('../../assets/img/activity3/boy2.png'),
    sound: new Sound('activity3_2_3.ogg', Sound.MAIN_BUNDLE),
    text: `Je m'appelle Carlos, enchanté`,
  },
  dialog4: {
    avatar: require('../../assets/img/activity3/girl2.png'),
  },
};

export const scene3 = {
  dialog1: {
    avatar: require('../../assets/img/activity3/boy3.png'),
  },
  dialog2: {
    avatar: require('../../assets/img/activity3/girl3.png'),
    sound: new Sound('activity3_2_2.ogg', Sound.MAIN_BUNDLE),
    text: `Je m'appelle Camila et vous?`,
  },
  dialog3: {
    avatar: require('../../assets/img/activity3/boy3.png'),
  },
  dialog4: {
    avatar: require('../../assets/img/activity3/girl3.png'),
    sound: new Sound('activity3_2_4.ogg', Sound.MAIN_BUNDLE),
    text: `Enchanté`,
  },
};
