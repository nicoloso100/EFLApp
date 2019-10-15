import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListIconTextSmallCard from '../../components/listIconTextSmallCard';
import {step1Samplelist, step1Items} from './resources';
import {bodyColor1} from '../colors';

/**
 * Paso 1 de la primera actividad: Escuchar los días de la semana
 * Variables:
 * ```javascript
 * //Boolean para indicar si hay un audio reproduciendose
 * const [playing, setPlaying] = useState(false);
 * //Pantalla donde se muestran los integreantes de la familia de forma aleatoria
 * const [optionPlaying, setoptionPlaying] = useState(false);
 * //Label de la opción optionPlaying
 * const [familyLabel, setFamilyLabel] = useState('');
 * ```
 * Recursos: importa dos listas del archivo de recursos
 *
 * step1Samplelist se utiliza para la opción de escuchar los miembros de la familia de forma rándom, tiene como propiedades un adio con los días, los textos de cada día y los tiempos de duración de cada día
 * ```javascript
 *step1Samplelist = [
 *  {
 *    audio: new Sound('activity4_1_12.ogg', Sound.MAIN_BUNDLE),
 *    days: [step1Items[0].audioText, step1Items[1].audioText],
 *    time: [200, 200],
 *  },
 *
 * ```
 *
 * step1Items se utiliza para cargar la información de las tarjetas en la lista. Tiene como atributos un audio con su texto en francés y español y un ávatar
 *
 * ```javascript
 *step1Items = [
 *  {
 *    audio: new Sound('activity4_1_1.ogg', Sound.MAIN_BUNDLE),
 *    text: 'La Mère',
 *    subText: 'The Mother',
 *    audioText: 'Mère',
 *    avatar: require('../../assets/img/activity4/mother.png'),
 *  },
 * ```
 *
 * La función onSampleClick:
 * ```javascript
 *  const onSampleClick = () => {
 *    if (!optionPlaying) {
 *      let randomIndex = Math.floor(Math.random() * step1Samplelist.length);
 *      let selectedSample = step1Samplelist[randomIndex].audio;
 *      selectedSample.play();
 *      setPlaying(true);
 *      setFamilyIndex(randomIndex, 0);
 *      setTimeout(() => {
 *        setPlaying(null);
 *        setFamilyLabel('');
 *      }, selectedSample.getDuration() * 1000);
 *    }
 *  };
 * ```
 * Habilita la ventana para ecuchar la familia de forma aleatoria
 *
 * La función setFamilyIndex:
 * ```javascript
 *const setFamilyIndex = (listIndex, subIndex) => {
 *  setTimeout(() => {
 *    setFamilyLabel(step1List[listIndex].days[subIndex]);
 *    subIndex = subIndex + 1;
 *    if (subIndex < step1List[listIndex].time.length) {
 *      setFamilyIndex(listIndex, subIndex);
 *    }
 *  }, step1List[listIndex].time[subIndex]);
 *};
 * ```
 * Es una función recursiva que muestra los integrantes de la familia de forma aleatoria de la lista
 */

const Step1 = () => {
  const [playing, setPlaying] = useState(false);
  const [optionPlaying, setoptionPlaying] = useState(false);
  const [familyLabel, setFamilyLabel] = useState('');

  const onSampleClick = () => {
    if (!optionPlaying) {
      let randomIndex = Math.floor(Math.random() * step1Samplelist.length);
      let selectedSample = step1Samplelist[randomIndex].audio;
      selectedSample.play();
      setPlaying(true);
      setFamilyIndex(randomIndex, 0);
      setTimeout(() => {
        setPlaying(null);
        setFamilyLabel('');
      }, selectedSample.getDuration() * 1000);
    }
  };

  const setFamilyIndex = (listIndex, subIndex) => {
    setTimeout(() => {
      setFamilyLabel(step1Samplelist[listIndex].days[subIndex]);
      subIndex = subIndex + 1;
      if (subIndex < step1Samplelist[listIndex].time.length) {
        setFamilyIndex(listIndex, subIndex);
      }
    }, step1Samplelist[listIndex].time[subIndex]);
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
          data={step1Items}
          keyExtractor={item => item.text}
          renderItem={({item}) => (
            <View style={styles.listContainer}>
              <ListIconTextSmallCard
                item={item}
                disableSampleButton={disableSampleButton}
              />
            </View>
          )}
        />
      ) : (
        <View style={styles.sampleContainer}>
          <Text style={styles.sampleText}>{familyLabel}</Text>
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
    paddingRight: 3,
    paddingLeft: 3,
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
