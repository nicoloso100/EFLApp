import React, { useContext } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Icon, Button} from 'react-native-elements';

import {primaryColor, bodyColor1} from '../colors';
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
  const onButtonClick = () => {
    Alert.alert('Warning', 'Are you sure that want to continue?')
  }

  return(
    <View style={styles.container}>
      <HomeButton navigate={navigation.navigate} />
      <ActivityResults
        excercise={excercise}
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
        title="Refresh"
        onPress={() => onButtonClick()}
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
