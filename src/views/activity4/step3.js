import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {Overlay, Icon, Button} from 'react-native-elements';
import {useState} from 'react';

import Notification from '../../components/notification';
import {step3list} from './resources';
import {primaryColor, bodyColor1} from '../colors';

console.disableYellowBox = true;

const TreeImage = ({setStyle}) => {
  return (
    <Image
      enableHorizontalBounce={true}
      style={setStyle}
      source={require('../../assets/img/activity4/arbolGenealogico.jpeg')}
    />
  );
};

const getRandomItem = () => {
  let selectedItem = step3list[Math.floor(Math.random() * 7)];
  return selectedItem;
};

/**
 * Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio
 * Variables:
 * ```javascript
 * //Abre el modal de la imagen
 * const [showModal, setShowModal] = useState(false);
 * //Obtiene in item random de la lista
 * const [step, setStep] = useState(getRandomItem());
 * //Almacena el texto del ejercicio
 * const [text, setText] = useState('');
 * //Gestiona el resultado de la respuesta
 * const [result, setResult] = useState({
 *   showModal: false,
 *   isCorrect: null,
 * });
 * ```
 *
 * Recursos: se utiliza la lista Step2List del archivo de recursos
 * Contiene como atributos un audio con el texto del integrante de la familia, y dos imágenes, una correcta y una incorrecta
 * ```javascript
 *Step2List = [
 *  {
 *    audio: new Sound('activity4_1_1.ogg', Sound.MAIN_BUNDLE),
 *    text: 'Mère',
 *    correctImage: require('../../assets/img/activity4/mother.png'),
 *    incorrectImage: require('../../assets/img/activity4/father.png'),
 *  },
 * ```
 *
 * La función validateAnswer:
 * ```javascript
 *const validateAnswer = () => {
 *   if (text.toLowerCase() === step.correctText.toLowerCase()) {
 *     setStep(getRandomItem());
 *     setText('');
 *     setResult({
 *       showModal: true,
 *       isCorrect: true,
 *     });
 *   } else {
 *     setResult({
 *       showModal: true,
 *       isCorrect: false,
 *     });
 *   }
 * };
 * ```
 * Revisa la respuesta del usuario y ejecuta la notificación
 */

const Step3 = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(getRandomItem());
  const [text, setText] = useState('');
  const [result, setResult] = useState({
    showModal: false,
    isCorrect: null,
  });

  const onLayout = e => {
    setShowModal(false);
  };

  const validateAnswer = () => {
    if (text.toLowerCase() === step.correctText.toLowerCase()) {
      setStep(getRandomItem());
      setText('');
      setResult({
        showModal: true,
        isCorrect: true,
      });
    } else {
      setResult({
        showModal: true,
        isCorrect: false,
      });
    }
  };

  return (
    <View style={styles.container} onLayout={onLayout.bind(this)}>
      <Notification
        showModal={result.showModal}
        setShowModal={() => setResult({...result, showModal: false})}
        isCorrect={result.isCorrect}
      />

      <Overlay
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        windowBackgroundColor="rgba(0, 0, 0, 0.7)"
        overlayBackgroundColor="transparent"
        width="auto"
        height="auto">
        <View>
          <Button
            buttonStyle={styles.optionButton}
            title="proche"
            onPress={() => setShowModal(false)}
          />
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height - 65}
            imageWidth={Dimensions.get('window').width}
            imageHeight={Dimensions.get('window').height}
            enableSwipeDown={true}>
            <TreeImage setStyle={styles.modalImage} />
          </ImageZoom>
        </View>
      </Overlay>
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setShowModal(true)}>
          <TreeImage setStyle={styles.staticImage} />
        </TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.textContent}>
            <Text style={styles.title}>{step.text}</Text>
          </View>
          <TouchableOpacity onPress={() => step.audio.play()}>
            <Icon raised name="play" type="font-awesome" color={primaryColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.title}>{step.answerText}</Text>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={text => setText(text)}
          />
          <View style={styles.buttonOptions}>
            <View style={styles.buttomColumn}>
              <Button
                buttonStyle={styles.optionButton}
                title="Entendre la réponse"
                onPress={() => step.answerAudio.play()}
              />
            </View>
            <View style={styles.buttomColumn}>
              <Button
                buttonStyle={styles.optionButton}
                title="vérifier"
                onPress={() => validateAnswer()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bodyColor1,
  },
  staticImage: {
    height: 300,
    width: '100%',
    resizeMode: 'center',
  },
  modalImage: {
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
  },
  card: {
    flex: 2,
    margin: 7,
    borderBottomColor: primaryColor,
    borderBottomWidth: 2,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderRadius: 5,
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
  input: {
    marginTop: 10,
    width: '80%',
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  buttomColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonOptions: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  optionButton: {
    height: 60,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
  },
  answerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Step3;
