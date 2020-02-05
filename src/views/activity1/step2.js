import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Image} from 'react-native-elements';

import ListTextCard from '../../components/listTextCard';
import Notification from '../../components/notification';
import {step2List} from './resources';
import {bodyColor2} from '../colors';

const randomArray = () => {
  let array = [0, 1, 2, 3, 4, 5, 6];
  let i = array.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return {
    correct: Math.floor(Math.random() * 4),
    optionSet: [
      step2List[array[0]],
      step2List[array[2]],
      step2List[array[4]],
      step2List[array[6]],
    ],
  };
};

/**
 * Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio
 * Variables:
 * ```javascript
 * //Boolean para indicar si hay un audio reproduciendose
 * const [playing, setPlaying] = useState(false);
 * //Almacena las posibles respuestas
 * const [options, setoptions] = useState(randomArray());
 * //Gestiona el resultado de la respuesta
 * const [result, setResult] = useState({
 *   showModal: false,
 *   isCorrect: null,
 * });
 * ```
 *
 * Recursos: se utiliza la lista step2List del archivo de recursos
 * Contiene como atributos un id (identificador único del objeto), un audio del día y el texto del día
 * ```javascript
 *step2List = [
 *  {
 *    id: 0,
 *    audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
 *    text: 'Lundi',
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
 * La función select:
 * ```javascript
 *const select = selection => {
 *    let isCorrect = false;
 *    let correctOption = optionSet[correct];
 *    if (selection.id === correctOption.id) {
 *      isCorrect = true;
 *    } else {
 *      isCorrect = false;
 *    }
 *    setResult({
 *      showModal: true,
 *      isCorrect: isCorrect,
 *    });
 *    setoptions(randomArray());
 *  };
 * ```
 * Valida el resultado de la opción seleccionada, si es correcta o incorrecta y ejecuta la notificación
 */

const Step2 = ({ navigation }) => {
  const [options, setoptions] = useState(randomArray());
  const [result, setResult] = useState({
    showModal: false,
    isCorrect: null,
  });
  const [correctValue, setCorrectValue] = useState(0);
  const [incorrectValue, setIncorrectValue] = useState(0);
  const [resultActivity, setResultActivity] = useState({});

  const {optionSet, correct} = options;

  const setShowModal = () => {
    setResult({...result, showModal: false});
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabBarOnPress', e => {
      // Prevent default behavior
      console.log(e);
      e.preventDefault();
      // Do something manually
      // ...
    });
  
    return unsubscribe;
  }, [navigation]);

  const select = selection => {
    let isCorrect = false;
    let correctOption = optionSet[correct];
    if (selection.id === correctOption.id) {
      isCorrect = true;
      setCorrectValue(correctValue + 1);
    } else {
      isCorrect = false;
      setIncorrectValue(incorrectValue + 1);
    }
    setResult({
      showModal: true,
      isCorrect: isCorrect,
    });
    setResultActivity({
      correct: correctValue,
      incorrect: incorrectValue
    });
    setoptions(randomArray());
  };

  return (
    <View style={styles.container}>
      <Notification
        showModal={result.showModal}
        setShowModal={setShowModal}
        isCorrect={result.isCorrect}
      />

      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            optionSet[correct].audio.play();
          }}>
          <Image
            style={styles.playButton}
            source={require('../../assets/img/play.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.column}>
          <View style={styles.option}>
            <TouchableOpacity onPress={() => select(optionSet[0])}>
              <ListTextCard key={optionSet[0].id} text={optionSet[0].text} />
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity onPress={() => select(optionSet[1])}>
              <ListTextCard key={optionSet[1].id} text={optionSet[1].text} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.option}>
            <TouchableOpacity onPress={() => select(optionSet[2])}>
              <ListTextCard key={optionSet[2].id} text={optionSet[2].text} />
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity onPress={() => select(optionSet[3])}>
              <ListTextCard key={optionSet[3].id} text={optionSet[3].text} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: bodyColor2,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  playButton: {
    width: 100,
    height: 100,
  },
  optionsContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  option: {
    height: '50%',
    padding: 20,
  },
});

export default Step2;
