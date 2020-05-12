import findBy from '../findBy';
import results from '../app';

test('should return one object', () => {
  const expected = [{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }];
  const received = results.filter(findBy('name', 'маг'));
  expect(received).toEqual(expected);
});

test('should return two objects', () => {
  const expected = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'воин', type: 'character', description: 'Персонаж ближнего боя' },
  ];
  const received = results.filter(findBy('type', 'character'));
  expect(received).toEqual(expected);
});
