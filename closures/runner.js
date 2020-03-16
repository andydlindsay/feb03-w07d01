const incrementCounter = require('./function');
const Counter = require('./classes');

console.log('----------- function ------------');
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();

console.log('----------- classes ------------');
const counter = new Counter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
