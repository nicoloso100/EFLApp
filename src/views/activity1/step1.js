import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListIconTextSmallCard from '../../components/listIconTextSmallCard';
import {step1List, basicItems} from './resources';
import {bodyColor1} from '../colors';

/**
 * Paso 1 de la primera actividad: Escuchar los días de la semana
 * Variables:
 * ```javascript
 * //Boolean para indicar si hay un audio reproduciendose
 * const [playing, setPlaying] = useState(false);
 * //Deshabilita el botón de la opción de escuchar todos
 * const [optionPlaying, setoptionPlaying] = useState(false);
 * //Muestra los días de la opción de escuchar todos
 * const [dayLabel, setDayLabel] = useState('');
 * ```
 * Recursos: importa dos listas del archivo de recursos
 *
 * step1List se utiliza para la opción de escuchar todos los días de forma rándom, tiene como propiedades un adio con los días, los textos de cada día y los tiempos de duración de cada día
 * ```javascript
 * step1List = [
 *{
 *  audio: new Sound('activity1_1_9.ogg', Sound.MAIN_BUNDLE),
 *  days: [
 *    basicItems[4].text,
 *    basicItems[5].text,
 *    basicItems[6].text,
 *    basicItems[4].text,
 *    basicItems[5].text,
 *    basicItems[6].text,
 *  ],
 *  time: [400, 600, 400, 800, 600, 400],
 *},
 *
 * ```
 *
 * basicItems es la lista básica de cada día por separado, contiene el audio del día, su texto y su traducción al inglés
 *
 * ```javascript
 *basicItems = [
 * {
 *   audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
 *   text: 'Lundi',
 *   subText: 'Monday',
 * },
 * ```
 *
 * La función onSampleClick:
 * ```javascript
 *   const onSampleClick = () => {
 * if (!optionPlaying) {
 *   let randomIndex = Math.floor(Math.random() * step1List.length);
 *   let selectedSample = step1List[randomIndex].audio;
 *   selectedSample.play();
 *   setPlaying(true);
 *   setDayIndex(randomIndex, 0);
 *   setTimeout(() => {
 *     setPlaying(null);
 *     setDayLabel('');
 *   }, selectedSample.getDuration() * 1000);
 * }
 *};
 * ```
 * Habilita la ventana para ecuchar todos los días de forma random
 *
 * La función setDayIndex:
 * ```javascript
 *const setDayIndex = (listIndex, subIndex) => {
 *  setTimeout(() => {
 *    setDayLabel(step1List[listIndex].days[subIndex]);
 *    subIndex = subIndex + 1;
 *    if (subIndex < step1List[listIndex].time.length) {
 *      setDayIndex(listIndex, subIndex);
 *    }
 *  }, step1List[listIndex].time[subIndex]);
 *};
 * ```
 * Es una función recursiva que muestra los días rándom de la lista
 */

const Step1 = () => {
  const [playing, setPlaying] = useState(false);
  const [optionPlaying, setoptionPlaying] = useState(false);
  const [dayLabel, setDayLabel] = useState('');

  const onSampleClick = () => {
    if (!optionPlaying) {
      let randomIndex = Math.floor(Math.random() * step1List.length);
      let selectedSample = step1List[randomIndex].audio;
      selectedSample.play();
      setPlaying(true);
      setDayIndex(randomIndex, 0);
      setTimeout(() => {
        setPlaying(null);
        setDayLabel('');
      }, selectedSample.getDuration() * 1000);
    }
  };

  const setDayIndex = (listIndex, subIndex) => {
    setTimeout(() => {
      setDayLabel(step1List[listIndex].days[subIndex]);
      subIndex = subIndex + 1;
      if (subIndex < step1List[listIndex].time.length) {
        setDayIndex(listIndex, subIndex);
      }
    }, step1List[listIndex].time[subIndex]);
  };

  const disableSampleButton = disable => {
    setoptionPlaying(disable);
  };

  return (
    <View style={styles.container}>
      <Button
        disabled={playing}
        buttonStyle={styles.ramdomButton}
        titleStyle={styles.ramdomButtonIcon}
        icon={<Icon name="volume-up" size={30} color="white" />}
        title="Tout écouter"
        onPress={() => onSampleClick()}
      />
      {!playing ? (
        <FlatList
          style={styles.list}
          data={basicItems}
          keyExtractor={item => item.text}
          renderItem={({item}) => (
            <ListIconTextSmallCard
              item={item}
              disableSampleButton={disableSampleButton}
            />
          )}
        />
      ) : (
        <View style={styles.sampleContainer}>
          <Text style={styles.sampleText}>{dayLabel}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: bodyColor1,
  },
  ramdomButton: {
    height: 60,
    borderRadius: 5,
  },
  ramdomButtonIcon: {
    marginLeft: 15,
  },
  list: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  sampleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sampleText: {
    alignSelf: 'center',
    fontSize: 35,
  },
});

export default Step1;
