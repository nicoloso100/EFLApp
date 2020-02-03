import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Box component which contains all the results of each activity
 * 
 * @param {Object} props.excercise - Array of objects with the result of the activities
 */
const ActivityRestults = ({ excercise }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Resultados de las actividades:</Text>
    {
      excercise.map((item, key) => (
        <View style={styles.excerciseWrapper}>
          <Text>Ejercicio {key + 1}:</Text>
          <View style={styles.textWrapper}>
            <Text> - {item.correct} correctos</Text>
            <Text> - {item.incorrect} incorrectos</Text>
          </View>
        </View>
      ))
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
