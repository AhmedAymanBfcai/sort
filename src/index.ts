import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharctersCollection } from './CharctersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, -2, 1, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharctersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-2);
linkedList.add(-10);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
