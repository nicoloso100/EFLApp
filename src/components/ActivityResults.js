import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Box component which contains all the results of each activity
 * 
 * @param {Object} props.excercise - Array of objects with the result of the activities
 */
const ActivityRestults = ({ excercise }) => (
  <View style={styles.container}>
    {excercise.length === 0
      ? <Text>Aucun résultat chargé, veuillez balayer vers le bas pour actualiser.</Text>
      : <>
          <Text style={styles.text}>Résultats des activités:</Text>
          {
            excercise.map((item, key) => (
              <View style={styles.excerciseWrapper}>
                <Text>Exercice {key + 1}:</Text>
                <View style={styles.textWrapper}>
                  <Text> - {item.correct} correcte</Text>
                  <Text> - {item.incorrect} incorrecte</Text>
                </View>
              </View>
            ))
          }
        </>
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  text: {
    fontWeight: 'bold'
  },
  excerciseWrapper: {
    marginTop: 20
  },
  textWrapper: {
    marginLeft: 10
  }
});

export default ActivityRestults;
