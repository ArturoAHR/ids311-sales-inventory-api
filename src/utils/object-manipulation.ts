export function assign(objectA, objectB) {
  Object.keys(objectA).forEach((key) => (objectA[key] = objectB[key]));
}
