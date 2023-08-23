import { interval, zip, from } from 'rxjs';
import { sample } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/sample
// Example 2: Sample source when interval emits
const source = zip(
  //emit 'Joe', 'Frank' and 'Bob' in sequence
  from(['Joe', 'Frank', 'Bob']), //emit value every 2s
  interval(2000)
);
//sample last emitted value from source every 2.5s
const example = source.pipe(sample(interval(2500)));
const subscribe = example.subscribe(val => console.log(val));
//output: ["Joe", 0]...["Frank", 1]...........
