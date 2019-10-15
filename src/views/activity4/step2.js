import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useState} from 'react';

import Notification from '../../components/notification';
import {Step2List} from './resources';
import {primaryColor, bodyColor2} from '../colors';

/**
 * Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio
 * Variables:
 * ```javascript
 * //Indica el ejercicio actual
 * const [step, setStep] = useState(getRandomItem());
 * //Gestiona el resultado de la respuesta
 * const [result, setResult] = useState({
 *   showModal: false,
 *   isCorrect: null,
 * });
 * ```
 *
 * Recursos: se utiliza la lista Step2List del archivo de recursos
 * Contiene como atributos un audio con el texto del integrante de la familia, y dos imágenes, una correcta y una incorrecta
 * ```javascript
 *Step2List = [
 *  {
 *    audio: new Sound('activity4_1_1.ogg', Sound.MAIN_BUNDLE),
 *    text: 'Mère',
 *    correctImage: require('../../assets/img/activity4/mother.png'),
 *    incorrectImage: require('../../assets/img/activity4/father.png'),
 *  },
 * ```
 *
 * La función randomArray:
 * ```javascript
 *const randomArray = () => {
 *  let array = [0, 1, 2, 3, 4, 5, 6];
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
 *  return {
 *    correct: Math.floor(Math.random() * 4),
 *    optionSet: [
 *      step2List[array[0]],
 *      step2List[array[2]],
 *      step2List[array[4]],
 *      step2List[array[6]],
 *    ],
 *  };
 *};
 * ```
 * Obtiene opciones de respuestas rándom
 *
 * La función getRandomItem:
 * ```javascript
 *const getRandomItem = () => {
 *    let selectedItem = Step2List[Math.floor(Math.random() * 10)];
 *    let correctPos = Math.random() < 0.5 ? 0 : 1;
 *    let correctCase = {
 *      image: selectedItem.correctImage,
 *      action: onCorrectClick,
 *    };
 *    let incorrectCase = {
 *      image: selectedItem.incorrectImage,
 *      action: onInCorrectClick,
 *    };
 *    selectedItem = {
 *      ...selectedItem,
 *      options: [
 *        correctPos === 0 ? correctCase : incorrectCase,
 *        correctPos === 1 ? correctCase : incorrectCase,
 *      ],
 *    };
 *    return selectedItem;
 *  };
 * ```
 * Obtiene un item de forma aleatoria de la lista y posiciona la imagen correcta en una posición aleatoria
 */

const Step2 = () => {
  const [step, setStep] = useState(getRandomItem());
  const [result, setResult] = useState({
    showModal: false,
    isCorrect: null,
  });

  const onCorrectClick = () => {
    setStep(getRandomItem());
    setResult({
      showModal: true,
      isCorrect: true,
    });
  };

  const onInCorrectClick = () => {
    setResult({
      showModal: true,
      isCorrect: false,
    });
  };

  const getRandomItem = () => {
    let selectedItem = Step2List[Math.floor(Math.random() * 10)];
    let correctPos = Math.random() < 0.5 ? 0 : 1;
    let correctCase = {
      image: selectedItem.correctImage,
      action: onCorrectClick,
    };
    let incorrectCase = {
      image: selectedItem.incorrectImage,
      action: onInCorrectClick,
    };
    selectedItem = {
      ...selectedItem,
      options: [
        correctPos === 0 ? correctCase : incorrectCase,
        correctPos === 1 ? correctCase : incorrectCase,
      ],
    };
    return selectedItem;
  };

  return (
    <View style={styles.container}>
      <Notification
        showModal={result.showModal}
        setShowModal={() => setResult({...result, showModal: false})}
        isCorrect={result.isCorrect}
      />

      <View style={styles.card}>
        <View style={styles.textContent}>
          <Text style={styles.title}>{step.text}</Text>
        </View>
        <TouchableOpacity onPress={() => step.audio.play()}>
          <Icon raised name="play" type="font-awesome" color={primaryColor} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => step.options[0].action()}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={step.options[0].image} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => step.options[1].action()}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={step.options[1].image} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bodyColor2,
  },
  card: {
    height: 80,
    margin: 7,
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
  image: {
    width: 250,
    height: 250,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
});

export default Step2;
