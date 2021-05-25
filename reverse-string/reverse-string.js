//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  
  //simple way
  // let reverseString = str.split("").reverse().join("");

  // return reverseString;

  //more structurate way
  let myReverseString = '';

  for(let char of str){
    myReverseString = char + myReverseString;
  }
  return myReverseString;
};
