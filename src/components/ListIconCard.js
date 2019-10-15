import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

/**
 * Componente de tarjeta con ícono para listas
 * Uso:
 * ```html
 * <ListIconCard
      key={key} // Key de react
      icon={imagen} //Imagen
      dimensions={120} //Tamaño de la tarjeta
    />
 * ```
 */

const ListIconCard = props => {
  return (
    <View style={styles().textContent}>
      <Image source={props.icon} style={styles(props.dimensions).icon} />
    </View>
  );
};

const styles = dimensions =>
  StyleSheet.create({
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
    icon: {
      width: dimensions,
      height: dimensions,
    },
  });

export default ListIconCard;
