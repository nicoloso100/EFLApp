import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Alert, ScrollView, RefreshControl, Text } from 'react-native';
import {Icon, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import { bodyColor1 } from '../colors';
import HomeButton from '../../components/HomeButton';
import ActivityResults from '../../components/ActivityResults';

const excercise = [
  {
    id: 1,
    correct: 3,
    incorrect: 5
  },
  {
    id: 2,
    correct: 1,
    incorrect: 3
  },
  {
    id: 3,
    correct: 9,
    incorrect: 1
  }
];

const Step4 = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [allResults, setAllResults] = useState([]);

  /**
   * Timeout promise
   * 
   * @param {number} timeout 
   */
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(200).then(async () => {
      const firstActivityCorrect = await AsyncStorage.getItem('FirstActivityCorrect');
      const firstActivityIncorrect = await AsyncStorage.getItem('FirstActivityIncorrect');
      const secondActivityCorrect = await AsyncStorage.getItem('SecondActivityCorrect');
      const secondActivityIncorrect = await AsyncStorage.getItem('SecondActivityIncorrect');

      setAllResults([
        {
          id: 1,
          correct: firstActivityCorrect ? firstActivityCorrect : '0',
          incorrect: firstActivityIncorrect ? firstActivityIncorrect : '0'
        },
        {
          id: 2,
          correct: secondActivityCorrect ? secondActivityCorrect : '0',
          incorrect: secondActivityIncorrect ? secondActivityIncorrect : '0'
        }
      ]);
      setRefreshing(false);
    });
  }, [refreshing]);

  const onButtonClick = async () => {
    try {
      Alert.alert(
        'Attendez!',
        'Êtes-vous sûr de vouloir supprimer votre score?',
        [
          {
            text: 'Annuler',
            style: 'cancel',
          },
          {text: `D'accord`, onPress: async () => {
            await AsyncStorage.removeItem('FirstActivityCorrect');
            await AsyncStorage.removeItem('FirstActivityIncorrect');
            await AsyncStorage.removeItem('SecondActivityCorrect');
            await AsyncStorage.removeItem('SecondActivityIncorrect');
          }},
        ],
        {cancelable: false},
      );
    } catch (e) {
      console.error(e);
    }
  }

  return(
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.containers}>
        <HomeButton navigate={navigation.navigate} />
        <ActivityResults
          excercise={allResults}
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonIcon}
          icon={
            <Icon
              name="refresh"
              type="font-awesome"
              size={30}
              color="white"
            />
          }
          title="Réinitialiser le score"
          onPress={() => onButtonClick()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: bodyColor1,
  },
  button: {
    margin: 10,
    height: 60,
    borderRadius: 5,
    marginBottom: 40,
  },
  buttonIcon: {
    marginLeft: 15,
  },
});

export default Step4;
