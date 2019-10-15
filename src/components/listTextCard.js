import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

/**
 * Componente de tarjeta texto para listas
 * Uso:
 * ```html
    <ListTextCard 
      key={key} //Key de react
      text={texto} //Texto principal
    />
* ```
 */

const ListTextCard = props => {
  return (
    <View style={styles.textContent}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContent: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Quicksand',
  },
});

export default ListTextCard;
