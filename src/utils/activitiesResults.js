import AsyncStorage from '@react-native-community/async-storage';

export const getResultsFirstActivity = async () => {
    console.log("call")
      const firstActivityCorrect = await AsyncStorage.getItem('FirstActivityCorrect');
      const firstActivityIncorrect = await AsyncStorage.getItem('FirstActivityIncorrect');
      const secondActivityCorrect = await AsyncStorage.getItem('SecondActivityCorrect');
      const secondActivityIncorrect = await AsyncStorage.getItem('SecondActivityIncorrect');
      console.log(firstActivityCorrect, firstActivityIncorrect, secondActivityCorrect, secondActivityIncorrect);
      console.log('end async storage');
      console.log(firstActivityCorrect !== null);
      let allCorrectResults = parseInt(firstActivityCorrect !== null ? firstActivityCorrect : 0) + parseInt(secondActivityCorrect !== null ? secondActivityCorrect : 0);
      let allIncorrectResults = parseInt(firstActivityIncorrect !== null ? firstActivityIncorrect : 0) + parseInt(secondActivityIncorrect !== null ? secondActivityIncorrect : 0);
      console.log(allCorrectResults, allIncorrectResults);
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
      console.log(result)
      return result;

}