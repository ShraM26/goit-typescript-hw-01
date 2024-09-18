function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = {
  name: 'Alice',
  age: 30
};

const objB = {
  position: 'Developer',
  company: 'TechCorp'
};


const mergedObject = merge(objA, objB);
console.log(mergedObject);
