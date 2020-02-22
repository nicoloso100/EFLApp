import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import Notification from '../../components/notification';
import {step3Items} from './resources';
import {primaryColor, bodyColor1} from '../colors';
import HomeButton from '../../components/HomeButton';
import { getResultsFirstActivity } from '../../utils/activitiesResults';

const getRandomItem = () => {
  let selectedItem = step3Items[Math.floor(Math.random() * 7)];
  return selectedItem;
};

/**
 * Paso 3 de la primera actividad: Escribir el día
 * Variables:
 * ```javascript
 * //Elemento de la actividad
 * const [item, setItem] = useState(getRandomItem());
 * //Texto de la parte superior
 * const [text, setText] = useState('');
 * //Lista de respuestas correctas
 * const [resultHistory, setresultHistory] = useState([]);
 * //Gestiona el resultado de la respuesta
 * const [result, setResult] = useState({
 *   showModal: false,
 *   isCorrect: null,
 * });
 * ```
 *
 * Recursos: se utiliza la lista step3List del archivo de recursos
 * Contiene como atributos un audio del día, el texto en inglés del día y el texto en francés, para compararlo conla respuesta ingresada por el usuario
 * ```javascript
 *step3Items = [
 *  {
 *    audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
 *    text: 'Monday',
 *    result: 'lundi',
 *  },
 * ```
 *
 * La función getRandomItem:
 * ```javascript
 *const getRandomItem = () => {
 *  let selectedItem = step3Items[Math.floor(Math.random() * 7)];
 *  return selectedItem;
 *};
 * ```
 * Obtiene un elemento de actividad aleatorio
 *
 * La función onButtonClick:
 * ```javascript
 *const onButtonClick = () => {
 *    if (item.result === text.toLowerCase()) {
 *      setResult({
 *        showModal: true,
 *        isCorrect: true,
 *      });
 *      setItem(getRandomItem());
 *      setresultHistory(
 *        [
 *          {
 *            key: resultHistory.length.toString(),
 *            text: `${text} - ${item.text}`,
 *          },
 *        ].concat(resultHistory),
 *      );
 *      setText('');
 *    } else {
 *      setResult({
 *        showModal: true,
 *        isCorrect: false,
 *      });
 *    }
 *  };
 * ```
 * Valida el resultado de la opción seleccionada, si es correcta o incorrecta y ejecuta la notificación
 */

const Step3 = ({navigation}) => {
  const [item, setItem] = useState(getRandomItem());
  const [text, setText] = useState('');
  const [resultHistory, setresultHistory] = useState([]);
  const [result, setResult] = useState({
    showModal: false,
    isCorrect: null,
  });
  const [correctValue, setCorrectValue] = useState(1);
  const [incorrectValue, setIncorrectValue] = useState(1);

  useEffect(() => {
    const asyncUseEffect = async () => {
      let detailed = (await getResultsFirstActivity()).detailed;
      setCorrectValue(detailed.secondActivityCorrect + 1)
      setIncorrectValue(detailed.secondActivityIncorrect + 1)
    };
    asyncUseEffect();
  }, []);

  const setShowModal = () => {
    setResult({...result, showModal: false});
  };

  const onButtonClick = async () => {
    if (item.result === text.toLowerCase()) {
      setResult({
        showModal: true,
        isCorrect: true,
      });
      setCorrectValue(correctValue + 1);
      await AsyncStorage.setItem('SecondActivityCorrect', JSON.stringify(correctValue));
      setItem(getRandomItem());
      setresultHistory(
        [
          {
            key: resultHistory.length.toString(),
            text: `${text} - ${item.text}`,
          },
        ].concat(resultHistory),
      );
      setText('');
    } else {
      setResult({
        showModal: true,
        isCorrect: false,
      });
      setIncorrectValue(incorrectValue + 1);
      await AsyncStorage.setItem('SecondActivityIncorrect', JSON.stringify(incorrectValue));
    }
  };

  return (
    <View style={styles.container}>
      <HomeButton navigate={navigation.navigate} />
      <Notification
        showModal={result.showModal}
        setShowModal={setShowModal}
        isCorrect={result.isCorrect}
      />

      <View style={styles.card}>
        <View style={styles.textContent}>
          <Text style={styles.title}>{item.text}</Text>
        </View>
        <TouchableOpacity onPress={() => item.audio.play()}>
          <Icon raised name="play" type="font-awesome" color={primaryColor} />
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={text => setText(text)}
        value={text}
        style={styles.input}
      />
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
      <FlatList
        style={styles.list}
        data={resultHistory}
        keyExtractor={item => item.key}
        renderItem={({item}) => <Text style={styles.history}>{item.text}</Text>}
      />
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
  input: {
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    height: 60,
    borderRadius: 5,
    marginBottom: 40,
  },
  buttonIcon: {
    marginLeft: 15,
  },
  history: {
    fontSize: 18,
    paddingBottom: 5,
    marginBottom: 20,
    textAlign: 'center',
    color: '#535353',
    borderBottomColor: '#535353',
    borderBottomWidth: 1,
  },
});

export default Step3;
