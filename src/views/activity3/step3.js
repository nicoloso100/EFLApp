import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Notification from '../../components/notification';
import {scene2} from './resources';
import {primaryColor, bodyColor1} from '../colors';
import HomeButton from '../../components/HomeButton';

const InputsDialog1 = () => {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [result, setResult] = useState({
    showModal: false,
    isCorrect: null,
  });

  const checkAnswers = () => {
    let correct = true;
    if (answer1.toLowerCase() !== "m'appelle") {
      correct = false;
    }
    if (answer2.toLowerCase() !== 'vous') {
      correct = false;
    }
    setResult({
      showModal: true,
      isCorrect: correct,
    });
  };

  const setShowModal = () => {
    setResult({...result, showModal: false});
  };

  return (
    <React.Fragment>
      <Notification
        showModal={result.showModal}
        setShowModal={setShowModal}
        isCorrect={result.isCorrect}
      />
      <View style={styles().InputsContainer}>
        <Text style={styles().dialogText}>Je </Text>
        <TextInput
          autoCapitalize="none"
          style={styles(130).input}
          value={answer1}
          onChangeText={text => setAnswer1(text)}
        />
        <Text style={styles().dialogText}> </Text>
        <TextInput autoCapitalize="none" style={styles(100).input} />
        <Text style={styles().dialogText}> et </Text>
        <TextInput
          autoCapitalize="none"
          style={styles(80).input}
          value={answer2}
          onChangeText={text => setAnswer2(text)}
        />
        <Text style={styles().dialogText}>?</Text>
      </View>
      <Button title="vérifier" onPress={checkAnswers} />
    </React.Fragment>
  );
};

const InputsDialog2 = () => {
  const [answer1, setAnswer1] = useState('');
  const [result, setResult] = useState({
    showModal: false,
    isCorrect: null,
  });

  const checkAnswers = () => {
    let correct = true;
    if (answer1.toLowerCase() !== 'enchanté') {
      correct = false;
    }
    setResult({
      showModal: true,
      isCorrect: correct,
    });
  };

  const setShowModal = () => {
    setResult({...result, showModal: false});
  };

  return (
    <React.Fragment>
      <Notification
        showModal={result.showModal}
        setShowModal={setShowModal}
        isCorrect={result.isCorrect}
      />

      <View style={styles().InputsContainer}>
        <TextInput
          autoCapitalize="none"
          style={styles(200).input}
          value={answer1}
          onChangeText={text => setAnswer1(text)}
        />
      </View>
      <Button title="vérifier" onPress={checkAnswers} />
    </React.Fragment>
  );
};

/**
 * Paso 3 de la primera actividad: Escribir el día
 *
 * Recursos: se utiliza la lista scene2 del archivo de recursos
 * Contiene como atributos un ávatar, un audio del dialogo y su respectivo texto
 * ```javascript
 *  scene2 = {
 *  dialog1: {
 *    avatar: require('../../assets/img/activity3/boy2.png'),
 *    sound: new Sound('activity3_2_1.ogg', Sound.MAIN_BUNDLE),
 *    text: `Comment vous vous appelez?`,
 *  },
 * ```
 *
 * Los componentes
 * ```javascript
 *<InputsDialog1 />
 * ```
 * y
 * ```javascript
 *<InputsDialog2 />
 * ```
 Se encargan de mostrar y validar los campos de texto, junto a su botón de verificar
 */

const Step3 = ({navigation}) => {
  return (
    <View style={styles().container}>
      <HomeButton navigate={navigation.navigate} />
      <View style={styles().card}>
        <Text style={styles().title}>Answer your name</Text>
      </View>
      <ScrollView style={styles().scroll}>
        <TouchableOpacity onPress={() => scene2.dialog1.sound.play()}>
          <View style={styles().dialog}>
            <Image
              style={styles().dialogImage}
              source={scene2.dialog1.avatar}></Image>
            <View style={styles().dialogTextField}>
              <Text style={styles().dialogText}>{scene2.dialog1.text}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles().dialog}>
          <View style={styles().dialogTextField}>
            <InputsDialog1 />
          </View>
          <Image
            style={styles().dialogImage}
            source={scene2.dialog2.avatar}></Image>
        </View>

        <TouchableOpacity onPress={() => scene2.dialog3.sound.play()}>
          <View style={styles().dialog}>
            <Image
              style={styles().dialogImage}
              source={scene2.dialog3.avatar}></Image>
            <View style={styles().dialogTextField}>
              <Text style={styles().dialogText}>{scene2.dialog3.text}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles().dialog}>
          <View style={styles().dialogTextField}>
            <InputsDialog2 />
          </View>
          <Image
            style={styles().dialogImage}
            source={scene2.dialog4.avatar}></Image>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = inputWidth =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: bodyColor1,
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

export default Step3;
