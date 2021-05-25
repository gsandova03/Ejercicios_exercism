//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  let sentence = str.toLowerCase();

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const alphArray = alphabet.split('');


  for(let i=0; i < 26; i++){
    // const element = str[i];
    // const indexArray = alphArray.indexOf(element)

    if(sentence.indexOf(alphArray[i]) == -1){
      return false
    }
  }
  return true;
};
