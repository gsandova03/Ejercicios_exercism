//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (frase) => {
  let fraseArray = frase.trim().toLowerCase().split(/\s+/);
  const Total = {};

  for(let i= 0; i < fraseArray.lenght; i++){

    if(Total.hasOwnProperty(fraseArray[i])){
      Total[fraseArray[i]] += 1;
    }else{
      Total[fraseArray[i]] = 1;
    }
  }
  return Total;
};
