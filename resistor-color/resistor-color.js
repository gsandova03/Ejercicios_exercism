export const colorCode = (color) => {
  let lower_color = color.toLowerCase();

  if(lower_color == 'black') return 0;
  if(lower_color == 'brown') return 1;
  if(lower_color == 'red') return 2;
  if(lower_color == 'orange') return 3;
  if(lower_color == 'yellow') return 4;
  if(lower_color == 'green') return 5;
  if(lower_color == 'blue') return 6;
  if(lower_color == 'violet') return 7;
  if(lower_color == 'grey') return 8;
  if(lower_color == 'white') return 9;

};

export const COLORS = [
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
