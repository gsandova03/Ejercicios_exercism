
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`


// export const toRna = (str) => {
//   let replace = '';

//   for(let i=0; i < str.lenght; i++ ){
//     if(str[i] === 'G'){
//       replace += str[i].replace('G','C')
//     }else if(str[i] === 'C'){
//       replace += str[i].replace('C','G')
//     }else if(str[i] === 'T'){
//       replace += str[i].replace('T','A')
//     }else if(str[i] === 'A'){
//       replace += str[i].replace('A','U')
//     }
    
//   }
//   return replace;
// };

const RNA = {
  G:'C',
  C:'G',
  T:'A',
  A:'U'
}
export const toRna = (str) => {
  return str.replace(/[GCTA]/g, i => {
    return RNA[i];
  })
};
