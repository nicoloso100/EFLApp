var Sound = require('react-native-sound');

export const step1Items = [
  {
    audio: new Sound('activity4_1_1.ogg', Sound.MAIN_BUNDLE),
    text: 'La Mère',
    subText: 'The Mother',
    audioText: 'Mère',
    avatar: require('../../assets/img/activity4/mother.png'),
  },
  {
    audio: new Sound('activity4_1_2.ogg', Sound.MAIN_BUNDLE),
    text: 'Le Père',
    subText: 'The Father',
    audioText: 'Père',
    avatar: require('../../assets/img/activity4/father.png'),
  },
  {
    audio: new Sound('activity4_1_3.ogg', Sound.MAIN_BUNDLE),
    text: 'Le Frère',
    subText: 'The Brother',
    audioText: 'Frère',
    avatar: require('../../assets/img/activity4/brother.png'),
  },
  {
    audio: new Sound('activity4_1_4.ogg', Sound.MAIN_BUNDLE),
    text: 'La Soeur',
    subText: 'The Sister',
    audioText: 'Soeur',
    avatar: require('../../assets/img/activity4/sister.png'),
  },
  {
    audio: new Sound('activity4_1_5.ogg', Sound.MAIN_BUNDLE),
    text: 'Le Oncle',
    subText: 'The Uncle',
    audioText: 'Le Oncle',
    avatar: require('../../assets/img/activity4/uncle.png'),
  },
  {
    audio: new Sound('activity4_1_6.ogg', Sound.MAIN_BUNDLE),
    text: 'La Tante',
    subText: 'The Aunt',
    audioText: 'Tante',
    avatar: require('../../assets/img/activity4/aunt.png'),
  },
  {
    audio: new Sound('activity4_1_7.ogg', Sound.MAIN_BUNDLE),
    text: 'Le Cousin',
    subText: 'The Cousin',
    audioText: 'Cousin',
    avatar: require('../../assets/img/activity4/cousin.png'),
  },
  {
    audio: new Sound('activity4_1_8.ogg', Sound.MAIN_BUNDLE),
    text: 'La Cousine',
    subText: 'The Cousin',
    audioText: 'Cousine',
    avatar: require('../../assets/img/activity4/cousine.png'),
  },
  {
    audio: new Sound('activity4_1_9.ogg', Sound.MAIN_BUNDLE),
    text: 'Le Grand-père',
    subText: 'The Grandfather',
    avatar: require('../../assets/img/activity4/gfather.png'),
  },
  {
    audio: new Sound('activity4_1_10.ogg', Sound.MAIN_BUNDLE),
    text: 'La Grand-mère',
    subText: 'The Grandmother',
    avatar: require('../../assets/img/activity4/gmother.png'),
  },
  {
    audio: new Sound('activity4_1_11.ogg', Sound.MAIN_BUNDLE),
    text: 'Le Bébé',
    subText: 'The Baby',
    avatar: require('../../assets/img/activity4/baby.png'),
  },
];

export const step1Samplelist = [
  {
    audio: new Sound('activity4_1_12.ogg', Sound.MAIN_BUNDLE),
    days: [step1Items[0].audioText, step1Items[1].audioText],
    time: [200, 200],
  },
  {
    audio: new Sound('activity4_1_13.ogg', Sound.MAIN_BUNDLE),
    days: [
      step1Items[0].audioText,
      step1Items[1].audioText,
      step1Items[2].audioText,
      step1Items[3].audioText,
    ],
    time: [300, 200, 200, 200],
  },
  {
    audio: new Sound('activity4_1_14.ogg', Sound.MAIN_BUNDLE),
    days: [
      step1Items[0].audioText,
      step1Items[1].audioText,
      step1Items[2].audioText,
      step1Items[3].audioText,
      step1Items[4].audioText,
      step1Items[5].audioText,
    ],
    time: [300, 200, 200, 200, 300, 300],
  },
  {
    audio: new Sound('activity4_1_15.ogg', Sound.MAIN_BUNDLE),
    days: [
      step1Items[0].audioText,
      step1Items[1].audioText,
      step1Items[2].audioText,
      step1Items[3].audioText,
      step1Items[4].audioText,
      step1Items[5].audioText,
      step1Items[6].audioText,
      step1Items[7].audioText,
    ],
    time: [300, 200, 200, 200, 300, 300, 400, 400],
  },
];

export const Step2List = [
  {
    audio: new Sound('activity4_1_1.ogg', Sound.MAIN_BUNDLE),
    text: 'Mère',
    correctImage: require('../../assets/img/activity4/mother.png'),
    incorrectImage: require('../../assets/img/activity4/father.png'),
  },
  {
    audio: new Sound('activity4_1_2.ogg', Sound.MAIN_BUNDLE),
    text: 'Père',
    correctImage: require('../../assets/img/activity4/father.png'),
    incorrectImage: require('../../assets/img/activity4/mother.png'),
  },
  {
    audio: new Sound('activity4_1_3.ogg', Sound.MAIN_BUNDLE),
    text: 'Frère',
    correctImage: require('../../assets/img/activity4/brother.png'),
    incorrectImage: require('../../assets/img/activity4/sister.png'),
  },
  {
    audio: new Sound('activity4_1_4.ogg', Sound.MAIN_BUNDLE),
    text: 'Soeur',
    correctImage: require('../../assets/img/activity4/sister.png'),
    incorrectImage: require('../../assets/img/activity4/brother.png'),
  },
  {
    audio: new Sound('activity4_1_5.ogg', Sound.MAIN_BUNDLE),
    text: 'Oncle',
    correctImage: require('../../assets/img/activity4/uncle.png'),
    incorrectImage: require('../../assets/img/activity4/aunt.png'),
  },
  {
    audio: new Sound('activity4_1_6.ogg', Sound.MAIN_BUNDLE),
    text: 'Tante',
    correctImage: require('../../assets/img/activity4/aunt.png'),
    incorrectImage: require('../../assets/img/activity4/uncle.png'),
  },
  {
    audio: new Sound('activity4_1_7.ogg', Sound.MAIN_BUNDLE),
    text: 'Cousin',
    correctImage: require('../../assets/img/activity4/cousin.png'),
    incorrectImage: require('../../assets/img/activity4/cousine.png'),
  },
  {
    audio: new Sound('activity4_1_8.ogg', Sound.MAIN_BUNDLE),
    text: 'Cousine',
    correctImage: require('../../assets/img/activity4/cousine.png'),
    incorrectImage: require('../../assets/img/activity4/cousin.png'),
  },
  {
    audio: new Sound('activity4_1_9.ogg', Sound.MAIN_BUNDLE),
    text: 'Grand-père',
    correctImage: require('../../assets/img/activity4/gfather.png'),
    incorrectImage: require('../../assets/img/activity4/gmother.png'),
  },
  {
    audio: new Sound('activity4_1_10.ogg', Sound.MAIN_BUNDLE),
    text: 'Grand-mère',
    correctImage: require('../../assets/img/activity4/gmother.png'),
    incorrectImage: require('../../assets/img/activity4/gfather.png'),
  },
];

export const step3list = [
  {
    audio: new Sound('activity4_3_1.ogg', Sound.MAIN_BUNDLE),
    text: "Comment s'appelle le grand-parent de Valentina",
    answerText: "Ses grands-parents s'appelle",
    answerAudio: new Sound('activity4_3_2.ogg', Sound.MAIN_BUNDLE),
    correctText: 'Nelly et Carlos',
  },
  {
    audio: new Sound('activity4_3_3.ogg', Sound.MAIN_BUNDLE),
    text: "Comment s'appelle le père de Valentine",
    answerText: "Le père de Valentine s'appelle",
    answerAudio: new Sound('activity4_3_4.ogg', Sound.MAIN_BUNDLE),
    correctText: 'Ernesto',
  },
  {
    audio: new Sound('activity4_3_5.ogg', Sound.MAIN_BUNDLE),
    text: "Comment s'appelle le oncle de Valentine",
    answerText: "Il s'appelle",
    answerAudio: new Sound('activity4_3_6.ogg', Sound.MAIN_BUNDLE),
    correctText: 'Eduardo',
  },
  {
    audio: new Sound('activity4_3_7.ogg', Sound.MAIN_BUNDLE),
    text: "Comment s'appelle le cousin de Valentine",
    answerText: "Le cousin de Valentine s'appelle",
    answerAudio: new Sound('activity4_3_8.ogg', Sound.MAIN_BUNDLE),
    correctText: 'David',
  },
  {
    audio: new Sound('activity4_3_9.ogg', Sound.MAIN_BUNDLE),
    text: "Comment s'appelle le frère de Valentina",
    answerText: "Le frère de Valentina s'appelle",
    answerAudio: new Sound('activity4_3_10.ogg', Sound.MAIN_BUNDLE),
    correctText: 'Cristian',
  },
  {
    audio: new Sound('activity4_3_11.ogg', Sound.MAIN_BUNDLE),
    text: "Comment s'appelle la tante de Valentina",
    answerText: "El s'appelle",
    answerAudio: new Sound('activity4_3_12.ogg', Sound.MAIN_BUNDLE),
    correctText: 'Luz Stella',
  },
  {
    audio: new Sound('activity4_3_13.ogg', Sound.MAIN_BUNDLE),
    text: "Comment s'appelle la mère de Valentina",
    answerText: "El s'appelle",
    answerAudio: new Sound('activity4_3_14.ogg', Sound.MAIN_BUNDLE),
    correctText: 'Cecilia',
  },
];
