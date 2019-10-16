import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const HomeButton = ({navigate}) => {
  return (
    <Button
      buttonStyle={styles.button}
      titleStyle={styles.buttonIcon}
      icon={<Icon name="home" type="font-awesome" size={30} color="white" />}
      title="Menu"
      onPress={() => navigate('Home')}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 5,
    margin: 10,
  },
  buttonIcon: {
    marginLeft: 15,
  },
});

export default HomeButton;
