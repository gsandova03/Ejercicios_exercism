import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('Color codes', () => {

    test('black ', () => {
      expect(colorCode('Black')).toEqual(0);
    });

    test('brown ', () => {
      expect(colorCode('brown')).toEqual(1);
    });

    test('red ', () => {
      expect(colorCode('red')).toEqual(2);
    });

    test('orange ', () => {
      expect(colorCode('orange')).toEqual(3);
    });

    test('yellow ', () => {
      expect(colorCode('yellow')).toEqual(4);
    });

    test('green ', () => {
      expect(colorCode('green')).toEqual(5);
    });

    test('blue ', () => {
      expect(colorCode('blue')).toEqual(6);
    });

    test('violet ', () => {
      expect(colorCode('violet')).toEqual(7);
    });

    test('grey ', () => {
      expect(colorCode('grey')).toEqual(8);
    });

    test('white ', () => {
      expect(colorCode('white')).toEqual(9);
    });
  });

  test('Colors', () => {
    expect(COLORS).toEqual([
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
    ]);
  });
});
