export default function findBy(key, prop) {
  return (obj) => {
    if (obj[key] === prop) {
      return obj;
    }
    return false;
  };
}
