export function assign(objectA, objectB) {
  Object.keys(objectB).forEach((key) => (objectA[key] = objectB[key]));
}
