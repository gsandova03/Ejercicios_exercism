export const decodedValue = (colores) => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  let num1 = COLORS.indexOf(colores[0]);
  let num2 = COLORS.indexOf(colores[1]);

  return +`${num1}${num2}`

};
 