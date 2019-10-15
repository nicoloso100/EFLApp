var Sound = require('react-native-sound');

export const basicItems = [
  {
    audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
    text: 'Lundi',
    subText: 'Monday',
  },
  {
    audio: new Sound('activity1_1_2.ogg', Sound.MAIN_BUNDLE),
    text: 'Mardi',
    subText: 'Tuesday',
  },
  {
    audio: new Sound('activity1_1_3.ogg', Sound.MAIN_BUNDLE),
    text: 'Mercredi',
    subText: 'Wednesday',
  },
  {
    audio: new Sound('activity1_1_4.ogg', Sound.MAIN_BUNDLE),
    text: 'Jeudi',
    subText: 'Thursday',
  },
  {
    audio: new Sound('activity1_1_5.ogg', Sound.MAIN_BUNDLE),
    text: 'Vendredi',
    subText: 'Friday',
  },
  {
    audio: new Sound('activity1_1_6.ogg', Sound.MAIN_BUNDLE),
    text: 'Samedi',
    subText: 'Saturday',
  },
  {
    audio: new Sound('activity1_1_7.ogg', Sound.MAIN_BUNDLE),
    text: 'Dimanche',
    subText: 'Sunday',
  },
];

export const step1List = [
  {
    audio: new Sound('activity1_1_8.ogg', Sound.MAIN_BUNDLE),
    days: [basicItems[0].text, basicItems[1].text, basicItems[2].text],
    time: [800, 400, 400],
  },
  {
    audio: new Sound('activity1_1_9.ogg', Sound.MAIN_BUNDLE),
    days: [
      basicItems[4].text,
      basicItems[5].text,
      basicItems[6].text,
      basicItems[4].text,
      basicItems[5].text,
      basicItems[6].text,
    ],
    time: [400, 600, 400, 800, 600, 400],
  },
  {
    audio: new Sound('activity1_1_10.ogg', Sound.MAIN_BUNDLE),
    days: [
      basicItems[0].text,
      basicItems[1].text,
      basicItems[2].text,
      basicItems[3].text,
      basicItems[4].text,
      basicItems[5].text,
      basicItems[6].text,
    ],
    time: [220, 220, 220, 220, 220, 220, 220],
  },
  {
    audio: new Sound('activity1_1_11.ogg', Sound.MAIN_BUNDLE),
    days: [
      basicItems[0].text,
      basicItems[1].text,
      basicItems[2].text,
      basicItems[3].text,
      basicItems[4].text,
      basicItems[5].text,
      basicItems[6].text,
    ],
    time: [900, 900, 900, 900, 900, 900, 900],
  },
];

export const step2List = [
  {
    id: 0,
    audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
    text: 'Lundi',
  },
  {
    id: 1,
    audio: new Sound('activity1_1_2.ogg', Sound.MAIN_BUNDLE),
    text: 'mardi',
  },
  {
    id: 2,
    audio: new Sound('activity1_1_3.ogg', Sound.MAIN_BUNDLE),
    text: 'mercredi',
  },
  {
    id: 3,
    audio: new Sound('activity1_1_4.ogg', Sound.MAIN_BUNDLE),
    text: 'jeudi',
  },
  {
    id: 4,
    audio: new Sound('activity1_1_5.ogg', Sound.MAIN_BUNDLE),
    text: 'vendredi',
  },
  {
    id: 5,
    audio: new Sound('activity1_1_6.ogg', Sound.MAIN_BUNDLE),
    text: 'samedi',
  },
  {
    id: 6,
    audio: new Sound('activity1_1_7.ogg', Sound.MAIN_BUNDLE),
    text: 'dimanche',
  },
];

export const step3Items = [
  {
    audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
    text: 'Monday',
    result: 'lundi',
  },
  {
    audio: new Sound('activity1_1_2.ogg', Sound.MAIN_BUNDLE),
    text: 'Tuesday',
    result: 'mardi',
  },
  {
    audio: new Sound('activity1_1_3.ogg', Sound.MAIN_BUNDLE),
    text: 'Wednesday',
    result: 'mercredi',
  },
  {
    audio: new Sound('activity1_1_4.ogg', Sound.MAIN_BUNDLE),
    text: 'Thursday',
    result: 'jeudi',
  },
  {
    audio: new Sound('activity1_1_5.ogg', Sound.MAIN_BUNDLE),
    text: 'Friday',
    result: 'vendredi',
  },
  {
    audio: new Sound('activity1_1_6.ogg', Sound.MAIN_BUNDLE),
    text: 'Saturday',
    result: 'samedi',
  },
  {
    audio: new Sound('activity1_1_7.ogg', Sound.MAIN_BUNDLE),
    text: 'Sunday',
    result: 'dimanche',
  },
];
