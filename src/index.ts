import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharctersCollection } from './CharctersCollection';

// const numbersCollection = new NumbersCollection([10, -2, 1, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharctersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
