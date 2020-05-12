// export default function findBy(key, prop) {
//   return (obj) => {
//     if (obj[key] === prop) {
//       return obj;
//     }
//     return false;
//   };
// };

// function findBy(key, prop) {
//   return (obj) => (obj[key] === prop);
// }

const findBy = (key, prop) => (obj) => (obj[key] === prop); // запомню этот вариант, спасибо. 8)

export default findBy;
