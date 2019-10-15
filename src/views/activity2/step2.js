import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import Notification from '../../components/notification';
import ListIconCard from '../../components/ListIconCard';
import {steps} from './resources';
import {bodyColor2} from '../colors';

const randomArray = () => {
  let array = [0, 1, 2];
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
    correct: Math.floor(Math.random() * 3),
    optionSet: [steps[array[0]], steps[array[1]], steps[array[2]]],
  };
};

/**
 * Paso 2 de la segunda actividad: Seleccionar la respuesta correcta mediante un audio
 * Variables:
 * ```javascript
 * //Lista de opciones
 * const [options, setoptions] = useState(randomArray());
 * //Gestiona el resultado para la notificación
 * const [result, setResult] = useState({
 *   showModal: false,
 *   isCorrect: null,
 * });
 * ```
 *
 * Recursos: se utiliza la lista steps del archivo de recursos
 * Contiene como atributos un audio de la jornada, una imagen representativa y el texto de la jornada
 * ```javascript
 *steps = [
 *  {
 *    title: 'Le matin',
 *    image: require('../../assets/img/activity2/sunset.png'),
 *    sound: new Sound('activity2_1_1.ogg', Sound.MAIN_BUNDLE),
 *  },
 * ```
 *
 *
 * La función randomArray:
 * ```javascript
 *const randomArray = () => {
 *  let array = [0, 1, 2];
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
 *    correct: Math.floor(Math.random() * 3),
 *    optionSet: [steps[array[0]], steps[array[1]], steps[array[2]]],
 *  };
 *};
 * ```
 * Obtiene tres opciones random
 *
 * * La función select:
 * ```javascript
 *const select = selection => {
 *  let correctOption = optionSet[correct];
 *  if (selection.title === correctOption.title) {
 *    setResult({
 *      showModal: true,
 *      isCorrect: true,
 *    });
 *    setoptions(randomArray());
 *  } else {
 *    setResult({
 *      showModal: true,
 *      isCorrect: false,
 *    });
 *  }
 *};
 * ```
 * Evalúa la opcion seleccionada y muestra la notificación con el resultado
 */

const Step2 = () => {
  const [options, setoptions] = useState(randomArray());
  const [result, setResult] = useState({
    showModal: false,
    isCorrect: null,
  });

  const {optionSet, correct} = options;

  const setShowModal = () => {
    setResult({...result, showModal: false});
  };

  const select = selection => {
    let correctOption = optionSet[correct];
    if (selection.title === correctOption.title) {
      setResult({
        showModal: true,
        isCorrect: true,
      });
      setoptions(randomArray());
    } else {
      setResult({
        showModal: true,
        isCorrect: false,
      });
    }
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
            optionSet[correct].sound.play();
          }}>
          <Image
            style={styles.playButton}
            source={require('../../assets/img/play.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <ScrollView>
          <View style={styles.row}>
            <View style={styles.option}>
              <TouchableOpacity onPress={() => select(optionSet[0])}>
                <ListIconCard
                  key={optionSet[0].title}
                  icon={optionSet[0].image}
                  dimensions={120}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.option}>
              <TouchableOpacity onPress={() => select(optionSet[1])}>
                <ListIconCard
                  key={optionSet[1].title}
                  icon={optionSet[1].image}
                  dimensions={120}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.option}>
              <TouchableOpacity onPress={() => select(optionSet[2])}>
                <ListIconCard
                  key={optionSet[2].title}
                  icon={optionSet[2].image}
                  dimensions={120}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    width: 200,
    height: 200,
    padding: 20,
  },
});

export default Step2;
