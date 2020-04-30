import findBy from './find-by';

const finder = findBy('type', 'attack');

const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  { name: 'воин', type: 'character', description: 'Персонаж ближнего боя' },
  { name: 'удар мечом', type: 'attack', description: 'Атака оружием' },
  { name: 'заклинание', type: 'attack', description: 'Атака другим магическим заклинанием' },
  { name: 'выстрел из лука', type: 'attack', description: 'Атака оружием' },
];

console.log(results.filter(finder));

export default results;
