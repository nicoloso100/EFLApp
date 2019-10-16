import React from 'react';
import {Image, FlatList, StyleSheet, View, Text} from 'react-native';
import ListIconTextBigCard from '../components/listIconTextBigCard';
import {navBarColor} from './colors';

const data = [
  {
    icon: require('../assets/img/home/calendar.png'),
    tittle: 'Les jours de la semaine',
    subTittle: 'Leçon 1',
    navigate: 'Activity1',
    direction: 'row',
  },
  {
    icon: require('../assets/img/home/sunrise.png'),
    tittle: 'La journée',
    subTittle: 'Leçon 2',
    navigate: 'Activity2',
    direction: 'row-reverse',
  },
  {
    icon: require('../assets/img/home/identification.png'),
    tittle: 'Comment vous vous appelez?',
    subTittle: 'Leçon 3',
    navigate: 'Activity3',
    direction: 'row',
  },
  {
    icon: require('../assets/img/home/family.png'),
    tittle: 'La famille',
    subTittle: 'Leçon 4',
    navigate: 'Activity4',
    direction: 'row-reverse',
  },
  {
    icon: require('../assets/img/home/engineer.png'),
    tittle: 'Les mètiers',
    subTittle: 'Leçon 5',
    navigate: 'Activity5',
    direction: 'row',
  },
  {
    icon: require('../assets/img/home/lettering.png'),
    tittle: 'Verbes être et avoir',
    subTittle: 'Leçon 6',
    navigate: 'Activity6',
    direction: 'row-reverse',
  },
  {
    icon: require('../assets/img/home/map.png'),
    tittle: 'les lieux',
    subTittle: 'Leçon 7',
    navigate: 'Activity7',
    direction: 'row',
  },
];

/**
* Menú principal que establece la navegación hacia las actividades
* Se inicializa con una constante JSON con los parámetros de cada tarjeta:
* ```javascript
*  data = [
*  {
*    icon: require('../assets/img/home/calendar.png'),
*    tittle: "Les jours de la semaine",
*    subTittle: "Leçon 1",
*    navigate: "Activity1",
*    direction: "row",
*  }, ...
 * ```
 Utiliza el componente
 * ```html
    <ListIconTextBigCard>
 * ```
 Para las tarjetas de la lista
 */

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={styles.image}
          source={require('../assets/img/home/EFLALogo.png')}
        />
        <View style={styles.textContent}>
          <Text style={styles.title}>EFLA</Text>
          <Text style={styles.subTittle}>Français por nous</Text>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={item => item.tittle}
          renderItem={({item}) => (
            <ListIconTextBigCard
              item={item}
              navigate={props.navigation.navigate}
              navigateRoute={item.navigate}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: navBarColor,
  },
  head: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  textContent: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Quicksand',
  },
  subTittle: {
    fontSize: 20,
    fontFamily: 'Quicksand',
  },
  body: {
    flex: 1,
    backgroundColor: '#B5C9E5',
  },
  list: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Home;
