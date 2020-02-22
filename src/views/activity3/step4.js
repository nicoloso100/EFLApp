import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import SoundRecorder from 'react-native-sound-recorder';
import {scene3} from './resources';
import {primaryColor, bodyColor2} from '../colors';

var Sound = require('react-native-sound');

const InputsDialog1 = () => {
  const [text, setText] = useState('start');

  const startRecord = () => {
  };

  const stopRecord = () => {
    SoundRecorder.stop().then(function(result) {
      let path = result.path;
      new Sound(path, Sound.MAIN_BUNDLE).play();
    });
  };

  return (
    <React.Fragment>
      <Button title={text} onPress={startRecord} />
      <Button title="stop" onPress={stopRecord} />
    </React.Fragment>
  );
};

const InputsDialog2 = () => {
  return <Text>holii</Text>;
};

const Step4 = () => {
  return (
    <View style={styles().container}>
      <View style={styles().card}>
        <Text style={styles().title}>Answer your name</Text>
      </View>
      <ScrollView style={styles().scroll}>
        <View style={styles().dialog}>
          <View style={styles().dialogTextField}>
            <InputsDialog1 />
          </View>
          <Image
            style={styles().dialogImage}
            source={scene3.dialog1.avatar}></Image>
        </View>

        <TouchableOpacity onPress={() => scene3.dialog2.sound.play()}>
          <View style={styles().dialog}>
            <Image
              style={styles().dialogImage}
              source={scene3.dialog2.avatar}></Image>
            <View style={styles().dialogTextField}>
              <Text style={styles().dialogText}>{scene3.dialog2.text}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles().dialog}>
          <View style={styles().dialogTextField}>
            <InputsDialog2 />
          </View>
          <Image
            style={styles().dialogImage}
            source={scene3.dialog3.avatar}></Image>
        </View>
        <TouchableOpacity onPress={() => scene3.dialog4.sound.play()}>
          <View style={styles().dialog}>
            <Image
              style={styles().dialogImage}
              source={scene3.dialog4.avatar}></Image>
            <View style={styles().dialogTextField}>
              <Text style={styles().dialogText}>{scene3.dialog4.text}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = inputWidth =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: bodyColor2,
    },
    image: {
      alignSelf: 'center',
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    card: {
      height: 80,
      marginBottom: 7,
      marginTop: 7,
      borderBottomColor: primaryColor,
      borderBottomWidth: 2,
      borderRadius: 5,
      justifyContent: 'center',
    },
    title: {
      flexShrink: 1,
      fontSize: 25,
      fontFamily: 'Quicksand',
    },
    dialog: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 40,
    },
    dialogImage: {
      width: 100,
      height: 100,
    },
    dialogTextField: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      justifyContent: 'center',
    },
    scroll: {
      marginTop: 15,
    },
    InputsContainer: {
      marginBottom: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    dialogText: {
      fontSize: 24,
    },
    input: {
      minWidth: inputWidth,
      backgroundColor: '#DCE5F1',
      fontSize: 24,
      textAlign: 'center',
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 1,
      paddingLeft: 1,
      marginRight: 1,
      marginLeft: 1,
      marginBottom: 1,
    },
  });

export default Step4;
