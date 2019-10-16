EFLApp
----------

**src\components\HomeButton.js**

### 1. HomeButton




-----
**src\components\IconNav.js**

### 1. NavIcon

Ícono de la barra de navegación
Uso:
```html
<NavIcon/>
```
Utiliza los íconos de react-native-elements   




-----
**src\components\ListIconCard.js**

### 1. ListIconCard

Componente de tarjeta con ícono para listas
Uso:
```html
<ListIconCard
      key={key} // Key de react
      icon={imagen} //Imagen
      dimensions={120} //Tamaño de la tarjeta
    />
```   




-----
**src\components\listIconTextBigCard.js**

### 1. ListIconTextBigCard

Componente de tarjeta con ícono y texto grande para listas
Uso:
```html
    <ListIconTextBigCard
      item={item} //JSON con parámetros principales
      navigate={navigate} //Función para navegar a otra ruta
      navigateRoute={navigate} //La ruta a la cual se va a dirigir 
    />
```
item es un objeto con las siguientes propiedades requeridas:
```javascript
 item = {
   tittle: "título de la tarjeta",
   subTittle: "subtítulo de la tarjeta",
   direction: "dirección de flexbox (row, row-reverse)",
   icon: "ícono de la tarjeta"
 }
```   




-----
**src\components\listIconTextSmallCard.js**

### 1. ListIconTextSmallCard

Componente de tarjeta con ícono y texto pequeña para listas
Uso:
```html
    <ListIconTextSmallCard
      item={item} //JSON con la configuración principal
      disableSampleButton={disable} //deshabilita un botón de la vista padre
    />
```
item es un objeto con las siguientes propiedades requeridas:
```javascript
 item = {
   audio: "Audio que se reproduce al hacer click en la tarjeta",
   avatar: "ícono de la tarjeta",
   text: "Texto principal",
   subText: "Texto secundario"
 }
```   




-----
**src\components\listTextCard.js**

### 1. ListTextCard

Componente de tarjeta texto para listas
Uso:
```html
    <ListTextCard 
      key={key} //Key de react
      text={texto} //Texto principal
    />
```   




-----
**src\components\notification.js**

### 1. Notification

Componente de notificación para cuando una respuesta es acertada o incorrecta
Uso:
```html
   <Notification
     showModal={show} //true/false para mostrar el modal
     setShowModal={setShowModal} //Función que cambia el true/false del showModal
     isCorrect={correct} //true/false para indicar si la respuesta es correcta o no
   />
```
item es un objeto con las siguientes propiedades requeridas:
```javascript
 item = {
   audio: "Audio que se reproduce al hacer click en la tarjeta",
   avatar: "ícono de la tarjeta",
   text: "Texto principal",
   subText: "Texto secundario"
 }
```   




-----
**src\views\activity1\step1.js**

### 1. Step1

Paso 1 de la primera actividad: Escuchar los días de la semana
Variables:
```javascript
//Boolean para indicar si hay un audio reproduciendose
const [playing, setPlaying] = useState(false);
//Deshabilita el botón de la opción de escuchar todos
const [optionPlaying, setoptionPlaying] = useState(false);
//Muestra los días de la opción de escuchar todos
const [dayLabel, setDayLabel] = useState('');
```
Recursos: importa dos listas del archivo de recursos

step1List se utiliza para la opción de escuchar todos los días de forma rándom, tiene como propiedades un adio con los días, los textos de cada día y los tiempos de duración de cada día
```javascript
step1List = [
{
 audio: new Sound('activity1_1_9.ogg', Sound.MAIN_BUNDLE),
 days: [
   basicItems[4].text,
   basicItems[5].text,
   basicItems[6].text,
   basicItems[4].text,
   basicItems[5].text,
   basicItems[6].text,
 ],
 time: [400, 600, 400, 800, 600, 400],
},

```

basicItems es la lista básica de cada día por separado, contiene el audio del día, su texto y su traducción al inglés

```javascript
basicItems = [
{
  audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
  text: 'Lundi',
  subText: 'Monday',
},
```

La función onSampleClick:
```javascript
  const onSampleClick = () => {
if (!optionPlaying) {
  let randomIndex = Math.floor(Math.random() * step1List.length);
  let selectedSample = step1List[randomIndex].audio;
  selectedSample.play();
  setPlaying(true);
  setDayIndex(randomIndex, 0);
  setTimeout(() => {
    setPlaying(null);
    setDayLabel('');
  }, selectedSample.getDuration() * 1000);
}
};
```
Habilita la ventana para ecuchar todos los días de forma random

La función setDayIndex:
```javascript
const setDayIndex = (listIndex, subIndex) => {
 setTimeout(() => {
   setDayLabel(step1List[listIndex].days[subIndex]);
   subIndex = subIndex + 1;
   if (subIndex < step1List[listIndex].time.length) {
     setDayIndex(listIndex, subIndex);
   }
 }, step1List[listIndex].time[subIndex]);
};
```
Es una función recursiva que muestra los días rándom de la lista   




-----
**src\views\activity1\step2.js**

### 1. Step2

Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio
Variables:
```javascript
//Boolean para indicar si hay un audio reproduciendose
const [playing, setPlaying] = useState(false);
//Almacena las posibles respuestas
const [options, setoptions] = useState(randomArray());
//Gestiona el resultado de la respuesta
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista step2List del archivo de recursos
Contiene como atributos un id (identificador único del objeto), un audio del día y el texto del día
```javascript
step2List = [
 {
   id: 0,
   audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
   text: 'Lundi',
 },
```

La función randomArray:
```javascript
const randomArray = () => {
 let array = [0, 1, 2, 3, 4, 5, 6];
 let i = array.length;
 let j = 0;
 let temp;

 while (i--) {
   j = Math.floor(Math.random() * (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }

 return {
   correct: Math.floor(Math.random() * 4),
   optionSet: [
     step2List[array[0]],
     step2List[array[2]],
     step2List[array[4]],
     step2List[array[6]],
   ],
 };
};
```
Obtiene opciones de respuestas rándom

La función select:
```javascript
const select = selection => {
   let isCorrect = false;
   let correctOption = optionSet[correct];
   if (selection.id === correctOption.id) {
     isCorrect = true;
   } else {
     isCorrect = false;
   }
   setResult({
     showModal: true,
     isCorrect: isCorrect,
   });
   setoptions(randomArray());
 };
```
Valida el resultado de la opción seleccionada, si es correcta o incorrecta y ejecuta la notificación   




-----
**src\views\activity1\step3.js**

### 1. Step3

Paso 3 de la primera actividad: Escribir el día
Variables:
```javascript
//Elemento de la actividad
const [item, setItem] = useState(getRandomItem());
//Texto de la parte superior
const [text, setText] = useState('');
//Lista de respuestas correctas
const [resultHistory, setresultHistory] = useState([]);
//Gestiona el resultado de la respuesta
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista step3List del archivo de recursos
Contiene como atributos un audio del día, el texto en inglés del día y el texto en francés, para compararlo conla respuesta ingresada por el usuario
```javascript
step3Items = [
 {
   audio: new Sound('activity1_1_1.ogg', Sound.MAIN_BUNDLE),
   text: 'Monday',
   result: 'lundi',
 },
```

La función getRandomItem:
```javascript
const getRandomItem = () => {
 let selectedItem = step3Items[Math.floor(Math.random() * 7)];
 return selectedItem;
};
```
Obtiene un elemento de actividad aleatorio

La función onButtonClick:
```javascript
const onButtonClick = () => {
   if (item.result === text.toLowerCase()) {
     setResult({
       showModal: true,
       isCorrect: true,
     });
     setItem(getRandomItem());
     setresultHistory(
       [
         {
           key: resultHistory.length.toString(),
           text: `${text} - ${item.text}`,
         },
       ].concat(resultHistory),
     );
     setText('');
   } else {
     setResult({
       showModal: true,
       isCorrect: false,
     });
   }
 };
```
Valida el resultado de la opción seleccionada, si es correcta o incorrecta y ejecuta la notificación   




-----
**src\views\activity2\step1.js**

### 1. Step1

Paso 1 de la segunda actividad: Escuchar las 3 jornadas del día
Variables:
```javascript
//Jornada seleccionada
const [step, setStep] = useState(0);
```

Recursos: se utiliza la lista steps del archivo de recursos
Contiene como atributos un audio de la jornada, una imagen representativa y el texto de la jornada
```javascript
steps = [
 {
   title: 'Le matin',
   image: require('../../assets/img/activity2/sunset.png'),
   sound: new Sound('activity2_1_1.ogg', Sound.MAIN_BUNDLE),
 },
```

La función calculateStep:
```javascript
const calculateStep = value => {
   let calc = 0;
   if (value <= 0.5) {
     calc = 0;
   } else if (value > 0.5 && value < 1.5) {
     calc = 1;
   } else if (value >= 1.5 && value <= 2.5) {
     calc = 2;
   } else if (value > 2.5) {
     calc = 3;
   }
   setStep(calc);
 };
```
Dependiendo de la posición del Slider muestra la jornada   




-----
**src\views\activity2\step2.js**

### 1. Step2

Paso 2 de la segunda actividad: Seleccionar la respuesta correcta mediante un audio
Variables:
```javascript
//Lista de opciones
const [options, setoptions] = useState(randomArray());
//Gestiona el resultado para la notificación
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista steps del archivo de recursos
Contiene como atributos un audio de la jornada, una imagen representativa y el texto de la jornada
```javascript
steps = [
 {
   title: 'Le matin',
   image: require('../../assets/img/activity2/sunset.png'),
   sound: new Sound('activity2_1_1.ogg', Sound.MAIN_BUNDLE),
 },
```


La función randomArray:
```javascript
const randomArray = () => {
 let array = [0, 1, 2];
 let i = array.length;
 let j = 0;
 let temp;

 while (i--) {
   j = Math.floor(Math.random() * (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }

 return {
   correct: Math.floor(Math.random() * 3),
   optionSet: [steps[array[0]], steps[array[1]], steps[array[2]]],
 };
};
```
Obtiene tres opciones random

* La función select:
```javascript
const select = selection => {
 let correctOption = optionSet[correct];
 if (selection.title === correctOption.title) {
   setResult({
     showModal: true,
     isCorrect: true,
   });
   setoptions(randomArray());
 } else {
   setResult({
     showModal: true,
     isCorrect: false,
   });
 }
};
```
Evalúa la opcion seleccionada y muestra la notificación con el resultado   




-----
**src\views\activity2\step3.js**

### 1. Step3

Paso 3 de la segunda actividad: Escuchar una conversación con un saludo y despedida
Variables:
```javascript
//Establece si está enm la escena de saludo o de despedida
const [scene, setScene] = useState(0);
```

Recursos: se utiliza la lista scenes del archivo de recursos
Hereda atributos de la lista steps y agrega dos dialogos, que contienen un avatar (imagen de un personaje), el audio de la conversación y su respectivo texto
```javascript
scenes = [
 {
   ...steps[0],
   dialog1: {
     avatar: require('../../assets/img/activity2/boy.png'),
     sound: new Sound('activity2_3_1.ogg', Sound.MAIN_BUNDLE),
     text: 'Bonjour mademoiselle',
   },
   dialog2: {
     avatar: require('../../assets/img/activity2/girl.png'),
     sound: new Sound('activity2_3_2.ogg', Sound.MAIN_BUNDLE),
     text: 'Bonjour monsieur',
  },
 },
```   




-----
**src\views\activity2\step4.js**

### 1. Step4

Paso 4 de la segunda actividad: Monsieur, Madame, Mademoiselle
Variables:
```javascript
//Almacena el ávatar seleccionado por el usuario
const [selected, setSelected] = useState(0);
```

Recursos: se utiliza la lista steps4 del archivo de recursos
Contiene como parámetros un título (texto del audio), un audio y un ávatar
```javascript
steps4 = [
 {
   title: 'Monsieur',
   image: require('../../assets/img/activity2/boy.png'),
   sound: new Sound('activity2_4_2.ogg', Sound.MAIN_BUNDLE),
 },
```

La función select:
```javascript
const select = pos => {
   setSelected(pos);
   steps4[pos].sound.play();
 };
```
Obtiene la información de el ávatar seleccionado y reproduce el sonido   




-----
**src\views\activity2\step5.js**

### 1. Step5

Paso 5 de la segunda actividad: Seleccionar el ávatar correcto
Variables:
```javascript
//Almacena la lista de opciones
const [options, setoptions] = useState(randomArray());
//Gestiona el resultado de la selección del usuario
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista steps4 del archivo de recursos
Contiene como parámetros un título (texto del audio), un audio y un ávatar
```javascript
steps4 = [
 {
   title: 'Monsieur',
   image: require('../../assets/img/activity2/boy.png'),
   sound: new Sound('activity2_4_2.ogg', Sound.MAIN_BUNDLE),
 },
```

La función randomArray:
```javascript
const randomArray = () => {
 let array = [0, 1, 2];
 let i = array.length;
 let j = 0;
 let temp;

 while (i--) {
   j = Math.floor(Math.random() * (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }

 return {
   correct: Math.floor(Math.random() * 3),
   optionSet: [steps4[array[0]], steps4[array[1]], steps4[array[2]]],
 };
};
```
Selecciona una lista de opciones rándom

La función select:
```javascript
const select = selection => {
 let isCorrect = false;
 let correctOption = optionSet[correct];
 if (selection.title === correctOption.title) {
   isCorrect = true;
 } else {
   isCorrect = false;
 }
 setResult({
   showModal: true,
   isCorrect: isCorrect,
 });
 setoptions(randomArray());
};
```
Valida la respuesta del usuario y ejecuta la notificación   




-----
**src\views\activity2\step6.js**

### 1. Step6

Paso 6 de la segunda actividad: Completar la frase
Variables:
```javascript
//Establece la posición de la lista steps
 const [step, setStep] = useState(0);
//Lista que almacena las fraces rándom
 const [steps, setSteps] = useState(randomArray());
//Lista textos de steps
 const [array, setArray] = useState(getSampleArray(steps[step].text));
//Gestiona el resultado de la selección del usuario
 const [result, setResult] = useState({
   showModal: false,
   isCorrect: null,
 });
```

Recursos: se utiliza la lista steps6 del archivo de recursos
Contiene como parámetros un título (texto en inglés deñ audio), el texto en francés y su respectivo audio
```javascript
steps6 = [
 {
   title: 'Good morning miss',
   text: 'Bonjour mademoiselle',
   sound: new Sound('activity2_3_1.ogg', Sound.MAIN_BUNDLE),
 },
```

La función randomArray:
```javascript
const randomArray = () => {
 let array = [0, 1, 2, 3];
 let i = array.length;
 let j = 0;
 let temp;

 while (i--) {
   j = Math.floor(Math.random() * (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }

 return [
   steps6[array[0]],
   steps6[array[1]],
   steps6[array[2]],
   steps6[array[3]],
 ];
};
```
Selecciona una lista de opciones rándom


El componente RandomInput:
```javascript
const RandomInput = ({index, array, setArray}) => {
 const onChange = text => {
   let answer = [...array];
   answer[index] = {...answer[index], answer: text};
   setArray(answer);
 };

 return (
   <TextInput
     maxLength={1}
     autoCapitalize="none"
     style={styles.input}
     selectTextOnFocus={true}
     value={array[index].answer}
     onChangeText={text => onChange(text)}
   />
);
};
```
Es el componente de completar el texto, almacena la respuesta del usaurio

La función getSampleArray:
```javascript
const getSampleArray = text => {
 let array = [];
 let answers = [];
for (let i = 0; i < 5; i++) {
 let pos = Math.floor(Math.random() * text.length);
  if (!array.includes(pos) && text[pos] !== ' ') {
    array.push(pos);
    answers.push({pos: pos, correctAnswer: text[pos], answer: ''});
}
}
return answers;
};
```
Quita posiciones de un texto de forma aleatoria y las almacena en una lista de repuesta correcta para luego ser comparadas

La función onButtonClick:
```javascript
const onButtonClick = () => {
 let isCorrect = false;
 if (checkAnswers()) {
   isCorrect = true;
   messageText = 'bravo !';
   let newStep = step + 1;
   if (newStep <= 3) {
     setStep(newStep);
     setArray(getSampleArray(steps[newStep].text));
   } else {
     setStep(0);
     let newArray = randomArray();
     setSteps(newArray);
     setArray(getSampleArray(newArray[0].text));
   }
 } else {
   isCorrect = false;
 }
 setResult({
   showModal: true,
   isCorrect: isCorrect,
 });
};
```
Valida la respuesta y ejecuta la notificación


La función checkAnswers:
```javascript
const checkAnswers = () => {
 let correct = true;
 array.forEach(element => {
   if (
     element.correctAnswer.toLowerCase() !== element.answer.toLowerCase()
   ) {
     correct = false;
   }
 });
 return correct;
};
```
Compara la respuesta del usuario con la respuesta correcta   




-----
**src\views\activity3\step1.js**

### 1. Step1

Paso 1 de la tercera actividad: Escuchar las formas en las que se pregunta por el nombre de una persona

Recursos: se utiliza la lista itemsStep1 del archivo de recursos
Contiene como atributos un audio y su respectivo texto
```javascript
itemsStep1 = [
 {
   audio: new Sound('activity3_1_1.ogg', Sound.MAIN_BUNDLE),
   text: `Comment tu t'appelles`,
 },
```   




-----
**src\views\activity3\step2.js**

### 1. Step2

Paso 2 de la tercera actividad: Escuchar una conversación de presentación

Recursos: se utiliza la lista scene del archivo de recursos
Contiene como atributos un ávatar, un audio y su respectivo texto
```javascript
scene = {
 dialog1: {
   avatar: require('../../assets/img/activity3/man.png'),
   sound: new Sound('activity3_2_1.ogg', Sound.MAIN_BUNDLE),
   text: `Comment vous vous appelez?`,
 },
```   




-----
**src\views\activity3\step3.js**

### 1. Step3

Paso 3 de la primera actividad: Escribir el día

Recursos: se utiliza la lista scene2 del archivo de recursos
Contiene como atributos un ávatar, un audio del dialogo y su respectivo texto
```javascript
 scene2 = {
 dialog1: {
   avatar: require('../../assets/img/activity3/boy2.png'),
   sound: new Sound('activity3_2_1.ogg', Sound.MAIN_BUNDLE),
   text: `Comment vous vous appelez?`,
 },
```

Los componentes
```javascript
<InputsDialog1 />
```
y
```javascript
<InputsDialog2 />
```
 Se encargan de mostrar y validar los campos de texto, junto a su botón de verificar   




-----
**src\views\activity3\step4.js**

### 1. Step4




-----
**src\views\activity4\step1.js**

### 1. Step1

Paso 1 de la primera actividad: Escuchar los días de la semana
Variables:
```javascript
//Boolean para indicar si hay un audio reproduciendose
const [playing, setPlaying] = useState(false);
//Pantalla donde se muestran los integreantes de la familia de forma aleatoria
const [optionPlaying, setoptionPlaying] = useState(false);
//Label de la opción optionPlaying
const [familyLabel, setFamilyLabel] = useState('');
```
Recursos: importa dos listas del archivo de recursos

step1Samplelist se utiliza para la opción de escuchar los miembros de la familia de forma rándom, tiene como propiedades un adio con los días, los textos de cada día y los tiempos de duración de cada día
```javascript
step1Samplelist = [
 {
   audio: new Sound('activity4_1_12.ogg', Sound.MAIN_BUNDLE),
   days: [step1Items[0].audioText, step1Items[1].audioText],
   time: [200, 200],
 },

```

step1Items se utiliza para cargar la información de las tarjetas en la lista. Tiene como atributos un audio con su texto en francés y español y un ávatar

```javascript
step1Items = [
 {
   audio: new Sound('activity4_1_1.ogg', Sound.MAIN_BUNDLE),
   text: 'La Mère',
   subText: 'The Mother',
   audioText: 'Mère',
   avatar: require('../../assets/img/activity4/mother.png'),
 },
```

La función onSampleClick:
```javascript
 const onSampleClick = () => {
   if (!optionPlaying) {
     let randomIndex = Math.floor(Math.random() * step1Samplelist.length);
     let selectedSample = step1Samplelist[randomIndex].audio;
     selectedSample.play();
     setPlaying(true);
     setFamilyIndex(randomIndex, 0);
     setTimeout(() => {
       setPlaying(null);
       setFamilyLabel('');
     }, selectedSample.getDuration() * 1000);
   }
 };
```
Habilita la ventana para ecuchar la familia de forma aleatoria

La función setFamilyIndex:
```javascript
const setFamilyIndex = (listIndex, subIndex) => {
 setTimeout(() => {
   setFamilyLabel(step1List[listIndex].days[subIndex]);
   subIndex = subIndex + 1;
   if (subIndex < step1List[listIndex].time.length) {
     setFamilyIndex(listIndex, subIndex);
   }
 }, step1List[listIndex].time[subIndex]);
};
```
Es una función recursiva que muestra los integrantes de la familia de forma aleatoria de la lista   




-----
**src\views\activity4\step2.js**

### 1. Step2

Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio
Variables:
```javascript
//Indica el ejercicio actual
const [step, setStep] = useState(getRandomItem());
//Gestiona el resultado de la respuesta
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista Step2List del archivo de recursos
Contiene como atributos un audio con el texto del integrante de la familia, y dos imágenes, una correcta y una incorrecta
```javascript
Step2List = [
 {
   audio: new Sound('activity4_1_1.ogg', Sound.MAIN_BUNDLE),
   text: 'Mère',
   correctImage: require('../../assets/img/activity4/mother.png'),
   incorrectImage: require('../../assets/img/activity4/father.png'),
 },
```

La función randomArray:
```javascript
const randomArray = () => {
 let array = [0, 1, 2, 3, 4, 5, 6];
 let i = array.length;
 let j = 0;
 let temp;

 while (i--) {
   j = Math.floor(Math.random() * (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }

 return {
   correct: Math.floor(Math.random() * 4),
   optionSet: [
     step2List[array[0]],
     step2List[array[2]],
     step2List[array[4]],
     step2List[array[6]],
   ],
 };
};
```
Obtiene opciones de respuestas rándom

La función getRandomItem:
```javascript
const getRandomItem = () => {
   let selectedItem = Step2List[Math.floor(Math.random() * 10)];
   let correctPos = Math.random() < 0.5 ? 0 : 1;
   let correctCase = {
     image: selectedItem.correctImage,
     action: onCorrectClick,
   };
   let incorrectCase = {
     image: selectedItem.incorrectImage,
     action: onInCorrectClick,
   };
   selectedItem = {
     ...selectedItem,
     options: [
       correctPos === 0 ? correctCase : incorrectCase,
       correctPos === 1 ? correctCase : incorrectCase,
     ],
   };
   return selectedItem;
 };
```
Obtiene un item de forma aleatoria de la lista y posiciona la imagen correcta en una posición aleatoria   




-----
**src\views\activity4\step3.js**

### 1. Step3

Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio
Variables:
```javascript
//Abre el modal de la imagen
const [showModal, setShowModal] = useState(false);
//Obtiene in item random de la lista
const [step, setStep] = useState(getRandomItem());
//Almacena el texto del ejercicio
const [text, setText] = useState('');
//Gestiona el resultado de la respuesta
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista Step2List del archivo de recursos
Contiene como atributos un audio con el texto del integrante de la familia, y dos imágenes, una correcta y una incorrecta
```javascript
Step2List = [
 {
   audio: new Sound('activity4_1_1.ogg', Sound.MAIN_BUNDLE),
   text: 'Mère',
   correctImage: require('../../assets/img/activity4/mother.png'),
   incorrectImage: require('../../assets/img/activity4/father.png'),
 },
```

La función validateAnswer:
```javascript
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
```
Revisa la respuesta del usuario y ejecuta la notificación   




-----
**src\views\activity5\step1.js**

### 1. Step1

Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio
Variables:
```javascript
//posición del item de la lista
const [step, setStep] = useState(0);
//Indica cuando se está reproduciendo el audio
const [playing, setPlaying] = useState(false);
```

Recursos: se utiliza la lista step1List del archivo de recursos
Contiene como atributos un audio con el texto dela profesión y una imagen representativa
```javascript
step1List = [
{
  audio: new Sound('activity5_1_1.ogg', Sound.MAIN_BUNDLE),
  text: 'Il est un policier',
  image: require('../../assets/img/activity5/policeman.png'),
},
```   




-----
**src\views\activity5\step2.js**

### 1. Step2

Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio
Variables:
```javascript
//Lista de las posibles opciones
const [options, setoptions] = useState(randomArray());
//Gestiona el resultado de la respuesta
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista step1List del archivo de recursos
Contiene como atributos un audio con el texto dela profesión y una imagen representativa
```javascript
step1List = [
{
  audio: new Sound('activity5_1_1.ogg', Sound.MAIN_BUNDLE),
  text: 'Il est un policier',
  image: require('../../assets/img/activity5/policeman.png'),
},
```

La función randomArray:
```javascript
const randomArray = () => {
 let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
 let i = array.length;
 let j = 0;
 let temp;

 while (i--) {
   j = Math.floor(Math.random() * (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }

 return {
   correct: Math.floor(Math.random() * 4),
   optionSet: [
     step1List[array[0]],
     step1List[array[2]],
     step1List[array[4]],
     step1List[array[6]],
   ],
};
};
```
Genera una lista rándom de opciones

La función select:
```javascript
const select = selection => {
 let correctOption = optionSet[correct];
 if (selection.text === correctOption.text) {
   setResult({
     showModal: true,
     isCorrect: true,
   });
   selection.audio.stop();
   setoptions(randomArray());
 } else {
   setResult({
     showModal: true,
     isCorrect: false,
   });
   isCorrect = false;
 }
};
```
Revisa la selección del usuario y ejecuta la notificación   




-----
**src\views\activity5\step3.js**

### 1. Step3

Paso 6 de la segunda actividad: Completar la frase
Variables:
```javascript
//Establece la posición de la lista steps
 const [step, setStep] = useState(0);
//Lista que almacena las fraces rándom
 const [steps, setSteps] = useState(randomArray());
//Lista textos de steps
 const [array, setArray] = useState(getSampleArray(steps[step].text));
//Gestiona el resultado de la selección del usuario
 const [result, setResult] = useState({
   showModal: false,
   isCorrect: null,
 });
```

Recursos: se utiliza la lista step1List del archivo de recursos
Contiene como atributos un audio con el texto dela profesión y una imagen representativa
```javascript
step1List = [
{
  audio: new Sound('activity5_1_1.ogg', Sound.MAIN_BUNDLE),
  text: 'Il est un policier',
  image: require('../../assets/img/activity5/policeman.png'),
},
```

La función randomArray:
```javascript
const randomArray = () => {
 let array = [0, 1, 2, 3];
 let i = array.length;
 let j = 0;
 let temp;

 while (i--) {
   j = Math.floor(Math.random() * (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }

 return [
   steps6[array[0]],
   steps6[array[1]],
   steps6[array[2]],
   steps6[array[3]],
 ];
};
```
Selecciona una lista de opciones rándom


El componente RandomInput:
```javascript
const RandomInput = ({index, array, setArray}) => {
 const onChange = text => {
   let answer = [...array];
   answer[index] = {...answer[index], answer: text};
   setArray(answer);
 };

 return (
   <TextInput
     maxLength={1}
     autoCapitalize="none"
     style={styles.input}
     selectTextOnFocus={true}
     value={array[index].answer}
     onChangeText={text => onChange(text)}
   />
);
};
```
Es el componente de completar el texto, almacena la respuesta del usaurio

La función getSampleArray:
```javascript
const getSampleArray = text => {
 let array = [];
 let answers = [];
for (let i = 0; i < 5; i++) {
 let pos = Math.floor(Math.random() * text.length);
  if (!array.includes(pos) && text[pos] !== ' ') {
    array.push(pos);
    answers.push({pos: pos, correctAnswer: text[pos], answer: ''});
}
}
return answers;
};
```
Quita posiciones de un texto de forma aleatoria y las almacena en una lista de repuesta correcta para luego ser comparadas

La función onButtonClick:
```javascript
const onButtonClick = () => {
 let isCorrect = false;
 if (checkAnswers()) {
   isCorrect = true;
   messageText = 'bravo !';
   let newStep = step + 1;
   if (newStep <= 3) {
     setStep(newStep);
     setArray(getSampleArray(steps[newStep].text));
   } else {
     setStep(0);
     let newArray = randomArray();
     setSteps(newArray);
     setArray(getSampleArray(newArray[0].text));
   }
 } else {
   isCorrect = false;
 }
 setResult({
   showModal: true,
   isCorrect: isCorrect,
 });
};
```
Valida la respuesta y ejecuta la notificación


La función checkAnswers:
```javascript
const checkAnswers = () => {
 let correct = true;
 array.forEach(element => {
   if (
     element.correctAnswer.toLowerCase() !== element.answer.toLowerCase()
   ) {
     correct = false;
   }
 });
 return correct;
};
```
Compara la respuesta del usuario con la respuesta correcta   




-----
**src\views\activity6\step1.js**

### 1. Step1

Paso 2 de la primera actividad: Seleccionar la respuesta correcta mediante un audio

Se utiliza el componente react-native-youtube para visualizar los videos
```javascript
     <YouTube
       apiKey="AIzaSyAXd-BG6vu7AUnd-VcsEGV3mIztzIU9z2U"
       videoId="z2IrJ0DB0Xg"
       play={false}
       style={styles.videPlayer}
     />
```
 el apiKey es generado personal de una cuenta de google   




-----
**src\views\activity6\step2.js**

### 1. Step2




-----
**src\views\activity7\step1.js**

### 1. Step1

Paso 1 de la séptima actividad: Ver posiciones de objetos en un mapa
Variables:
```javascript
//Abre el modal de la imagen
const [showModal, setShowModal] = useState(false);
//Obtiene in item random de la lista
const [step, setStep] = useState(getRandomItem());
//Gestiona el resultado de la respuesta
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista Step2List del archivo de recursos
Contiene como atributos un audio con el texto de una pregunta sobre la posición de un item en el mapa, y su respuesta
```javascript
step1List = [
 {
   audio: new Sound('', Sound.MAIN_BUNDLE),
   text: 'Où se trouve le stade',
   answerText: 'Le stade est derrière le parking',
```   




-----
**src\views\activity7\step2.js**

### 1. Step2

Paso 2 de la séptima actividad: Escribir la posición de un objeto en el mapa
Variables:
```javascript
//Abre el modal de la imagen
const [showModal, setShowModal] = useState(false);
//Obtiene in item random de la lista
const [step, setStep] = useState(getRandomItem());
//Almacena el texto del ejercicio
const [text, setText] = useState('');
//Gestiona el resultado de la respuesta
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista Step2List del archivo de recursos
Es una copia de step1List adicionando el atributo correctText, el cual indica el texto que el usuario debe escribir
```javascript
step2list = [
 {...step1List[0], correctText: 'derrière'},
```

La función validateAnswer:
```javascript
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
```

La función splitText:
```javascript
 const splitText = (text, split) => {
   return text.split(split);
 };
```
Parte el texto quitando la respuesta para poner un campo de texto   




-----
**src\views\activity7\step3.js**

### 1. Step3

Paso 3 de la séptima actividad: Escribir el objeto en el mapa mediante una posición
Variables:
```javascript
//Abre el modal de la imagen
const [showModal, setShowModal] = useState(false);
//Obtiene in item random de la lista
const [step, setStep] = useState(getRandomItem());
//Almacena el texto del ejercicio
const [text, setText] = useState('');
//Gestiona el resultado de la respuesta
const [result, setResult] = useState({
  showModal: false,
  isCorrect: null,
});
```

Recursos: se utiliza la lista Step2List del archivo de recursos
Es una copia de step1List adicionando el atributo correctText, el cual indica el texto que el usuario debe escribir
```javascript
step3list = [
 {...step1List[0], correctText: 'le parking'},
```

La función validateAnswer:
```javascript
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
```

La función splitText:
```javascript
 const splitText = (text, split) => {
   return text.split(split);
 };
```
Parte el texto quitando la respuesta para poner un campo de texto   




-----
**src\views\home.js**

### 1. Home

Menú principal que establece la navegación hacia las actividades
Se inicializa con una constante JSON con los parámetros de cada tarjeta:
```javascript
 data = [
 {
   icon: require('../assets/img/home/calendar.png'),
   tittle: "Les jours de la semaine",
   subTittle: "Leçon 1",
   navigate: "Activity1",
   direction: "row",
 }, ...
```
 Utiliza el componente
```html
    <ListIconTextBigCard>
```
 Para las tarjetas de la lista   




-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
