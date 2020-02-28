import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import Notification from '../../components/notification';
import {step1List} from './resources';
import {primaryColor, bodyColor1} from '../colors';
import HomeButton from '../../components/HomeButton';
import { getResultsFifithtActivity } from '../../utils/activitiesResults';

const randomArray = () => {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let i = array.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return [
    step1List[array[0]],
    step1List[array[1]],
    step1List[array[2]],
    step1List[array[3]],
  ];
};

const RandomInput = ({index, array, setArray}) => {
  const onChange = text => {
    let answer = [...array];
    answer[index] = {...answer[index], answer: text};
    setArray(answer);
  };

  return (
    <TextInput
      maxLength={1}
      autoCapitalize="none"
      style={styles.input}
      selectTextOnFocus={true}
      value={array[index].answer}
      onChangeText={text => onChange(text)}
    />
  );
};

const getSampleArray = text => {
  let array = [];
  let answers = [];
  for (let i = 0; i < 5; i++) {
    let pos = Math.floor(Math.random() * text.length);
    if (!array.includes(pos) && text[pos] !== ' ') {
      array.push(pos);
      answers.push({pos: pos, correctAnswer: text[pos], answer: ''});
    }
  }
  return answers;
};

/**
 * Paso 6 de la segunda actividad: Completar la frase
 * Variables:
 * ```javascript
 * //Establece la posición de la lista steps
 *  const [step, setStep] = useState(0);
 * //Lista que almacena las fraces rándom
 *  const [steps, setSteps] = useState(randomArray());
 * //Lista textos de steps
 *  const [array, setArray] = useState(getSampleArray(steps[step].text));
 * //Gestiona el resultado de la selección del usuario
 *  const [result, setResult] = useState({
 *    showModal: false,
 *    isCorrect: null,
 *  });
 * ```
 *
 * Recursos: se utiliza la lista step1List del archivo de recursos
 * Contiene como atributos un audio con el texto dela profesión y una imagen representativa
 * ```javascript
 *step1List = [
 * {
 *   audio: new Sound('activity5_1_1.ogg', Sound.MAIN_BUNDLE),
 *   text: 'Il est un policier',
 *   image: require('../../assets/img/activity5/policeman.png'),
 * },
 * ```
 *
 * La función randomArray:
 * ```javascript
 *const randomArray = () => {
 *  let array = [0, 1, 2, 3];
 *  let i = array.length;
 *  let j = 0;
 *  let temp;
 *
 *  while (i--) {
 *    j = Math.floor(Math.random() * (i + 1));
 *    temp = array[i];
 *    array[i] = array[j];
 *    array[j] = temp;
 *  }
 *
 *  return [
 *    steps6[array[0]],
 *    steps6[array[1]],
 *    steps6[array[2]],
 *    steps6[array[3]],
 *  ];
 *};
 * ```
 * Selecciona una lista de opciones rándom
 *
 *
 * El componente RandomInput:
 * ```javascript
 *const RandomInput = ({index, array, setArray}) => {
 *  const onChange = text => {
 *    let answer = [...array];
 *    answer[index] = {...answer[index], answer: text};
 *    setArray(answer);
 *  };
 *
 *  return (
 *    <TextInput
 *      maxLength={1}
 *      autoCapitalize="none"
 *      style={styles.input}
 *      selectTextOnFocus={true}
 *      value={array[index].answer}
 *      onChangeText={text => onChange(text)}
 *    />
 *);
 *};
 * ```
 * Es el componente de completar el texto, almacena la respuesta del usaurio
 *
 * La función getSampleArray:
 * ```javascript
 *const getSampleArray = text => {
 *  let array = [];
 *  let answers = [];
 *for (let i = 0; i < 5; i++) {
 *  let pos = Math.floor(Math.random() * text.length);
 *   if (!array.includes(pos) && text[pos] !== ' ') {
 *     array.push(pos);
 *     answers.push({pos: pos, correctAnswer: text[pos], answer: ''});
 * }
 *}
 * return answers;
 *};
 * ```
 * Quita posiciones de un texto de forma aleatoria y las almacena en una lista de repuesta correcta para luego ser comparadas
 *
 * La función onButtonClick:
 * ```javascript
 *const onButtonClick = () => {
 *  let isCorrect = false;
 *  if (checkAnswers()) {
 *    isCorrect = true;
 *    messageText = 'bravo !';
 *    let newStep = step + 1;
 *    if (newStep <= 3) {
 *      setStep(newStep);
 *      setArray(getSampleArray(steps[newStep].text));
 *    } else {
 *      setStep(0);
 *      let newArray = randomArray();
 *      setSteps(newArray);
 *      setArray(getSampleArray(newArray[0].text));
 *    }
 *  } else {
 *    isCorrect = false;
 *  }
 *  setResult({
 *    showModal: true,
 *    isCorrect: isCorrect,
 *  });
 *};
 * ```
 * Valida la respuesta y ejecuta la notificación
 *
 *
 * La función checkAnswers:
 * ```javascript
 *const checkAnswers = () => {
 *  let correct = true;
 *  array.forEach(element => {
 *    if (
 *      element.correctAnswer.toLowerCase() !== element.answer.toLowerCase()
 *    ) {
 *      correct = false;
 *    }
 *  });
 *  return correct;
 *};
 * ```
 * Compara la respuesta del usuario con la respuesta correcta
 */

const Step3 = ({navigation}) => {
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState(randomArray());
  const [array, setArray] = useState(getSampleArray(steps[step].text));
  const [result, setResult] = useState({
    showModal: false,
    isCorrect: null,
  });
  const [correctValue, setCorrectValue] = useState(1);
  const [incorrectValue, setIncorrectValue] = useState(1);

  const onButtonClick = async () => {
    let isCorrect = false;
    if (checkAnswers()) {
      isCorrect = true;
      messageText = 'bravo !';
      let newStep = step + 1;
      if (newStep <= 3) {
        setStep(newStep);
        setArray(getSampleArray(steps[newStep].text));
      } else {
        setStep(0);
        let newArray = randomArray();
        setSteps(newArray);
        setArray(getSampleArray(newArray[0].text));
      }
      setCorrectValue(correctValue + 1);
      await AsyncStorage.setItem('FifithActivitySecondStepCorrect', JSON.stringify(correctValue));
    } else {
      isCorrect = false;
      setIncorrectValue(incorrectValue + 1);
      await AsyncStorage.setItem('FifithActivitySecondStepIncorrect', JSON.stringify(incorrectValue));
    }
    setResult({
      showModal: true,
      isCorrect: isCorrect,
    });
  };

  const setShowModal = () => {
    setResult({...result, showModal: false});
  };

  const checkAnswers = () => {
    let correct = true;
    array.forEach(element => {
      if (
        element.correctAnswer.toLowerCase() !== element.answer.toLowerCase()
      ) {
        correct = false;
      }
    });
    return correct;
  };

  useEffect(() => {
    const asyncUseEffect = async () => {
      let detailed = (await getResultsFifithtActivity()).detailed;
      setCorrectValue(detailed.firstActivityCorrect + 1)
      setIncorrectValue(detailed.firstActivityIncorrect + 1)
    };
    asyncUseEffect();
  }, []);

  return (
    <View style={styles.container}>
      <HomeButton navigate={navigation.navigate} />
      <Notification
        showModal={result.showModal}
        setShowModal={setShowModal}
        isCorrect={result.isCorrect}
      />

      <ScrollView>
        <View style={styles.card}>
          <View style={styles.textContent}>
            <Text style={styles.title}>écouter</Text>
          </View>
          <TouchableOpacity onPress={() => steps[step].audio.play()}>
            <Icon raised name="play" type="font-awesome" color={primaryColor} />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={steps[step].image}></Image>
        </View>
        <View style={styles.body}>
          {[...steps[step].text].map((letter, letterIndex) => {
            let find = array.findIndex(element => element.pos === letterIndex);
            if (find !== -1) {
              return (
                <RandomInput
                  key={letterIndex}
                  index={find}
                  array={array}
                  setArray={setArray}
                />
              );
            } else {
              return (
                <Text style={styles.letter} key={letterIndex}>
                  {letter}
                </Text>
              );
            }
          })}
        </View>

        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonIcon}
          icon={
            <Icon
              name="check-square"
              type="font-awesome"
              size={30}
              color="white"
            />
          }
          title="vérifier"
          onPress={() => onButtonClick()}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: bodyColor1,
  },
  card: {
    height: 80,
    marginBottom: 7,
    marginTop: 7,
    borderBottomColor: primaryColor,
    borderBottomWidth: 2,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderRadius: 5,
  },
  textContent: {
    flex: 1,
    paddingLeft: 20,
  },
  title: {
    flexShrink: 1,
    fontSize: 25,
    fontFamily: 'Quicksand',
  },
  button: {
    height: 60,
    borderRadius: 5,
    marginBottom: 40,
  },
  buttonIcon: {
    marginLeft: 15,
  },
  body: {
    marginTop: 40,
    marginBottom: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  word: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  letter: {
    fontSize: 25,
  },
  input: {
    backgroundColor: '#DCE5F1',
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 1,
    paddingLeft: 1,
    marginRight: 1,
    marginLeft: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});

export default Step3;
