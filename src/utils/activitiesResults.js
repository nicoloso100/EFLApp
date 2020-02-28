import AsyncStorage from '@react-native-community/async-storage';

export const getResultsFirstActivity = async () => {
  const firstActivityCorrect = await AsyncStorage.getItem('FirstActivityCorrect');
  const firstActivityIncorrect = await AsyncStorage.getItem('FirstActivityIncorrect');
  const secondActivityCorrect = await AsyncStorage.getItem('SecondActivityCorrect');
  const secondActivityIncorrect = await AsyncStorage.getItem('SecondActivityIncorrect');

  let allCorrectResults = parseInt(firstActivityCorrect !== null ? firstActivityCorrect : 0) + parseInt(secondActivityCorrect !== null ? secondActivityCorrect : 0);
  let allIncorrectResults = parseInt(firstActivityIncorrect !== null ? firstActivityIncorrect : 0) + parseInt(secondActivityIncorrect !== null ? secondActivityIncorrect : 0);
  
  let result = {
    detailed: {
      firstActivityCorrect: firstActivityCorrect !== null ? parseInt(firstActivityCorrect) : 0,
      firstActivityIncorrect: firstActivityIncorrect !== null ? parseInt(firstActivityIncorrect) : 0,
      secondActivityCorrect: secondActivityCorrect !== null ? parseInt(secondActivityCorrect) : 0,
      secondActivityIncorrect: secondActivityIncorrect !== null ? parseInt(secondActivityIncorrect) : 0
    },
    summarized:{
      allCorrectResults, 
      allIncorrectResults
    }
  }
  return result;
}

export const getResultsSecondActivity = async () => {
  const firstActivityCorrect = await AsyncStorage.getItem('SecondActivityFirstStepCorrect');
  const firstActivityIncorrect = await AsyncStorage.getItem('SecondActivityFirstStepIncorrect');
  const secondActivityCorrect = await AsyncStorage.getItem('SecondActivitySecondStepCorrect');
  const secondActivityIncorrect = await AsyncStorage.getItem('SecondActivitySecondStepIncorrect');
  const thirdActivityCorrect = await AsyncStorage.getItem('SecondActivityThirdStepCorrect');
  const thirdActivityIncorrect = await AsyncStorage.getItem('SecondActivityThirdStepIncorrect');

  let allCorrectResults = parseInt(
      firstActivityCorrect !== null ? firstActivityCorrect : 0
    ) + 
    parseInt(
      secondActivityCorrect !== null ? secondActivityCorrect : 0
    ) + 
    parseInt(
      thirdActivityCorrect !== null ? thirdActivityCorrect : 0
    );

  let allIncorrectResults = parseInt(
      firstActivityIncorrect !== null ? firstActivityIncorrect : 0
    ) + 
    parseInt(
      secondActivityIncorrect !== null ? secondActivityIncorrect : 0
    ) + 
    parseInt(
      thirdActivityIncorrect !== null ? thirdActivityIncorrect : 0
    );

  let result = {
    detailed: {
      firstActivityCorrect: firstActivityCorrect !== null ? parseInt(firstActivityCorrect) : 0,
      firstActivityIncorrect: firstActivityIncorrect !== null ? parseInt(firstActivityIncorrect) : 0,
      secondActivityCorrect: secondActivityCorrect !== null ? parseInt(secondActivityCorrect) : 0,
      secondActivityIncorrect: secondActivityIncorrect !== null ? parseInt(secondActivityIncorrect) : 0,
      thirdActivityCorrect: thirdActivityCorrect !== null ? parseInt(thirdActivityCorrect) : 0,
      thirdActivityIncorrect: thirdActivityIncorrect !== null ? parseInt(thirdActivityIncorrect) : 0,
    },
    summarized:{
      allCorrectResults, 
      allIncorrectResults
    }
  }
  return result;
}

export const getResultsThirdActivity = async () => {
  const firstActivityCorrect = await AsyncStorage.getItem('ThirdActivityFirstStepCorrect');
  const firstActivityIncorrect = await AsyncStorage.getItem('ThirdActivityFirstStepIncorrect');

  let allCorrectResults = parseInt(firstActivityCorrect !== null ? firstActivityCorrect : 0);
  let allIncorrectResults = parseInt(firstActivityIncorrect !== null ? firstActivityIncorrect : 0);
  
  let result = {
    detailed: {
      firstActivityCorrect: firstActivityCorrect !== null ? parseInt(firstActivityCorrect) : 0,
      firstActivityIncorrect: firstActivityIncorrect !== null ? parseInt(firstActivityIncorrect) : 0,
    },
    summarized:{
      allCorrectResults, 
      allIncorrectResults
    }
  }
  return result;
}

export const getResultsFourthtActivity = async () => {
  const firstActivityCorrect = await AsyncStorage.getItem('FourthActivityFirstStepCorrect');
  const firstActivityIncorrect = await AsyncStorage.getItem('FourthActivityFirstStepIncorrect');
  const secondActivityCorrect = await AsyncStorage.getItem('FourthActivitySecondStepCorrect');
  const secondActivityIncorrect = await AsyncStorage.getItem('FourthActivitySecondStepIncorrect');

  let allCorrectResults = parseInt(firstActivityCorrect !== null ? firstActivityCorrect : 0) + parseInt(secondActivityCorrect !== null ? secondActivityCorrect : 0);
  let allIncorrectResults = parseInt(firstActivityIncorrect !== null ? firstActivityIncorrect : 0) + parseInt(secondActivityIncorrect !== null ? secondActivityIncorrect : 0);
  
  let result = {
    detailed: {
      firstActivityCorrect: firstActivityCorrect !== null ? parseInt(firstActivityCorrect) : 0,
      firstActivityIncorrect: firstActivityIncorrect !== null ? parseInt(firstActivityIncorrect) : 0,
      secondActivityCorrect: secondActivityCorrect !== null ? parseInt(secondActivityCorrect) : 0,
      secondActivityIncorrect: secondActivityIncorrect !== null ? parseInt(secondActivityIncorrect) : 0
    },
    summarized:{
      allCorrectResults, 
      allIncorrectResults
    }
  }
  return result;
}

export const getResultsFifithtActivity = async () => {
  const firstActivityCorrect = await AsyncStorage.getItem('FifithActivityFirstStepCorrect');
  const firstActivityIncorrect = await AsyncStorage.getItem('FifithActivityFirstStepIncorrect');
  const secondActivityCorrect = await AsyncStorage.getItem('FifithActivitySecondStepCorrect');
  const secondActivityIncorrect = await AsyncStorage.getItem('FifithActivitySecondStepIncorrect');

  let allCorrectResults = parseInt(firstActivityCorrect !== null ? firstActivityCorrect : 0) + parseInt(secondActivityCorrect !== null ? secondActivityCorrect : 0);
  let allIncorrectResults = parseInt(firstActivityIncorrect !== null ? firstActivityIncorrect : 0) + parseInt(secondActivityIncorrect !== null ? secondActivityIncorrect : 0);
  
  let result = {
    detailed: {
      firstActivityCorrect: firstActivityCorrect !== null ? parseInt(firstActivityCorrect) : 0,
      firstActivityIncorrect: firstActivityIncorrect !== null ? parseInt(firstActivityIncorrect) : 0,
      secondActivityCorrect: secondActivityCorrect !== null ? parseInt(secondActivityCorrect) : 0,
      secondActivityIncorrect: secondActivityIncorrect !== null ? parseInt(secondActivityIncorrect) : 0
    },
    summarized:{
      allCorrectResults, 
      allIncorrectResults
    }
  }
  return result;
}
