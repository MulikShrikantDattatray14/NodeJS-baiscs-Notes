// setTimeout Example
console.log('Start setTimeout');

setTimeout(() => {
  console.log('Timeout executed');
}, 0);

console.log('End setTimeout');

// setInterval Example
console.log('Start setInterval');

let counter = 0;
const intervalId = setInterval(() => {
  console.log('Interval executed', counter++);
  if (counter === 3) {
    clearInterval(intervalId);
    console.log('Interval cleared');
  }
}, 1000);

console.log('End setInterval');