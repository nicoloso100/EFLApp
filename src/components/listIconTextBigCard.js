import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

/**
 * Componente de tarjeta con ícono y texto grande para listas
 * Uso:
 * ```html
    <ListIconTextBigCard
      item={item} //JSON con parámetros principales
      navigate={navigate} //Función para navegar a otra ruta
      navigateRoute={navigate} //La ruta a la cual se va a dirigir 
    />
  * ```
  * item es un objeto con las siguientes propiedades requeridas:
  * ```javascript
  *  item = {
  *    tittle: "título de la tarjeta",
  *    subTittle: "subtítulo de la tarjeta",
  *    direction: "dirección de flexbox (row, row-reverse)",
  *    icon: "ícono de la tarjeta"
  *  }
 * ```
 */

const ListIconTextBigCard = props => {
  const {item, navigate, navigateRoute} = props;
  return (
    <TouchableOpacity onPress={() => navigate(navigateRoute)}>
      <View style={styles(item.direction).card}>
        <Image style={styles().image} source={item.icon} />
        <View style={styles().textContent}>
          <Text style={styles().title}>{item.tittle}</Text>
          <Text style={styles().subTittle}>{item.subTittle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = direction =>
  StyleSheet.create({
    card: {
      padding: 10,
      marginBottom: 7,
      marginTop: 7,
      flexDirection: direction,
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
    },
    image: {
      width: 100,
      height: 100,
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
    subTittle: {
      fontSize: 12,
      fontFamily: 'Quicksand',
    },
  });

export default ListIconTextBigCard;
